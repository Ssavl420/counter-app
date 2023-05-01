const form = document.querySelector('.welcome__form')
const counterBody = document.querySelector('.counter__inner')
const welcomeBody = document.querySelector('.welcome__inner')
const userName = document.querySelector('.name')
const timeout = 3000;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nameForm = document.querySelector('.form__name').value;
  form.classList.add('-waiting'), timeout;
  welcomeBody.classList.add('-close'), timeout;
  counterBody.classList.add('-open');
  userName.innerText = nameForm;
});


// document.forms.form.onsubmit = function() {
//   nameForm = this.nameForm.value;
//   console.log(nameForm)
//   return false;
// };

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

