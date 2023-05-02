const form = document.querySelector('.welcome__form')
const counterBody = document.querySelector('.counter__inner')
const welcomeBody = document.querySelector('.welcome__inner')
const userName = document.querySelector('.name')
const timeout = 3000;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nameForm = document.querySelector('.form__name').value;
  welcomeBody.classList.add('-waiting');
  setTimeout(() => {
  welcomeBody.classList.add('-close');
  counterBody.classList.add('-open');
  userName.innerText = nameForm;
  welcomeBody.classList.remove('-waiting');
  }, 500);
});

let counter = 0;
const btnScore = document.querySelector('.counter__addition')
const btnReset = document.querySelector('.counter__reset')
let cashOut = document.querySelector('.reset__score')
score = document.querySelector('.counter__score');

btnScore.addEventListener('click', function () {
  counter = counter + 1;
  score.innerText = counter;

  btnReset.classList.add("-open")
  btnReset.classList.remove('-disable')
  // if (btnReset = document.querySelector('-disable')) {
  //   btnReset.classList.remove('-disable')};
});

btnReset.addEventListener('click', function () {
  if (+cashOut.innerHTML > 0) {cashOut.innerText = +cashOut.innerHTML + counter;
  } else { cashOut.innerText = counter; }
  document.querySelector('.reset__text').classList.add('-open');
  counter = 0;
  score.innerText = counter;

  // btnReset.classList.remove("-open")
  btnReset.classList.add("-disable")
});

