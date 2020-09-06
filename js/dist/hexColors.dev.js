"use strict";

var colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById('btn');
var color = document.querySelector('.color');
btn.addEventListener('click', function () {
  var hexColor = "#"; // let randomNumber = getRandomNumber(); if you put this here first all numbers below will be same because this only calls once in here

  for (var i = 0; i < 6; i++) {
    hexColor += colors[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

var getRandomNumber = function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
};