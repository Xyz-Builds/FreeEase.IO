const typedEl = document.querySelector(".brief_intro .typewriter");
const typedEl2 = document.querySelector(".brief_outro .typewriter");

createTypewriter(typedEl, ["No Problem.", "We've got you.", "Start today."]);

createTypewriter(typedEl2, [
  "Start with confidence",
  "Your journey starts here.",
  "Beginner to Pro.",
]);

function createTypewriter(element, phrases, options = {}) {
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const typingSpeed = options.typingSpeed || 65;
  const deletingSpeed = options.deletingSpeed || 35;
  const pauseTime = options.pauseTime || 2200;
  const nextDelay = options.nextDelay || 350;

  function typeStep() {
    const phrase = phrases[phraseIdx];

    if (!deleting) {
      element.textContent = phrase.slice(0, ++charIdx);

      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(typeStep, pauseTime);
        return;
      }

      setTimeout(typeStep, typingSpeed + Math.random() * 40);
    } else {
      element.textContent = phrase.slice(0, --charIdx);

      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(typeStep, nextDelay);
      } else {
        setTimeout(typeStep, deletingSpeed);
      }
    }
  }

  typeStep();
}
