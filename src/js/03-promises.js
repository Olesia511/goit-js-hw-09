import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = form.elements[0];
const stepDelay = form.elements[1];
const amount = form.elements[2];

form.addEventListener('submit', onSubmit);

Notiflix.Notify.init({
  info: {
    background: '#f9a170',
    textColor: '#4a0404',
  },
});

function onSubmit(e) {
  e.preventDefault();
  let position = Number(amount.value);
  let delay = Number(firstDelay.value);
  let step = Number(stepDelay.value);
  if (position < 1 || delay < 1 || step < 1) {
    Notiflix.Notify.info(` Fill in all fields 😉 😉 😉`);
    return;
  }

  for (let i = 1; i <= position; i += 1) {
    let result = delay;
    setTimeout(() => {
      createPromise(i, result);
    }, delay);
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay} ms`
      );
    } else {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
    }
  });
}
