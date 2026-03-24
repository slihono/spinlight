/* ══════════════════════════════════════════════
   whoiam.js — Page WHO I AM
══════════════════════════════════════════════ */

/**
 * Navigue avec animation de glissement.
 * @param {string} url      - URL cible
 * @param {boolean} goBack  - true = animation vers la droite (retour)
 */
function navigateTo(url, goBack = false) {
  const page = document.getElementById('page');
  page.classList.add(goBack ? 'page-exit-back' : 'page-exit');

  page.addEventListener('animationend', () => {
    window.location.href = url;
  }, { once: true });
}

// ── Boutons ──
document.getElementById('btnPrev').addEventListener('click', () => navigateTo('../index.html', true));
document.getElementById('btnNext').addEventListener('click', () => navigateTo('../vision/vision.html'));

// ── Clavier ──
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') navigateTo('../vision/vision.html');
  if (e.key === 'ArrowLeft')  navigateTo('../index.html', true);
});

// ── Swipe tactile ──
let startX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx < -60) navigateTo('../vision/vision.html');
  if (dx >  60) navigateTo('../index.html', true);
});

// ── Animation d'entrée ──
// Si on vient de la page précédente → entrée depuis la droite
// Si on vient de la page suivante   → entrée depuis la gauche
const from = document.referrer;
const fromNext = from.includes('vision') || from.includes('works');
document.getElementById('page').classList.add(fromNext ? 'page-enter-back' : 'page-enter');
