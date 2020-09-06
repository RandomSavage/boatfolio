const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
 const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexColor = "#";
  // let randomNumber = getRandomNumber(); if you put this here first all numbers below will be same because this only calls once in here
  for(let i = 0; i < 6; i++) {
    hexColor += colors[getRandomNumber()]
    
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  
})

let getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
}