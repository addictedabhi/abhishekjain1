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
