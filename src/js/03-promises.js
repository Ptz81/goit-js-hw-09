import Notiflix from 'notiflix';

/*
Напиши скрипт, який на момент сабміту форми викликає функцію
createPromise(position, delay) стільки разів, скільки ввели в поле amount.
Під час кожного виклику передай їй номер промісу (position),
що створюється, і затримку, враховуючи першу затримку (delay),
введену користувачем, і крок (step).
Доповни код функції createPromise таким чином,
щоб вона повертала один проміс, який виконується або відхиляється через
delay часу. Значенням промісу повинен бути об'єкт, в якому будуть
властивості position і delay зі значеннями однойменних параметрів.
Використовуй початковий код функції для вибору того, що потрібно
зробити з промісом - виконати або відхилити.
*/


//знайти елементи
const formElem = document.querySelector('.form');
const delayInputElem = document.querySelector('input[name="delay"]');
const stepInputElem = document.querySelector('input[name="step"]');
const amountInputElem = document.querySelector('input[name="amount"]');
const bntSubmitElem = document.querySelector('button[type="submit"]');





function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
       const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
    }, delay)
  })
  return promise;
}

bntSubmitElem.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = amountInputElem.value;
  const step = stepInputElem.value;
  const delay = delayInputElem.value;

  for (let i = 0; i < amount; i++){
    let delayStep = (step + delay) * i;

    createPromise(i, delayStep)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  }
})


