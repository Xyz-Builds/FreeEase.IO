const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        setTimeout(() => {
          entry.target.classList.add("animated");
        }, 1000);
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".benefits .label, .benefit-items .item")
  .forEach((el) => observer.observe(el));
