'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let msg = 'Start guessing...';

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
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    msg = 'No number!';
  } else if (guess === secretNumber) {
    checkScore();
    msg = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      msg = 'Too big!';
      updateScore();
    } else {
      msg = 'Game Over!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      msg = 'Too small!';
      updateScore();
    } else {
      msg = 'Game Over!';
    }
  }
  displayMsg(msg);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  msg = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;
  displayMsg(msg);
});
