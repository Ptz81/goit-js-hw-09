// Описаний в документації
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


//знайти елементи
const inputElement = document.querySelector('#datetime-picker');
const btnElement = document.querySelector('button[data-start]');
const daysElement = document.querySelector('span[data-days]');
const hoursElement = document.querySelector('span[data-hours]');
const minutesElement = document.querySelector('span[data-minutes]');
const secondsElement = document.querySelector('span[data-seconds]');

btnElement.disabled = true;

//параметри бібліотеки flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {

      Notiflix.Notify.warning('Please choose a date in the future');
      btnElement.disabled = true;

    } else {
      btnElement.disabled = false;
    }
  },

};

//запуск flatpickr - у інпут додає параметри бібліотеки
flatpickr(inputElement, options);

//функція, що відраховує зворотній зв'язок
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//функція, що додає нуль напочатку
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}


//функціонал при натисканні на кнопку
btnElement.addEventListener('click', () => {
  // встановити інтервал
  // встановити поточну дату та взяти дату вибрану користувачем і визначити дельта дату
  // закинути дані у функцію convertMs
  // дані вивести у поля спан і додати нуль на початку
  // зробити неактивною кнопку при натисканні
  let timerId = setInterval(() => {

    let deltaTime = new Date(inputElement.value) - new Date();

    btnElement.disabled = true;

    if (deltaTime >= 0) {

      let timerFunction = convertMs(deltaTime);

      daysElement.textContent = addLeadingZero(timerFunction.days);
      hoursElement.textContent = addLeadingZero(timerFunction.hours);
      minutesElement.textContent = addLeadingZero(timerFunction.minutes);
      secondsElement.textContent = addLeadingZero(timerFunction.seconds);

    } else {
      Notiflix.Notify.success('Count has finished');
      clearInterval(timerId);
    }

  }, 1000);
})

