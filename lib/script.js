const matchingContainer = document.querySelector(".matching-container");

const color1 = document.createElement("div");
const color2 = document.createElement("div");
const color3 = document.createElement("div");
const color4 = document.createElement("div");
const color5 = document.createElement("div");

const colors = ['#007BFF', '#28A745', '#DC3545', '#FFC107', '#563D7C'];
let randomColors = [];

for(let i = colors.length-1; i>=0; i--){
  let randomColor = colors.splice(Math.floor(Math.random()*colors.length), 1);
  randomColors.push(randomColor);
  console.log(randomColor);
}

color1.style.background = `${randomColors[0]}`;
color1.classList.add('col');
matchingContainer.appendChild(color1);
color2.style.background = `${randomColors[1]}`;
color2.classList.add('col');
matchingContainer.appendChild(color2);
color3.style.background = `${randomColors[2]}`;
color3.classList.add('col');
matchingContainer.appendChild(color3);
color4.style.background = `${randomColors[3]}`;
color4.classList.add('col');
matchingContainer.appendChild(color4);
color5.style.background = `${randomColors[4]}`;
color5.classList.add('col');
matchingContainer.appendChild(color5);

console.log(randomColors);