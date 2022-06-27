const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');


btnStart.addEventListener("click", () => {
    btnStart.setAttribute('disabled', true);
    timerId = setInterval(() => {
    const hexColor = getRandomHexColor();
    bodyEl.style.backgroundColor = hexColor;
  }, 1000);
});

btnStop.addEventListener("click", () => {
    btnStart.removeAttribute('disabled');
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
