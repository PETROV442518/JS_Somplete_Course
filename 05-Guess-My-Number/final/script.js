'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let msg = 'Start guessing...';
const greenBackground = '#60b347';
const blackBackground = '#222';
const numberFieldWiderSize = '30rem';
const numberFieldNormalSize = '15rem';

const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const checkScore = function () {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

const updateScore = function () {
  score--;
  if (score < 1) {
    score = 0;
    msg = 'Game Over!';
    displayMsg(msg);
  }
  document.querySelector('.score').textContent = score;
};

const correctResultOutput = function () {
  document.querySelector('body').style.backgroundColor = greenBackground;
  document.querySelector('.number').style.width = NumberFieldWiderSize;
  document.querySelector('.number').textContent = secretNumber;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    msg = 'No number!';
  } else if (guess === secretNumber) {
    checkScore();
    msg = 'Correct!';
    correctResultOutput();
  } else if (guess > secretNumber) {
    msg = 'Too big!';
    updateScore();
  } else if (guess < secretNumber) {
    msg = 'Too small!';
    updateScore();
  }
  displayMsg(msg);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = numberFieldNormalSize;
  document.querySelector('body').style.backgroundColor = blackBackground;
  msg = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;
  displayMsg(msg);
});
