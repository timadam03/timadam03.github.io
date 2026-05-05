document.querySelectorAll('.abstract-toggle').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const content = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    content.hidden = isExpanded;

    const arrow = button.querySelector('.abstract-arrow');
    if (arrow) {
      arrow.style.transform = isExpanded ? '' : 'rotate(180deg)';
    }
  });
});

document.querySelectorAll('.paper-item[data-href]').forEach((item) => {
  const openPaper = () => {
    const href = item.dataset.href;
    if (!href) return;
    window.location.assign(href);
  };

  item.addEventListener('click', (event) => {
    if (event.target.closest('a, button')) return;
    openPaper();
  });

  item.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openPaper();
  });
});
