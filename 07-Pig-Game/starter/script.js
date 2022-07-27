'use strict';

let currentScores = document.querySelectorAll('.current-score');
let scores = document.querySelectorAll('.score');
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

const setPlayer1ToActive = function () {
  if (!player1.classList.contains('player--active')) {
    player1.classList.add('player--active');
  }
  if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
  }
};

const initialSetup = function () {
  diceEl.classList.add('hidden');
  currentScores.forEach(el => {
    el.textContent = 0;
  });
  scores.forEach(el => {
    el.textContent = 0;
  });
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  setPlayer1ToActive();
};
initialSetup();

const checkForAWinner = function (playerIndex) {
  if (Number(scores[playerIndex].textContent) >= 100) {
    document
      .querySelector(`.player--${playerIndex}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${playerIndex}`)
      .classList.remove('player--active');
  }
};

const returnActivePlayer = function () {
  let activePlayerIndex = player1.classList.contains('player--active') ? 0 : 1;
  return activePlayerIndex;
};

const changePlayers = function () {
  let player = returnActivePlayer();
  if (!checkForAWinner(player)) {
    if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
};

const resetGame = function () {
  initialSetup();
};

const holdScore = function () {
  const player = returnActivePlayer();
  if (player) {
    score2.textContent =
      Number(score2.textContent) + Number(currentScore2.textContent);
    currentScore2.textContent = 0;
  } else {
    score1.textContent =
      Number(score1.textContent) + Number(currentScore1.textContent);
    currentScore1.textContent = 0;
  }
  changePlayers();
};

const rollTheDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  const player = returnActivePlayer();
  if (dice === 1) {
    if (player) {
      currentScore2.textContent = 0;
    } else {
      currentScore1.textContent = 0;
    }
    changePlayers();
  } else {
    if (player) {
      currentScore2.textContent = Number(currentScore2.textContent) + dice;
    } else {
      currentScore1.textContent = Number(currentScore1.textContent) + dice;
    }
  }
};

rollDiceBtn.addEventListener('click', rollTheDice);
newGameBtn.addEventListener('click', resetGame);
holdScoreBtn.addEventListener('click', holdScore);
