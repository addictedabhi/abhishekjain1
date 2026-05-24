(function () {
  'use strict';

  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- Theme ----- */
  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggleBtn) toggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }
  applyTheme(currentTheme());
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
  // Default theme is dark; do not auto-flip on OS color-scheme change.

  /* ----- Mobile menu (defined BEFORE smooth-scroll so closeMenu is in scope) ----- */
  const menuOpenBtn = document.querySelector('.menu-toggle');
  const menuSheet = document.getElementById('mobile-menu');
  const menuCloseBtn = menuSheet ? menuSheet.querySelector('.mobile-menu__close') : null;

  function openMenu() {
    if (!menuSheet || !menuOpenBtn) return;
    menuSheet.hidden = false;
    document.body.classList.add('menu-open');
    menuOpenBtn.setAttribute('aria-expanded', 'true');
    const firstLink = menuSheet.querySelector('a');
    if (firstLink) firstLink.focus();
  }
  function closeMenu() {
    if (!menuSheet || !menuOpenBtn) return;
    menuSheet.hidden = true;
    document.body.classList.remove('menu-open');
    menuOpenBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuOpenBtn && menuSheet) {
    menuOpenBtn.addEventListener('click', openMenu);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);

    /* Focus trap while menu is open (I4 fix) */
    menuSheet.addEventListener('keydown', function (e) {
      if (menuSheet.hidden) return;
      if (e.key === 'Escape') { closeMenu(); menuOpenBtn.focus(); return; }
      if (e.key !== 'Tab') return;
      const focusable = menuSheet.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });

    /* Backdrop click closes */
    menuSheet.addEventListener('click', function (e) {
      if (e.target === menuSheet) closeMenu();
    });
  }

  /* ----- Smooth scroll for in-page anchors ----- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
      closeMenu();
    });
  });

  /* ----- Active nav highlight via IntersectionObserver ----- */
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

    /* I1 fix: pick the entry with greatest intersectionRatio per batch */
    const observer = new IntersectionObserver(function (entries) {
      let best = null;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
      });
      if (!best) return;
      const link = linkById[best.target.id];
      if (!link) return;
      links.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');
    }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });

    sections.forEach(function (s) { observer.observe(s); });
  })();

  /* ----- Fade-in on scroll ----- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
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
  }
})();
