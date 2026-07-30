/* ─────────────────────────────────────────
   REZVAN — main.js
   Phase 2: nav scroll effect only
   ───────────────────────────────────────── */

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });
