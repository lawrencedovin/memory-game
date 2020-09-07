const matchingContainerTop = document.querySelector(".matching-container--top");
const matchingContainerBottom = document.querySelector(".matching-container--bottom");

const colors = ["#007BFF", "#28A745", "#DC3545", "#FFC107", "#563D7C", 
                "#007BFF", "#28A745", "#DC3545", "#FFC107", "#563D7C"];

let randomColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  let randomColor = colors.splice(Math.floor(Math.random() * colors.length), 1);
  randomColors.push(randomColor);
}

function addClass(color, div) {
  if (color == '#007BFF') div.classList.add('card', 'align-self-center', 'blue');
  if (color == '#28A745') div.classList.add('card', 'align-self-center', 'green');
  if (color == '#DC3545') div.classList.add('card', 'align-self-center', 'red');
  if (color == '#FFC107') div.classList.add('card', 'align-self-center', 'yellow');
  if (color == '#563D7C') div.classList.add('card', 'align-self-center', 'purple');
}

for (let i = 0; i < 5; i++) {
  let card = document.createElement('div');
  let cardContainer = document.createElement('div');
  cardContainer.classList.add('col', 'card-container', 'd-flex', 'justify-content-center', 'text-center');
  addClass(randomColors[i], card);
  cardContainer.appendChild(card);
  matchingContainerTop.appendChild(cardContainer);
}

for (let i = 5; i < randomColors.length; i++) {
  let card = document.createElement('div');
  let cardContainer = document.createElement('div');
  cardContainer.classList.add('col', 'card-container', 'd-flex', 'justify-content-center', 'text-center');
  addClass(randomColors[i], card);
  cardContainer.appendChild(card);
  matchingContainerBottom.appendChild(cardContainer);
}

const blueCards = document.querySelectorAll('.blue');
const greenCards = document.querySelectorAll('.green');
const redCards = document.querySelectorAll('.red');
const yellowCards = document.querySelectorAll('.yellow');
const purpleCards = document.querySelectorAll('.purple');

for(let blueCard of blueCards) {
  blueCard.addEventListener('click', () => {
    blueCard.style.background = '#007BFF';
  });
}

for(let greenCard of greenCards) {
  greenCard.addEventListener('click', () => {
    greenCard.style.background = '#28A745';
  });
}

for(let redCard of redCards) {
  redCard.addEventListener('click', () => {
    redCard.style.background = '#DC3545';
  });
}

for(let yellowCard of yellowCards) {
  yellowCard.addEventListener('click', () => {
    yellowCard.style.background = '#FFC107';
  });
}

for(let purpleCard of purpleCards) {
  purpleCard.addEventListener('click', () => {
    purpleCard.style.background = '#563D7C';
  });
}
