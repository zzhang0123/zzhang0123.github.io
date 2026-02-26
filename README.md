# zh-zhang.com — Site Management Cheatsheet

Jekyll-based personal academic website hosted on GitHub Pages.
Pushing to `main` auto-deploys via GitHub Actions — no manual deploy needed.

## Local development

```bash
bundle exec jekyll serve --livereload --host 0.0.0.0
# → http://localhost:4000
```

---

## Writing a new blog post

Create a file in `_posts/` with the naming format `YYYY-MM-DD-slug.md`:

```yaml
---
title: 'My Post Title'
date: 2026-03-01 00:00:00
featured_image: '/images/some-image.jpg'   # optional
excerpt: One sentence shown in previews.   # optional (Jekyll auto-excerpts if omitted)
no_comments: true                          # optional — disables the comment box
---

Post content here in Markdown...
```

---

## Pinning a specific post on the About page

By default the About page (`_pages/about.md`) shows the **latest post** automatically.

To pin a specific post instead, add `pinned_post` to the front matter of `about.md`:

```yaml
---
title: Zheng Zhang
pinned_post: /posts/2026-02-26-guardian-stfc-letter
---
```

The value is the post's URL path (filename without the date prefix and `.md`).
Remove the `pinned_post` line to revert to showing the latest post.

---

## Updating publications

Publications on the About page are generated from a BibTeX file by `scripts/gen_publications.py`.

```bash
python scripts/gen_publications.py path/to/your.bib
```

This rewrites the section between `<!-- PUB_SECTION_START -->` and `<!-- PUB_SECTION_END -->` in `_pages/about.md`.

---

## Comments (Utterances)

Comments on posts are powered by [Utterances](https://utteranc.es) (GitHub Issues).
**One-time setup:** install the Utterances app at https://github.com/apps/utterances and grant access to this repo.

- To **disable comments on a specific post**, add `no_comments: true` to its front matter.
- To **disable comments site-wide**, remove `{% include comments.html %}` from `_layouts/post.html`.

---

## Navigation

Edit `_data/settings.yml` → `menu_settings.menu_items` to add/remove/rename nav links.

---

## Key files

| File | Purpose |
|------|---------|
| `_pages/about.md` | Home page (`/`) |
| `_pages/notes.md` | My Notes page (`/notes`) |
| `posts/index.md` | Posts listing page (`/posts/`) |
| `_data/settings.yml` | Nav, colours, fonts, social links |
| `_layouts/post.html` | Template for every blog post |
| `scripts/gen_publications.py` | Regenerates publications from BibTeX |
