/* ══════════════════════════════════════════════
   works.js — Page MES TRAVAUX
══════════════════════════════════════════════ */

/* ── Base de données des travaux ── */
const WORKS = {
  scratch: {
    title: 'SCRATCH PROJECTS',
    desc:  'First contact with programming through Scratch. Creating small games, animations, and interactions. It was the trigger for my passion for coding.',
    tags:  ['Scratch', 'Logique', 'Animation', 'Game Design'],
    red:   false,
    link:  '../projects/scratch.html'
  },
  drone: {
    title: 'DRONE PROGRAMMING',
    desc:  "One-month training in drone programming. Learning the basics of automated flight control on DroneBlocks.",
    tags:  ['Python', 'Robotique', 'Algorithmes', 'Drone'],
    red:   false
  },
  research: {
    title: 'ARKANSAS SUMMER RESEARCH INSTITUTE',
    desc:  "Participating in a summer research program in Arkansas. Conducting experiments and analyzing data in Population Health.",
    tags:  ['Research', 'Science', 'Collaboration', 'Data Analysis'],
    red:   false,
    link:  'https://docs.google.com/presentation/d/1m3gD2zOgRm54PN2K_Xm9OJNN1ul6DusjYakiMUJzd_8/edit?usp=sharing'
  },
  church: {
    title: 'IT BÉNÉVOLAT — SUMMIT CHURCH',
    desc:  "Volunteering in the IT services at Summit Church. Managing electronic equipment, technical support, and network maintenance.",
    tags:  ['IT Support', 'Networking', 'Volunteering'],
    red:   false,
     link:  ''
  },
  web: {
    title: 'WEB DEV PROJECT',
    desc:  "Web development project in progress. Learning HTML, CSS, and JavaScript to build modern web interfaces.",
    tags:  ['HTML', 'CSS', 'JavaScript', 'Eprocessing'],
    red:   true
  },
  story: {
    title: 'STORY / NOVEL',
    desc:  "Writing an original story. Seneve is working on an ambitious narrative project between manga and novel.",
    tags:  ['writing', 'Narration', 'Fiction', 'processing'],
    red:   true
  },
  studio: {
    title: 'HOME MUSIC STUDIO',
    desc:  "Setting up a home music studio. Creating a space for musical production and recording sessions.",
    tags:  ['Drum', 'Production', 'Studio', 'Processing'],
    red:   true
  },
  drum: {
    title: 'DRUM COVERS',
    desc:  "Recording drum covers of favorite songs and original compositions.",
    tags:  ['Drum', 'Music', 'Performance'],
    red:   true
  },
  MultiModal: {
    title: 'Sleeping Detector',
    desc:  "Cognitve Radar, MultiModal Vigilance AI, An intelligent physiological mirror, An embedded biometric assistant, An augmented human‑perception system. ",
    tags:  ['Drum', 'Music', 'Performance'],
    red:   true,
    link:  'https://github.com/slihono/Multimodal'
  },
  game: {
    title: 'GAME DEV CONCEPT',
    desc:  "Concept for a video game in development. A personal project inspired by anime and dark fantasy universes.",
    tags:  ['Game Design', 'Concept Art', 'Narrative', 'Soon'],
    red:   true
  },
  app: {
    title: 'MOBILE APP',
    desc:  "A mobile application project. An idea in the making to solve a daily problem.",
    tags:  ['Mobile', 'UI/UX', 'Développement'],
    red:   true
  },
  ai: {
    title: 'AI PROJECT',
    desc:  "Exploring the possibilities of Artificial Intelligence. A future project combining AI and creativity.",
    tags:  ['IA', 'Machine Learning', 'Créativity', 'Soon'],
    red:   true
  },
  design: {
    title: 'UI DESIGN WORK',
    desc:  "Projects for user interface design. Exploring the aesthetics of dark cyberpunk and anime.",
    tags:  ['UI/UX', 'Figma', 'Design System'],
    red:   true
  },
  open: {
    title: '??? —  SECRET PROJECT',
    desc:  'A secret project that will be revealed soon.',
    tags:  ['Classified', '???', 'soon'],
    red:   true
  }
};


/* ── Navigation entre pages ── */
let isNavigating = false;

function navigateTo(url, goBack = false) {
  if (isNavigating) return;
  isNavigating = true;

  const page = document.getElementById('page');
  page.classList.remove('page-enter', 'page-enter-back', 'page-exit', 'page-exit-back');
  page.classList.add(goBack ? 'page-exit-back' : 'page-exit');
  page.addEventListener('animationend', () => {
    window.location.href = url;
  }, { once: true });
}

// Bouton retour
document.getElementById('btnPrev').addEventListener('click', () => navigateTo('../vision/vision.html', true));

// Clavier
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') navigateTo('../vision/vision.html', true);
  if (e.key === 'Escape')    closeModal();
});

// Swipe tactile
let startX = 0;
document.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx > 60) navigateTo('../vision/vision.html', true);
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

  const linkEl = document.getElementById('modal-link');

  if (w.link) {
    linkEl.innerHTML = `
      <button id="modal-open-work">See Project</button>
    `;
    document.getElementById('modal-open-work').onclick = () => {
      navigateTo(w.link);
    };
  } else {
    linkEl.innerHTML = '';
  }

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



