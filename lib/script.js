const matchingContainer = document.querySelector(".matching-container");

const colors = ["#007BFF", "#28A745", "#DC3545", "#FFC107", "#563D7C", 
                "#007BFF", "#28A745", "#DC3545", "#FFC107", "#563D7C"];

let randomColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  let randomColor = colors.splice(Math.floor(Math.random() * colors.length), 1);
  randomColors.push(randomColor);
}

for (let i = 0; i < randomColors.length; i++) {
  let matchDiv = document.createElement("div");

  if (randomColors[i] == '#007BFF') matchDiv.classList.add('col', 'blue');
  if (randomColors[i] == '#28A745') matchDiv.classList.add('col', 'green');
  if (randomColors[i] == '#DC3545') matchDiv.classList.add('col', 'red');
  if (randomColors[i] == '#FFC107') matchDiv.classList.add('col', 'yellow');
  if (randomColors[i] == '#563D7C') matchDiv.classList.add('col', 'purple');

  matchingContainer.appendChild(matchDiv);
}
