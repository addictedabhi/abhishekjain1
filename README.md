# abhishekjain1.github.io

Personal one-page website for **Abhishek Jain** — SVP Engineering · AI/AIOps · Connected Vehicles · IoT Platforms.

Live: https://abhishekjain1.github.io/abhishekjain1/

## Stack

- Pure HTML, CSS, vanilla JavaScript. No build, no bundler, no framework.
- Google Fonts: EB Garamond (display), Inter (body), JetBrains Mono (accents).
- Hosted on GitHub Pages directly from `main`.

## Design

Follows the Anthropic-inspired warm-cream + coral + dark-navy editorial system documented in [`DESIGN.md`](DESIGN.md). Light theme is the default; a `[data-theme="dark"]` token block provides full dark-mode support. Theme choice persists via `localStorage` and respects `prefers-color-scheme` on first load.

## Sections

1. **About** — hero intro with terminal mockup.
2. **Expertise** — three pillars: AI-assisted dev & AIOps, connected vehicle & IoT, engineering leadership.
3. **Experience** — career timeline (Airlinq → Globetouch → Teramatrix → Codescape) + education.
4. **Clients** — global footprint tiles (STC, Reliance Jio, NTT, América Móvil, Daimler, GM).
5. **Skills** — tech-stack pill groups.
6. **Contact** — coral CTA with email + LinkedIn.

All sections are anchor-linked; nav, footer, and inline links scroll-jump within the same page.

## File layout

```
.
├── index.html              # markup, head meta, JSON-LD, pre-paint theme script
├── assets/
│   ├── styles.css          # theme tokens (light + dark), typography, components
│   ├── script.js           # theme toggle, smooth scroll, active nav, mobile menu, fade-in
│   └── favicon.svg
├── .nojekyll               # disable Jekyll processing on Pages
├── DESIGN.md               # design system tokens + component library
├── README.md               # this file
└── docs/superpowers/
    ├── specs/2026-05-24-personal-website-design.md
    └── plans/2026-05-24-personal-website.md
```

## Run locally

No build step. Open `index.html` directly, or serve the directory:

```bash
# any one of these
python -m http.server 8000
npx serve .
```

Then visit `http://localhost:8000/`.

## Deploy

GitHub Pages is configured to serve from the `main` branch root.

```bash
git push origin main
```

Pages will rebuild within ~1 minute. If hosted under a different repo path, update the `<link rel="canonical">` and Open Graph URLs in `index.html`.

## Accessibility

- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`).
- Skip-to-content link.
- `:focus-visible` ring on every interactive element.
- Mobile menu has a focus trap and closes on Escape.
- `prefers-reduced-motion` disables smooth scroll, fade-in, and CSS transitions.
- `aria-hidden` on decorative SVGs; `aria-pressed` on the theme toggle.

## License

Content is © Abhishek Jain. Code structure is offered without warranty for personal reference.
