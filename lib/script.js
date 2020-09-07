const matchingContainerTop = document.querySelector(".matching-container--top");
const matchingContainerBottom = document.querySelector(".matching-container--bottom");
let card1;
let card2;
let cardsFlipped = 0;
let noClicking = false;

const colors = ["#007BFF", "#28A745", "#DC3545", "#FFC107", "#563D7C", 
                "#007BFF", "#28A745", "#DC3545", "#FFC107", "#563D7C"];

let randomColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  let randomColor = colors.splice(Math.floor(Math.random() * colors.length), 1);
  randomColors.push(randomColor);
}

function cardClick(e) {
  if (noClicking) return;
  if (e.target.classList.contains("flipped")) return;

  let currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.classList[0];
  console.log(currentCard);

  if (!card1 || !card2) {
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }

  if (card1 && card2) {
    noClicking = true;
    let gif1 = card1.className;
    let gif2 = card2.className;

    if (gif1 === gif2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", cardClick);
      card2.removeEventListener("click", cardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    } else {
      setTimeout(function() {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);
    }
  }

  if (cardsFlipped === randomColors.length) alert("game over!");
}

function addClass(color, div) {
    div.classList.add(`${color}`, 'card', 'align-self-center');
    div.addEventListener('click', cardClick);
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

// const blueCards = document.querySelectorAll('.blue');
// const greenCards = document.querySelectorAll('.green');
// const redCards = document.querySelectorAll('.red');
// const yellowCards = document.querySelectorAll('.yellow');
// const purpleCards = document.querySelectorAll('.purple');

// for(let blueCard of blueCards) {
//   blueCard.addEventListener('click', () => {
//     blueCard.style.background = '#007BFF';
//   });
// }

// for(let greenCard of greenCards) {
//   greenCard.addEventListener('click', () => {
//     greenCard.style.background = '#28A745';
//   });
// }

// for(let redCard of redCards) {
//   redCard.addEventListener('click', () => {
//     redCard.style.background = '#DC3545';
//   });
// }

// for(let yellowCard of yellowCards) {
//   yellowCard.addEventListener('click', () => {
//     yellowCard.style.background = '#FFC107';
//   });
// }

// for(let purpleCard of purpleCards) {
//   purpleCard.addEventListener('click', () => {
//     purpleCard.style.background = '#563D7C';
//   });
// }
