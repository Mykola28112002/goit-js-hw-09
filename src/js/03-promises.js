import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldRes = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldRes) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  const delayValue = parseInt(form.elements.delay.value);
  const stepValue = parseInt(form.elements.step.value);
  const amountValue = parseInt(form.elements.amount.value);

  e.preventDefault();
  createPromises(amountValue, delayValue, stepValue);
});

function createPromises(amount, delay, step) {
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    form.reset()
  }}
