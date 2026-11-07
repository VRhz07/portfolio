// Lightbox for case study screenshots
(function () {
  const overlay = document.getElementById('cs-lightbox');
  const img = document.getElementById('cs-lightbox-img');
  const closeBtn = document.getElementById('cs-lightbox-close');
  if (!overlay || !img || !closeBtn) return;

  function open(src, alt) {
    img.src = src;
    img.alt = alt;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function close() {
    overlay.hidden = true;
    img.src = '';
    img.alt = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.cs-lightbox-trigger').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const thumb = link.querySelector('img');
      open(link.href, thumb ? thumb.alt : '');
    });
    // keyboard: Enter or Space
    link.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const thumb = link.querySelector('img');
        open(link.href, thumb ? thumb.alt : '');
      }
    });
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) close();
  });
})();