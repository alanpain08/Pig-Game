'use strict';

//elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//start
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//roll dice
btnRoll.addEventListener('click', function () {
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');
  dice.src = `./img/dice-${diceNum}.png`;

  if (diceNum !== 1) {
    currentScore += diceNum;
    current0El.textContent = currentScore;
  } else {
  }
});
