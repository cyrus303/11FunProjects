const counterEl = document.querySelector('.counter');
const loadingBarFrontEl = document.querySelector('.loading-bar-front');

// for (i = 0; i <= 100; i++) {
//   delay(i);
// }

// function delay(i) {
//   setTimeout(function timer() {
//     counterEl.innerText = `${i}%`;
//     loadingBarFrontEl.style.width = `${i}%`;
//   }, i * 75);
// }

let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = `${idx}%`;
  loadingBarFrontEl.style.width = `${idx}%`;
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 20);
  }
}
