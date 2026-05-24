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

  // React to OS-level theme changes when the user hasn't picked one.
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener && mq.addEventListener('change', function (e) {
      let stored = null;
      try { stored = localStorage.getItem('theme'); } catch (err) {}
      if (!stored) applyTheme(e.matches ? 'dark' : 'light');
    });
  }
})();

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
