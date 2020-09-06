const colors = ['#007BFF', '#28A745', '#DC3545', '#FFC107', '#563D7C'];

for(let i = colors.length-1; i>=0; i--){
  console.log(colors.splice(Math.floor(Math.random()*colors.length), 1));
}

