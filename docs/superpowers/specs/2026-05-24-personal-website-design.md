# Personal Website — Design Spec

**Date:** 2026-05-24
**Owner:** Abhishek Jain
**Hosting:** GitHub Pages (static, no build pipeline)
**Source content:** Resume (`Abhishek_Jain_CV_2026.pdf`), LinkedIn `linkedin.com/in/abhishekjain2603`

## 1. Goal

Single-page personal site introducing Abhishek Jain — SVP Engineering, AI/AIOps, Connected Vehicles, IoT Platforms. Minimalistic, editorial, dark/light theme. Pure HTML/CSS/JS. Easy to host on GitHub Pages.

## 2. Design System

Follow `DESIGN.md` (Anthropic warm cream + coral + dark navy editorial system).

- **Display font:** EB Garamond (weight 400, negative letter-spacing) — open-source substitute for Copernicus / Tiempos Headline.
- **Body font:** Inter (weight 400 / 500) — substitute for StyreneB.
- **Mono:** JetBrains Mono — accents only.
- Load via Google Fonts `<link>` (no self-hosting).

### Theme tokens

| Token | Light | Dark |
|---|---|---|
| `--canvas` | `#faf9f5` | `#181715` |
| `--surface-soft` | `#f5f0e8` | `#1f1e1b` |
| `--surface-card` | `#efe9de` | `#252320` |
| `--surface-dark` | `#181715` | `#0f0e0c` |
| `--ink` | `#141413` | `#faf9f5` |
| `--body` | `#3d3d3a` | `#cfccc4` |
| `--muted` | `#6c6a64` | `#a09d96` |
| `--hairline` | `#e6dfd8` | `#2e2c28` |
| `--primary` | `#cc785c` | `#cc785c` |
| `--primary-active` | `#a9583e` | `#a9583e` |
| `--on-primary` | `#ffffff` | `#ffffff` |

Coral primary unchanged across themes (brand voltage).

### Theme switching

- `<html data-theme="light|dark">` attribute, CSS variables swap.
- First load: read `localStorage.theme`, else `prefers-color-scheme`.
- Toggle button in top nav (sun/moon SVG icon).
- Update is instant; no transition flash (set `data-theme` inline pre-CSS via tiny inline script in `<head>`).

## 3. Page Structure

Single `index.html`. Sections anchored by ID. Navigation + inline links scroll-jump within same page.

### Anchors
- `#top` — top of page
- `#about` — hero / intro
- `#expertise` — what I do
- `#experience` — career timeline
- `#clients` — global footprint
- `#skills` — technical stack
- `#contact` — get in touch

### 3.1 Top Nav (`<header>`)
- Sticky, 64px tall, `--canvas` background, hairline bottom border.
- Left: spike-mark SVG (inline 4-spoke radial asterisk in `--ink`) + "Abhishek Jain" wordmark (Inter 500, 16px).
- Center: links — About · Experience · Expertise · Clients · Contact (Inter 500, 14px, `--ink`, hover → `--primary`).
- Right: theme toggle icon button (36px circular), "Get in touch" coral `button-primary` → `#contact`.
- Mobile (<768px): hamburger menu → full-screen cream sheet.

### 3.2 Hero (`#about`)
- Desktop 6/6 grid, mobile stacked.
- Left:
  - Caption-uppercase pill `badge-pill`: "SVP Engineering · Jaipur, India"
  - h1 (display-xl serif): *"Engineering leader building AI-native IoT platforms."*
  - Sub-paragraph (title-md, `--body`): 2-3 sentences from exec summary — 15+ years, scaling teams across 4 continents, current focus on AI/AIOps at Airlinq.
  - CTA row: `button-primary` "Get in touch" → `#contact`, `button-secondary` "See my work" → `#experience`.
- Right: `product-mockup-card-dark` — stylized terminal showing fake `claude-code` session and AIOps alert summary. JetBrains Mono. Coral + teal syntax accents. Decorative only.

### 3.3 Expertise (`#expertise`)
- Section heading display-lg: "What I do."
- 3-up grid (2-up tablet, 1-up mobile), `feature-card` cream.
- Cards:
  1. **AI-Assisted Development & AIOps** — Claude Code agent specs, LLM-driven code review, ML anomaly detection, intelligent observability. 40% velocity lift.
  2. **Connected Vehicle & IoT Platforms** — CMP for Tier-1 MNOs, OTA orchestration, telemetry at automotive scale (Daimler, GM).
  3. **Engineering Leadership** — 0→1 team building, scaled to 50+ engineers across 4 continents, M&A technical integration.
- Each card: small icon SVG, title-md headline, body-md description.

### 3.4 Experience (`#experience`)
- Section heading display-lg: "Career."
- Vertical timeline, cream canvas, hairline dividers.
- Entries (most-recent first):
  1. **Airlinq** — Senior Vice President, Engineering · Jul 2021 – Present
  2. **Globetouch (now Airlinq)** — VP / AVP Engineering · Jun 2017 – Jun 2021
  3. **Teramatrix Technologies** — Co-Founder & CTO · Apr 2013 – Jun 2017 (acquired by Airlinq)
  4. **Codescape Consultants** — Co-Founder & CTO · Sep 2009 – Mar 2013
- Each: role, company, dates (caption-uppercase muted), 2-3 bullet highlights.
- Education footer block: B.Tech, Communication & Computer Engineering — LNMIIT, Jaipur (2009).

### 3.5 Global Footprint (`#clients`)
- Section heading display-lg: "Global client footprint."
- 6 `connector-tile` cards, 6-up desktop, 3-up tablet, 2-up mobile.
- Tiles: STC (Saudi Arabia) · Reliance Jio (India) · NTT (Japan) · América Móvil (LATAM) · Daimler (Germany) · General Motors (USA).
- Each tile: title-sm client name, caption-uppercase region, hairline border.

### 3.6 Skills (`#skills`)
- Section heading display-lg: "Tech stack."
- 5 horizontal groups, each a row of `badge-pill` tags:
  - **AI / LLM:** Claude Code, GitHub Copilot, LLM-assisted dev, Prompt Engineering, AI workflow automation
  - **Cloud & Infra:** Kubernetes, Docker, AWS, Azure, Terraform, Helm, CI/CD, Microservices
  - **AIOps & Observability:** Grafana, Telegraf, Prometheus, ML anomaly detection
  - **IoT & Connectivity:** CMP, OTA, MQTT, CoAP, edge computing, vehicle telemetry
  - **Languages:** Python, Go, JavaScript / Node.js, Java, SQL / NoSQL
- Group label: caption-uppercase muted; pills inline-wrap.

### 3.7 Contact (`#contact`)
- Full-bleed `callout-card-coral` (background `--primary`, text `--on-primary`).
- Display-sm serif: "Let's build something."
- Sub-line body-md: "Open to advisory, founding engineering, and platform leadership conversations."
- Action grid (3 buttons, cream on coral):
  - **Email** → `mailto:abhishekjain1@live.com`
  - **LinkedIn** → `https://www.linkedin.com/in/abhishekjain2603`

### 3.8 Footer
- `--surface-dark` background, `--on-dark-soft` body.
- 4-col desktop / 1-col mobile:
  - Wordmark + spike-mark + tagline
  - Section links (repeat of nav)
  - Contact (email)
  - Social (LinkedIn)
- Bottom row: `© 2026 Abhishek Jain` muted-soft, "Built with Claude Code" caption.

## 4. Interactivity (`assets/script.js`)

- **Theme toggle:** click → flip `data-theme`, write `localStorage.theme`. Update icon.
- **Inline pre-paint script** in `<head>` to set theme before first paint (prevent FOUC).
- **Smooth scroll:** intercept `a[href^="#"]` clicks → `scrollIntoView({ behavior: 'smooth' })`. Respect `prefers-reduced-motion`.
- **Active nav highlight:** `IntersectionObserver` on sections → toggle `.active` on matching nav link.
- **Mobile menu:** hamburger toggles `body.menu-open`; nav sheet uses CSS `transform`.
- **Fade-in on scroll:** sections get `.in-view` class via IntersectionObserver. Disabled if `prefers-reduced-motion`.
- No external JS libs.

## 5. File Layout

```
/
├── index.html
├── .nojekyll
├── assets/
│   ├── styles.css
│   ├── script.js
│   └── favicon.svg
├── DESIGN.md
└── docs/superpowers/specs/2026-05-24-personal-website-design.md
```

All paths relative. No leading `/` (works under `https://<user>.github.io/<repo>/`).

## 6. Accessibility

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Skip-to-content link first in DOM.
- All buttons + links keyboard reachable. Focus ring: 3px coral at 15% alpha + 1px coral solid.
- Color contrast: ink on canvas ≥ 12:1; body on canvas ≥ 7:1; on-primary on coral ≥ 4.5:1 (verify).
- `alt` text on every SVG icon; decorative SVGs marked `aria-hidden="true"`.
- `prefers-reduced-motion` disables scroll-smooth, fade transitions.
- Theme toggle: `aria-pressed`, `aria-label="Toggle dark mode"`.

## 7. Responsive Breakpoints

| Range | Layout |
|---|---|
| <768px | Hamburger nav, hero stacked, expertise 1-up, clients 2-up, skills wrap, hero h1 ~40px |
| 768–1024px | Inline nav (tight), expertise 2-up, clients 3-up |
| ≥1024px | Full nav, expertise 3-up, clients 6-up |
| ≥1440px | Max content width 1200px centered |

## 8. Performance

- Inline critical CSS for above-the-fold (theme variables + nav + hero) optional; full CSS in `assets/styles.css` linked.
- `font-display: swap` on Google Fonts.
- No images other than inline SVG.
- Lighthouse target: Perf ≥ 95, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

## 9. SEO / Meta

- `<title>`: "Abhishek Jain — SVP Engineering · AI/AIOps · Connected Vehicles"
- `<meta name="description">`: Exec summary one-liner.
- Open Graph: og:title, og:description, og:url, og:type=profile.
- Twitter card: summary.
- `<link rel="canonical">` to canonical URL.
- JSON-LD `Person` schema in `<head>`: name, jobTitle, email, url, sameAs (LinkedIn), worksFor.

## 10. Out of Scope

- Blog, multi-page routing.
- Contact form (mailto only).
- Server-side anything.
- Analytics.
- CMS / dynamic content.
- Profile photo (none supplied).

## 11. Acceptance

- Single `index.html` loads on GitHub Pages.
- All 7 anchor sections render and scroll-jump works from nav + inline links.
- Light / dark theme toggle persists across reloads, respects system preference initially.
- All resume content (roles, dates, skills, clients, education) accurately represented.
- Email `abhishekjain1@live.com`, LinkedIn `abhishekjain2603` wired into contact CTAs.
- Lighthouse mobile ≥ 90 across categories.
- Renders correctly at 360px, 768px, 1024px, 1440px widths.
