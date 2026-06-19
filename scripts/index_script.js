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
  .querySelectorAll(".rate-wrap, .features-section .card")
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

const featureCardStyles = [
  {
    background: "#f7ffe4",
    border: "rgba(223, 255, 0, 0.35)",
    shadow: "0 22px 55px rgba(0, 0, 0, 0.08)",
    iconColor: "#b9d926",
    iconColorLight: "#ffffff",
  },
  {
    background: "#f0f7ff",
    border: "rgba(0, 118, 255, 0.18)",
    shadow: "0 22px 55px rgba(0, 0, 0, 0.07)",
    iconColor: "#73a9ff",
    iconColorLight: "#e8f2ff",
  },
  {
    background: "#fff8e6",
    border: "rgba(255, 174, 0, 0.24)",
    shadow: "0 22px 55px rgba(0, 0, 0, 0.07)",
    iconColor: "#f0b737",
    iconColorLight: "#ffe8b1",
  },
  {
    background: "#eef9ff",
    border: "rgba(0, 151, 197, 0.18)",
    shadow: "0 22px 55px rgba(0, 0, 0, 0.07)",
    iconColor: "#7ac0e2",
    iconColorLight: "#d9f0ff",
  },
  {
    background: "#fff8e6",
    border: "rgba(128, 83, 255, 0.16)",
    shadow: "0 22px 55px rgba(0, 0, 0, 0.07)",
    iconColor: "#9c7cff",
    iconColorLight: "#ece3ff",
  },
  {
    background: "#fff2f2",
    border: "rgba(255, 72, 72, 0.18)",
    shadow: "0 22px 55px rgba(0, 0, 0, 0.07)",
    iconColor: "#ef7b7b",
    iconColorLight: "#ffd8d8",
  },
];

function styleFeatureCards() {
  const descriptions = [
    "Step-by-step onboarding that includes a focused 7-day action plan, checklists, and outreach templates so you can land your first paying client quickly and confidently.",
    "Client-ready portfolio templates with guided copy, project formatting tips, and exportable examples to showcase your skills professionally and win more interviews.",
    "Proven proposal and outreach scripts plus follow-up cadences tailored to freelance platforms and direct clients — includes negotiation tips and pricing examples.",
    "Short, hands-on skill boosters and real-world exercises that teach delivery workflows, quality checks, and tools freelancers actually use on client projects.",
    "Practical growth playbooks to turn one-off gigs into repeat work: upsells, onboarding checklists, and communication patterns that increase client lifetime value.",
    "Access to coach-curated checklists, milestone templates, and quick troubleshooting resources to help you scale from first gig to pro-level delivery.",
  ];

  document
    .querySelectorAll(".features-section .card")
    .forEach((card, index) => {
      const style = featureCardStyles[index % featureCardStyles.length];

      card.style.backgroundColor = style.background;
      card.style.border = `1px solid ${style.border}`;
      card.style.boxShadow = style.shadow;
      card.style.setProperty("--card-icon-color", style.iconColor);
      card.style.setProperty("--card-icon-color-light", style.iconColorLight);

      const icon = card.querySelector(".card-label .ms");
      if (icon) icon.style.backgroundColor = "rgba(0, 0, 0, 0.85)";

      const desc = card.querySelector(".card-p");
      if (desc) {
        // set a longer, more informative paragraph
        desc.textContent = descriptions[index % descriptions.length];
      }
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", styleFeatureCards);
} else {
  styleFeatureCards();
}
