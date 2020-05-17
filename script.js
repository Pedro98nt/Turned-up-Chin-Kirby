"use scrict";

const button = document.getElementById("button");
const chin = document.getElementById("chin");
const kirby = document.getElementById("kirby");
const score = document.getElementById("score");
let chinLength = 0;
let timerId = 0;
let isDone = false;

function changeChinLength(n) {
  if (chinLength <= 0) {
    chinLength = 0;
    if (isDone) {
      button.textContent = "ReStart";
      button.classList.remove('go-button__color');}
    return;
  } else { chinLength += n; }
  chin.style.width = `${150 + chinLength ** 2}px`;
  score.textContent = chinLength;
  if (0.7 - 0.0005 * chinLength > 0.05) {
  kirby.style.transform = `scale(${0.7 - 0.0005 * chinLength})`;
  }
};

button.addEventListener("click", () => {
  chinLength += 1;
  button.textContent = "Go!";
  button.classList.add('go-button__color');
  isDone = true;
});

button.addEventListener("mousedown", () => {
  if (timerId) {clearInterval(timerId);}
  timerId = setInterval(() => { changeChinLength(1); }, 10);
});

button.addEventListener("mouseup", () => {
  if (timerId) {clearInterval(timerId);}
  if (chinLength <= 0) {
    return;
  }
  timerId = setInterval(() => { changeChinLength(-1); }, 3);
});