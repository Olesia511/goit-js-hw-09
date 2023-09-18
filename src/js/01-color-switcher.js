const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBgColor = document.querySelector('body');

startBtn.addEventListener('click', onStart);
stopBtn.disabled = true;

function onStart() {
  const id = setInterval(() => {
    stopBtn.addEventListener('click', onStop);

    startBtn.disabled = true;
    stopBtn.disabled = false;
    const colorHex = getRandomHexColor();
    bodyBgColor.style.backgroundColor = `${colorHex}`;

    function onStop() {
      clearInterval(id);
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
