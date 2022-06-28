const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');


btnStart.addEventListener("click", startColor);
btnStop.addEventListener("click", stopColor );
let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function startColor() {
  btnStart.setAttribute('disabled', true);
  timerId = setInterval(() => {
    const hexColor = getRandomHexColor();
    bodyEl.style.backgroundColor = hexColor;
  }, 1000);
}
function stopColor() {
    btnStart.removeAttribute('disabled');
  clearInterval(timerId);
}

