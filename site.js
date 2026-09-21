(() => {
  const imgs = [...document.querySelectorAll('main img')].filter(img => !img.closest('.nav'));
  if (!imgs.length) return;
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = '<button class="lightbox-close" aria-label="Close image">×</button><img alt="">';
  document.body.appendChild(modal);
  const full = modal.querySelector('img');
  const close = () => { modal.classList.remove('open'); document.body.style.overflow=''; };
  imgs.forEach(img => {
    img.classList.add('zoomable');
    img.addEventListener('click', () => { full.src=img.src; full.alt=img.alt || ''; full.style.width=img.dataset.lightboxWidth || 'auto'; full.style.maxWidth='94vw'; full.style.background = img.src.includes('scoop-hero') ? 'transparent' : '#fff'; modal.classList.add('open'); document.body.style.overflow='hidden'; });
  });
  modal.addEventListener('click', e => { if (e.target === modal || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
