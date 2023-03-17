const btnEl = document.querySelector('.btn');
const iconEl = document.querySelector('.fa-solid');
const videoEl = document.querySelector('.bg-video');

btnEl.addEventListener('click', () => {
  if (iconEl.classList.contains('fa-play')) {
    iconEl.classList.remove('fa-play');
    iconEl.classList.add('fa-pause');
    videoEl.play();
  } else if (iconEl.classList.contains('fa-pause')) {
    iconEl.classList.remove('fa-pause');
    iconEl.classList.add('fa-play');
    videoEl.pause();
  }

  console.log('clicked');
});
console.log(iconEl.classList);
