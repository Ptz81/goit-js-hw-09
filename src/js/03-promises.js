//знайти елементи
const formElem = document.querySelector('.form');
const delayInputElem = document.querySelector('input[name="delay"]');
const stepInputElem = document.querySelector('input[name="step"]');
const amountInputElem = document.querySelector('input[name="amount"]');



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
