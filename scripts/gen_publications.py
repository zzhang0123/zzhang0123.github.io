#!/usr/bin/env python3
"""
gen_publications.py
===================
Update the Publications section of _pages/about.md from the source-of-truth
BibTeX file.

The script finds the markers <!-- PUB_SECTION_START --> and <!-- PUB_SECTION_END -->
in about.md and replaces the content between them with freshly generated cards.
Entries with @inprep type are always excluded.

Usage:
    conda activate mycv
    python scripts/gen_publications.py

    # Preview without writing:
    python scripts/gen_publications.py --dry-run

    # Custom bib path:
    python scripts/gen_publications.py --bib /path/to/publications.bib

Requires: bibtexparser  (available in the 'mycv' conda environment)
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

try:
    import bibtexparser
    from bibtexparser.bparser import BibTexParser
    from bibtexparser.customization import homogenize_latex_encoding
except ImportError:
    sys.exit(
        "bibtexparser not found.\n"
        "Run:  conda activate mycv\n"
        "  or: pip install bibtexparser"
    )

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------

REPO_ROOT  = Path(__file__).resolve().parent.parent
DEFAULT_BIB = Path("/Users/zzhang/projects/MyCV/data/publications.bib")
OUTPUT_MD   = REPO_ROOT / "_pages" / "about.md"

# Markers that delimit the auto-generated block inside about.md
PUB_SECTION_START = "<!-- PUB_SECTION_START -->"
PUB_SECTION_END   = "<!-- PUB_SECTION_END -->"

# Entry types included in the main numbered publication list
MAIN_LIST_TYPES = {"article", "submitted"}

# ---------------------------------------------------------------------------
# Journal abbreviations
# ---------------------------------------------------------------------------

JOURNAL_ABBREV: dict[str, str] = {
    "Monthly Notices of the Royal Astronomical Society": "MNRAS",
    "Journal of Cosmology and Astroparticle Physics": "JCAP",
    "Journal of Astronomical Telescopes, Instruments, and Systems": "JATIS",
    "Publications of the Astronomical Society of Australia": "PASA",
    "Astronomy & Astrophysics": "A&A",
    "Astronomy and Astrophysics": "A&A",
    "The Astrophysical Journal": "ApJ",
    "The Astrophysical Journal Letters": "ApJL",
    "The Astrophysical Journal Supplement Series": "ApJS",
    "Physical Review D": "PRD",
    "Physical Review Letters": "PRL",
    "Nature Astronomy": "Nat. Astron.",
    "RASTI": "RASTI",
}

# ---------------------------------------------------------------------------
# Text cleaning
# ---------------------------------------------------------------------------

def clean_latex(s: str) -> str:
    """Convert common LaTeX escapes to plain text / HTML-safe text."""
    replacements = [
        (r"\&", "&"),
        (r"\'e", "é"), (r"\'{e}", "é"), (r"\'{\i}", "í"),
        (r"\`{e}", "è"), (r"\`e", "è"),
        (r"\'a", "á"), (r"\'{a}", "á"),
        (r"\~n", "ñ"), (r"\~{n}", "ñ"),
        (r"\"{o}", "ö"), (r'\"o', "ö"),
        (r"\c{c}", "ç"),
        (r"\_", "_"),
        (r"\textasciitilde", "~"),
        (r"\textit{et al.}", "<em>et al.</em>"),
        (r"\textit{et al}", "<em>et al.</em>"),
    ]
    for old, new in replacements:
        s = s.replace(old, new)
    # Strip remaining braces (e.g. from {Title With Capitals})
    s = re.sub(r"[{}]", "", s)
    # LaTeX en-dash (--) and em-dash (---) in text
    s = s.replace("---", "—").replace("--", "–")
    return s.strip()


# ---------------------------------------------------------------------------
# Author formatting
# ---------------------------------------------------------------------------

def format_authors_html(raw: str) -> str:
    """
    Format a BibTeX author string as HTML, bolding 'Z. Zhang' / 'Zheng Zhang'.
    Handles both standard "Last, First and …" and pre-formatted strings
    (those already containing 'et al.' or 'Collaboration').
    """
    if not raw.strip():
        return ""

    # Pre-formatted: collaboration or "et al." already written in the field
    if "et al." in raw or "ollaboration" in raw:
        raw = raw.strip("{}")
        # Bold "Z. Zhang" variants
        raw = re.sub(r"Z\.?\s*Zhang", "<strong>Z.&thinsp;Zhang</strong>", raw)
        raw = raw.replace("et al.", "<em>et al.</em>")
        return raw

    parts = [a.strip() for a in raw.split(" and ")]
    # Filter out BibTeX "others" keyword
    parts = [p for p in parts if p.lower() != "others"]

    formatted = [_fmt_author(p) for p in parts]

    if len(formatted) > 6:
        zhang_idx = next(
            (i for i, p in enumerate(parts) if "zhang" in p.lower()), None
        )
        first = formatted[0]
        if zhang_idx is None or zhang_idx == 0:
            return first + ", <em>et al.</em>"
        return first + f", <em>et al.</em> (incl. {formatted[zhang_idx]})"

    return ", ".join(formatted)


def _fmt_author(part: str) -> str:
    """Convert a single BibTeX author entry to 'F. Lastname' HTML."""
    part = part.strip().strip("{}")

    if "," in part:
        last, _, first = part.partition(",")
        last = last.strip()
        first = first.strip()
    else:
        words = part.split()
        last = words[-1] if words else part
        first = " ".join(words[:-1])

    first_abbrev = _abbreviate(first)
    display = f"{first_abbrev}&thinsp;{last}" if first_abbrev else last

    # Bold the target author
    if last.lower() == "zhang" and first_abbrev.upper().startswith("Z"):
        display = "<strong>Z.&thinsp;Zhang</strong>"

    return display


def _abbreviate(first: str) -> str:
    """'Zheng' → 'Z.'  |  'J. C.' → 'J.&thinsp;C.'"""
    if not first:
        return ""
    tokens = re.split(r"[\s\-]+", first.strip())
    abbrevs = []
    for t in tokens:
        t = t.strip(".")
        if t:
            abbrevs.append(t[0].upper() + ".")
    return "&thinsp;".join(abbrevs)


# ---------------------------------------------------------------------------
# Journal / status line
# ---------------------------------------------------------------------------

def build_status_html(entry: dict) -> str:
    """Return the HTML links line (journal ref and/or arXiv) for one entry."""
    etype = entry.get("ENTRYTYPE", "").lower()
    doi    = clean_latex(entry.get("doi", ""))
    eprint = clean_latex(entry.get("eprint", ""))
    note   = clean_latex(entry.get("note", ""))
    url    = clean_latex(entry.get("url", ""))

    parts: list[str] = []

    if etype == "article":
        if doi:
            ref = _journal_ref(entry)
            parts.append(f'<a href="https://doi.org/{doi}" target="_blank">{ref}</a>')
        elif note:
            # Accepted but DOI not yet available
            parts.append(f"<em>{note}</em>")
        if eprint:
            parts.append(f'<a href="https://arxiv.org/abs/{eprint}" target="_blank">arXiv</a>')

    elif etype == "submitted":
        if note:
            parts.append(f"<em>{note}.</em>")
        if eprint:
            parts.append(f'<a href="https://arxiv.org/abs/{eprint}" target="_blank">arXiv</a>')

    elif etype == "inproceedings":
        booktitle = clean_latex(entry.get("booktitle", ""))
        year = entry.get("year", "")
        label = f"{booktitle} ({year})" if year else booktitle
        if doi:
            parts.append(f'<a href="https://doi.org/{doi}" target="_blank">{label}</a>')
        elif url:
            parts.append(f'<a href="{url}" target="_blank">{label}</a>')
        else:
            parts.append(label)

    elif etype == "phdthesis":
        school = clean_latex(entry.get("school", ""))
        year   = entry.get("year", "")
        note2  = clean_latex(entry.get("note", ""))
        label  = f"PhD thesis, {school} ({year})" if year else f"PhD thesis, {school}"
        if url:
            parts.append(f'<a href="{url}" target="_blank">{label}</a>')
        else:
            parts.append(label)
        if note2:
            parts.append(note2)

    elif etype == "misc":
        howpub = clean_latex(entry.get("howpublished", ""))
        year   = entry.get("year", "")
        if doi:
            label = f"{howpub} ({year})" if howpub else year
            parts.append(f'<a href="https://doi.org/{doi}" target="_blank">{label}</a>')
        elif url:
            parts.append(f'<a href="{url}" target="_blank">{howpub or "Link"}</a>')

    return "; ".join(parts) if parts else ""


def _journal_ref(entry: dict) -> str:
    """Build 'MNRAS, 530, 3 (2024)' style string."""
    journal = clean_latex(entry.get("journal", ""))
    abbrev  = JOURNAL_ABBREV.get(journal, journal)
    vol     = entry.get("volume", "")
    num     = entry.get("number", "")
    pages   = entry.get("pages", "")
    year    = entry.get("year", "")

    parts = [abbrev]
    if vol:
        parts.append(vol)
    if num:
        parts.append(num)
    if pages:
        parts.append(pages)
    ref = ", ".join(parts)
    if year:
        ref += f" ({year})"
    return ref


# ---------------------------------------------------------------------------
# Card builder (matches the .pub-card CSS in about.md)
# ---------------------------------------------------------------------------

PUB_CARD_TEMPLATE = """\
  <div class="pub-card">
    <span class="pub-badge">{num} | {year}</span>
    <div class="pub-title">{title}</div>
    <div class="pub-authors">{authors}</div>
    <div class="pub-links">{status}</div>
  </div>"""


def make_card(num: int, entry: dict) -> str:
    title   = clean_latex(entry.get("title", ""))
    authors = format_authors_html(entry.get("author", ""))
    status  = build_status_html(entry)
    year    = entry.get("year", "")
    return PUB_CARD_TEMPLATE.format(
        num=num, year=year, title=title, authors=authors, status=status
    )


# ---------------------------------------------------------------------------
# Sort key
# ---------------------------------------------------------------------------

def sort_key(entry: dict) -> tuple:
    """Sort descending by year, with 'submitted' before 'article' within same year."""
    year  = -int(entry.get("year") or 0)
    etype = entry.get("ENTRYTYPE", "").lower()
    type_order = {"submitted": 0, "article": 1}.get(etype, 2)
    return (year, type_order)


# ---------------------------------------------------------------------------
# Main generation logic
# ---------------------------------------------------------------------------

def generate(bib_path: Path, output_path: Path) -> str:
    """
    Parse the BibTeX file, generate pub cards, and splice them into about.md
    between PUB_SECTION_START and PUB_SECTION_END markers.
    Returns the full updated content of about.md.
    """
    parser = BibTexParser(common_strings=True)
    parser.ignore_nonstandard_types = False
    parser.customization = homogenize_latex_encoding

    with bib_path.open(encoding="utf-8") as fh:
        bib_db = bibtexparser.load(fh, parser=parser)

    entries = [
        e for e in bib_db.entries
        if e.get("ENTRYTYPE", "").lower() in MAIN_LIST_TYPES
    ]
    entries.sort(key=sort_key)  # most recent first

    n = len(entries)
    cards = [make_card(n - i, entry) for i, entry in enumerate(entries)]
    inner_html = "\n".join(cards)

    new_section = (
        f"{PUB_SECTION_START}\n"
        f'<div class="pub-cards">\n'
        f"{inner_html}\n"
        f'</div>\n'
        f"{PUB_SECTION_END}"
    )

    # Read about.md and splice in the new section
    text = output_path.read_text(encoding="utf-8")
    start_idx = text.find(PUB_SECTION_START)
    end_idx   = text.find(PUB_SECTION_END)

    if start_idx == -1 or end_idx == -1:
        raise ValueError(
            f"Could not find markers {PUB_SECTION_START!r} / {PUB_SECTION_END!r} "
            f"in {output_path}"
        )

    return text[:start_idx] + new_section + text[end_idx + len(PUB_SECTION_END):]


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bib", type=Path, default=DEFAULT_BIB,
                    help=f"Path to publications.bib (default: {DEFAULT_BIB})")
    ap.add_argument("--output", type=Path, default=OUTPUT_MD,
                    help=f"Output path (default: {OUTPUT_MD})")
    ap.add_argument("--dry-run", action="store_true",
                    help="Print generated content instead of writing the file")
    args = ap.parse_args()

    if not args.bib.exists():
        sys.exit(f"BibTeX file not found: {args.bib}")

    content = generate(args.bib, args.output)

    if args.dry_run:
        print(content)
    else:
        args.output.write_text(content, encoding="utf-8")
        n = content.count('class="pub-card"')
        print(f"Written {args.output}  ({n} publication cards)")


if __name__ == "__main__":
    main()
