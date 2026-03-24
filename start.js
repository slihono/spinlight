/* ══════════════════════════════════════════════
   start.js — Page START (index.html)
══════════════════════════════════════════════ */

/**
 * Navigue vers la page suivante avec une animation de glissement.
 * @param {string} url - URL de la page cible
 */
function navigateTo(url) {
  const page = document.getElementById('page');
  page.classList.add('page-exit');

  // Attend la fin de l'animation avant de changer de page
  page.addEventListener('animationend', () => {
    window.location.href = url;
  }, { once: true });
}

// ── Bouton START ──
document.getElementById('startBtn').addEventListener('click', () => {
  navigateTo('whoiam/whoiam.html');
});

// ── Clavier : flèche droite ──
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') navigateTo('whoiam/whoiam.html');
});

// ── Swipe tactile (droite → gauche = page suivante) ──
let startX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx < -60) navigateTo('whoiam/whoiam.html');
});

// ── Animation d'entrée ──
document.getElementById('page').classList.add('page-enter');
