import {gsap} from '/../node_modules/gsap/all.js';

let tl = gsap.timeline();

let msg = document.querySelector('.marquee-msg');

let tween1;

msg.addEventListener('mouseover', () => {
  tween1 = gsap.fromTo('.marquee-msg', {x: 0, y: 0, color: '#fff'}, {duration: 2, x: -245, y: 0, color: 'orangered', yoyo: 'true', repeat: -1, opacity: 0});
})


console.clear();
let count = 0;
const targets = document.querySelectorAll(".box");
gsap.set(targets, { xPercent: -100 });
gsap.set(targets[0], { xPercent: 0 });

function slideIt() {
  gsap.to(targets[count], { xPercent: 100 });
  count = count < targets.length - 1 ? ++count : 0;
  gsap.fromTo(targets[count], { xPercent: -100 }, { xPercent: 0 });
  gsap.to({}, { duration: 2.5, onComplete: slideIt });
}

gsap.delayedCall(2, () => slideIt());

