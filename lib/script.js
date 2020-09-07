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
  if (color == '#007BFF') div.classList.add('col', 'blue');
  if (color == '#28A745') div.classList.add('col', 'green');
  if (color == '#DC3545') div.classList.add('col', 'red');
  if (color == '#FFC107') div.classList.add('col', 'yellow');
  if (color == '#563D7C') div.classList.add('col', 'purple');
}

for (let i = 0; i < 5; i++) {
  let matchDiv = document.createElement("div");
  addClass(randomColors[i], matchDiv);
  matchingContainerTop.appendChild(matchDiv);
}

for (let i = 5; i < randomColors.length; i++) {
  let matchDiv = document.createElement("div");
  addClass(randomColors[i], matchDiv);
  matchingContainerBottom.appendChild(matchDiv);
}
