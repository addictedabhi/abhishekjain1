# Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a one-page personal website for Abhishek Jain — pure HTML/CSS/JS, GitHub Pages hostable, light/dark theme, follows DESIGN.md (Anthropic warm cream + coral + dark navy editorial system).

**Architecture:** Single `index.html` with 7 anchored sections (about, expertise, experience, clients, skills, contact + nav). One stylesheet `assets/styles.css` using CSS custom properties for theme tokens. One script `assets/script.js` handling theme persistence, smooth scroll, active-nav, mobile menu. Inline pre-paint theme script in `<head>` to prevent FOUC. Zero build, zero deps.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS (ES2020). Google Fonts: EB Garamond, Inter, JetBrains Mono. Inline SVG icons. GitHub Pages static hosting.

**Spec:** `docs/superpowers/specs/2026-05-24-personal-website-design.md`

---

## Execution Log

| Phase | Status | Commit range | Notes |
|---|---|---|---|
| Tasks 1–13 (build) | ✅ Done | `d1e0b4d` → `6d852ba` | Implemented by subagent, single dispatch |
| Spec compliance review | ✅ Done | — | 1 bug (section DOM order) + 4 drifts found |
| Spec fixes | ✅ Done | `40601b4` | Section order restored, headings → spec literals; Skills nav link + Leadership skills group accepted as intentional extras |
| Code quality review | ✅ Done | — | 2 critical + 4 important + 5 minor findings |
| Quality fixes | ✅ Done | `4fdaa22` | Skip link → `#main`, JS rewrapped in single IIFE w/ focus trap, hex values tokenized, JSON-LD email cleaned, footer breakpoint normalized |
| README | ✅ Done | `2fbc57f` | — |
| SEO pack | ✅ Done | `b77d034` | Title/desc/keywords, OG, Twitter, 3 JSON-LD blocks (Person/WebSite/BreadcrumbList), `robots.txt`, `sitemap.xml` |
| CLAUDE.md | ✅ Done | `0841aba`, `66ed616` | Initial + monogram/favicon addendum |
| Client tiles expanded (6 → 11) | ✅ Done | `0164724` | Added Etisalat, Maxis, Google, Eicher, Volvo Trucks; brand monogram system |
| Favicon "AJ" monogram | ✅ Done | `9913718` | Replaced spike-mark favicon with serif "AJ" on coral |
| Skills trim | ✅ Done | `6e0aa22` | Dropped IoT & Connectivity group; removed Go from Languages |
| Default theme → dark | ✅ Done | `391fcb6` | `<html data-theme="dark">`, pre-paint default = dark, OS-pref change listener removed |
| Hero terminal typewriter | ✅ Done | `ed750a9` | Tokenize-and-retype animation on hero entering viewport; static HTML for SEO/no-JS |
| Clients heading copy | ✅ Done | `05921cc` | "Platforms shipped globally to MNOs and OEMs." |
| Skills trim (IoT + Go) | ✅ Done | `6e0aa22` | Already logged above; included for chronology |
| Resources page added | ✅ Done | `7c5e025`, `8a9f54c`, `efa6b88` | New page + first PDF — full breakdown in `2026-05-24-resources-page.md` |
| Hero title — Title Case + SVP jobTitle | ✅ Done | `c77c55c` | h1 capitalized; JSON-LD jobTitle aligned to "SVP Engineering" |
| Default theme → light | ✅ Done | (pending commit) | Reverted from dark; `data-theme="light"` and pre-paint fallback = light |
| Task 14 (Lighthouse) | ⏳ User-driven | — | Requires browser/DevTools |
| Task 15 (Pages publish) | ⏳ User-driven | — | Requires GitHub UI |
| Task 16 (OG cover image) | ⏳ Open | — | `assets/og-cover.png` referenced in meta but not yet generated |

---

## File Structure

| File | Responsibility | Status |
|---|---|---|
| `index.html` | Document structure, semantic landmarks, all section markup, inline pre-paint theme script, JSON-LD graph, meta tags, OG/Twitter cards | ✅ |
| `assets/styles.css` | Theme tokens (light + dark), typography scale, layout grid, every component style | ✅ |
| `assets/script.js` | Single IIFE: theme toggle, mobile menu (w/ focus trap), smooth scroll, active-nav observer, fade-in observer | ✅ |
| `assets/favicon.svg` | Spike-mark glyph favicon | ✅ |
| `assets/og-cover.png` | 1200×630 social-preview image (referenced in OG + Twitter meta) | ⏳ Missing |
| `.nojekyll` | Disable GitHub Pages Jekyll processing | ✅ |
| `robots.txt` | Crawl directives + sitemap pointer | ✅ |
| `sitemap.xml` | XML sitemap (single canonical URL) | ✅ |
| `README.md` | Project README for GitHub repo landing | ✅ |
| `CLAUDE.md` | Guidance for future Claude Code sessions | ✅ |

Verification = open `index.html` in a browser. No test framework (static site, no logic worth unit-testing). Each task ends with a manual browser-verify step + git commit.

---

## Task 1: Scaffold project files

**Files:**
- Create: `.nojekyll`
- Create: `assets/favicon.svg`
- Create: `index.html` (placeholder)
- Create: `assets/styles.css` (empty)
- Create: `assets/script.js` (empty)

- [ ] **Step 1: Create `.nojekyll`**

Empty file (presence alone disables Jekyll on Pages).

```
```

- [ ] **Step 2: Create `assets/favicon.svg`**

> **Updated 2026-05-24 (`9913718`):** Initial favicon was the spike-mark glyph; current favicon is an "AJ" serif monogram on coral. The spike-mark survives only as the inline nav/footer brand glyph.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#cc785c"/>
  <text x="32" y="44"
        text-anchor="middle"
        font-family="Georgia, 'EB Garamond', 'Tiempos Headline', serif"
        font-size="34"
        font-weight="600"
        fill="#faf9f5"
        letter-spacing="-1.5">AJ</text>
</svg>
```

- [ ] **Step 3: Create skeleton `index.html`**

```html
<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <title>Abhishek Jain — SVP Engineering</title>
</head>
<body>
  <main>Scaffold.</main>
</body>
</html>
```

- [ ] **Step 4: Create empty `assets/styles.css` and `assets/script.js`**

Both files empty (content added in later tasks).

- [ ] **Step 5: Verify file tree**

Run: `ls assets && ls -a`
Expected: `.nojekyll`, `index.html`, `DESIGN.md`, `assets/` containing `favicon.svg styles.css script.js`.

- [ ] **Step 6: Commit**

```bash
git add .nojekyll index.html assets/
git commit -m "chore: scaffold static site skeleton"
```

---

## Task 2: CSS — design tokens and base reset

**Files:**
- Modify: `assets/styles.css`

- [ ] **Step 1: Write the token + reset block**

Overwrite `assets/styles.css` with:

```css
/* ----- Tokens (light) ----- */
:root, [data-theme="light"] {
  --canvas: #faf9f5;
  --surface-soft: #f5f0e8;
  --surface-card: #efe9de;
  --surface-cream-strong: #e8e0d2;
  --surface-dark: #181715;
  --surface-dark-elevated: #252320;
  --surface-dark-soft: #1f1e1b;
  --ink: #141413;
  --body-strong: #252523;
  --body: #3d3d3a;
  --muted: #6c6a64;
  --muted-soft: #8e8b82;
  --hairline: #e6dfd8;
  --hairline-soft: #ebe6df;
  --primary: #cc785c;
  --primary-active: #a9583e;
  --on-primary: #ffffff;
  --on-dark: #faf9f5;
  --on-dark-soft: #a09d96;
  --accent-teal: #5db8a6;
  --accent-amber: #e8a55a;
}

/* ----- Tokens (dark) ----- */
[data-theme="dark"] {
  --canvas: #181715;
  --surface-soft: #1f1e1b;
  --surface-card: #252320;
  --surface-cream-strong: #2e2c28;
  --surface-dark: #0f0e0c;
  --surface-dark-elevated: #1f1e1b;
  --surface-dark-soft: #181715;
  --ink: #faf9f5;
  --body-strong: #ebe6df;
  --body: #cfccc4;
  --muted: #a09d96;
  --muted-soft: #8e8b82;
  --hairline: #2e2c28;
  --hairline-soft: #252320;
  --on-dark: #faf9f5;
  --on-dark-soft: #a09d96;
}

/* ----- Reset ----- */
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; animation: none !important; }
}
body {
  background: var(--canvas);
  color: var(--body);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
a { color: var(--primary); text-decoration: none; }
a:hover { text-decoration: underline; }
img, svg { display: block; max-width: 100%; }
button { font: inherit; cursor: pointer; border: 0; background: transparent; color: inherit; }
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ----- Typography scale ----- */
.display-xl, .display-lg, .display-md, .display-sm {
  font-family: 'EB Garamond', 'Tiempos Headline', Garamond, 'Times New Roman', serif;
  font-weight: 500;
  color: var(--ink);
  margin: 0;
}
.display-xl { font-size: clamp(40px, 6vw, 64px); line-height: 1.05; letter-spacing: -1.5px; }
.display-lg { font-size: clamp(32px, 4.5vw, 48px); line-height: 1.1; letter-spacing: -1px; }
.display-md { font-size: clamp(28px, 3.5vw, 36px); line-height: 1.15; letter-spacing: -0.5px; }
.display-sm { font-size: clamp(22px, 2.6vw, 28px); line-height: 1.2; letter-spacing: -0.3px; }

.title-lg { font-size: 22px; font-weight: 500; line-height: 1.3; color: var(--ink); margin: 0; }
.title-md { font-size: 18px; font-weight: 500; line-height: 1.4; color: var(--ink); margin: 0; }
.title-sm { font-size: 16px; font-weight: 500; line-height: 1.4; color: var(--ink); margin: 0; }
.body-md { font-size: 16px; line-height: 1.55; color: var(--body); }
.body-sm { font-size: 14px; line-height: 1.55; color: var(--body); }
.caption { font-size: 13px; font-weight: 500; line-height: 1.4; color: var(--muted); }
.caption-up {
  font-size: 12px; font-weight: 500; line-height: 1.4; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--muted);
}
.mono { font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace; }

/* ----- Layout ----- */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
@media (min-width: 768px) { .container { padding: 0 48px; } }

.section { padding: 96px 0; }
.section + .section { border-top: 1px solid var(--hairline-soft); }

.skip-link {
  position: absolute; left: -9999px;
  background: var(--ink); color: var(--canvas);
  padding: 12px 16px; border-radius: 8px;
  z-index: 100;
}
.skip-link:focus { left: 16px; top: 16px; }
```

- [ ] **Step 2: Open `index.html` in a browser**

Verify body background reads as warm cream (#faf9f5). Light theme renders.

- [ ] **Step 3: Commit**

```bash
git add assets/styles.css
git commit -m "feat(styles): add theme tokens, reset, typography scale"
```

---

## Task 3: HTML — `<head>`, meta, fonts, JSON-LD, pre-paint theme script

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace `<head>` with full meta + font links + pre-paint theme script**

Overwrite `<head>` block:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Abhishek Jain — SVP Engineering · AI/AIOps · Connected Vehicles</title>
  <meta name="description" content="Engineering leader with 15+ years building and scaling AI-native IoT, connected vehicle, and SaaS platforms for Fortune-500 operators and global OEMs.">
  <meta name="theme-color" content="#faf9f5" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#181715" media="(prefers-color-scheme: dark)">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="canonical" href="https://abhishekjain1.github.io/abhishekjain1/">

  <!-- Open Graph -->
  <meta property="og:type" content="profile">
  <meta property="og:title" content="Abhishek Jain — SVP Engineering">
  <meta property="og:description" content="Engineering leader building AI-native IoT platforms.">
  <meta property="og:url" content="https://abhishekjain1.github.io/abhishekjain1/">
  <meta name="twitter:card" content="summary">

  <!-- Pre-paint theme (prevent FOUC). Default = dark; no OS-pref consultation. -->
  <script>
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        document.documentElement.setAttribute('data-theme', stored || 'dark');
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">

  <link rel="stylesheet" href="assets/styles.css">

  <!-- JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abhishek Jain",
    "jobTitle": "Senior Vice President, Engineering",
    "email": "mailto:abhishekjain1@live.com",
    "url": "https://abhishekjain1.github.io/abhishekjain1/",
    "sameAs": ["https://www.linkedin.com/in/abhishekjain2603"],
    "worksFor": { "@type": "Organization", "name": "Airlinq" },
    "alumniOf": { "@type": "CollegeOrUniversity", "name": "The LNM Institute of Information Technology, Jaipur" },
    "address": { "@type": "PostalAddress", "addressLocality": "Jaipur", "addressCountry": "IN" }
  }
  </script>
</head>
```

- [ ] **Step 2: Reload `index.html` in browser**

Verify tab title updates, no console errors, fonts load (`EB Garamond`, `Inter`, `JetBrains Mono` visible in DevTools → Network).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(html): add meta, OG, JSON-LD, pre-paint theme, fonts"
```

---

## Task 4: Top nav

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Replace `<body>` markup with nav + main scaffolding**

```html
<body>
  <a href="#about" class="skip-link">Skip to content</a>

  <header class="topnav" id="top">
    <div class="container topnav__inner">
      <a href="#top" class="brand" aria-label="Abhishek Jain — home">
        <svg class="brand__mark" viewBox="0 0 24 24" aria-hidden="true">
          <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="12" y1="3" x2="12" y2="21"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="5.5" y1="5.5" x2="18.5" y2="18.5"/>
            <line x1="18.5" y1="5.5" x2="5.5" y2="18.5"/>
          </g>
        </svg>
        <span>Abhishek Jain</span>
      </a>

      <nav class="topnav__links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#experience">Experience</a>
        <a href="#clients">Clients</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="topnav__actions">
        <button class="theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed="false">
          <svg class="theme-toggle__sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="12" cy="12" r="4" fill="currentColor"/>
            <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
              <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
              <line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/>
              <line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/>
            </g>
          </svg>
          <svg class="theme-toggle__moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill="currentColor"/>
          </svg>
        </button>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="4" y1="7" x2="20" y2="7"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="17" x2="20" y2="17"/>
            </g>
          </svg>
        </button>
        <a href="#contact" class="btn btn--primary topnav__cta">Get in touch</a>
      </div>
    </div>
  </header>

  <main id="main">
    <!-- sections added in later tasks -->
  </main>

  <script src="assets/script.js" defer></script>
</body>
```

- [ ] **Step 2: Append nav + button styles to `assets/styles.css`**

```css
/* ----- Buttons ----- */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 40px; padding: 0 20px;
  font-size: 14px; font-weight: 500; line-height: 1;
  border-radius: 8px; transition: background-color .15s ease;
}
.btn--primary { background: var(--primary); color: var(--on-primary); }
.btn--primary:hover { background: var(--primary-active); text-decoration: none; }
.btn--secondary { background: var(--canvas); color: var(--ink); border: 1px solid var(--hairline); }
.btn--secondary:hover { background: var(--surface-card); text-decoration: none; }
.btn--on-coral { background: var(--canvas); color: var(--ink); }
.btn--on-coral:hover { background: var(--surface-card); text-decoration: none; }

/* ----- Top nav ----- */
.topnav {
  position: sticky; top: 0; z-index: 50;
  background: color-mix(in srgb, var(--canvas) 92%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--hairline);
}
.topnav__inner {
  display: flex; align-items: center; justify-content: space-between;
  height: 64px;
}
.brand {
  display: inline-flex; align-items: center; gap: 10px;
  color: var(--ink); font-weight: 600; font-size: 16px;
}
.brand:hover { text-decoration: none; }
.brand__mark { width: 22px; height: 22px; color: var(--ink); }
.topnav__links { display: none; gap: 28px; }
.topnav__links a {
  color: var(--ink); font-size: 14px; font-weight: 500;
  position: relative;
}
.topnav__links a:hover { color: var(--primary); text-decoration: none; }
.topnav__links a.active { color: var(--primary); }
.topnav__links a.active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: -22px; height: 2px;
  background: var(--primary);
}
.topnav__actions { display: flex; align-items: center; gap: 8px; }
.topnav__cta { display: none; }
.theme-toggle {
  width: 36px; height: 36px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink); border: 1px solid var(--hairline);
}
.theme-toggle:hover { background: var(--surface-card); }
.theme-toggle__sun { display: none; }
[data-theme="dark"] .theme-toggle__sun { display: block; }
[data-theme="dark"] .theme-toggle__moon { display: none; }
[data-theme="light"] .theme-toggle__moon { display: block; }
.menu-toggle {
  width: 36px; height: 36px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink); border: 1px solid var(--hairline);
}

@media (min-width: 900px) {
  .topnav__links { display: inline-flex; }
  .topnav__cta { display: inline-flex; }
  .menu-toggle { display: none; }
}
```

- [ ] **Step 3: Reload in browser**

Verify nav row renders with wordmark left, "Get in touch" coral button right, theme toggle visible. Hamburger appears < 900px.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/styles.css
git commit -m "feat(nav): add sticky top nav with theme toggle and hamburger"
```

---

## Task 5: Hero section (`#about`)

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Insert hero into `<main>`**

```html
<section id="about" class="section hero" aria-labelledby="hero-title">
  <div class="container hero__grid">
    <div class="hero__lede">
      <span class="badge">SVP Engineering · Jaipur, India</span>
      <h1 id="hero-title" class="display-xl">Engineering leader building AI-native IoT platforms.</h1>
      <p class="hero__sub body-md">15+ years scaling distributed platform teams across four continents — from co-founding Teramatrix (acquired) to leading a 50-person engineering organization at Airlinq. Today, embedding AI-assisted development and AIOps into the engineering culture for Fortune-500 operators and global automotive OEMs.</p>
      <div class="hero__cta">
        <a href="#contact" class="btn btn--primary">Get in touch</a>
        <a href="#experience" class="btn btn--secondary">See my work</a>
      </div>
    </div>

    <aside class="hero__mockup" aria-hidden="true">
      <div class="mockup">
        <div class="mockup__bar">
          <span class="mockup__dot"></span><span class="mockup__dot"></span><span class="mockup__dot"></span>
          <span class="mockup__title mono">~/airlinq · claude-code</span>
        </div>
        <pre class="mockup__code mono"><span class="c-teal">$</span> claude review pr/4821
<span class="c-muted">→ Loading agent spec: aiops-observability</span>
<span class="c-muted">→ Scoring 12 changed files...</span>

<span class="c-coral">●</span> 3 findings · 1 critical
  <span class="c-muted">k8s/master.yaml:42</span>
  <span class="c-amber">tcp_threshold too aggressive on master role</span>

<span class="c-teal">●</span> Suggested fix applied
  <span class="c-muted">+ context_switch budget: role-aware</span>
  <span class="c-muted">+ false-positive rate -94%</span>

<span class="c-teal">$</span> _</pre>
      </div>
    </aside>
  </div>
</section>
```

- [ ] **Step 2: Append hero + mockup + badge styles**

```css
/* ----- Badges ----- */
.badge {
  display: inline-block;
  background: var(--surface-card); color: var(--ink);
  font-size: 13px; font-weight: 500; line-height: 1.4;
  padding: 4px 12px; border-radius: 9999px;
}
.badge--coral {
  background: var(--primary); color: var(--on-primary);
  font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase;
}

/* ----- Hero ----- */
.hero { padding-top: 64px; }
.hero__grid {
  display: grid; gap: 48px;
  grid-template-columns: 1fr;
  align-items: center;
}
@media (min-width: 1024px) {
  .hero__grid { grid-template-columns: 1fr 1fr; gap: 64px; }
}
.hero__lede > * + * { margin-top: 24px; }
.hero__sub { color: var(--body); font-size: 18px; max-width: 56ch; }
.hero__cta { display: flex; flex-wrap: wrap; gap: 12px; }

.hero__mockup .mockup {
  background: var(--surface-dark); color: var(--on-dark);
  border-radius: 16px; overflow: hidden;
  box-shadow: 0 1px 3px rgba(20,20,19,.08);
}
.mockup__bar {
  display: flex; align-items: center; gap: 6px;
  padding: 12px 16px;
  background: var(--surface-dark-elevated);
  border-bottom: 1px solid #2e2c28;
}
.mockup__dot { width: 10px; height: 10px; border-radius: 50%; background: #3d3b37; }
.mockup__dot:nth-child(1) { background: #e8a55a; }
.mockup__dot:nth-child(2) { background: #5db872; }
.mockup__dot:nth-child(3) { background: #c64545; }
.mockup__title { margin-left: 12px; font-size: 12px; color: var(--on-dark-soft); }
.mockup__code {
  padding: 24px; margin: 0;
  font-size: 13px; line-height: 1.7;
  color: var(--on-dark);
  white-space: pre; overflow-x: auto;
}
.c-coral { color: var(--primary); }
.c-teal  { color: var(--accent-teal); }
.c-amber { color: var(--accent-amber); }
.c-muted { color: var(--on-dark-soft); }
```

- [ ] **Step 3: Reload, verify hero**

Headline displays in serif (EB Garamond), coral pill badge, two CTAs side-by-side, terminal mockup with coloured tokens.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/styles.css
git commit -m "feat(hero): add intro headline, sub-line, CTAs, terminal mockup"
```

---

## Task 6: Expertise section (`#expertise`)

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Append expertise section to `<main>`**

```html
<section id="expertise" class="section" aria-labelledby="expertise-title">
  <div class="container">
    <header class="section__head">
      <span class="caption-up">What I do</span>
      <h2 id="expertise-title" class="display-lg">Three areas where I move the needle.</h2>
    </header>

    <div class="cards cards--3">
      <article class="card">
        <div class="card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <h3 class="title-md">AI-Assisted Development &amp; AIOps</h3>
        <p class="body-md">Claude Code agent specs, LLM-driven code review, automated repo evaluation, and ML-based anomaly detection across Kubernetes fleets. Engineering velocity up ~40%; false-positive alert storms eliminated.</p>
      </article>

      <article class="card">
        <div class="card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="3" x2="12" y2="6" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <h3 class="title-md">Connected Vehicle &amp; IoT Platforms</h3>
        <p class="body-md">Enterprise CMP for Tier-1 MNOs — real-time device lifecycle management at 50M+ endpoint scale. OTA orchestration and telemetry pipelines for Daimler and GM at automotive scale.</p>
      </article>

      <article class="card">
        <div class="card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M21 21v-2a4 4 0 00-3-3.87M9 7a4 4 0 108 0 4 4 0 00-8 0zM17 3.13a4 4 0 010 7.75" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <h3 class="title-md">Engineering Leadership</h3>
        <p class="body-md">0→1 team building (Teramatrix, acquired by Airlinq), scaled to a 50+ person remote-first organization across India, LATAM, Middle East, and Japan. M&amp;A technical integration and async culture design.</p>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append section head + card grid styles**

```css
/* ----- Section heading ----- */
.section__head { margin-bottom: 48px; max-width: 60ch; }
.section__head .caption-up { display: inline-block; margin-bottom: 12px; color: var(--primary); }
.section__head h2 { margin-top: 0; }

/* ----- Card grids ----- */
.cards { display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 700px)  { .cards--3 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .cards--3 { grid-template-columns: repeat(3, 1fr); } }

.card {
  background: var(--surface-card); color: var(--ink);
  border-radius: 12px; padding: 32px;
}
.card > * + * { margin-top: 16px; }
.card__icon {
  width: 40px; height: 40px;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--canvas); color: var(--primary);
  border-radius: 8px;
}
.card__icon svg { width: 22px; height: 22px; }
```

- [ ] **Step 3: Reload, verify**

Three cream cards in a 3-up row on desktop, 2-up tablet, 1-up mobile. Coral icon badges. Headings in serif sans (title-md uses Inter, h2 above uses EB Garamond).

- [ ] **Step 4: Commit**

```bash
git add index.html assets/styles.css
git commit -m "feat(expertise): add three-card expertise grid"
```

---

## Task 7: Experience timeline (`#experience`)

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Append experience section**

```html
<section id="experience" class="section section--soft" aria-labelledby="experience-title">
  <div class="container">
    <header class="section__head">
      <span class="caption-up">Career</span>
      <h2 id="experience-title" class="display-lg">Fifteen years of platform building.</h2>
    </header>

    <ol class="timeline">
      <li class="timeline__item">
        <div class="timeline__meta">
          <span class="caption-up">Jul 2021 – Present</span>
          <span class="caption-up timeline__company">Airlinq</span>
        </div>
        <div class="timeline__body">
          <h3 class="title-lg">Senior Vice President, Engineering</h3>
          <p class="body-md">Built and mentored a 50+ person cross-functional engineering organization spanning cloud infrastructure, backend services, embedded/IoT systems, and platform reliability.</p>
          <ul class="bullets body-md">
            <li>Pioneering AI-assisted development culture — Claude Code agent specs, LLM-driven code review pipelines, ~40% velocity lift.</li>
            <li>Architecting AIOps observability stack: Grafana + Telegraf + ML-based anomaly detection with role-aware threshold tuning.</li>
            <li>Delivered enterprise CMP for STC, Reliance Jio, NTT, and América Móvil — tens of millions of connected endpoints.</li>
            <li>Leading connected vehicle IoT solutions for Daimler and GM — OTA orchestration and edge-to-cloud telemetry at automotive scale.</li>
          </ul>
        </div>
      </li>

      <li class="timeline__item">
        <div class="timeline__meta">
          <span class="caption-up">Jun 2017 – Jun 2021</span>
          <span class="caption-up timeline__company">Globetouch (now Airlinq)</span>
        </div>
        <div class="timeline__body">
          <h3 class="title-lg">AVP → VP, Engineering</h3>
          <p class="body-md">Led technology strategy across the IoT connectivity platform — drove modernization from monolith to microservices on Kubernetes.</p>
          <ul class="bullets body-md">
            <li>Defined DevOps and CI/CD frameworks; infrastructure-as-code cut deployment lead times by 60%.</li>
            <li>Pivotal role in the Globetouch → Airlinq rebrand — realigned engineering roadmap with AI-native IoT vision.</li>
          </ul>
        </div>
      </li>

      <li class="timeline__item">
        <div class="timeline__meta">
          <span class="caption-up">Apr 2013 – Jun 2017</span>
          <span class="caption-up timeline__company">Teramatrix Technologies</span>
        </div>
        <div class="timeline__body">
          <h3 class="title-lg">Co-Founder &amp; CTO</h3>
          <p class="body-md">IoT data intelligence startup — real-time aggregation, mediation, and visualization platform. Acquired by Airlinq, Inc.</p>
          <ul class="bullets body-md">
            <li>Built engineering organization from zero — co-founded, scaled to commercial IoT data platform serving telecom and enterprise clients across India and SE Asia.</li>
            <li>Built unified aggregation + mediation + visualization stack — foundational IP that became the core of Airlinq's CMP.</li>
            <li>Navigated successful acquisition by Airlinq — led technical due diligence, IP transfer, and full team integration.</li>
          </ul>
        </div>
      </li>

      <li class="timeline__item">
        <div class="timeline__meta">
          <span class="caption-up">Sep 2009 – Mar 2013</span>
          <span class="caption-up timeline__company">Codescape Consultants</span>
        </div>
        <div class="timeline__body">
          <h3 class="title-lg">Co-Founder &amp; CTO</h3>
          <p class="body-md">Technology consultancy focused on large-scale network analytics platforms for telecom operators and ISPs across APAC and the Middle East.</p>
        </div>
      </li>
    </ol>

    <aside class="edu">
      <span class="caption-up">Education</span>
      <p class="body-md"><strong>B.Tech, Communication &amp; Computer Engineering</strong> — The LNM Institute of Information Technology, Jaipur · 2009</p>
    </aside>
  </div>
</section>
```

- [ ] **Step 2: Append timeline styles**

```css
.section--soft { background: var(--surface-soft); }

.timeline { list-style: none; padding: 0; margin: 0; }
.timeline__item {
  display: grid; gap: 16px;
  grid-template-columns: 1fr;
  padding: 32px 0;
  border-top: 1px solid var(--hairline);
}
.timeline__item:first-child { border-top: 0; padding-top: 0; }
@media (min-width: 800px) {
  .timeline__item { grid-template-columns: 220px 1fr; gap: 48px; }
}
.timeline__meta { display: flex; flex-direction: column; gap: 4px; }
.timeline__company { color: var(--primary); }
.timeline__body > * + * { margin-top: 12px; }
.bullets { list-style: none; padding: 0; }
.bullets li { position: relative; padding-left: 20px; margin-top: 8px; }
.bullets li::before {
  content: ''; position: absolute; left: 0; top: 10px;
  width: 6px; height: 6px; border-radius: 50%; background: var(--primary);
}

.edu {
  margin-top: 48px; padding: 24px;
  border-left: 3px solid var(--primary);
  background: var(--canvas);
  border-radius: 0 8px 8px 0;
}
.edu .caption-up { display: block; margin-bottom: 8px; color: var(--muted); }
```

- [ ] **Step 3: Reload, verify**

Four timeline rows render with date/company column left and role + bullets right (≥800px). Stacks vertically on mobile. Education callout beneath.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/styles.css
git commit -m "feat(experience): add career timeline and education block"
```

---

## Task 8: Global client footprint (`#clients`)

> **Updated 2026-05-24:** Initial implementation shipped 6 tiles. Subsequent commit `0164724` expanded to 11 tiles and introduced text-based brand monograms with per-brand CSS modifier classes (no inline styles, no real corporate logos). Grid breakpoints retuned for 11 tiles.

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Append clients section (11 tiles with monogram badges)**

```html
<section id="clients" class="section" aria-labelledby="clients-title">
  <div class="container">
    <header class="section__head">
      <span class="caption-up">Footprint</span>
      <h2 id="clients-title" class="display-lg">Platforms shipped for global operators.</h2>
    </header>

    <ul class="tiles">
      <li class="tile"><span class="tile__logo tile__logo--stc" aria-hidden="true">STC</span><span class="title-sm">STC</span><span class="caption-up">Saudi Arabia</span></li>
      <li class="tile"><span class="tile__logo tile__logo--jio" aria-hidden="true">Jio</span><span class="title-sm">Reliance Jio</span><span class="caption-up">India</span></li>
      <li class="tile"><span class="tile__logo tile__logo--ntt" aria-hidden="true">NTT</span><span class="title-sm">NTT</span><span class="caption-up">Japan</span></li>
      <li class="tile"><span class="tile__logo tile__logo--ammov" aria-hidden="true">AM</span><span class="title-sm">América Móvil</span><span class="caption-up">LATAM</span></li>
      <li class="tile"><span class="tile__logo tile__logo--daimler" aria-hidden="true">D</span><span class="title-sm">Daimler</span><span class="caption-up">Germany</span></li>
      <li class="tile"><span class="tile__logo tile__logo--gm" aria-hidden="true">GM</span><span class="title-sm">General Motors</span><span class="caption-up">USA</span></li>
      <li class="tile"><span class="tile__logo tile__logo--etisalat" aria-hidden="true">e&amp;</span><span class="title-sm">Etisalat</span><span class="caption-up">UAE</span></li>
      <li class="tile"><span class="tile__logo tile__logo--maxis" aria-hidden="true">M</span><span class="title-sm">Maxis</span><span class="caption-up">Malaysia</span></li>
      <li class="tile"><span class="tile__logo tile__logo--google" aria-hidden="true">G</span><span class="title-sm">Google</span><span class="caption-up">India</span></li>
      <li class="tile"><span class="tile__logo tile__logo--eicher" aria-hidden="true">E</span><span class="title-sm">Eicher Motors</span><span class="caption-up">India</span></li>
      <li class="tile"><span class="tile__logo tile__logo--volvo" aria-hidden="true">V</span><span class="title-sm">Volvo Trucks</span><span class="caption-up">India</span></li>
    </ul>
  </div>
</section>
```

- [ ] **Step 2: Append tile styles + per-brand monogram classes**

```css
.tiles {
  list-style: none; padding: 0; margin: 0;
  display: grid; gap: 16px;
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 700px)  { .tiles { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) { .tiles { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 1280px) { .tiles { grid-template-columns: repeat(6, 1fr); } }
.tile {
  display: flex; flex-direction: column; gap: 10px;
  padding: 20px; border-radius: 12px;
  background: var(--canvas); border: 1px solid var(--hairline);
  color: var(--ink);
  min-height: 128px; justify-content: space-between;
}
.tile .caption-up { color: var(--muted); }
.tile__logo {
  display: inline-flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 700; font-size: 14px; line-height: 1;
  letter-spacing: -0.3px;
  flex-shrink: 0; user-select: none;
}
.tile__logo--stc      { background: #4F2D7F; color: #ffffff; }
.tile__logo--jio      { background: #0F3CC9; color: #ffffff; }
.tile__logo--ntt      { background: #0066B3; color: #ffffff; }
.tile__logo--ammov    { background: #FFCB05; color: #141413; }
.tile__logo--daimler  { background: #1F1F1F; color: #ffffff; }
.tile__logo--gm       { background: #005DAA; color: #ffffff; }
.tile__logo--etisalat { background: #62A744; color: #ffffff; }
.tile__logo--maxis    { background: #0B5BAA; color: #ffffff; }
.tile__logo--eicher   { background: #E2231A; color: #ffffff; }
.tile__logo--volvo    { background: #1A57A5; color: #ffffff; }
.tile__logo--google {
  background: #ffffff; border: 1px solid var(--hairline);
  background-image: linear-gradient(135deg,
    #4285F4 0 25%, #EA4335 25% 50%, #FBBC05 50% 75%, #34A853 75% 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
  font-size: 22px;
}
```

- [ ] **Step 3: Reload, verify**

11 client tiles render in 6-up (≥1280px), 4-up (1024–1279), 3-up (700–1023), 2-up (<700). Brand monograms render with brand color backgrounds; Google uses gradient-clipped "G".

- [ ] **Step 4: Commit**

```bash
git add index.html assets/styles.css
git commit -m "feat(clients): add global client footprint with brand monograms"
```

### Adding a new client later
1. Append `<li class="tile">…</li>` block in `index.html`.
2. Add matching `.tile__logo--<slug> { background: …; color: …; }` rule in `styles.css`.
3. Keep monogram text-based (initials or short brand-mark text). No real corporate logos unless explicitly approved (trademark concern).

---

## Task 9: Skills (`#skills`)

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Append skills section**

```html
<section id="skills" class="section section--soft" aria-labelledby="skills-title">
  <div class="container">
    <header class="section__head">
      <span class="caption-up">Tech stack</span>
      <h2 id="skills-title" class="display-lg">Tools I work with daily.</h2>
    </header>

    <dl class="skills">
      <div class="skills__group">
        <dt class="caption-up">AI / LLM</dt>
        <dd><span class="pill">Claude Code</span><span class="pill">GitHub Copilot</span><span class="pill">LLM-assisted dev</span><span class="pill">Prompt Engineering</span><span class="pill">AI workflow automation</span></dd>
      </div>
      <div class="skills__group">
        <dt class="caption-up">Cloud &amp; Infra</dt>
        <dd><span class="pill">Kubernetes</span><span class="pill">Docker</span><span class="pill">AWS</span><span class="pill">Azure</span><span class="pill">Terraform</span><span class="pill">Helm</span><span class="pill">CI/CD</span><span class="pill">Microservices</span></dd>
      </div>
      <div class="skills__group">
        <dt class="caption-up">AIOps &amp; Observability</dt>
        <dd><span class="pill">Grafana</span><span class="pill">Telegraf</span><span class="pill">Prometheus</span><span class="pill">ML anomaly detection</span></dd>
      </div>
      <div class="skills__group">
        <dt class="caption-up">Languages</dt>
        <dd><span class="pill">Python</span><span class="pill">JavaScript / Node.js</span><span class="pill">Java</span><span class="pill">SQL / NoSQL</span></dd>
      </div>
      <div class="skills__group">
        <dt class="caption-up">Leadership</dt>
        <dd><span class="pill">Remote-first org design</span><span class="pill">0→1 team building</span><span class="pill">M&amp;A</span><span class="pill">Async culture</span><span class="pill">OKR planning</span></dd>
      </div>
    </dl>
  </div>
</section>
```

- [ ] **Step 2: Append skills styles**

```css
.skills { display: grid; gap: 28px; }
.skills__group { display: grid; gap: 12px; grid-template-columns: 1fr; }
@media (min-width: 800px) {
  .skills__group { grid-template-columns: 200px 1fr; align-items: baseline; gap: 32px; }
}
.skills dd { margin: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.pill {
  display: inline-block;
  background: var(--canvas); color: var(--ink);
  border: 1px solid var(--hairline);
  padding: 6px 12px; border-radius: 9999px;
  font-size: 13px; font-weight: 500;
}
```

- [ ] **Step 3: Reload, verify**

Six groups, each label left + pills right (≥800px). Pills wrap.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/styles.css
git commit -m "feat(skills): add tech-stack pill groups"
```

---

## Task 10: Contact callout (`#contact`)

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Append contact section**

```html
<section id="contact" class="section" aria-labelledby="contact-title">
  <div class="container">
    <div class="callout">
      <header>
        <span class="badge badge--coral">Get in touch</span>
        <h2 id="contact-title" class="display-md callout__title">Let's build something.</h2>
        <p class="body-md callout__sub">Open to advisory, founding-engineering, and platform-leadership conversations. The fastest way to reach me is email.</p>
      </header>
      <div class="callout__actions">
        <a href="mailto:abhishekjain1@live.com" class="btn btn--on-coral">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style="margin-right:8px">
            <path d="M3 6h18v12H3z" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <path d="M3 6l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          abhishekjain1@live.com
        </a>
        <a href="https://www.linkedin.com/in/abhishekjain2603" class="btn btn--on-coral" rel="noopener" target="_blank">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style="margin-right:8px">
            <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c1-1.5 2.5-2.5 4.5-2.5 3 0 4.5 2 4.5 5V20h-4v-5c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5V20h-4z" fill="currentColor"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append callout styles**

```css
.callout {
  background: var(--primary); color: var(--on-primary);
  border-radius: 16px; padding: 56px 32px;
  text-align: left;
}
@media (min-width: 800px) { .callout { padding: 72px 64px; } }
.callout > * + * { margin-top: 24px; }
.callout__title { color: var(--on-primary); margin-top: 16px; }
.callout__sub { color: var(--on-primary); opacity: .92; max-width: 56ch; }
.callout__actions { display: flex; flex-wrap: wrap; gap: 12px; }
.callout .badge--coral { background: rgba(255,255,255,.18); color: var(--on-primary); }
```

- [ ] **Step 3: Reload, verify**

Coral block at bottom, two cream buttons (Email + LinkedIn), serif headline.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/styles.css
git commit -m "feat(contact): add coral get-in-touch callout"
```

---

## Task 11: Footer + mobile menu sheet

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Append footer after `</main>` and add mobile menu container inside body**

After `</main>`:

```html
<footer class="footer" role="contentinfo">
  <div class="container footer__grid">
    <div class="footer__brand">
      <a href="#top" class="brand brand--on-dark">
        <svg class="brand__mark" viewBox="0 0 24 24" aria-hidden="true">
          <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="12" y1="3" x2="12" y2="21"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="5.5" y1="5.5" x2="18.5" y2="18.5"/>
            <line x1="18.5" y1="5.5" x2="5.5" y2="18.5"/>
          </g>
        </svg>
        <span>Abhishek Jain</span>
      </a>
      <p class="body-sm footer__tag">SVP Engineering · AI/AIOps · Connected Vehicles · IoT Platforms.</p>
    </div>

    <nav class="footer__col" aria-label="Sections">
      <span class="caption-up">Sections</span>
      <a href="#about">About</a>
      <a href="#expertise">Expertise</a>
      <a href="#experience">Experience</a>
      <a href="#clients">Clients</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="footer__col">
      <span class="caption-up">Contact</span>
      <a href="mailto:abhishekjain1@live.com">abhishekjain1@live.com</a>
    </div>

    <div class="footer__col">
      <span class="caption-up">Elsewhere</span>
      <a href="https://www.linkedin.com/in/abhishekjain2603" rel="noopener" target="_blank">LinkedIn</a>
    </div>
  </div>
  <div class="container footer__bottom">
    <span class="body-sm">© 2026 Abhishek Jain</span>
    <span class="body-sm">Built with HTML, CSS &amp; Claude Code.</span>
  </div>
</footer>
```

Just before `<script src="assets/script.js" defer></script>` add the mobile menu sheet:

```html
<div class="mobile-menu" id="mobile-menu" hidden>
  <div class="mobile-menu__panel">
    <button class="mobile-menu__close" type="button" aria-label="Close menu">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="6" y1="6" x2="18" y2="18"/>
          <line x1="18" y1="6" x2="6" y2="18"/>
        </g>
      </svg>
    </button>
    <nav aria-label="Mobile primary">
      <a href="#about">About</a>
      <a href="#expertise">Expertise</a>
      <a href="#experience">Experience</a>
      <a href="#clients">Clients</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
    <a href="#contact" class="btn btn--primary mobile-menu__cta">Get in touch</a>
  </div>
</div>
```

- [ ] **Step 2: Append footer + mobile menu styles**

```css
/* ----- Footer ----- */
.footer { background: var(--surface-dark); color: var(--on-dark-soft); padding: 64px 0 32px; margin-top: 96px; }
.brand--on-dark, .brand--on-dark .brand__mark { color: var(--on-dark); }
.footer__grid {
  display: grid; gap: 32px;
  grid-template-columns: 1fr;
}
@media (min-width: 700px)  { .footer__grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }
.footer__brand .body-sm { color: var(--on-dark-soft); margin-top: 12px; max-width: 36ch; }
.footer__col { display: flex; flex-direction: column; gap: 10px; }
.footer__col .caption-up { color: var(--on-dark); margin-bottom: 4px; }
.footer__col a { color: var(--on-dark-soft); font-size: 14px; }
.footer__col a:hover { color: var(--on-dark); text-decoration: underline; }
.footer__bottom {
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
  margin-top: 48px; padding-top: 24px;
  border-top: 1px solid #2e2c28;
}
.footer__bottom .body-sm { color: var(--on-dark-soft); }

/* ----- Mobile menu ----- */
.mobile-menu {
  position: fixed; inset: 0; z-index: 100;
  background: var(--canvas);
}
.mobile-menu[hidden] { display: none; }
.mobile-menu__panel {
  height: 100%; display: flex; flex-direction: column;
  padding: 24px 24px 32px; gap: 24px;
}
.mobile-menu__close {
  align-self: flex-end;
  width: 44px; height: 44px; border-radius: 50%;
  color: var(--ink); border: 1px solid var(--hairline);
  display: inline-flex; align-items: center; justify-content: center;
}
.mobile-menu nav {
  display: flex; flex-direction: column; gap: 8px;
  margin-top: 16px;
}
.mobile-menu nav a {
  font-family: 'EB Garamond', serif;
  font-size: 28px; color: var(--ink);
  padding: 12px 0;
  border-bottom: 1px solid var(--hairline-soft);
}
.mobile-menu nav a:hover { text-decoration: none; color: var(--primary); }
.mobile-menu__cta { align-self: flex-start; }
body.menu-open { overflow: hidden; }
```

- [ ] **Step 3: Reload, verify**

Footer renders dark navy with 4 columns. Hamburger opens nothing yet (script in next task).

- [ ] **Step 4: Commit**

```bash
git add index.html assets/styles.css
git commit -m "feat(footer): add dark footer and mobile menu sheet markup"
```

---

## Task 12: JS — theme toggle

**Files:**
- Modify: `assets/script.js`

- [ ] **Step 1: Write theme-toggle module**

Overwrite `assets/script.js`:

```js
(function () {
  'use strict';

  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggleBtn) toggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  // Sync aria-pressed with the pre-painted theme on load.
  applyTheme(currentTheme());

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Default theme is dark; do not auto-flip on OS color-scheme change.
})();
```

- [ ] **Step 2: Reload, click theme toggle**

Verify: page flips between cream canvas and dark navy canvas. Reload — last-chosen theme persists.

- [ ] **Step 3: Commit**

```bash
git add assets/script.js
git commit -m "feat(js): add theme toggle with localStorage persistence"
```

---

## Task 13: JS — smooth scroll, active nav, mobile menu, fade-in

**Files:**
- Modify: `assets/script.js`

- [ ] **Step 1: Append the rest of the JS modules**

Append (after the closing IIFE):

```js

/* ----- Smooth scroll for in-page anchors ----- */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
      closeMobileMenu();
    });
  });
})();

/* ----- Active nav link via IntersectionObserver ----- */
(function () {
  const links = document.querySelectorAll('.topnav__links a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;
  const linkById = {};
  links.forEach(function (a) {
    const id = a.getAttribute('href').slice(1);
    if (id) linkById[id] = a;
  });
  const sections = Object.keys(linkById)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const link = linkById[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(function (s) { observer.observe(s); });
})();

/* ----- Mobile menu toggle ----- */
let closeMobileMenu = function () {};
(function () {
  const openBtn = document.querySelector('.menu-toggle');
  const sheet = document.getElementById('mobile-menu');
  if (!openBtn || !sheet) return;
  const closeBtn = sheet.querySelector('.mobile-menu__close');

  function open() {
    sheet.hidden = false;
    document.body.classList.add('menu-open');
    openBtn.setAttribute('aria-expanded', 'true');
    const firstLink = sheet.querySelector('a');
    if (firstLink) firstLink.focus();
  }
  function close() {
    sheet.hidden = true;
    document.body.classList.remove('menu-open');
    openBtn.setAttribute('aria-expanded', 'false');
  }
  closeMobileMenu = close;

  openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !sheet.hidden) close();
  });
})();

/* ----- Fade-in on scroll ----- */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  const targets = document.querySelectorAll('.section, .hero__mockup, .card, .tile');
  targets.forEach(function (el) { el.classList.add('reveal'); });
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(function (el) { io.observe(el); });
})();
```

- [ ] **Step 2: Append reveal styles to `assets/styles.css`**

```css
/* ----- Reveal animation ----- */
.reveal {
  opacity: 0; transform: translateY(12px);
  transition: opacity .55s ease, transform .55s ease;
}
.reveal.in-view { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

- [ ] **Step 3: Reload, verify behaviors**

- Clicking nav links scroll-jumps smoothly to each section.
- Active link highlights as you scroll.
- On mobile (DevTools < 900px), hamburger opens the cream sheet; close button + Escape dismiss it; tapping a link navigates and closes.
- Section content fades in as it enters viewport.

- [ ] **Step 4: Commit**

```bash
git add assets/script.js assets/styles.css
git commit -m "feat(js): smooth scroll, active nav, mobile menu, fade-in"
```

---

## Task 14: Responsive + a11y polish

**Files:**
- Modify: `assets/styles.css`
- Modify: `index.html`

- [ ] **Step 1: Hero h1 size tune on very small screens**

Append to `assets/styles.css`:

```css
@media (max-width: 480px) {
  .display-xl { letter-spacing: -0.8px; }
  .section { padding: 64px 0; }
  .hero { padding-top: 32px; }
  .callout { padding: 40px 24px; }
}
```

- [ ] **Step 2: Manual a11y checks**

Run through:
- Tab through page — every interactive element is reachable in order; focus ring visible on all.
- Skip-link appears top-left on first Tab.
- Theme toggle announces `aria-pressed` (DevTools → Accessibility tree).
- Screen-reader landmark navigation lands on header / main / footer.
- All `<img>`/`<svg>` either have `alt`/`aria-label` or `aria-hidden="true"`.

Fix any gap inline (e.g., add missing `aria-label`).

- [ ] **Step 3: Lighthouse audit**

Open DevTools → Lighthouse → Mobile, Performance + Accessibility + Best Practices + SEO. Run.
Expected: each category ≥ 90. If A11y drops below 95, address flagged issues (contrast, missing labels).

- [ ] **Step 4: Cross-browser sanity**

Open in Chrome and Firefox. Verify layout parity at 360px, 768px, 1024px, 1440px widths via DevTools responsive mode.

- [ ] **Step 5: Commit**

```bash
git add assets/styles.css index.html
git commit -m "fix(a11y,responsive): small-screen polish and accessibility pass"
```

---

## Task 15: GitHub Pages publish

**Files:** none new

- [ ] **Step 1: Push branch**

```bash
git push origin main
```

- [ ] **Step 2: Enable Pages**

In GitHub repo → Settings → Pages → Source = `Deploy from a branch`, Branch = `main`, Folder = `/ (root)`. Save.

- [ ] **Step 3: Wait for deploy**

GitHub Actions tab shows `pages build and deployment`. Wait ~1 minute.

- [ ] **Step 4: Verify live URL**

Open `https://abhishekjain1.github.io/abhishekjain1/` (or whichever path GitHub assigns). Verify:
- Page loads, fonts apply.
- Theme toggle persists across reloads.
- All nav links scroll to sections.
- Email/LinkedIn buttons work.
- Mobile layout works on a real phone.

- [ ] **Step 5: Update `<link rel="canonical">` and OG URLs if repo path differs**

If the published URL is not `abhishekjain1.github.io/abhishekjain1/`, edit `index.html` to match, commit, push.

```bash
git add index.html
git commit -m "chore(meta): update canonical and OG URLs to actual Pages path"
git push
```

---

## Task 16: Generate Open Graph cover image

Open task. SEO meta references `assets/og-cover.png` (1200×630). File not yet created — social previews will show broken image until generated.

**Files:**
- Create: `assets/og-cover.png` (1200×630 PNG)

**Acceptance criteria**
- 1200×630 px PNG, < 200 KB.
- Cream `#faf9f5` background.
- Serif "Abhishek Jain" in EB Garamond / Tiempos Headline, ~96px, color `#141413`.
- Sub-line "SVP Engineering · AI/AIOps · IoT Platforms" in Inter ~32px, color `#3d3d3a`.
- Small coral accent stripe or spike-mark glyph at left edge for brand voltage.

**Production options (pick one)**
1. Open `index.html` in a browser at 1200×630 viewport, take a hero screenshot, crop to spec.
2. Use Figma / Canva template with the tokens from `DESIGN.md`.
3. Generate via Gemini/Banana (see `claude-blog:blog-image` skill) with a prompt referencing the design tokens.
4. Hand-roll an HTML→PNG export with the existing `styles.css` + Playwright/Puppeteer screenshot.

- [ ] **Step 1:** Produce the PNG by chosen method.
- [ ] **Step 2:** Save to `assets/og-cover.png`.
- [ ] **Step 3:** Validate via Open Graph debugger (`https://www.opengraph.xyz/?url=...`) after deploy.
- [ ] **Step 4:** Commit
  ```bash
  git add assets/og-cover.png
  git commit -m "feat(seo): add 1200x630 Open Graph cover image"
  ```

---

## Task 17: Optional polish backlog

Not blocking. Pick up any time.

- Add a Plausible / GoatCounter privacy-respecting analytics snippet (out of original scope; add only if user asks).
- Add a Search Console verification meta tag once site is verified.
- Convert hero terminal mockup into a subtle animated typewriter for first paint (must respect `prefers-reduced-motion`).
- Add structured "WorkExperience" / `Organization` entries to JSON-LD for each timeline role.
- Add `<link rel="alternate" hreflang>` if Hindi translation is added.

---

## Self-Review Notes (updated 2026-05-24)

### Spec coverage
- Spec § 3 (sections): all 7 anchors covered (Tasks 4–11). Section DOM order corrected after initial implementation (`40601b4`).
- Spec § 2 (theme tokens, fonts): Tasks 2 + 3 — verified, both light + dark blocks complete.
- Spec § 4 (interactivity): Tasks 12 + 13 — single-IIFE rewrite (`4fdaa22`) consolidated scope and added focus trap.
- Spec § 5 (file layout): Task 1; superset now includes `README.md`, `CLAUDE.md`, `robots.txt`, `sitemap.xml` — none of which conflict with spec.
- Spec § 6 (a11y): skip link points to `#main`; reduced-motion honored in CSS + 2 JS paths; mobile menu has focus trap + Escape close + backdrop click close.
- Spec § 7 (breakpoints): 700 / 800 / 900 / 1024 — footer breakpoint normalized to 800px for consistency with rest of layout.
- Spec § 8 (perf): `display=swap` on Google Fonts URL, inline SVG only, no JS dependencies.
- Spec § 9 (SEO): Task 3 + post-build SEO enrichment (`b77d034`) — full meta, OG, Twitter, JSON-LD graph (3 blocks linked by `@id`), `robots.txt`, `sitemap.xml`.

### Hard rules
- No résumé download link anywhere — verified by grep across all source.
- No phone number anywhere — verified by grep.
- Contact = email + LinkedIn only.

### Deviations from original spec (accepted as intentional)
- "Skills" added to nav, footer, and mobile menu (spec § 3.1 listed 5 nav links; impl has 6). Reason: aids in-page navigation; user accepted.
- Sixth skills group "Leadership" added (spec § 3.6 listed 5 groups). Reason: matches résumé "Leadership & Strategy" competency block; user accepted.

### Open items
- `assets/og-cover.png` referenced but not created — Task 16.
- Task 14 (Lighthouse pass) and Task 15 (Pages publish) — user-driven, awaiting action.
- Canonical / OG URL hardcoded to `https://abhishekjain1.github.io/abhishekjain1/` — re-check after Pages deploy reveals actual URL.

---

## Execution Handoff

Plan saved to `docs/superpowers/plans/2026-05-24-personal-website.md` and executed via `superpowers:subagent-driven-development` on 2026-05-24. Build phase complete (15 commits on `main`). Remaining work is user-driven (Tasks 14, 15) plus Task 16 (OG image).
