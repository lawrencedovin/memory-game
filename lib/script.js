const matchingContainerTop = document.querySelector(".matching-container--top");
const matchingContainerBottom = document.querySelector(".matching-container--bottom");
let card1;
let card2;
let cardsFlipped = 0;
let noClicking = false;
let counter = 0;

const yuGiOh = ["blue-eyes", "dark-magician", "exodia", "flame-swordsman", "luster-soldier", 
                "blue-eyes", "dark-magician", "exodia", "flame-swordsman", "luster-soldier"];

let randomCards = [];

for (let i = yuGiOh.length - 1; i >= 0; i--) {
  let randomCard = yuGiOh.splice(Math.floor(Math.random() * yuGiOh.length), 1);
  randomCards.push(randomCard);
}

function cardClick(e) {
  if (noClicking) return;
  let currentCard = e.target;
  let flipCardContent = currentCard.parentElement.parentElement;
  flipCardContent.style.transform = "rotateY(180deg)";
  
  // counter++;
  // console.log(counter);

  if (!card1 || !card2) {
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }

  if (card1 && card2) {
    noClicking = true;
    let monster1 = card1.className;
    let monster2 = card2.className;

    if (monster1 === monster2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", cardClick);
      card2.removeEventListener("click", cardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    } else {
      setTimeout(function() {
        card1.parentElement.parentElement.style.transform = "rotateY(0deg)";
        card2.parentElement.parentElement.style.transform = "rotateY(0deg)";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);
    }
  }

  if (cardsFlipped === randomCards.length) alert("game over!");
}

// function cardClick(e) {
//   if (noClicking) return;
//   let currentCard = e.target;
//   console.log(currentCard.classList[0]);
// }

// function addClass(color, div) {
//     div.classList.add(`${color}`, 'card', 'align-self-center');
//     div.addEventListener('click', cardClick);
// }

function addClass(monster, img) {
  img.classList.add(`${monster}`, 'card-image');
  img.src = `pics/${monster}.jpg`;
  //div.addEventListener('click', cardClick);
} 

function createGame() {
  for (let i = 0; i < 5; i++) {
    
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('col', 'card-container', 'd-flex', 'justify-content-center', 'text-center');

    let flipCard = document.createElement('div');
    flipCard.classList.add('flip-card', 'align-self-center');
    flipCard.addEventListener('click', cardClick);

    let flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');

    let flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');

    let imgFront = document.createElement('img');
    imgFront.classList.add(`${randomCards[i]}`,'card-image');
    imgFront.src = 'pics/yu-gi-oh.PNG';

    let flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');

    let imgBack = document.createElement('img');
    addClass(randomCards[i], imgBack);

    flipCardFront.appendChild(imgFront);
    flipCardBack.appendChild(imgBack);
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);
    cardContainer.appendChild(flipCard);
    matchingContainerTop.appendChild(cardContainer);
    
  }
  
  for (let i = 5; i < randomCards.length; i++) {
    
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('col', 'card-container', 'd-flex', 'justify-content-center', 'text-center');

    let flipCard = document.createElement('div');
    flipCard.classList.add('flip-card', 'align-self-center');
    flipCard.addEventListener('click', cardClick);

    let flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');

    let flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');

    let imgFront = document.createElement('img');
    imgFront.classList.add(`${randomCards[i]}`,'card-image');
    imgFront.src = 'pics/yu-gi-oh.PNG';

    let flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');

    let imgBack = document.createElement('img');
    addClass(randomCards[i], imgBack);

    flipCardFront.appendChild(imgFront);
    flipCardBack.appendChild(imgBack);
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);
    cardContainer.appendChild(flipCard);
    matchingContainerBottom.appendChild(cardContainer);
    
  }
}

function resetGame() {
  document.querySelectorAll('.col').forEach(e => e.remove());
  cardsFlipped = 0;
  noClicking = false;
  counter = 0;
  createGame();
}

createGame();