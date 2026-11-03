# SpinLight

Personal portfolio by Seneve Lihono. Original visual design and animations retained.

The current update corrects and organises the English copy, improves body typography in `readability.css`, and adds Gmail/LinkedIn icon links and a downloadable one-page résumé on the cover and profile. `tools/build_resume.py` copies the reviewed general résumé into the site; use `--source path/to/resume.pdf` outside the original workspace. The download includes the current IT internship, Artificial Intelligence Learning Assistant role and science camp experience, and links to the public FivePlay controller demo.

The cover page also includes a short introduction, a direct My Projects button, résumé/contact links, and eight completed works: the original four plus SpyPath, My First Alarm, Petit and Blessing, confirmed complete by Seneve. `home.css` styles these additions with the existing palette and visual language. Each completed-work link opens the original My Works modal using a validated `project` query parameter. The original navigation animation is reused.

The refined cover reserves separate responsive areas for the name, original rose, description/actions and completed work. Circuit traces stay in the outer margin, pulse rings stay in the artwork area, and footer navigation sits outside the content scroller. Buttons read View Projects / About Me. The work overview uses four columns on desktop, two on tablets and one on phones. `docs/home-polish-evidence.json` records the four viewport checks, keyboard checks, font fallback and reduced-motion fixture checks.

The four pages, artwork, colour variables, animation styles, square emoji cards and modal interactions are preserved. The gallery contains 25 cards, with all eight completed works first, red works afterwards and Secret Project last, as requested by Seneve. Relative order within each group is retained. Python & ML Exercises is removed. Yezik, Matho, Yem, YEMA, FivePlay, Vaneve and Hub use the original red WIP styling. `docs/github-projects-inventory.json` records the sources, descriptions and user-confirmed statuses. The original page stylesheets and navigation handlers are retained, while shared.css clips the decorative circuit to the outer margin on every page. Read `.ai-style-rules.md` before editing.

Church IT's See Project button links to the complete eight-page PDF supplied by the user. The obsolete proposal remains removed. FivePlay links to the published [standalone controller demo](https://github.com/slihono/fiveplay-controller-demo); the original repository remains private and unchanged. The complete portfolio update is prepared for publication following Seneve's November 2 request to make the live site match the local version.

My First Alarm's See Project button opens `projects/alarm.html`, a six-chapter photo journal based on Seneve's supplied LinkedIn text and nineteen photographs. It uses the existing palette, chapter navigation and a keyboard-accessible full-size photo viewer. Images remain unaltered; only the cover loads eagerly. Local review records are kept under ignored `docs/`.

Preview: `python -m http.server 8086 --bind 127.0.0.1`.

The previous redesign is archived locally under ignored `tmp/previous-redesign`; its generator must not be used for this version.
