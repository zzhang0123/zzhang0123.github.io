---
name: add-to-website
description: Add an external project page (Quarto HTML, standalone HTML, etc.) as a highlighted project on the personal Jekyll website at /Users/zzhang/myWeb/zzhang0123.github.io
---

# add-to-website

Add a generated project page to the personal website as a native Jekyll project page.

Arguments: (optional: path to source HTML or project directory)

---

## Step 1 — Find the Source

Look for the source page in this order:
1. If the user provided a path, use it
2. `presentation/_output/index.html` (Quarto output in current project)
3. Any `_output/index.html` or standalone `.html` in the current directory
4. Ask the user if nothing found

Also look for a `presentation.yaml` or equivalent structured data file — it's easier
to translate from YAML than from raw HTML.

Read the source fully. Identify:
- Title and subtitle
- Content sections (headings, text, images, diagrams, code)
- Custom HTML elements (side-by-side layouts, flow diagrams, styled callouts)
- All referenced image paths
- Whether Mermaid diagrams are used

---

## Step 2 — Determine Project Slug and CSS Prefix

- Slug: derive from directory name or title (e.g. `RadioCosmology`, `SpyDust`)
- CSS prefix: short lowercase prefix for scoped styles (e.g. `rc-`, `sd-`)
- Check that `_projects/<slug>.md` doesn't already exist (warn if overwriting)

---

## Step 3 — Copy Images

```bash
mkdir -p /Users/zzhang/myWeb/zzhang0123.github.io/images/projects/<slug>/
```

Copy all referenced images into this directory. Source locations vary:
- `presentation/assets/images/` (Quarto projects)
- `figures/`, `images/`, `assets/` in the source project
- Paths referenced in the HTML/YAML source

All image references in the Jekyll page must use **absolute paths**:
```
/images/projects/<slug>/filename.png
```

---

## Step 4 — Create the Project Page

Create `/Users/zzhang/myWeb/zzhang0123.github.io/_projects/<slug>.md`

### Frontmatter

```yaml
---
title: '<title from source>'
subtitle: '<subtitle from source>'
status: active
highlight: true
card_image: /images/projects/<slug>/hero-image.png   # thumbnail for cards
mermaid: true          # only if Mermaid diagrams are present
custom_hero: true      # only if using a custom overlay hero
---
```

**Image frontmatter fields:**

- `card_image` — used for homepage highlight cards and `/projects` index thumbnails.
  Always set this so the project has a visual presence in listings.
- `featured_image` — renders a full-width hero banner on the project page itself.
  The layout's `{% if page.featured_image %}` controls this.
- Fallback chain: `card_image` → `featured_image` → no image.

**CRITICAL**: Do NOT include `featured_image` when using a custom overlay hero.
The layout renders it as a default hero that conflicts with the custom one.
Use `card_image` instead to get thumbnails in listings without the page hero.

### Custom Hero (when source has a hero/banner section)

```html
<style>
.{prefix}-hero {
  position: relative;
  text-align: center;
  padding: 5rem 2rem;
  margin: 0 0 2.5rem 0;
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
              url('/images/projects/<slug>/hero-image.png') center/cover no-repeat;
  color: white;
  border-radius: 8px;
}
.{prefix}-hero h2 { color: white; font-size: 2.4rem; margin-bottom: 0.5rem; border: none; }
.{prefix}-hero p { color: rgba(255,255,255,0.9); font-size: 1.1rem; font-style: italic; margin: 0; }
</style>

<div class="{prefix}-hero">
  <h2>Title</h2>
  <p>Subtitle text</p>
</div>
```

### Side-by-Side Image + Text Sections

```html
<style>
.{prefix}-section-row {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1.5rem;
}
.{prefix}-section-row.reverse { flex-direction: row-reverse; }
.{prefix}-section-row .{prefix}-img-col { flex: 1; min-width: 0; }
.{prefix}-section-row .{prefix}-text-col { flex: 1; min-width: 0; }
.{prefix}-section-row.img-wide .{prefix}-img-col { flex: 3; }
.{prefix}-section-row.img-wide .{prefix}-text-col { flex: 2; }
.{prefix}-section-row.text-wide .{prefix}-img-col { flex: 2; }
.{prefix}-section-row.text-wide .{prefix}-text-col { flex: 3; }
.{prefix}-section-row img { width: 100%; height: auto; border-radius: 4px; }
@media (max-width: 768px) {
  .{prefix}-section-row, .{prefix}-section-row.reverse { flex-direction: column; }
  .{prefix}-section-row .{prefix}-img-col,
  .{prefix}-section-row .{prefix}-text-col { flex: 1 1 100%; }
}
</style>
```

Use `img-wide` when image is the primary content, `text-wide` when text dominates.
Alternate `reverse` class to create visual rhythm (image left, then right, then left).

### Summary Callout

```html
<style>
.{prefix}-summary {
  background: #f0f7ff;
  border-left: 4px solid #3B82C4;
  border-radius: 4px;
  padding: 1.2rem 1.5rem;
  margin-top: 1rem;
}
.{prefix}-summary h4 { margin-top: 0; color: #3B82C4; }
</style>
```

### Mermaid Diagrams

Wrap in `.mermaid-wrap` (the site's existing class for scaling):
```html
<div class="mermaid-wrap">
<pre class="mermaid">
graph LR
  A --> B --> C
</pre>
</div>
```

The site loads Mermaid v10.9 via `_includes/mermaid.html`. Supported diagram types:
`block-beta`, `graph`, `flowchart`, `sequenceDiagram`, `classDiagram`, `gantt`, etc.

---

## Step 5 — Critical Content Rules

### NEVER mix markdown syntax inside HTML blocks

Kramdown does not process markdown inside `<div>`, `<p>`, `<ul>` tags.

**WRONG** (will render as literal asterisks):
```html
<div class="text-col">
  **Bold text** and `code` here
  - List item one
  - List item two
</div>
```

**CORRECT** (use HTML tags):
```html
<div class="{prefix}-text-col">
  <p><strong>Bold text</strong> and <code>code</code> here</p>
  <ul>
    <li>List item one</li>
    <li>List item two</li>
  </ul>
</div>
```

### Use HTML entities for math-like notation

- Superscripts: `O(N<sup>2</sup>)` not `O(N^2)`
- Subscripts: `T<sub>sys</sub>` not `T_sys`
- Multiplication: `&times;` not `x`
- Minus: `&minus;` or `−`
- Arrows: `&rarr;` or `&#x2192;`

### Pure markdown is fine OUTSIDE HTML blocks

Between `<div>` sections, standard markdown works normally:
```markdown
---

### Section Title

Regular paragraph with **bold** and `code`.

- Bullet one
- Bullet two

<div class="...">
  <!-- back to HTML only inside here -->
</div>
```

---

## Step 6 — Build and Verify

```bash
cd /Users/zzhang/myWeb/zzhang0123.github.io
bundle exec jekyll build
```

If build succeeds, serve and screenshot:
```bash
bundle exec jekyll serve --port 4001 --no-watch --detach
# Use Playwright to navigate to http://localhost:4001/projects/<slug>
# Take full-page screenshot
# Check: images load, layouts render, Mermaid diagrams appear
# Kill server when done
```

Verify the project appears on:
- `/projects` listing page
- Homepage highlight grid (if `highlight: true`)

---

## Quick Reference

| What | Where / Value |
|------|---------------|
| Website repo | `/Users/zzhang/myWeb/zzhang0123.github.io` |
| Project files | `_projects/<slug>.md` |
| Project images | `images/projects/<slug>/` |
| Project layout | `_layouts/project.html` |
| Project styles | `_sass/layouts/_projects.scss` |
| Mermaid loader | `_includes/mermaid.html` (v10.9) |
| Site config | `_data/settings.yml` |
| Accent color | `#3B82C4` |
| Fonts | Inter (body), JetBrains Mono (code) |
| Card thumbnail | `card_image:` frontmatter (listing cards, no page hero) |
| Page hero | `featured_image:` frontmatter (full-width banner on page) |
| Custom hero | `custom_hero: true` + omit `featured_image` + inline HTML |
