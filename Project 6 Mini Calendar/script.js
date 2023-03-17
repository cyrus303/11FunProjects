const monthEl = document.querySelector('.month');
const dayEl = document.querySelector('.day');
const dateEl = document.querySelector('.date');
const yearEl = document.querySelector('.year');

const year = new Date().getFullYear();
// const monthIndex = new Date().getMonth();
const date = new Date().getDate();
const day = new Date().toLocaleDateString('default', { weekday: 'long' });

const month = new Date().toLocaleDateString('default', {
  month: 'long',
});

// const monthsArray = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'Spetember',
//   'October',
//   'Novemnber',
//   'December',
// ];

// month = monthsArray[monthIndex];

monthEl.innerText = month;
dayEl.innerText = day;
dateEl.innerText = date;
yearEl.innerText = year;
