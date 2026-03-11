export const revealOnScroll = () => {
  const elements = document.querySelectorAll('.reveal-up, .parallax-up');
  
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: Stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger slighly before bottom
      threshold: 0.1,
    }
  );

  elements.forEach((el) => observer.observe(el));
};
