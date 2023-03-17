const containerEl = document.querySelector('.container');
const XvalueEl = document.querySelector('.X-value');
const YvalueEl = document.querySelector('.Y-value');

// window.addEventListener('mousemove', (event) => {
//   XvalueEl.innerText = event.clientX;
//   YvalueEl.innerText = event.clientY;
// });

window.addEventListener('mousemove', (event) => {
  containerEl.innerHTML = `
    <div class="mouse-event">
         ${event.clientX}
        <h4>Mouse X Position(px)</h4>
    </div>
    <div class="mouse-event">
         ${event.clientY}
        <h4>Mouse Y Position(px)</h4>
    </div>`;
});
