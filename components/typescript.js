const words = [
  "We've got you.",
  "We've mapped it.",
  "We light the way",
  "A Future Outlined.",
];

const words2 = [
  "Live the dream.",
  "Freelance your way.",
  "Beginner to Pro.",
  "Kickstart your Journey",
];

let i = 0;
const el = document.getElementById("word");
const el2 = document.getElementById("word2");

el.textContent = words[0];

function typewriter(list, element) {
  setInterval(() => {
    i = (i + 1) % list.length;

    element.classList.add("out");

    setTimeout(() => {
      element.textContent = list[i];
      element.classList.remove("out");
    }, 370);
  }, 2800);
}

typewriter(words, el);
typewriter(words2, el2);
