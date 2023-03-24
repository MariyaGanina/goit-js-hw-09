let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startBackgroundChange() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    document.querySelector('[data-start]').setAttribute('disabled', true);
  }
}

function stopBackgroundChange() {
  clearInterval(intervalId);
  intervalId = null;
  document.querySelector('[data-start]').removeAttribute('disabled');
}

document
  .querySelector('[data-start]')
  .addEventListener('click', startBackgroundChange);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopBackgroundChange);
