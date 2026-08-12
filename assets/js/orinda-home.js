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

  let scrollFrame = null;

  const updateActiveSection = () => {
    const marker = window.innerHeight * 0.36;
    let current = sections.reduce((closest, section) => {
      const distance = Math.abs(section.getBoundingClientRect().top - marker);
      const closestDistance = Math.abs(closest.getBoundingClientRect().top - marker);
      return distance < closestDistance ? section : closest;
    }, sections[0]);

    const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
    if (atPageEnd) current = sections[sections.length - 1];

    if (current) setActive(current.id);
    scrollFrame = null;
  };

  const scheduleUpdate = () => {
    if (scrollFrame !== null) return;
    scrollFrame = window.requestAnimationFrame(updateActiveSection);
  };

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  updateActiveSection();
})();
