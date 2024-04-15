const wordEl = document.getElementById('word');
const textInput = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settingsEl = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const levelSelect = document.getElementById('level');

const words = [
  'sigh',
  'tense',
  'airplane',
  'ratio',
  'product',
  'song',
  'soup',
  'assistant',
  'income',
  'editor',
  'news',
  'actor',
  'food',
  'sector',
  'invest',
  'database',
  'code',
  'policy',
  'series',
  'ear',
  'description',
  'exam',
  'debt',
  'hat',
  'pie',
  'silver',
  'language',
  'version',
  'love',
  'enjoy',
  'complete',
  'spooky',
  'chief',
  'ignore',
  'jump',
  'survive'
];

let randomWord;
let score = 0;
let time = 15;
let level = 'easy';

// Set level select value
levelSelect.value = level;

// Focus on text on start
textInput.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Functions
// Generate random word from words array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add random word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  wordEl.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endGameEl.innerHTML = `
    <h1>Game Over</h1>
    <p>Final Score: ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endGameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners
// Text Input
textInput.addEventListener('input', (e) => {
  const text = e.target.value;

  if(text === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear text input
    e.target.value = '';

    if(level === 'hard') {
      time += 2;
    } else if(level === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

// Settings button click
settingsBtn.addEventListener('click', () => settingsEl.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', (e) => {
  level = e.target.value;
});