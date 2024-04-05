const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-btn');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notify-container');
const finalMessage = document.getElementById('final-message');
const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'program', 'wizard', 'database', 'artist', 'books'];
const letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'm', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
'y', 'z' ];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord.split('').map(letter => `
      <span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>
    `).join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congrats. You Won!';
    popup.style.display = 'flex';
  }
}

// Update the wrong letters
function updateWrongLetters() {

  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.map(letter => `<span> ${letter}</span>`)}
  `;

  // Display hangman parts
  figureParts.forEach((part, idx) => {
    const errors = wrongLetters.length;

    if (idx < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // Check if game is lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Game Over. You Lost';
    popup.style.display = 'flex'; 
  }
}

// Show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Keydown letter press
window.addEventListener('keydown', (e) => {

  if (letters.includes(e.key)) {
    // console.log(e.key)
    const letter = e.key;

    if (selectedWord.includes(letter)) {

      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLetters();
      } else {
        showNotification();
      }
    }
  }
});

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
  // Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLetters();

  popup.style.display = 'none';
})

displayWord()