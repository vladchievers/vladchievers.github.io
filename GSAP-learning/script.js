const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const buttons = document.querySelectorAll('button');

const tl = new TimelineLite();


tl.from(img,.3,{opacity: 0, x: -300, })
  .from(h1,.3,{opacity: 0, y: -300, }, "-=0.2")
  .staggerFrom(buttons,0.2, {cycle: {
  	x: [50, -50],
  	scale: [2, 0.5]
  }, autoAlpha: 0,  ease: Power1.easeOut}, 0.1);






