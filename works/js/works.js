/* ══════════════════════════════════════════════
   works.js — Page MES TRAVAUX
══════════════════════════════════════════════ */

/* ── Base de données des travaux ── */
const WORKS = {
  scratch: {
    title: 'SCRATCH PROJECTS',
    desc:  'Premier contact avec la programmation via Scratch. Création de petits jeux, animations et interactions. Ce fut le déclencheur de la passion pour le code.',
    tags:  ['Scratch', 'Logique', 'Animation', 'Game Design'],
    red:   false
  },
  drone: {
    title: 'DRONE PROGRAMMING',
    desc:  "Formation de un mois en programmation de drones. Apprentissage des bases du contrôle de vol automatisé et des algorithmes de trajectoire.",
    tags:  ['Python', 'Robotique', 'Algorithmes', 'Drone'],
    red:   false
  },
  church: {
    title: 'IT BÉNÉVOLAT — SUMMIT CHURCH',
    desc:  "Bénévolat dans les services IT du Summit Church. Gestion des équipements audio/vidéo, support technique et maintenance du réseau.",
    tags:  ['IT Support', 'Réseaux', 'AV Tech', 'Bénévolat'],
    red:   false
  },
  web: {
    title: 'WEB DEV PROJECT',
    desc:  "Projet web en cours de développement. Apprentissage du HTML, CSS et JavaScript pour construire des interfaces web modernes.",
    tags:  ['HTML', 'CSS', 'JavaScript', 'En cours'],
    red:   true
  },
  story: {
    title: 'STORY / NOVEL',
    desc:  "Rédaction d'une histoire originale. Seneve travaille sur un projet narratif ambitieux entre manga et roman.",
    tags:  ['Écriture', 'Narration', 'Fiction', 'En cours'],
    red:   true
  },
  studio: {
    title: 'HOME MUSIC STUDIO',
    desc:  "Mise en place d'un studio de musique dans sa chambre. Production musicale et enregistrement de sessions de batterie.",
    tags:  ['Batterie', 'Production', 'Studio', 'En cours'],
    red:   true
  },
  drum: {
    title: 'DRUM COVERS',
    desc:  "Sessions de batterie enregistrées. Covers de morceaux favoris et compositions originales en développement.",
    tags:  ['Batterie', 'Musique', 'Performance', 'En cours'],
    red:   true
  },
  game: {
    title: 'GAME DEV CONCEPT',
    desc:  "Concept de jeu vidéo en développement. Projet personnel inspiré des animes et de l'univers dark fantasy.",
    tags:  ['Game Design', 'Concept Art', 'Narrative', 'Soon'],
    red:   true
  },
  app: {
    title: 'MOBILE APP',
    desc:  "Projet d'application mobile. Idée en cours de maturation pour résoudre un problème du quotidien.",
    tags:  ['Mobile', 'UI/UX', 'Développement', 'Soon'],
    red:   true
  },
  ai: {
    title: 'AI PROJECT',
    desc:  "Exploration des possibilités de l'Intelligence Artificielle. Projet futur combinant IA et créativité.",
    tags:  ['IA', 'Machine Learning', 'Créativité', 'Soon'],
    red:   true
  },
  design: {
    title: 'UI DESIGN WORK',
    desc:  "Projets de design d'interface. Exploration de l'esthétique dark cyberpunk et anime.",
    tags:  ['UI/UX', 'Figma', 'Design System', 'Soon'],
    red:   true
  },
  open: {
    title: '??? — PROJET SECRET',
    desc:  '[ ACCÈS REFUSÉ ]\n\nDes informations seront révélées en temps voulu. Stay tuned.',
    tags:  ['Classifié', '???', 'Bientôt'],
    red:   true
  }
};


/* ── Navigation entre pages ── */
function navigateTo(url, goBack = false) {
  const page = document.getElementById('page');
  page.classList.add(goBack ? 'page-exit-back' : 'page-exit');
  page.addEventListener('animationend', () => {
    window.location.href = url;
  }, { once: true });
}

// Bouton retour
document.getElementById('btnPrev').addEventListener('click', () => navigateTo('vision.html', true));

// Clavier
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') navigateTo('vision.html', true);
  if (e.key === 'Escape')    closeModal();
});

// Swipe tactile
let startX = 0;
document.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx > 60) navigateTo('vision.html', true);
});


/* ── Modal ── */
function openWork(key) {
  const w = WORKS[key];
  if (!w) return;

  document.getElementById('modal-title').textContent = w.title;
  document.getElementById('modal-desc').textContent  = w.desc;
  document.getElementById('modal-tags').innerHTML    = w.tags
    .map(t => `<span class="tag${w.red ? ' red' : ''}">${t}</span>`)
    .join('');

  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);

// Fermeture en cliquant sur le fond
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Attacher openWork à chaque carte
document.querySelectorAll('.work-icon-card').forEach(card => {
  card.addEventListener('click', () => openWork(card.dataset.key));
});


/* ── Animation d'entrée ── */
document.getElementById('page').classList.add('page-enter');
