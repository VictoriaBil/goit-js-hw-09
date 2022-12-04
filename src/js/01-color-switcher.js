const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

function onStart() {
  document.body.style.backgroundColor = getRandomHexColor();
}

let timerId = null;

function onClickStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(onStart, 1000);
}

function onClickStop() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
