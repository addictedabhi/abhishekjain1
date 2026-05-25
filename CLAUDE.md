# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal multi-page website for Abhishek Jain, deployed to GitHub Pages from `main` at `https://abhishekjain1.github.io/abhishekjain1/`. Zero build, pure HTML/CSS/vanilla JS. Two pages today: `index.html` (one-page profile) and `resources.html` (downloads index). Both share the same nav, footer, stylesheet, and `script.js`.

## Common commands

```bash
# Serve locally (pick one)
python -m http.server 8000
npx serve .

# Validate sitemap / robots after edits
curl -sI http://localhost:8000/sitemap.xml
curl -s  http://localhost:8000/robots.txt

# Publish — Pages auto-builds from main on push
git push origin main
```

No test framework, no linter, no bundler — by design. Verification is manual: open `index.html`, click through anchors, toggle theme, check Lighthouse in DevTools.

## Architecture

### Three files do everything

- `index.html` — markup, head meta + OG/Twitter + 3 JSON-LD blocks (Person, WebSite, BreadcrumbList), inline pre-paint theme script, all 7 section bodies.
- `assets/styles.css` — design tokens (light + dark), typography scale, every component class.
- `assets/script.js` — single outer IIFE. Sub-modules: theme, mobile menu (defined before smooth-scroll so `closeMenu` is in scope), smooth scroll, active-nav IntersectionObserver, fade-in IntersectionObserver.

### Theme switching

`<html data-theme="light|dark">` controls everything via CSS custom properties. Two token blocks in `styles.css`: `:root, [data-theme="light"]` and `[data-theme="dark"]`. Coral primary (`--primary: #cc785c`) is identical across themes — that is intentional (brand voltage). **Default is light.** The pre-paint inline `<script>` in `<head>` runs BEFORE `styles.css` loads to prevent FOUC: reads `localStorage.theme` if set, otherwise applies `light`. The OS-level `prefers-color-scheme` change listener was intentionally removed — user's toggle choice is sticky and the site no longer reacts to OS theme flips. The initial `<html data-theme="light">` attribute matches the pre-paint default so SSR/no-JS visitors still get the cream surface.

### Active-nav highlight

IntersectionObserver in `script.js` picks the entry with the greatest `intersectionRatio` per batch (not the last one), preventing flicker on fast scroll. Section DOM order MUST match nav link order or the active state will desync.

### Source of truth for visual design

`DESIGN.md` (repo root) defines the Anthropic-style warm-cream + coral + dark-navy editorial system: full token table, component specs, typography rules, do/don't list. When adding or editing a component, reference the token name (e.g., `var(--surface-card)`), never inline a hex value.

### Client tile brand monograms

`#clients` tiles use text-based brand monograms (not real corporate logos) inside a 44×44 rounded badge above the client name + region. One CSS modifier class per brand (e.g., `.tile__logo--stc`, `.tile__logo--jio`, `.tile__logo--google`) — brand colors live in those modifier classes, not in inline styles or HTML. Google uses a gradient-clipped multicolor "G" treatment as a one-off. Adding a new client means: add a new `<li class="tile">` block in `index.html` and a matching `.tile__logo--<slug>` rule in `styles.css`. Keep monograms text-based to stay clear of trademark concerns unless real SVG logos are explicitly approved. Tiles grid breakpoints are tuned for 11 entries (2 / 3 / 4 / 6 columns at 0 / 700 / 1024 / 1280 px).

### Favicon

`assets/favicon.svg` is an "AJ" serif monogram (cream text on coral square). It is intentionally distinct from the nav/footer spike-mark wordmark — the spike-mark is the inline-brand glyph, the AJ monogram is the browser-tab signature. Replacing one does not imply replacing the other.

### Resources page (`resources.html`)

Standalone second page listing downloadable materials. PDFs (and future PPT / ZIP / etc.) live under `assets/resources/<slug>.<ext>` and are referenced from `<article class="resource">` cards with badge + title + description + meta row + download CTA. Downloads use the HTML5 `download` attribute on a plain `<a>` — no JS, no email gate, no analytics. Browser receives the file with a friendly capitalized filename even though the on-disk slug is kebab-case (e.g., on-disk `ai-unlocked-presentation-v2.pdf`, downloaded as `AI_Unlocked_Presentation_v2.pdf`).

Cross-page nav: `resources.html` nav links point back to `index.html#section` anchors; `index.html` nav has one `resources.html` link. The `.active` class on the current page's nav entry is set statically in HTML (no JS for cross-page state).

Resources page has its own JSON-LD: `CollectionPage` wrapping an `ItemList` of `DigitalDocument` items. Add a new resource by dropping the file in `assets/resources/`, pasting one `<article class="resource">` block, and appending one `DigitalDocument` ListItem to the JSON-LD array. `sitemap.xml` lists the resources index page (not individual files).

## Conventions

- All section IDs are lowercase nouns (`#about`, `#expertise`, `#experience`, `#clients`, `#skills`, `#contact`). Nav links, footer links, mobile menu, and `BreadcrumbList` JSON-LD must stay in sync if you add or rename one.
- Decorative SVGs get `aria-hidden="true"`. Interactive icons get an `aria-label` on the parent button.
- Inline styles are forbidden — use CSS classes. If you find one, fix it.
- Hardcoded hex values in CSS rules are forbidden outside the two token blocks at the top of `styles.css`.
- Skip link points to `#main` (the `<main>` landmark), not `#about`.
- External links open in a new tab only with `rel="noopener" target="_blank"`.
- Footer `<footer>` has no explicit `role="contentinfo"` — the implicit landmark is sufficient and explicit duplication trips a11y validators.
- Honor `prefers-reduced-motion` in three places: CSS reset (blanket `transition/animation: none`), JS smooth-scroll opt-out, and the reveal-animation observer short-circuit.

## Hard content rules (user-stated)

- Contact section has only email (`abhishekjain1@live.com`) and LinkedIn. No phone number anywhere. No résumé download link anywhere.
- The résumé PDFs in the repo root are reference material only — do not link to them from the site.

## Spec / plan workflow

This repo follows a brainstorm → spec → plan → execute discipline using the `superpowers` skill set.

- Design specs: `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`
- Implementation plans: `docs/superpowers/plans/YYYY-MM-DD-<feature>.md`

Before non-trivial changes, invoke `superpowers:brainstorming`, then `superpowers:writing-plans`, then execute via `superpowers:subagent-driven-development` (per-task subagent + spec-compliance review + code-quality review). Existing specs/plans in this repo:

- `2026-05-24-personal-website-design.md` / `2026-05-24-personal-website.md` — initial one-page build.
- `2026-05-24-resources-page-design.md` / `2026-05-24-resources-page.md` — Resources page (downloads index).

Newer plans should be added alongside, not on top of, the existing ones.

## SEO surface

`index.html` head carries: title, description, keywords (informational only, Google ignores), author, robots, OG (`profile` type, `og:image` at 1200×630), Twitter `summary_large_image`, three JSON-LD blocks linked via `@id` references. `robots.txt` and `sitemap.xml` live at repo root. The OG image asset (`assets/og-cover.png`) is referenced but not yet committed — generating it is an open task.

## GitHub Pages specifics

- `.nojekyll` at repo root disables Jekyll processing.
- All asset paths are relative (no leading `/`) so the site works under `<user>.github.io/<repo>/` as well as a custom domain.
- After moving the site to a custom domain or different repo path, update: `<link rel="canonical">`, `og:url`, `twitter` image URLs, `sitemap.xml` `<loc>`, and the URLs inside the JSON-LD blocks.
