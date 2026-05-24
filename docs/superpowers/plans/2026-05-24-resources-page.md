# Resources Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Add a standalone `resources.html` page listing downloadable resources, with the first entry being the AI Unlocked presentation PDF.

**Architecture:** New static HTML page sibling to `index.html`. Reuses existing stylesheet and theme system. Resource cards are pure HTML markup blocks (no JS for listing). Download mechanics use the HTML5 `download` attribute on `<a>` tags.

**Tech Stack:** HTML5, existing CSS tokens, vanilla JS (no new modules — theme + nav scripts already loaded). PDF served as static asset under `assets/resources/`.

**Spec:** `docs/superpowers/specs/2026-05-24-resources-page-design.md`

---

## Execution Log

| Phase | Status | Commits | Notes |
|---|---|---|---|
| Spec + plan committed | ✅ Done | `7c5e025` | — |
| Task 1 (PDF asset) | ✅ Done | `8a9f54c` | Source `d:/1. My Projects/AI Session/AI_Unlocked_Presentation_v2 [Autosaved].pdf` copied to `assets/resources/ai-unlocked-presentation-v2.pdf` (977 KB, content untouched) |
| Task 2 (styles) | ✅ Done | — | Appended to `assets/styles.css` |
| Task 3 (resources.html) | ✅ Done | — | Full page with head/nav/hero/grid/footer/JSON-LD |
| Task 4 (index nav wiring) | ✅ Done | — | Added Resources link to top nav, mobile menu, footer |
| Task 5 (sitemap) | ✅ Done | `efa6b88` | resources.html URL added |
| PDF size meta correction | ✅ Done | (in Task 3 or split) | `~2.4 MB` → `~1.0 MB` (actual file is 977 KB) |
| Task 6 (browser verification) | ⏳ User-driven | — | Manual — open both pages, click Download |

Implementer subagent executed Tasks 1–5 in a single dispatch on 2026-05-24. No spec-compliance or code-quality fixes were required (clean run).

---

## File Structure

| File | Responsibility |
|---|---|
| `resources.html` (new) | Page markup, head meta, JSON-LD, hero, resource grid, shared nav + footer |
| `assets/resources/ai-unlocked-presentation-v2.pdf` (new) | The PDF asset, served as-is |
| `assets/styles.css` | Append `.resource*` component styles |
| `index.html` | Add "Resources" link to top nav + mobile menu + footer |
| `sitemap.xml` | Add `<url>` entry for resources.html |

---

## Task 1: Stage PDF asset

**Files:**
- Create directory: `assets/resources/`
- Move/copy source file: `AI_Unlocked_Presentation_v2 [Autosaved].pdf` → `assets/resources/ai-unlocked-presentation-v2.pdf` (rename, content unchanged)

- [ ] **Step 1: Create directory**

```bash
mkdir -p "assets/resources"
```

- [ ] **Step 2: Copy and rename PDF**

```bash
cp "AI_Unlocked_Presentation_v2 [Autosaved].pdf" "assets/resources/ai-unlocked-presentation-v2.pdf"
```

- [ ] **Step 3: Verify size and integrity**

```bash
ls -la assets/resources/ai-unlocked-presentation-v2.pdf
```

Expected: non-zero file size that matches the source PDF.

- [ ] **Step 4: Commit**

```bash
git add assets/resources/ai-unlocked-presentation-v2.pdf
git commit -m "feat(resources): add AI Unlocked presentation PDF asset"
```

---

## Task 2: Append resource card styles

**Files:**
- Modify: `assets/styles.css`

- [ ] **Step 1: Append the following CSS to the bottom of `assets/styles.css`**

```css
/* ----- Resource cards (Resources page) ----- */
.resource-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
}
@media (min-width: 800px) {
  .resource-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
}

.resource {
  background: var(--surface-card);
  color: var(--ink);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
@media (min-width: 800px) { .resource { padding: 32px; gap: 20px; } }

.resource__head { display: flex; flex-direction: column; gap: 12px; }
.resource__type { align-self: flex-start; }
.resource__title { margin: 0; color: var(--ink); }
.resource__desc { color: var(--body); margin: 0; max-width: 56ch; }

.resource__meta {
  display: flex; flex-wrap: wrap; gap: 20px 28px;
  margin: 0; padding: 16px 0 0;
  border-top: 1px solid var(--hairline);
}
.resource__meta > div { display: flex; flex-direction: column; gap: 4px; }
.resource__meta dt { color: var(--muted); margin: 0; }
.resource__meta dd { color: var(--ink); margin: 0; font-weight: 500; }

.resource__cta {
  align-self: stretch;
  margin-top: 4px;
  gap: 8px;
}
@media (min-width: 800px) { .resource__cta { align-self: flex-start; } }
.resource__cta svg { width: 16px; height: 16px; }
```

- [ ] **Step 2: Commit**

```bash
git add assets/styles.css
git commit -m "feat(styles): add resource card component"
```

---

## Task 3: Create `resources.html`

**Files:**
- Create: `resources.html`

- [ ] **Step 1: Write the full page**

```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Primary SEO -->
  <title>Resources — Abhishek Jain</title>
  <meta name="description" content="Free downloadable resources by Abhishek Jain — decks, reference packs, and session material on AI, IoT, and engineering leadership.">
  <meta name="keywords" content="Abhishek Jain, resources, downloads, AI presentation, AI Unlocked, free PDF, engineering resources">
  <meta name="author" content="Abhishek Jain">
  <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
  <meta name="theme-color" content="#faf9f5" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#181715" media="(prefers-color-scheme: dark)">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="canonical" href="https://abhishekjain1.github.io/abhishekjain1/resources.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Abhishek Jain">
  <meta property="og:title" content="Resources — Abhishek Jain">
  <meta property="og:description" content="Free downloadable decks, reference packs, and session material.">
  <meta property="og:url" content="https://abhishekjain1.github.io/abhishekjain1/resources.html">
  <meta property="og:image" content="https://abhishekjain1.github.io/abhishekjain1/assets/og-cover.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_US">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Resources — Abhishek Jain">
  <meta name="twitter:description" content="Free downloadable decks, reference packs, and session material.">
  <meta name="twitter:image" content="https://abhishekjain1.github.io/abhishekjain1/assets/og-cover.png">

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

  <!-- JSON-LD: CollectionPage + ItemList of DigitalDocument -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://abhishekjain1.github.io/abhishekjain1/resources.html#page",
    "url": "https://abhishekjain1.github.io/abhishekjain1/resources.html",
    "name": "Resources — Abhishek Jain",
    "description": "Free downloadable resources by Abhishek Jain.",
    "inLanguage": "en",
    "author": { "@type": "Person", "name": "Abhishek Jain", "url": "https://abhishekjain1.github.io/abhishekjain1/" },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "DigitalDocument",
            "name": "AI Unlocked — From Curious to Confident",
            "description": "26-slide presentation on AI fundamentals for students, homemakers, professionals, and founders. Covers the P-R-O-M-P-T prompting framework, free vs paid tool comparisons, role-based AI toolkits, and live demos of Gamma, NotebookLM, Gemini, and Claude Code.",
            "encodingFormat": "application/pdf",
            "contentUrl": "https://abhishekjain1.github.io/abhishekjain1/assets/resources/ai-unlocked-presentation-v2.pdf",
            "author": { "@type": "Person", "name": "Abhishek Jain" },
            "datePublished": "2026-05"
          }
        }
      ]
    }
  }
  </script>
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>

  <header class="topnav" id="top">
    <div class="container topnav__inner">
      <a href="index.html#top" class="brand" aria-label="Abhishek Jain — home">
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
        <a href="index.html#about">About</a>
        <a href="index.html#expertise">Expertise</a>
        <a href="index.html#experience">Experience</a>
        <a href="index.html#clients">Clients</a>
        <a href="index.html#skills">Skills</a>
        <a href="resources.html" class="active" aria-current="page">Resources</a>
        <a href="index.html#contact">Contact</a>
      </nav>

      <div class="topnav__actions">
        <button class="theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed="true">
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
        <a href="index.html#contact" class="btn btn--primary topnav__cta">Get in touch</a>
      </div>
    </div>
  </header>

  <main id="main">
    <section class="section" aria-labelledby="resources-title">
      <div class="container">
        <header class="section__head">
          <span class="caption-up">Downloads</span>
          <h1 id="resources-title" class="display-xl">Resources.</h1>
          <p class="body-md hero__sub" style="margin-top:16px">Free downloadable decks, reference packs, and session material — open access, no email gate.</p>
        </header>

        <div class="resource-grid" id="resource-list">
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
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Download PDF
            </a>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <a href="index.html#top" class="brand brand--on-dark">
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
        <a href="index.html#about">About</a>
        <a href="index.html#expertise">Expertise</a>
        <a href="index.html#experience">Experience</a>
        <a href="index.html#clients">Clients</a>
        <a href="index.html#skills">Skills</a>
        <a href="resources.html">Resources</a>
        <a href="index.html#contact">Contact</a>
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
        <a href="index.html#about">About</a>
        <a href="index.html#expertise">Expertise</a>
        <a href="index.html#experience">Experience</a>
        <a href="index.html#clients">Clients</a>
        <a href="index.html#skills">Skills</a>
        <a href="resources.html">Resources</a>
        <a href="index.html#contact">Contact</a>
      </nav>
      <a href="index.html#contact" class="btn btn--primary mobile-menu__cta">Get in touch</a>
    </div>
  </div>

  <script src="assets/script.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add resources.html
git commit -m "feat(resources): add resources page with AI Unlocked download"
```

---

## Task 4: Wire "Resources" link into `index.html`

**Files:**
- Modify: `index.html` (top nav, mobile menu sheet, footer sections column)

- [ ] **Step 1: Add Resources link to top nav**

In `index.html`, find the `<nav class="topnav__links">` block. After the `Skills` link and before `Contact`, insert:

```html
<a href="resources.html">Resources</a>
```

- [ ] **Step 2: Add Resources link to mobile menu**

Find `<nav aria-label="Mobile primary">` inside `<div class="mobile-menu">`. After the `Skills` link and before `Contact`, insert:

```html
<a href="resources.html">Resources</a>
```

- [ ] **Step 3: Add Resources link to footer Sections column**

Find `<nav class="footer__col" aria-label="Sections">`. After the `Skills` link, before `Contact`, insert:

```html
<a href="resources.html">Resources</a>
```

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat(nav): add Resources link across nav, mobile menu, footer"
```

---

## Task 5: Update sitemap

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: Add new `<url>` entry**

Replace the contents of `sitemap.xml` with:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://abhishekjain1.github.io/abhishekjain1/</loc>
    <lastmod>2026-05-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://abhishekjain1.github.io/abhishekjain1/resources.html</loc>
    <lastmod>2026-05-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

- [ ] **Step 2: Commit**

```bash
git add sitemap.xml
git commit -m "chore(seo): add resources.html to sitemap"
```

---

## Task 6: Manual verification

Not committable. Open both pages in a browser and confirm:

- [ ] `resources.html` loads, theme is dark by default.
- [ ] Theme toggle works on resources page; toggle state persists when navigating to `index.html` and back.
- [ ] Resources nav link in `index.html` navigates to `resources.html`; all other nav links from `resources.html` navigate to `index.html#section`.
- [ ] Click Download button → browser saves `AI_Unlocked_Presentation_v2.pdf`.
- [ ] Mobile menu (DevTools < 900px) on resources page opens and closes; "Resources" entry present.
- [ ] No console errors on either page.

---

## Self-Review

- Spec § 2 (in-scope): page, card, PDF, nav wiring, sitemap, JSON-LD — all covered (Tasks 1-5).
- Spec § 4.1 (head): pre-paint theme, fonts, canonical, OG/Twitter, JSON-LD — Task 3 Step 1.
- Spec § 4.4 (resource card): Task 2 styles + Task 3 markup.
- Spec § 5 (download mechanics): `download` attribute used on anchor; no JS required. Verified in Task 6.
- Spec § 6 (adding a new resource): pattern in `resources.html` is a single `<article class="resource">` block — clearly copy-paste-able.
- Spec § 10 (acceptance): all bullets map to tasks; Lighthouse check left to user (it requires DevTools).
- No résumé download anywhere, no phone number anywhere — preserved.
- File naming consistent: `resources.html` and `assets/resources/<slug>.pdf` follow lowercase-kebab convention.

---

## Execution Handoff

Plan saved. Execute via subagent dispatch (single subagent — mechanical static work, well-specified).
