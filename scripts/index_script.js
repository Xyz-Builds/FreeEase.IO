window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("done");
});

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

const membersEl = document.querySelector(".members");
const satisfactionEl = document.querySelector(".rate");
const paidEl = document.querySelector(".paid");
const avgEl = document.querySelector(".avg");
const target = 15;
const duration = 2000;
const step = target / (duration / 16);
let current = 0;

function countUp(el, preffix = "", target, duration, suffix = "") {
  const step = target / (duration / 16);
  let current = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = `${preffix}${Math.floor(current)}${suffix}`;
          }, 16);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(el);
}

countUp(membersEl, "", 15, 2000, "K+");
countUp(satisfactionEl, "", 98, 2000, "%");
countUp(paidEl, "$", 2, 2000, "M+");
countUp(avgEl, "", 3, 2000, " wks");
