'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (display) {
  document.querySelector('.number').textContent = display;
};

const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changewidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❗ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');
    displayNumber(secretNumber);
    changeBackground('#60b347');
    changewidth('30rem');

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too height' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💢 You lost the game');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);

  displayMessage('Start guessing...');
  displayNumber('?');
  changeBackground('#222');
  changewidth('15rem');
  document.querySelector('.guess').value = '';
});
