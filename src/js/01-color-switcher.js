
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId;

btnStart.addEventListener("click", startColor);
btnStop.addEventListener("click", stopColor );

function startColor() {
  btnStart.setAttribute('disabled', true);
  timerId = setInterval(changeBodyColor, 1000)
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function stopColor() {
    btnStart.removeAttribute('disabled');
  clearInterval(timerId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





