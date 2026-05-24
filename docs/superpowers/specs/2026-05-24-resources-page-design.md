# Resources Page — Design Spec

**Date:** 2026-05-24
**Owner:** Abhishek Jain
**Hosting:** GitHub Pages (static, no build pipeline)
**Parent project:** Personal website (`docs/superpowers/specs/2026-05-24-personal-website-design.md`)

## 1. Goal

New standalone page `resources.html` that lists free downloadable materials (PDFs, decks, packs). Each entry has a title, description, metadata, and a Download button that triggers a browser download. Static, zero-build, GitHub Pages safe.

## 2. Scope

### In
- One new HTML page at repo root: `resources.html`.
- Reusable resource-card component (visual + markup pattern) so future resources are added by pasting one markup block.
- First resource committed: **AI Unlocked — From Curious to Confident** PDF (the file user attached).
- Cross-page nav linking between `index.html` (home) and `resources.html`.
- Updated `sitemap.xml` with the new URL.
- Per-page SEO meta + JSON-LD (`CollectionPage` + per-item `DigitalDocument`).

### Out
- CMS, dynamic resource listing, admin UI.
- Resource search, filtering, sorting.
- Auth, paywall, email-gating, analytics on downloads.
- Per-resource detail page (the card on the index is the entry point).
- Thumbnail previews (use type badges instead).

## 3. File Layout

```
/
├── index.html
├── resources.html                                 (new)
├── assets/
│   ├── styles.css                                 (append resource styles)
│   ├── script.js
│   ├── favicon.svg
│   └── resources/                                 (new directory)
│       └── ai-unlocked-presentation-v2.pdf        (new, renamed from "AI_Unlocked_Presentation_v2 [Autosaved].pdf")
├── sitemap.xml                                    (add resources.html URL)
└── docs/superpowers/specs/2026-05-24-resources-page-design.md
```

### Filename normalization
Source PDF filename `AI_Unlocked_Presentation_v2 [Autosaved].pdf` has spaces + square brackets. Renamed on disk to `ai-unlocked-presentation-v2.pdf` for clean URL. Content untouched. Download anchor uses `download="AI_Unlocked_Presentation_v2.pdf"` so the user's saved file gets a friendly capitalized name.

## 4. Page Structure

### 4.1 `<head>`
- Same pre-paint theme script, same Google Fonts link, same `assets/styles.css` link.
- Title: `Resources — Abhishek Jain`
- Description: `Free downloadable resources by Abhishek Jain — decks, reference packs, and session material on AI, IoT, and engineering leadership.`
- Canonical: `https://abhishekjain1.github.io/abhishekjain1/resources.html`
- Open Graph + Twitter card with the same `og-cover.png` (or a future per-page cover).
- JSON-LD: `CollectionPage` whose `mainEntity` is an `ItemList` of `DigitalDocument` entries.

### 4.2 Top nav
Same markup pattern as `index.html`, but nav links are cross-page (since most sections live on home). On `resources.html`:

| Link | href |
|---|---|
| About | `index.html#about` |
| Expertise | `index.html#expertise` |
| Experience | `index.html#experience` |
| Clients | `index.html#clients` |
| Skills | `index.html#skills` |
| **Resources** | `resources.html` (current page; styled `.active`) |
| Contact | `index.html#contact` |

The `.active` class on Resources is applied statically via HTML class attribute (no JS needed for cross-page state).

`index.html` nav gets the same "Resources" link added at the same position, pointing to `resources.html`.

### 4.3 Hero band
- Section heading display-lg: `Resources.`
- Sub-line body-md: `Free downloadable decks, reference packs, and session material — open access, no email gate.`
- No CTA buttons (the cards below are the CTAs).

### 4.4 Resource grid (`#resource-list`)
- Grid: 1-up mobile, 2-up tablet (≥800px), 2-up desktop (max).
- Cards are `<article class="resource">` with the following structure:

```html
<article class="resource">
  <header class="resource__head">
    <span class="badge badge--coral resource__type">PDF</span>
    <h2 class="display-sm resource__title">AI Unlocked — From Curious to Confident</h2>
  </header>
  <p class="body-md resource__desc">
    A 26-slide presentation on AI fundamentals for students, homemakers, professionals, and founders.
    Covers the P-R-O-M-P-T prompting framework, free vs paid tool comparisons, role-based AI toolkits,
    and live demos of Gamma, NotebookLM, Gemini, and Claude Code.
  </p>
  <dl class="resource__meta">
    <div><dt class="caption-up">Type</dt><dd>PDF</dd></div>
    <div><dt class="caption-up">Size</dt><dd>~2.4 MB</dd></div>
    <div><dt class="caption-up">Slides</dt><dd>26</dd></div>
    <div><dt class="caption-up">Updated</dt><dd>May 2026</dd></div>
  </dl>
  <a class="btn btn--primary resource__cta"
     href="assets/resources/ai-unlocked-presentation-v2.pdf"
     download="AI_Unlocked_Presentation_v2.pdf"
     aria-label="Download AI Unlocked presentation (PDF)">
    Download PDF
    <svg aria-hidden="true">…</svg>
  </a>
</article>
```

Card styling:
- Background `var(--surface-card)`, radius 12px, padding 32px.
- `.resource__head` is a vertical stack: badge then title.
- `.resource__meta` renders as a horizontal flow of label/value pairs (caption-up label muted, value in body color), wrapping on narrow widths.
- Download button is full-width on mobile, auto-width on desktop.
- Icon inside the CTA is a small download arrow SVG (`<svg aria-hidden="true">`).

### 4.5 Footer
Same as `index.html` footer, with **Resources** link added to the "Sections" column. Cross-page links from resources.html footer point back to home anchors.

## 5. Download Mechanics
- Each download link is an `<a href="…" download="friendly.pdf">`.
- `download` attribute on a same-origin anchor instructs the browser to save the file rather than navigate.
- GitHub Pages serves PDFs with `Content-Type: application/pdf`; combined with `download`, Chrome/Edge/Firefox/Safari all save the file. (No JS required.)
- Right-click → "Save link as" still works as a fallback.

## 6. Adding a New Resource Later
Recipe:
1. Drop the source file into `assets/resources/<slug>.<ext>`.
2. Paste the `<article class="resource">` block in `resources.html`, fill in title, description, meta, and href.
3. Add one `DigitalDocument` entry to the JSON-LD `ItemList`.
4. Add the new URL to `sitemap.xml` if the resource has its own landing — for now sitemap only lists the resources index page, not individual files.

## 7. Theme + a11y
- Inherits dark default + theme toggle from existing infrastructure.
- All token references use existing CSS custom properties; no new theme tokens introduced.
- Resource card heading is `<h2>` (one per resource), page-level `<h1>` is the hero "Resources." line.
- Download `<a>` has explicit `aria-label` to make the action clear to screen readers.
- Meta `<dl>` uses semantic definition lists.

## 8. Responsive Breakpoints
| Range | Grid |
|---|---|
| < 800px | 1-up; card padding 24px; download button full-width |
| ≥ 800px | 2-up; card padding 32px |
| ≥ 1024px | 2-up (max content width 1200px); meta laid out in one row |

## 9. SEO Surface
- `<title>` and meta description tuned for "Abhishek Jain resources" + AI presentation keywords.
- Per-file JSON-LD `DigitalDocument` with `name`, `description`, `encodingFormat`, `contentUrl`, `author`, `datePublished`.
- Linked from home nav, footer, and sitemap → crawlable.

## 10. Acceptance
- `resources.html` loads under GitHub Pages.
- Theme toggle works on the resources page exactly like on home (state shared via `localStorage.theme`).
- Resources nav link visible on both pages; clicking it from home navigates to `resources.html`; clicking any other nav link from `resources.html` navigates back to `index.html#section`.
- Clicking the Download button on the AI Unlocked card triggers a save dialog (or auto-download) of `AI_Unlocked_Presentation_v2.pdf`.
- Renamed PDF (`ai-unlocked-presentation-v2.pdf`) committed to `assets/resources/`. File is byte-identical to source.
- `sitemap.xml` lists `resources.html`.
- Lighthouse on `resources.html` ≥ 90 across all four categories.

## 11. Open Questions Resolved
- File-type badge vs thumbnail: **badge** (no per-resource thumbnail generation; keeps the page zero-build).
- Email gate before download: **no** (open access).
- Per-resource detail page: **no** (card carries all needed info).
- Source PDF filename preservation: **no** (rename for URL hygiene; download attribute restores friendly name on save).
