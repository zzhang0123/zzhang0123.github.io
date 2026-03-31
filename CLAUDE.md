# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based personal academic website for Zheng Zhang (astrophysicist/cosmologist), hosted on GitHub Pages at zh-zhang.com. Uses Jekyll 3.8.5. Redesigned in 2026 with a modern sticky top-nav layout, Inter font, CSS Grid galleries, and vanilla JS (no jQuery).

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
Jekyll organizes content into four collections (configured in `_config.yml`):
- `_posts/` — Blog articles, filename format: `YYYY-MM-DD-slug.md`
- `_pages/` — Static pages (About, Publications, Projects, Notes, Contact)
- `_projects/` — Research project showcases (use `status: active` or `status: coming-soon` frontmatter)
- `_NickKaiserNotes/` — Archived lecture notes collection using the `NickNotes` layout, `kaiser: true` flag, and separate header (`_includes/NKheader.html`)

### Theme Configuration
- `_config.yml` — Jekyll core config (URL, collections, plugins, pagination at 6 posts/page, Rouge syntax highlighter)
- `_data/settings.yml` — Theme settings: colors, fonts (Inter + JetBrains Mono via Google Fonts), navigation menus, Formspree contact form (`xkgnwzrz`), AJAX loading toggle (currently `false`)

### SCSS Architecture
All SCSS compiles through `css/style.scss`, which uses Liquid templating to pull variables from `_data/settings.yml`.

```
_sass/
  _variables.scss      # CSS custom properties (spacing, shadows, transitions, NK section)
  _reset.scss          # Global reset
  _mixins.scss         # Responsive breakpoints (mq), container, card-base, focus-ring
  _base.scss           # Typography, buttons, page loading, page sections
  _plugins.scss        # Third-party plugin styles (Fluidbox, Owl — legacy)
  components/
    _nav.scss          # Sticky top navigation bar
    _footer.scss       # Footer
    _content.scss      # Single page/post content styling
    _card.scss         # Featured post card component
    _badge.scss        # Publication badges, status badges
    _mermaid.scss      # Mermaid diagram wrapper
    _gallery.scss      # CSS Grid gallery + lightbox
    _socials.scss      # Social media icon links
    _contact-form.scss # Contact form styling
  layouts/
    _about.scss        # Publication cards, code cards grids
    _blog.scss         # Blog post listing, pagination
    _projects.scss     # Project cards grid, project hero, placeholders
    _notes.scss        # Collapsible accordion sections for notes
    _nk-archive.scss   # Nick Kaiser section (scoped under body.nk-archive)
```

### Template System
- `_layouts/default.html` — Master template with SEO meta tags. Adds `nk-archive` body class when `page.kaiser` is true. Conditionally loads Mermaid only when `page.mermaid` is true.
- `_layouts/page.html`, `post.html`, `project.html`, `NickNotes.html` — Content-specific layouts
- `_includes/header.html` — Horizontal sticky nav bar (main site)
- `_includes/NKheader.html` — NK section header with portrait, dates, and course navigation
- `js/main.js` — Vanilla JS: menu toggle, active link, CSS Grid gallery, lightbox, Mermaid init, Utterances injection, scroll reveal, contact form validation

### Key Frontmatter Options
- `mermaid: true` — Enables Mermaid diagram rendering on a page
- `featured_image` — Hero image for pages/posts; used in social meta tags (Twitter Card, OpenGraph)
- `pinned_post` — On the about page (`_pages/about.md`), set to a post URL to pin it as featured; defaults to the latest post if unset
- `kaiser: true` — Switches to the NickKaiserNotes header, applies NK warm color scheme, adjusts Twitter Card title formatting
- `status: active` / `status: coming-soon` — On project pages, shows a colored status badge

### Nick Kaiser Section
Visually separate academic archive scoped under `body.nk-archive`. Warm color palette (brown accent, aged-paper background). Lecture PDFs displayed as structured 2-column card grids with number, title, and optional content descriptions.

### Static Assets
- `images/` — Site images
- `myNotes/` — PDF research notes (linked from the notes page at `_pages/notes.md`)

### Ignored
- `NKarchive/` is listed in `.claudeignore` — do not modify or reference it
