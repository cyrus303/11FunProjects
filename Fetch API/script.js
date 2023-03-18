// fetch('https://jsonplaceholder.typicode.com/todos', {
//   method: 'POST',
//   body: JSON.stringify({
//     userId: 1,
//     title: 'Fix my bugs',
//     completed: false,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/todos', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     title: 'testing post request',
//     test: '1st inteview',
//     value: 53,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const submitBtnEl = document.querySelector('#submit');

const fname = document.querySelector('#fname').value;
console.log(fname);

const lname = document.querySelector('#lname').value;
console.log(lname);

const car = document.querySelector('#cars').value;
console.log(car);

const hobbie = document.querySelector('input[name="hobbies"]:checked').value;

console.log(hobbie);

submitBtnEl.addEventListener('click', (e) => {
  e.preventDefault();

  fetch('https://jsonplaceholder.typicode.com/todos?id=12', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: fname,
      lastName: lname,
      carName: car,
      hobbies: hobbie,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

// submitBtnEl.addEventListener('click', (e) => {
//   e.preventDefault();

//   fetch('https://jsonplaceholder.typicode.com/todos?id=5', {
//     method: 'POST',
//     headers: {
//       'content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstName: fname.value,
//       lastName: lname.value,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));

//   fname.value = '';
//   lname.value = '';
// });
