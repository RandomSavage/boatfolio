"use strict";

var _all = require("/../node_modules/gsap/all.js");

var tl = _all.gsap.timeline();

var msg = document.querySelector('.marquee-msg');
var dropDown = document.querySelector('.dropDown');
var tween1; // let tween2;

msg.addEventListener('mouseover', function () {
  tween1 = _all.gsap.fromTo('.marquee-msg', {
    x: 0,
    y: 0,
    color: '#fff'
  }, {
    duration: 2,
    x: -245,
    y: 0,
    color: 'orangered',
    yoyo: 'true',
    repeat: -1,
    opacity: 0
  });
}); // dropDown.addEventListener('mouseover', () => {
//   tween2 = gsap.fromTo('.dropdown-content', {x: 0, y: 0, width: 0}, {x: 0, y: 350, width: "calc(100vw - 150px;)"});
// })
// console.clear();

var count = 0;
var targets = document.querySelectorAll(".box");

_all.gsap.set(targets, {
  xPercent: -100
});

_all.gsap.set(targets[0], {
  xPercent: 0
});

function slideIt() {
  _all.gsap.to(targets[count], {
    xPercent: 100
  });

  count = count < targets.length - 1 ? ++count : 0;

  _all.gsap.fromTo(targets[count], {
    xPercent: -100
  }, {
    xPercent: 0
  });

  _all.gsap.to({}, {
    duration: 2.5,
    onComplete: slideIt
  });
}

_all.gsap.delayedCall(2, function () {
  return slideIt();
});