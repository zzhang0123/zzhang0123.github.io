# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based personal academic website for Zheng Zhang (astrophysicist/cosmologist), hosted on GitHub Pages at zh-zhang.com. Uses Jekyll 3.8.5 with the "Journal" theme.

## Commands

```bash
# Install Ruby dependencies
bundle install

# Local development server with live reload
bundle exec jekyll serve --livereload --host 0.0.0.0
# Site available at http://localhost:4000

# Build static site to _site/
jekyll build
```

**Deployment:** Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`) which automatically builds and deploys to GitHub Pages. No manual deploy step needed.

## Architecture

### Content Collections
Jekyll organizes content into four collections:
- `_posts/` — Blog articles, filename format: `YYYY-MM-DD-slug.md`
- `_pages/` — Static pages (About, Publications, Contact, Code)
- `_projects/` — Research project showcases
- `_NickKaiserNotes/` — Custom educational notes collection with custom layout (`_layouts/NickNotes.html`)

### Theme Configuration
All theme customization flows through two files:
- `_config.yml` — Jekyll core config (URL, plugins, pagination at 6 posts/page, Rouge syntax highlighter)
- `_data/settings.yml` — Theme settings: colors (8-color palette), fonts (Playfair Display + Source Sans Pro via Google Fonts), navigation menus, header/footer content, Formspree contact form (`xkgnwzrz`), AJAX page loading toggle

### Template System
- `_layouts/default.html` — Master template with SEO meta tags (Twitter Card + OpenGraph)
- `_layouts/page.html`, `post.html`, `project.html` — Content-specific layouts
- `_includes/` — Reusable components: header, footer, contact form, Mermaid diagram support (`mermaid.html`), PDF embedding (`pdfNote.html`)
- `css/style.scss` — Main stylesheet that references `_data/settings.yml` variables
- `js/journal.js` — Theme interactivity (~416 lines); handles AJAX navigation, sidebar, etc.

### Static Assets
- `images/` — Site images
- `myNotes/` — PDF research notes (linked from NickKaiserNotes collection)

### Ignored
- `NKarchive/` is listed in `.claudeignore` — do not modify or reference it
