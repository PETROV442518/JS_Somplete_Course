'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let msg = 'Start guessing...';

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    msg = 'No number!';
  } else if (guess === secretNumber) {
    checkScore();
    msg = 'Correct!';
  } else if (guess > secretNumber) {
    if (score > 0) {
      msg = 'Too big!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msg = 'Game Over!';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      msg = 'Too small!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msg = 'Game Over!';
    }
  }
  displayMsg(msg);
});
const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};
const checkScore = function () {
  if (score > highScore) {
    highScore = score;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};
