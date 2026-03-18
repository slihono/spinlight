/* ══════════════════════════════════════════════
   DONNÉES — Base de données des travaux
══════════════════════════════════════════════ */
const works = {
  scratch: {
    title: 'SCRATCH PROJECTS',
    desc:  'Premier contact avec la programmation via Scratch. Création de petits jeux, animations et interactions. Ce fut le déclencheur de la passion pour le code.',
    tags:  ['Scratch', 'Logique', 'Animation', 'Game Design'],
    color: '#00e5ff'
  },
  drone: {
    title: 'DRONE PROGRAMMING',
    desc:  'Formation de un mois en programmation de drones. Apprentissage des bases du contrôle de vol automatisé et des algorithmes de trajectoire.',
    tags:  ['Python', 'Robotique', 'Algorithmes', 'Drone'],
    color: '#00e5ff'
  },
  church: {
    title: 'IT BÉNÉVOLAT — SUMMIT CHURCH',
    desc:  'Bénévolat dans les services IT du Summit Church. Gestion des équipements audio/vidéo, support technique et maintenance du réseau.',
    tags:  ['IT Support', 'Réseaux', 'AV Tech', 'Bénévolat'],
    color: '#00e5ff'
  },
  web: {
    title: 'WEB DEV PROJECT',
    desc:  'Projet web en cours de développement. Apprentissage du HTML, CSS et JavaScript pour construire des interfaces web modernes.',
    tags:  ['HTML', 'CSS', 'JavaScript', 'En cours'],
    color: '#ff2d2d'
  },
  story: {
    title: 'STORY / NOVEL',
    desc:  "Rédaction d'une histoire originale. Seneve est passionné par l'écriture et travaille sur un projet narratif ambitieux entre manga et roman.",
    tags:  ['Écriture', 'Narration', 'Fiction', 'En cours'],
    color: '#ff2d2d'
  },
  studio: {
    title: 'HOME MUSIC STUDIO',
    desc:  "Mise en place d'un studio de musique maison dans sa chambre. Équipement progressif, production musicale et enregistrement de sessions de batterie.",
    tags:  ['Batterie', 'Production', 'Studio', 'En cours'],
    color: '#ff2d2d'
  },
  game: {
    title: 'GAME DEV CONCEPT',
    desc:  "Concept de jeu vidéo en développement. Projet personnel inspiré des animes et de l'univers dark fantasy.",
    tags:  ['Game Design', 'Concept Art', 'Narrative', 'Soon'],
    color: '#ff2d2d'
  },
  app: {
    title: 'MOBILE APP',
    desc:  "Projet d'application mobile. Idée en cours de maturation pour résoudre un problème du quotidien avec une interface intuitive.",
    tags:  ['Mobile', 'UI/UX', 'Développement', 'Soon'],
    color: '#ff2d2d'
  },
  ai: {
    title: 'AI PROJECT',
    desc:  "Exploration des possibilités de l'Intelligence Artificielle. Projet futur combinant IA et créativité.",
    tags:  ['IA', 'Machine Learning', 'Créativité', 'Soon'],
    color: '#ff2d2d'
  },
  drum: {
    title: 'DRUM COVERS',
    desc:  'Sessions de batterie enregistrées. Covers de morceaux favoris et compositions originales en cours de développement.',
    tags:  ['Batterie', 'Musique', 'Performance', 'En cours'],
    color: '#ff2d2d'
  },
  design: {
    title: 'UI DESIGN WORK',
    desc:  "Projets de design d'interface. Exploration de l'esthétique dark cyberpunk et anime dans des interfaces numériques.",
    tags:  ['UI/UX', 'Figma', 'Design System', 'Soon'],
    color: '#ff2d2d'
  },
  open: {
    title: '??? — PROJET SECRET',
    desc:  '[ ACCÈS REFUSÉ ]\n\nDes informations sur ce projet seront révélées en temps voulu. Stay tuned.',
    tags:  ['Classifié', '???', 'Bientôt'],
    color: '#ff2d2d'
  }
};


/* ══════════════════════════════════════════════
   SLIDER — Navigation horizontale
══════════════════════════════════════════════ */
let current = 0;
const TOTAL  = 4;

/**
 * Navigue vers la slide n
 * @param {number} n  - Index de la slide (0 à 3)
 */
function goTo(n) {
  current = n;
  document.getElementById('slider').style.transform = `translateX(-${n * 100}vw)`;

  // Met à jour les points de progression
  document.querySelectorAll('.prog-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === n);
  });
}


/* ══════════════════════════════════════════════
   MODAL — Détail d'un travail
══════════════════════════════════════════════ */

/**
 * Ouvre la modale pour un travail donné
 * @param {string} key  - Clé du travail dans l'objet `works`
 */
function openWork(key) {
  const w = works[key];
  if (!w) return;

  document.getElementById('modal-title').textContent = w.title;
  document.getElementById('modal-desc').textContent  = w.desc;

  const tagsEl = document.getElementById('modal-tags');
  const isRed  = w.color === '#ff2d2d';

  tagsEl.innerHTML = w.tags
    .map(t => `<span class="tag${isRed ? ' red' : ''}">${t}</span>`)
    .join('');

  document.getElementById('modal').classList.add('open');
}

/**
 * Ferme la modale
 */
function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

// Ferme la modale en cliquant sur le fond
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});


/* ══════════════════════════════════════════════
   CONTRÔLES — Clavier & Swipe tactile
══════════════════════════════════════════════ */

// Navigation clavier (← →  Echap)
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && current < TOTAL - 1) goTo(current + 1);
  if (e.key === 'ArrowLeft'  && current > 0)         goTo(current - 1);
  if (e.key === 'Escape')                             closeModal();
});

// Swipe tactile
let startX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  const THRESHOLD = 60; // px minimum pour déclencher le swipe

  if (dx < -THRESHOLD && current < TOTAL - 1) goTo(current + 1);
  if (dx >  THRESHOLD && current > 0)         goTo(current - 1);
});
