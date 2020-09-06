"use strict";

var colors = ["red", "yellow", "green", "rgba(133,122,200,.9", "#f15025"];
var btn = document.getElementById('btn');
var color = document.querySelector('.color');
btn.addEventListener('click', function () {
  //get random number between 0 - 3
  var randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}