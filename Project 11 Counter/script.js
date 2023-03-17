const minusEl = document.querySelector('.minus');
const resetEl = document.querySelector('.reset');
const plusEl = document.querySelector('.plus');
const valueEl = document.querySelector('.value');

let counter = 0;

function subtract() {
  counter--;
  valueEl.innerText = counter;
}

function addition() {
  counter++;
  valueEl.innerText = counter;
}

function reset() {
  counter = 0;
  valueEl.innerText = counter;
}

minusEl.addEventListener('click', subtract);
plusEl.addEventListener('click', addition);
resetEl.addEventListener('click', reset);
