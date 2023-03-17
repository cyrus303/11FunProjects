// const monthEl = document.querySelector('#month-value');
// const monthDetailsEl = document.querySelector('#month-details');
// const daysEl = document.querySelector('#days');

// const monthInx = new Date().getMonth();
// const year = new Date().getFullYear();
// const lastDay = new Date(year, monthInx + 1, 0).getDate();
// const firstDay = new Date(year, monthInx, 1).getDay() - 1;
// const currentDay = new Date().getDate();

// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// monthEl.innerText = months[monthInx];
// monthDetailsEl.innerText = new Date().toDateString();

// let days = '';

// for (let i = firstDay; i > 0; i--) {
//   days = days + `<div class='empty'></div>`;
// }

// for (let i = 1; i <= lastDay; i++) {
//   if (i === currentDay) {
//     days = days + `<div class='today'>${i}</div>`;
//   } else {
//     days = days + `<div>${i}</div>`;
//   }
// }

// daysEl.innerHTML = days;

const monthEl = document.querySelector('#month-value');
const monthDetailsEl = document.querySelector('#month-details');
const daysEl = document.querySelector('#days');

const monthIndex = new Date().getMonth();
const monthDetails = new Date().toDateString();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

monthEl.innerText = months[monthIndex];
monthDetailsEl.innerText = monthDetails;

const year = new Date().getFullYear();
const lastDay = new Date(year, monthIndex + 1, 0).getDate();
const firstDayIndex = new Date(year, monthIndex, 1).getDay() - 1;
const currentDay = new Date().getDate();

let days = '';

for (i = firstDayIndex; i > 0; i--) {
  days = days + `<div class = 'empty'></div>`;
}

for (i = 1; i <= lastDay; i++) {
  if (i === currentDay) {
    days = days + `<div class='today'>${i}</div>`;
  } else {
    days = days + `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;

console.log(lastDay, firstDayIndex, currentDay);
