
document.addEventListener("DOMContentLoaded", function(event) {

window.addEventListener('load', () => {
	//variablres

const projects = document.querySelector('.projects');
const project = projects.querySelectorAll('.project');


const imageBefore = CSSRulePlugin.getRule('.project-image:before');
const imageAfter = CSSRulePlugin.getRule('.project-image:after');



const tlProject = new TimelineMax({repeat: -1, repeatDelay: 2});

//main projects timeline

tlProjects = new TimelineMax();

tlProjects
	.set(projects, {autoAlpha: 1})


project.forEach(function(el,i){

		const projectClasses = el.getAttribute('class').split(' ');
		const projectClass = projectClasses[1];
		const pixel= el.querySelectorAll('.pixel');
		const pixels = el.querySelector('.project-pixels');
		const projectTitle = el.querySelector('.project-title');
		const projectSubtitle = el.querySelector('.project-subtitle');
		const projectImage = el.querySelector('.project-image');



		//project CTA

		const tlProjectsCTA = new TimelineMax();

		const projectLink = el.querySelector('.button-container');
		const projectLinkButton = el.querySelector('.button');
		const projectLinkSpan = el.querySelectorAll('.bp');
		const projectLinkText = el.querySelectorAll('.bp-text');



		tlProjectsCTA
			.to(projectSubtitle, 0.3, {autoAlpha: 0, yPercent: 100, ease: Back.easeOut})
			.staggerFrom(projectLinkSpan, 0.3, {autoAlpha: 0, yPercent: -100, ease: Back.easeOut}, 0.1)
			.from(projectLinkText, 0.3, {autoAlpha: 0, x: '-100%' , ease: Power4.easeInOut}, '-=0.2')


		//// project loader

		const tlProjectLoader = new TimelineMax({paused: true})

		if(projectClass !== 'project00'){

			const loader = el.querySelector('.loader');

			tlProjectLoader
				.to([imageBefore,imageAfter], 0.4, {cssRule: {opacity: '0'}})
				.fromTo(loader, 5, {strokeDasharray: 547, strokeDashoffset: 547}, {strokeDasharray: 547, strokeDashoffset: 0,ease: Power0.easeNone})
				.to(loader, 0.4, {autoAlpha: 0, onComplete: resumeProjects})
				.to([imageBefore,imageAfter], 0.4, {cssRule: {opacity: '1'}}, '-=0.4')

		}

		/// circles timeine

		const tlCircles = new TimelineMax({repeat: -1});

		tlCircles
			.to(imageBefore, 0.8, {cssRule: {top: '5px'}, ease: Linear.easeNone})
			.to(imageBefore, 0.8, {cssRule: {left: '5px'}, ease: Linear.easeNone})
			.to(imageBefore, 0.8, {cssRule: {top: '-5px'}, ease: Linear.easeNone})
			.to(imageBefore, 0.8, {cssRule: {left: '-5px'}, ease: Linear.easeNone})
			.to(imageAfter, 0.7, {cssRule: {bottom: '6px'}, ease: Linear.easeNone}, '0')
			.to(imageAfter, 0.7, {cssRule: {right: '6px'}, ease: Linear.easeNone}, '0.7')
			.to(imageAfter, 0.7, {cssRule: {bottom: '-6px'}, ease: Linear.easeNone}, '1.1')
			.to(imageAfter, 0.7, {cssRule: {right: '-6px'}, ease: Linear.easeNone}, '1.5')


		//project timeline
		tlProject
				.set(el, {zIndex: 1})
				.set([projectSubtitle, projectTitle, pixel] , {autoAlpha: 0})
				.fromTo(projectImage, 0.4, {autoAlpha: 0, xPercent: '-200'}, {autoAlpha: 1, xPercent: '-10', ease: Power4.easeInOut, onStart: updateCLass, onStartParams: [projectClass]})
				.add('imageIn')
				.staggerFromTo(pixel, 0.3, {autoAlpha: 0, x: '-=10'}, {autoAlpha: 1, x: '0', ease: Power4.easeInOut}, 0.02, '-=0.2')
				.add('pixelsIn')
				.fromTo(projectTitle, 0.7, {autoAlpha: 0, xPercent: '-50'} , {autoAlpha: 1, xPercent: '-5', ease: Power4.easeInOut}, "-=0.4")
				.fromTo(projectSubtitle, 0.7, {autoAlpha: 0, xPercent: '-50'} , {autoAlpha: 1, xPercent: '-2', ease: Power4.easeInOut}, "-=0.5")	
				.add('titleIn')
				.add(tlProjectsCTA, '+=2') // add button animation
				.to(projectTitle, 4.3, {xPercent: '+=5', ease: Linear.easeNone}, "titleIn-=0.1")
				.to(projectSubtitle, 4.3, {xPercent: '+=2', ease: Linear.easeNone}, "titleIn-=0.2")
				.add('titleOut')
				.to(projectImage, 5, {xPercent: '0', ease: Linear.easeNone, onComplete: pauseProjects, onCompleteParams: [projectClass, tlProjectLoader]}, 'imageIn')
				.add('imageOut')
				.to(pixels, 4.1, {x: '-5', ease: Linear.easeNone}, 'pixelsIn')
				.to([projectTitle, projectSubtitle, projectLink], 0.5, {autoAlpha: 0, xPercent: '+=10', ease: Power4.easeInOut}, 'titleOut')
				.to(projectImage, 0.4, {autoAlpha: 0, xPercent: '+=80', ease: Power4.easeInOut}, 'imageOut')

		// tlProject.add(tlProjects)		
})

function updateCLass(projectClass) {

	document.body.setAttribute('class', projectClass);
}
//pausing the project timeline
function pauseProjects(projectClass, tlProjectLoader) {

	tlProject.pause()

	if(projectClass != 'project00'){

		tlProjectLoader.seek(0);
		tlProjectLoader.play();
	}
}


function resumeProjects() {
	tlProject.resume();
}

//resuming the project timeline

document.querySelector('.project00 .button').addEventListener('click', function(e) {
	e.preventDefault();
	
	tlProject.resume();

})
})

})