// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


//знайти елементи
const inputElement = document.querySelector('#datetime-picker');
const btnElement = document.querySelector('button[data-start]');
const daysEelement = document.querySelector('span[data-days]');
const hoursEelement = document.querySelector('span[data-hours]');
const minutesEelement = document.querySelector('span[data-minutes]');
const secondsEelement = document.querySelector('span[data-seconds]');
const timerElement = document.querySelector('.timer');

//змінна з початковим значенням
let timerId = null;

//параметри бібліотеки flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates < new Date()) {
      alert('Please choose a date in the future');
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
  timerId = setInterval(() => {

  }, 1000);
})

