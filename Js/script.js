let counter = 0;
const btnScore = document.querySelector('.counter__addition')
const btnReset = document.querySelector('.counter__reset')
score = document.querySelector('.counter__score');

btnScore.addEventListener('click', function () {
  counter = counter + 1;
  score.innerText = counter;

  btnReset.classList.add("-open")
});

btnReset.addEventListener('click', function () {
  counter = 0;
  score.innerText = counter;

  btnReset.classList.remove("-open")
});

