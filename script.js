const switchBTN = document.querySelector('.btn');
const body = document.querySelector('body');
const soundEf = document.querySelector('#audio');
switchBTN.addEventListener('click', function () {
  soundEf.play();
  body.classList.toggle('on');
});
