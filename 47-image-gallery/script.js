const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 4; //change value of rows to get more/less images

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}