const words = [
  "We've got you.",
  "We've mapped it.",
  "We light the way",
  "A Future Outlined.",
];
let i = 0;
const el = document.getElementById("word");

el.textContent = words[0];

setInterval(() => {
  i = (i + 1) % words.length;

  el.classList.add("out");

  setTimeout(() => {
    el.textContent = words[i];
    el.classList.remove("out");
  }, 370);
}, 2800);
