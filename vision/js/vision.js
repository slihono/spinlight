/* ══════════════════════════════════════════════
   vision.js — Page ÉTUDES & MOTIVATION
══════════════════════════════════════════════ */

/**
 * Navigue avec animation de glissement.
 * @param {string} url      - URL cible
 * @param {boolean} goBack  - true = animation retour (vers la droite)
 */
function navigateTo(url, goBack = false) {
  const page = document.getElementById('page');
  page.classList.add(goBack ? 'page-exit-back' : 'page-exit');

  page.addEventListener('animationend', () => {
    window.location.href = url;
  }, { once: true });
}

// ── Boutons ──
document.getElementById('btnPrev').addEventListener('click', () => navigateTo('../whoiam/whoiam.html', true));
document.getElementById('btnNext').addEventListener('click', () => navigateTo('../works/works.html'));

// ── Clavier ──
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') navigateTo('../works/works.html');
  if (e.key === 'ArrowLeft')  navigateTo('../whoiam/whoiam.html', true);
});

// ── Swipe tactile ──
let startX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx < -60) navigateTo('works.html');
  if (dx >  60) navigateTo('whoiam.html', true);
});

// ── Animation d'entrée ──
const fromNext = document.referrer.includes('works');
document.getElementById('page').classList.add(fromNext ? 'page-enter-back' : 'page-enter');
