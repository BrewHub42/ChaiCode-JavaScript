/**
 * Write your challenge solution here
 */

const gameContainer = document.getElementById('gameContainer');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let cards = [];
let flippedCards = [];
let moves = 0;
let time = 0;
let timer;
let matchedPairs = 0;

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

const cardValues = [...emojis, ...emojis];

function createGame() {
  const shuffleCards = shuffleArray(cardValues);
  gameContainer.innerHTML = '';
  shuffleCards.forEach((value, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.innerHTML = `
      <div class="card-front">?</div>
      <div class="card-back">${value}</div>
    `;
    card.addEventListener('click', flipcard);
    gameContainer.appendChild(card);
  });
}

function flipcard() {
  if (flippedCards.length < 2 && !this.classList.contains('flipped')){
    this.classList.add('flipped');
    flippedCards.push(this);

    if(flippedCards.length === 2){
      moves++;
      movesDisplay.textContent = moves;
      checkForMatch();
    }
  }
}

function checkForMatch(){
  const [card1, card2] = flippedCards;
  if (card1.dataset.value === card2.dataset.value){
    matchedPairs++;
    if (matchedPairs === emojis.length) {
      clearInterval(timer);
      setTimeout(() => alert(`You won in ${moves} moves and ${time} seconds!`), 500);
    }
    flippedCards = [];
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards=[];
    }, 1000);
  }
}

function startTimer() {
  timer = setInterval(() => {
    time++;
    timeDisplay.textContent = `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;
  }, 1000);
}

function restartGame() {
  clearInterval(timer);
  time = 0;
  moves = 0;
  matchedPairs = 0;
  movesDisplay.textContent = moves;
  timeDisplay.textContent = '0:00';
  flippedCards = [];
  createGame();
  startTimer();
}

createGame();
startTimer();