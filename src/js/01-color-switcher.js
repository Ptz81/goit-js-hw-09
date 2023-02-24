//знайти елементи
const btnStartElement = document.querySelector('[data-start]');
const btnStopElement = document.querySelector('[data-stop]');
let timerId = null;
const body = document.body;

// слухач при натисканні кнопки старт - встановлює інтервал, змінює колір відповідно до рандомної функції
btnStartElement.addEventListener("click", () => {
  timerId = setInterval(() => {
   body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  //робить кнопку старт не активною, а кнопку стоп активна
  btnStartElement.disabled = true;
  btnStopElement.disabled = false;
});

// слухач при натисканні кнопки стоп - очищує інтервал
btnStopElement.addEventListener("click", () => {
  clearInterval(timerId);
  //робить кнопку стоп не активною, а кнопку старт активною
   btnStartElement.disabled = false;
  btnStopElement.disabled = true;
 });

//рандомна фукнція підбору кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}