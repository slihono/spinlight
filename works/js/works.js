/* ══════════════════════════════════════════════
   works.js — Page MES TRAVAUX
══════════════════════════════════════════════ */

/* ── Base de données des travaux ── */
const WORKS = {
  scratch: {
    title: 'SCRATCH PROJECTS',
    desc:  'My first steps in programming: a Scratch game where the player avoids four robots to score points. I explored game logic, animation and interactions, which sparked my interest in coding.',
    tags:  ['Scratch', 'Programming Logic', 'Animation', 'Game Design'],
    red:   false,
    link:  '../projects/scratch.html'
  },
  drone: {
    title: 'DRONE PROGRAMMING',
    desc:  "A one-month introduction to drone programming with DroneBlocks, exploring programming sequences and the basics of automated flight control.",
    tags:  ['DroneBlocks', 'Robotics', 'Algorithms', 'Drones'],
    red:   false
  },
  research: {
    title: 'ARKANSAS SUMMER RESEARCH INSTITUTE',
    desc:  "A data study completed during the Arkansas Summer Research Institute science camp in summer 2026. I explored urban and rural differences in California in housing, broadband access and education, using exploratory visualisations and summary tables. The linked presentation documents the question, methods and analysis.",
    tags:  ['Science Camp', 'Science', 'Collaboration', 'Data Analysis'],
    red:   false,
    link:  'https://docs.google.com/presentation/d/1m3gD2zOgRm54PN2K_Xm9OJNN1ul6DusjYakiMUJzd_8/edit?usp=sharing'
  },
  church: {
    title: 'IT VOLUNTEERING — SUMMIT CHURCH',
    desc:  "Volunteer IT support at Summit Church, helping with electronic equipment, technical troubleshooting and network maintenance.",
    tags:  ['IT Support', 'Networking', 'Volunteering'],
    red:   false,
    link:  'https://github.com/slihono/spinlight/blob/main/CPSC-IFSC%201105%20Fall%202025.SLP%20Proposal.Seneve%20Lihono.pdf'
  },
  web: {
    title: 'WEB DEV PROJECT',
    desc:  "Web development project in progress. Learning HTML, CSS, and JavaScript to build modern web interfaces.",
    tags:  ['HTML', 'CSS', 'JavaScript', 'In Progress'],
    red:   true
  },
  story: {
    title: 'STORY / NOVEL',
    desc:  "Writing an original story. Seneve is working on an ambitious narrative project between manga and novel.",
    tags:  ['Writing', 'Storytelling', 'Fiction', 'In Progress'],
    red:   true
  },
  studio: {
    title: 'HOME MUSIC STUDIO',
    desc:  "Setting up a home music studio. Creating a space for musical production and recording sessions.",
    tags:  ['Drums', 'Production', 'Studio', 'In Progress'],
    red:   true
  },
  drum: {
    title: 'DRUM COVERS',
    desc:  "Recording drum covers of favorite songs and original compositions.",
    tags:  ['Drums', 'Music', 'Performance'],
    red:   true
  },
  MultiModal: {
    title: 'MULTIMODAL DROWSINESS DETECTION',
    desc:  "A concept exploring drowsiness and vigilance detection through multiple physiological signals. The linked repository presents this ongoing exploration.",
    tags:  ['Multimodal Signals', 'Vigilance', 'Research Concept'],
    red:   true,
    link:  'https://github.com/slihono/Multimodal'
  },
  game: {
    title: 'GAME DEV CONCEPT',
    desc:  "Concept for a video game in development. A personal project inspired by anime and dark fantasy universes.",
    tags:  ['Game Design', 'Concept Art', 'Storytelling', 'Planned'],
    red:   true
  },
  app: {
    title: 'MOBILE APP',
    desc:  "A mobile application project. An idea in the making to solve a daily problem.",
    tags:  ['Mobile', 'UI/UX', 'Development'],
    red:   true
  },
  ai: {
    title: 'AI PROJECT',
    desc:  "Exploring the possibilities of Artificial Intelligence. A future project combining AI and creativity.",
    tags:  ['AI', 'Machine Learning', 'Creativity', 'Exploration'],
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
    tags:  ['Classified', '???', 'Coming Soon'],
    red:   true
  },

  // Statuts des projets GitHub confirmés par Seneve : terminés ou en cours.
  spypath: {
    title: 'SPYPATH — PATHFINDING LAB',
    desc:  'An interactive graph-search learning lab exploring depth-first search, breadth-first search and uniform-cost search. The web interface combines graph visualisation, trace exercises and programming practice.',
    tags:  ['HTML', 'JavaScript', 'Graph Algorithms'],
    red:   false,
    link:  'https://github.com/slihono/Spypath'
  },
  yezik: {
    title: 'YEZIK STUDIO',
    desc:  'A Python desktop audio-processing project with a Tkinter interface. The published code includes modules for vocal alignment, equalisation, compression, cleaning and mixing.',
    tags:  ['Python', 'Tkinter', 'NumPy', 'Audio Processing', 'In Progress'],
    red:   true,
    link:  'https://github.com/slihono/yezik'
  },
  matho: {
    title: 'MATHO — MATHEMATICS TUTOR',
    desc:  'A mathematics-tutoring project with a web chat interface, practice problems and a Discord bot. Its Node.js backend connects the interface to AI and mathematical reasoning services.',
    tags:  ['JavaScript', 'Node.js', 'Express', 'Discord', 'In Progress'],
    red:   true,
    link:  'https://github.com/slihono/Matho'
  },
  yem: {
    title: 'YEM — LOCAL AI CHAT',
    desc:  'A desktop chat application for local AI models. The repository contains an Electron interface, a JavaScript backend with Ollama model selection, conversation handling and a debate module.',
    tags:  ['Electron', 'JavaScript', 'Ollama', 'Local AI', 'In Progress'],
    red:   true,
    link:  'https://github.com/slihono/Yem'
  },
  yema: {
    title: 'YEMA — STUDENT OPPORTUNITIES',
    desc:  'A web directory for international students to explore internships, scholarships, fellowships, grants and mentorships. The interface provides keyword search and filters by subject and opportunity type.',
    tags:  ['HTML', 'CSS', 'JavaScript', 'Search & Filters', 'In Progress'],
    red:   true,
    link:  'https://github.com/slihono/Yema'
  },
  fiveplay: {
    title: 'FIVEPLAY CONTROLLER',
    desc:  'A standalone browser gamepad demo with custom controller profiles, an interactive controller diagram and a test interface. The public repository contains my controller modules and tests, extracted from an earlier client adaptation.',
    tags:  ['Gamepad API', 'JavaScript', 'Python', 'Testing', 'In Progress'],
    red:   true,
    link:  'https://github.com/slihono/fiveplay-controller-demo'
  },
  alarm: {
    title: 'MY FIRST ALARM — ESP32',
    desc:  'A photo journal of my first ESP32 alarm clock: the microSD setback, LCD debugging, internet-radio rebuild and custom LEGO enclosure.',
    tags:  ['ESP32', 'MicroPython', 'Thonny', 'LEGO', 'Build Journal'],
    red:   false,
    link:  '../projects/alarm.html'
  },

  vaneve: {
    title: 'VANEVE — WATCH TOGETHER',
    desc:  'A Chrome-extension project for shared video viewing. The repository includes playback synchronisation, chat and WebRTC audio/video features using Firebase.',
    tags:  ['Chrome Extension', 'JavaScript', 'Firebase', 'WebRTC', 'In Progress'],
    red:   true,
    link:  'https://github.com/slihono/vaneve'
  },
  hub: {
    title: 'HUB — ARDOUR EXPLORATION',
    desc:  'An exploration of audio-software development using an Ardour 9.7.0 source workspace. Based on the upstream Ardour digital audio workstation.',
    tags:  ['C++', 'Audio Software', 'Ardour', 'Open Source Study', 'In Progress'],
    red:   true,
    link:  'https://github.com/slihono/hub'
  },
  petit: {
    title: 'PETIT — CREATIVE WEB EXPERIMENT',
    desc:  'A creative web experiment combining animated flowers, SVG characters and music controls. A practice project in browser animation and interactive presentation.',
    tags:  ['HTML', 'CSS', 'JavaScript', 'SVG Animation'],
    red:   false,
    link:  'https://github.com/slihono/petit'
  },
  blessing: {
    title: 'BLESSING — INTERACTIVE GREETING',
    desc:  'An interactive birthday-greeting web page with audio playback. A small creative project exploring personal storytelling through HTML, styling and browser interaction.',
    tags:  ['HTML', 'CSS', 'JavaScript', 'Audio'],
    red:   false,
    link:  'https://github.com/slihono/blessing'
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

// Un accès depuis l'accueil ouvre la fiche existante, sans modifier la grille.
const selectedWork = new URLSearchParams(window.location.search).get('project');
if (selectedWork && Object.prototype.hasOwnProperty.call(WORKS, selectedWork)) {
  openWork(selectedWork);
}



