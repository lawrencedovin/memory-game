const matchingContainerTop = document.querySelector(".matching-container--top");
const matchingContainerBottom = document.querySelector(".matching-container--bottom");
let bestScore = document.querySelector("#best-score");
const currentScore = document.querySelector("#current-score");
const resetButton = document.querySelector("#btn-reset");
let card1;
let card2;
let cardsFlipped = 0;
let noClicking = false;
let counter = 0;
let randomCards = [];

function cardClick(e) {
  if (noClicking) return;

  let currentCard = e.target;
  let flipCardContent = currentCard.parentElement.parentElement;
  flipCardContent.style.transform = "rotateY(180deg)";
  
  counter++;
  currentScore.innerText = `Current Score: ${counter}`;

  if (!card1 || !card2) {
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }

  if (card1 && card2) {
    noClicking = true;
    let animal1 = card1.className;
    let animal2 = card2.className;

    if (animal1 === animal2) {
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

  if (cardsFlipped === randomCards.length){
    if(!bestScore.innerText) bestScore.innerText = `${counter}`;
    else bestScore.innerText = counter < bestScore.innerText ? `${counter}` : bestScore.innerText;
    localStorage.setItem("best-score", bestScore.innerHTML);
    alert("🥳 You won!!! 🎉");
  } 
}

function addClass(animal, img) {
  img.classList.add(`${animal}`, 'card-image');
  img.src = `pics/${animal}.jpg`;
} 

function createGame() {
  const animalKingdom = ["frog", "lion", "gazelle", "parrot", "polar-bear", 
                "frog", "lion", "gazelle", "parrot", "polar-bear"];
  randomCards = [];

  for (let i = animalKingdom.length - 1; i >= 0; i--) {
    let randomCard = animalKingdom.splice(Math.floor(Math.random() * animalKingdom.length), 1);
    randomCards.push(randomCard);
  }

  for (let i = 0; i < randomCards.length; i++) {
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('col', 'card-container', 'd-flex', 'justify-content-center', 'text-center');

    let flipCard = document.createElement('div');
    flipCard.classList.add('flip-card', 'align-self-center');

    let flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');
    flipCard.addEventListener('click', cardClick);

    let flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');

    let imgFront = document.createElement('img');
    imgFront.classList.add(`${randomCards[i]}`,'card-image');
    imgFront.src = 'pics/back-of-card.jpg';

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

    i < 5 ? matchingContainerTop.appendChild(cardContainer) : matchingContainerBottom.appendChild(cardContainer);
  }
}

function resetGame() {
  document.querySelectorAll('.col').forEach(column => column.remove());
  cardsFlipped = 0;
  noClicking = false;
  counter = 0;
  currentScore.innerText = `Current Score: ${counter}`;
  createGame();
}

resetButton.addEventListener('click', () => {
  resetGame();
});

createGame();