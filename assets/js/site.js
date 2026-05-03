document.querySelectorAll('.abstract-toggle').forEach((button) => {
  button.addEventListener('click', () => {
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
