(() => {
  const home = document.querySelector('.orinda-home');
  if (!home) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    window.addEventListener('pointermove', (event) => {
      home.style.setProperty('--glow-x', `${event.clientX}px`);
      home.style.setProperty('--glow-y', `${event.clientY}px`);
    }, { passive: true });
  }

  const links = [...document.querySelectorAll('.orinda-anchor-nav a[data-section]')];
  const sections = links
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle('is-active', link.dataset.section === id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) setActive(visible.target.id);
  }, { rootMargin: '-18% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] });

  sections.forEach((section) => observer.observe(section));
})();

