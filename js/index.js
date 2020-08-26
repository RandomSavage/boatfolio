import {gsap} from '/../node_modules/gsap/all.js';

let tl = gsap.timeline();

let msg = document.querySelector('.marquee-msg');

let tween1;

msg.addEventListener('mouseover', () => {
  tween1 = gsap.fromTo('.marquee-msg', {x: 0, y: 0, color: '#fff'}, {duration: 2, x: -245, y: 0, color: 'orangered', yoyo: 'true', repeat: -1, opacity: 0});
})