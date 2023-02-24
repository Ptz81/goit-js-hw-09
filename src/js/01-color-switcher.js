const btnStartElement = document.querySelector('[data-start]');
const btnStopElement = document.querySelector('[data-stop]');
let timerId = null;
const body = document.body;

btnStartElement.addEventListener("click", () => {
  timerId = setInterval(() => {
   body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStartElement.disabled = true;
  btnStopElement.disabled = false;
});

btnStopElement.addEventListener("click", () => {
  clearInterval(timerId);
   btnStartElement.disabled = false;
  btnStopElement.disabled = true;
 });


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}