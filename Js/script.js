const form = document.querySelector('.welcome__form')
const welcomeBody = document.querySelector('.welcome__inner')
const counterBody = document.querySelector('.counter__inner')
const userName = document.querySelector('.js-name')
const COUNTER_INITIAL_VALUE = 0;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nameForm = document.querySelector('.form__name').value;
  welcomeBody.classList.add('js-waiting');
  setTimeout(() => {
  welcomeBody.classList.add('js-close');
  counterBody.classList.add('js-open');

  let h=(new Date()).getHours();
  if (h > 23 || h <7) welcomeText = ('Добрый ночи!');
  if (h > 6 && h < 12) welcomeText = ('Доброе утро!'); 
  if (h > 11 && h < 19) welcomeText = ('Добрый день!'); 
  if (h > 18 && h < 24) welcomeText = ('Добрый вечер!'); 

  userName.innerText = (nameForm + "," + '\n' + welcomeText);
  score.innerText = (counter + ' \u20ac');

  welcomeBody.classList.remove('js-waiting');
  }, 1300);
});

let counter = COUNTER_INITIAL_VALUE;
const btnScore = document.querySelector('.counter__addition')
const btnReset = document.querySelector('.counter__reset')
let cashOut = document.querySelector('.js-reset__score')
score = document.querySelector('.js-counter__score');

btnScore.addEventListener('click', function () {
  counter++;
  score.innerText = (counter + ' \u20ac');
  btnReset.classList.add("js-open")
  btnReset.classList.remove('js-disable')
});

btnReset.addEventListener('click', function () {
  cashOutNumber = cashOut.innerHTML.replace(/[^0-9.]/g, '')
  if (cashOutNumber > 0) {cashOut.innerText = (+cashOutNumber + counter) + ' \u20ac';
  } else { cashOut.innerText = counter + ' \u20ac'; }

  document.querySelector('.reset__text').classList.add('js-open');
  counter = COUNTER_INITIAL_VALUE;
  score.innerText = (counter + ' \u20ac');
  btnReset.classList.add("js-disable")
});

const btnExit = document.querySelector('.counter__exit')
btnExit.addEventListener('click' ,function () {
  counterBody.classList.add('js-waiting');
  setTimeout (() => {
  counterBody.classList.remove('js-open');
  welcomeBody.classList.remove('js-close');
  document.querySelector('.form__name').value = "";
  counterBody.classList.remove('js-waiting');
}, 1300);
});

