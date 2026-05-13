const phrases = ["No Problem.", "We've got you.", "Start today."];
let phraseIdx = 0,
  charIdx = 0,
  deleting = false;
const typedEl = document.querySelector(".typewriter");

function typeStep() {
  const phrase = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) {
      deleting = true;
      setTimeout(typeStep, 2200);
      return;
    }
    setTimeout(typeStep, 65 + Math.random() * 40);
  } else {
    typedEl.textContent = phrase.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeStep, 350);
    } else {
      setTimeout(typeStep, 35);
    }
  }
}
setTimeout(typeStep, 900);
