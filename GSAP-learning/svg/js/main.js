/* 
	colors before

	orange - #F8AD43
	green - #73C996
	red - #F8876E
	
	meter bcg - #c6d7df to #5AB783
	meter stroke - #7c99a2 to #448962

*/



const petr = document.querySelector('#Petr');
const h1 =  document.querySelector('h1');
const coin = document.querySelector('#Coin');
const path = [{x: -90, y: 120}, {x: -45, y: -220}, {x: 0, y: 120}]
const bulbIdea = document.querySelector('#BulbIdea');
const bulbIdeaLight = document.querySelector('#MainBulb2');
const part1 = document.querySelector('#Part1');
const mainBulb = document.querySelector('#MainBulb');
const liquids = document.querySelectorAll('.liquid');
const liquid01 = document.querySelector('#Liquid1');
const liquid02 = document.querySelector('#Liquid2');
const liquid03 = document.querySelector('#Liquid3');
const liquid04 = document.querySelector('#Liquid4');
const liquid05 = document.querySelector('#Liquid5');
const liquid06 = document.querySelector('#Liquid6');
const liquid07 = document.querySelector('#Liquid7');
const liquid08 = document.querySelector('#Liquid8');
const liquid09 = document.querySelector('#Liquid9');
const liquidInsideMask01 = document.querySelector('#LiquidInside1Mask');
const liquidInsideMask02 = document.querySelector('#LiquidInside2Mask');
const liquidInsideMask03 = document.querySelector('#LiquidInside3Mask');
const liquidInsideMask04 = document.querySelector('#LiquidInside4Mask');
const liquidInsideMask05 = document.querySelector('#LiquidInside5Mask');
const liquidInsideMask06 = document.querySelector('#LiquidInside6Mask');
const liquidInsideMask07 = document.querySelector('#LiquidInside7Mask');
const bulb1 = document.querySelector('#Bulb1 .bulb');
const bulb2 = document.querySelector('#Bulb2 .bulb');
const bulb3 = document.querySelector('#Bulb3 .bulb');
const meterBcg = document.querySelector('#meterBcg');
const meterStroke = document.querySelector('#meterStroke');
const part2light = document.querySelectorAll('#Part2 .light');
const part2lightLeft = document.querySelector('#Part2 .light-left');
const part2lightMid = document.querySelector('#Part2 .light-mid');
const part2lightRight = document.querySelector('#Part2 .light-right');
const printersLightsTop = document.querySelectorAll('.printerLightTop');
const printersLightsBottom = document.querySelectorAll('.printerLightBottom');
const mainLight = document.querySelector('#MainLight');
const paper = document.querySelector('#Paper');
const paperText = document.querySelector('#PaperText text');
const slider = document.querySelector('#slider');
const stage =  document.querySelector('#stage');
const mainMask = document.querySelector('#MainMask');
const smile = document.querySelector('#smile');
const body = document.body;
const pointer = document.querySelector('#pointer');
const mainTl = new TimelineMax();

function clearStage() {
	const clearTl = new TimelineMax();

	clearTl
		.set(petr, {x: '1400%', autoAlpha: 1, scale: 2.5, transformOrigin: 'bottom center'})
		.set(stage, {autoAlpha: 0.5})
		.set(mainMask, {attr: {x: 932}})
		.set(coin, {x: -90, y: 120, scale: 0.5, transformOrigin: 'center center'})
		.set(mainBulb, {fill: '#ffffff'})
		//clear liquid
		.set(liquids, {stroke: '#ffffff'})
		.set(liquidInsideMask01, {attr: {y: 492}}) /* y value = y+height */
		.set(liquidInsideMask02, {attr: {y: 494}}) /* 451+43 */
		.set(liquidInsideMask03, {attr: {y: 491}}) 
		.set(liquidInsideMask04, {attr: {y: 650}}) 
		.set(liquidInsideMask05, {attr: {y: 654}}) 
		.set(liquidInsideMask06, {attr: {y: 651}}) 
		.set(liquidInsideMask07, {attr: {y: 651}}) 
		.set(pointer, {rotation: -45, transformOrigin: 'bottom center'})
		.set(paper, {y: '+=55'})

	return clearTl;
}

function getIntroTl() {
	const introTl = new TimelineMax();

	introTl
		.set(h1 , {y: '-=30px'})
		.to(petr, 0.8, {x: '80%', ease: Power4.easeInOut})
		.fromTo(h1, 0.5, {x: '-46%', autoAlpha: 0}, {x: '-50%', autoAlpha: 1})
		.fromTo(smile, 0.4, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1, ease: Power4.easeInOut}, '+=1.2')
		.add('zoom-out')
		.to(petr, 1, {x: '0%', scale: 1,  ease: Power4.easeInOut}, 'zoom-out+=1')
		.to(h1, 0.5, {autoAlpha: 0}, 'zoom-out+=1')
		.to(mainMask, 1, {attr: {x: 131}, ease: Power4.easeInOut}, 'zoom-out+=1')
		.set(body, {className: '+=is-active'}, 'zoom-out+=1')
		.set(h1, {y: '-=90px', text: 'and this is my GreenSock Lab!'})   // update heading text
		.add('text-in')
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut}, 'text-in')
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2.5')
		.set(h1, {y: '-=30px', text: "Let's have some fun..."})  
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2')
		.to(stage, 0.2, {autoAlpha: 1, ease: Power0.none}, '-=0.2')


	return introTl;
}

function getIdeaTl() {
	const ideaTl = new TimelineMax();

	ideaTl
		.set(bulbIdea, {autoAlpha: 1, immediateRender: false})
		.from(bulbIdea, 0.5, {y: '+=40px', ease: Bounce.easeOut})
		.set(h1, {y: '-=30px', text: "You have a cool idea, right?"})  
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2')
		.set(h1, {y: '-=30px', text: "And now what?"})  
		.fromTo(bulbIdeaLight, 0.3, {fill: '#ffffff'}, {fill: '#73C996', repeat: 3, yoyo: true})
		.fromTo(bulbIdeaLight, 0.3, {fill: '#ffffff'}, {fill: '#F8876E', repeat: 3, yoyo: true})
		.fromTo(bulbIdeaLight, 0.8, {fill: '#ffffff'}, {fill: '#F8AD43'})
		.to(bulbIdea, 0.6, {y: '-=20px', scale: 1.1, transformOrigin: 'center bottom', ease: Power4.easeOut})
		.to(bulbIdea, 0.2, {y: '+=120px', scale: 0.8, ease: Back.easeIn})
		//idea out of the head
		.set(coin, {autoAlpha: 1}, '+=0.3')
		.to(coin, 6, {rotation: 720, bezier: {curviness: 0.3, values: path}, ease: SlowMo.ease.config(0.9,0.7, false)})
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut},'-=5.5')
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '-=3.5')
		.set(h1, {y: '-=30px', text: "Let GreenSock do the rest!"}, '-=3.3')
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut},'-=3.2')
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '-=1.2')
		.to(part1, 0.06, {rotation: 5, y: '+=5px', x: '+=3px', transformOrigin: 'bottom right', repeat: 5, yoyo: true})

	return ideaTl;
}

function getPart2Tl(){
	const part2Tl = new TimelineMax();

	part2Tl
		.add('part2-lights')
		.to(pointer, 2, {rotation: 20})
		.staggerTo(part2light, 0.1, {fill: "#F8AD43"}, 0.1, 'part2-lights')
		.staggerTo(part2light, 0.1, {fill: "#F8876E"}, 0.1, 'part2-lights+=0.5')
		.staggerTo(part2light, 0.1, {fill: "#73C996"}, 0.1, 'part2-lights+=1')
		.to(meterBcg, 0.2, {fill: '#5AB783'}, 'part2-lights+=1.2')
		.to(meterStroke, 0.2, {stroke: '#448962'}, 'part2-lights+=1.2')
		.to(slider, 1.2, {x: '-=10px', ease: Power4.easeInOut}, 'part2-lights+=1.4')
		.set(bulb1, {fill: '#73C996'}, 'part2-lights+=2.6')
		.set(bulb2, {fill: '#F8876E'}, 'part2-lights+=3')
		.set(bulb3, {fill: '#F8AD43'}, 'part2-lights+=3.4')


	return part2Tl;
}

function getFillTubesTl(){
	const fillTubesTl = new TimelineMax();

	const liquidLength = [131, 213, 228, 124, 124, 124, 101, 345, 393];

	liquids.forEach((el,i) => {
		TweenMax.set(el, {strokeDasharray: liquidLength[i], strokeDashoffset: liquidLength[i]});
	})

	fillTubesTl
		.set(liquids, {stroke: '#F8876E'})
		.to(liquid01, 2, {strokeDashoffset: 0, ease: Power0.easeNone})
		//create a tween
		.add('flask01')
		.set(h1, {y: '-=30px', text: "create a tween"}, '-=3.3')
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2')
		.set(h1, {y: '-=30px', text: "and another one"})
		.to(liquid02, 0.5, {strokeDashoffset: 0, ease: Power0.easeNone}, '-=0.2')
		// add another one


		.add('flask02')
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2')
		.set(h1, {y: '-=30px', text: "add them to a timeline"})
		.to(liquid03, 0.5, {strokeDashoffset: 0, ease: Power0.easeNone}, '-=0.2')

		//add them to a timeline

		.add('flask03')
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2')
		.set(h1, {y: '-=30px', text: "create a multiple timelines"})
		.to(liquid04, 0.5, {strokeDashoffset: 0, ease: Power0.easeNone}, '-=0.1')
		.to(liquid05, 0.6, {strokeDashoffset: 0, ease: Power0.easeNone}, '-=0.1')

		// create a multiple timelines

		.to(liquid06, 0.7, {strokeDashoffset: 0, ease: Power0.easeNone})
		.add('flask04')
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2')
		.set(h1, {y: '-=30px', text: "fine-tune easing"})

		.to(liquid07, 1.4, {strokeDashoffset: 0, ease: Power0.easeNone})

		.to(liquid08, 1.5, {strokeDashoffset: 0, ease: Power0.easeNone})
		.add('flask06')
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2')
		.set(h1, {y: '-=30px', text: "master GreenSock animations"})


		.to(liquid09, 0.4, {strokeDashoffset: 0, ease: Power0.easeNone})
		.add('flask07')
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 0.2, {autoAlpha: 0, y: '+=10px',  ease: Power4.easeInOut}, '+=2')
		.set(h1, {scale: 0.9, y:'-=30px', text: "and most importantly"})

		//and most importantly + have fun
		.to(h1, 0.3, {autoAlpha: 1, y: '+=20px',  ease: Power4.easeInOut})
		.to(h1, 2, {scale: 1,  ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 2, points: 50, taper: "none", randomize:  true, clamp: false})})
		.to(h1, 0.3, {autoAlpha: 0, scale: 1.1,  ease: Power0.easeNone})
		.set(h1, {scale: 0.9, y:'-=30px', text: "have some fun"})
		.to(h1, 2, {scale: 1, autoAlpha: 1,  ease: Power4.easeInOut}, '+=0.3')
		.to(h1, 0.2, {autoAlpha: 0,   ease: Power4.easeInOut}, '+=1')
		.set(h1, {y:'-=30px', text: "Want to learn GreenSock from scratch?"})

		.add('main-flask')

		//fill in all flasks

		.to(liquidInsideMask01, 6.5, {attr: {y: 415}, ease: Power0.easeNone}, 'flask01+=1')
		.to(liquidInsideMask02, 7, {attr: {y: 451}, ease: Power0.easeNone}, 'flask02-=0.5')
		.to(liquidInsideMask03, 7, {attr: {y: 452}, ease: Power0.easeNone}, 'flask03-=0.5')
		.to(liquidInsideMask04, 6, {attr: {y: 602}, ease: Power0.easeNone}, 'flask04')
		.to(liquidInsideMask06, 2, {attr: {y: 608}, ease: Power0.easeNone}, 'flask06')
		.to(liquidInsideMask07, 2, {attr: {y: 608}, ease: Power0.easeNone}, 'flask07')
		.to(liquidInsideMask05, 3, {attr: {y: 563}, ease: Power0.easeNone}, 'main-flask')



	


	return fillTubesTl;
}

function getFinalCTATl(){
	const finalCTATl = new TimelineMax();

	const lightsBlink = new TimelineMax({repeat: -1, yoyo: true});
	lightsBlink
		.fromTo(printersLightsTop, 0.1, {fill: '#5AB783'}, {fill: '#F8AD43', immediateRender: false})
		.fromTo(printersLightsBottom, 0.1, {fill: '#5AB783'}, {fill: '#F8AD43', immediateRender: false}, '+=0.2')
		.fromTo(printersLightsTop, 0.1, {fill: '#F8AD43'}, {fill: '#F8876E', immediateRender: false}, '-=0.2')
		.fromTo(printersLightsBottom, 0.1, {fill: '#F8AD43'}, {fill: '#F8876E', immediateRender: false}, '+=0.2')
		.fromTo(printersLightsTop, 0.1, {fill: '#F8876E'}, {fill: '#73C996', immediateRender: false}, '-=0.2')
		.fromTo(printersLightsBottom, 0.1, {fill: '#F8876E'}, {fill: '#73C996', immediateRender: false}, '+=0.2');

	const hideAndSeek = new TimelineMax();

	hideAndSeek
		.to(paper, 0.6, {y: '+=55', ease: SteppedEase.config(10)})
		.set(paperText, {text: 'YES SIR!'})
		.to(paper, 0.6, {y: '-=55', ease: SteppedEase.config(10)})
		.to(paper, 0.6, {y: '+=55', ease: SteppedEase.config(10)}, '+=5')
		.set(paperText, {text: 'SURE MAN!'})
		.to(paper, 0.6, {y: '-=55', ease: SteppedEase.config(10)})


	finalCTATl
		.fromTo(mainBulb, 0.05, {fill: '#ffffff'}, {fill: '#F8AD43', repeat: 10, yoyo: true})
		.to(h1, 0.3, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut}, '+=0.3')
		.add(lightsBlink, '2')
		.to(paper, 3, {y: 0, ease: SteppedEase.config(10)}, '2.5')
		.add(hideAndSeek, '7.5')

	return finalCTATl;
} 

function init() {
	mainTl
		.add(clearStage())
		.add(getIntroTl(), 'scene-intro')
		.add(getIdeaTl(), 'scene-idea')
		.add(getPart2Tl(), 'scene-part2')
		.add(getFillTubesTl(), 'scene-tubes')
		.add(getFinalCTATl(), 'scene-final')

}

init();