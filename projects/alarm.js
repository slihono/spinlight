/* Progressive enhancement for the photo journal. Image links work without JS. */
(() => {
  const photos = [...document.querySelectorAll('a[data-photo]')];
  const dialog = document.getElementById('journal-lightbox');
  const image = document.getElementById('journal-viewer-image');
  const caption = document.getElementById('journal-viewer-caption');
  const counter = document.getElementById('journal-viewer-counter');
  const error = document.getElementById('journal-viewer-error');
  const close = document.getElementById('journal-viewer-close');
  let selected = 0;
  let opener = null;

  function showPhoto(index) {
    selected = (index + photos.length) % photos.length;
    const photo = photos[selected];
    const original = photo.querySelector('img');
    caption.textContent = photo.closest('figure').querySelector('figcaption').textContent.replace(/^\s*\d+\s*/, '').trim();
    counter.textContent = `${selected + 1} / ${photos.length}`;
    error.hidden = true;
    image.hidden = false;
    image.alt = original.alt;
    image.src = photo.href;
  }

  photos.forEach((photo, index) => {
    const original = photo.querySelector('img');
    const unavailable = () => {
      if (photo.classList.contains('is-unavailable')) return;
      photo.classList.add('is-unavailable');
      const note = document.createElement('span');
      note.className = 'photo-fallback';
      note.textContent = 'Photo unavailable. The journal continues below.';
      photo.append(note);
    };
    original.addEventListener('error', unavailable);
    if (original.complete && !original.naturalWidth) unavailable();
    photo.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
      event.preventDefault();
      opener = photo;
      showPhoto(index);
      dialog.showModal();
      close.focus();
    });
  });

  image.addEventListener('error', () => { image.hidden = true; error.hidden = false; });
  close.addEventListener('click', () => dialog.close());
  document.getElementById('journal-viewer-prev').addEventListener('click', () => showPhoto(selected - 1));
  document.getElementById('journal-viewer-next').addEventListener('click', () => showPhoto(selected + 1));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(selected + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  dialog.addEventListener('close', () => { if (opener?.isConnected) opener.focus({ preventScroll: true }); });

  const sections = [...document.querySelectorAll('.journal-entry')];
  const chapterLinks = [...document.querySelectorAll('.journal-contents nav a')];
  let scheduled = false;
  const updateReading = () => {
    const maximum = document.documentElement.scrollHeight - innerHeight;
    const fraction = maximum > 0 ? Math.min(1, Math.max(0, scrollY / maximum)) : 0;
    document.documentElement.style.setProperty('--reading-progress', fraction);
    let active = sections[0]?.id;
    for (const section of sections) if (section.getBoundingClientRect().top <= innerHeight * .38) active = section.id;
    for (const link of chapterLinks) {
      if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  };
  const scheduleReading = () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateReading); }
  };
  addEventListener('scroll', scheduleReading, { passive: true });
  addEventListener('resize', scheduleReading);
  updateReading();
})();
