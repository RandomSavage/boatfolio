"use strict";

var _all = require("/../node_modules/gsap/all.js");

var tl = _all.gsap.timeline();

var msg = document.querySelector('.marquee-msg');
var tween1;
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
});