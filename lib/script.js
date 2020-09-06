const matchingContainer = document.querySelector(".matching-container");

const color1 = document.createElement("div");
color1.style.background = ``;

const colors = ['#007BFF', '#28A745', '#DC3545', '#FFC107', '#563D7C'];



for(let i = colors.length-1; i>=0; i--){
  let randomColor = colors.splice(Math.floor(Math.random()*colors.length), 1);
  color1.style.background = `${randomColor}`;
  color1.innerText = 'hello';
  color1.classList.add('col');
  matchingContainer.appendChild(color1);
  console.log(randomColor);
}


