// variables

var sectionFrom,
	  slide = document.querySelectorAll('.slide'),
	  slideActive = document.querySelector('.slide.active'),
	  navLink = document.querySelectorAll('.nav a'),
	  navLi = document.querySelectorAll('.nav li'),
	  nav = document.querySelector('.nav'),
	  body = document.body



	  //init function

	  function init() {
	  	//set active slide
	  	TweenLite.set(slideActive, {x: '0'});

	  	// fade slides in

	  	TweenLite.set(body, {className: '-=loading'});
	  }

	  init();

	  //navigation click

	  
	  navLink.forEach(el => {
	  	el.addEventListener('click', function(e) {
			e.preventDefault();
			
			if(!body.matches('.is-animating')){
				sectionFrom = document.querySelector('.slide.active');
				const sectionToID = e.target.getAttribute('href');
				const sectionTo = document.querySelector(`div${sectionToID}`)

				if(sectionFrom.getAttribute('id') !== sectionTo.getAttribute('id')){
					scrollToSection(sectionFrom, sectionTo)
				}
			}

		})
	  })

	  function scrollToSection(sectionForm, sectionTo){

	  	const heading = sectionTo.querySelector('h1');
	  	const subHeading = sectionTo.querySelector('p');
	  	const bcg = sectionTo.querySelector('.bcg');
	  	const bcgFrom = sectionFrom.querySelector('.bcg');
	  	const tlDown = new TimelineLite({onComplete: setActiveSection(sectionFrom, sectionTo)});
	  	const tlUp = new TimelineLite();


	  	if(sectionFrom.dataset.id < sectionTo.dataset.id){
	  		tlDown	
	  			.set(body, {className: '+=is-animating'})
	  			.set(sectionTo, {scale: 0.9})
	  			.add('out')
	  			.to(nav, 0.3, {y: '10px', autoAlpha: 0, ease: Power4.easeInOut}, 'out')
	  			.to(sectionFrom, 0.3, {scale: 0.9, ease: Power4.easeInOut}, 'out')
	  			.add('across')
	  			.to(sectionFrom, 1.2, {x: '-=100%' , ease: Power4.easeInOut, clearProps: 'all'}, 'out-=0.1')
	  			.to(sectionTo, 1.2, {x: '0%' , ease: Power4.easeInOut}, 'out-=0.1')
	  			.add('in')
	  			.to(sectionTo, 0.3, {scale: 1, ease: Power4.easeInOut}, 'in-=0.4')
	  			.from(heading, 0.3, {autoAlpha: 0, y: '-15px', ease: Power4.easeInOut}, 'in')
	  			.from(subHeading, 0.3, {autoAlpha: 0, y: '-15px', ease: Power4.easeInOut}, 'in')
	  			.to(nav, 0.3, {autoAlpha: 1, y: '0',  ease: Power4.easeInOut}, 'in+=0.2')
	  			.set(body, {className: '-=is-animating'})

	  	}else{
	  		tlUp
	  			.set(body, {className: '+=is-animating'})
	  			.set(sectionTo, {x:'-100%' , scale: 0.9})
	  			.add('out')
	  			.to(nav, 0.3, {y: '10px', autoAlpha: 0, ease: Power4.easeInOut}, 'out')
	  			.to(sectionFrom, 0.3, {scale: 0.9, transformOrigin: 'center center', ease: Power4.easeInOut}, 'out')
	  			.add('across')
	  			.to(sectionFrom, 1.2, {x: '100%' , ease: Power4.easeInOut, clearProps: 'all'}, 'out-=0.1')
	  			.to(sectionTo, 1.2, {x: '0%' , ease: Power4.easeInOut}, 'out-=0.1')
	  			.add('in')
	  			.to(sectionTo, 0.3, {scale: 1, ease: Power4.easeInOut}, 'in-=0.4')
	  			.from(heading, 0.3, {autoAlpha: 0, y: '-15px', ease: Power4.easeInOut}, 'in')
	  			.from(subHeading, 0.3, {autoAlpha: 0, y: '-15px', ease: Power4.easeInOut}, 'in')
	  			.to(nav, 0.3, {autoAlpha: 1, y: '0',  ease: Power4.easeInOut}, 'in+=0.2')
	  			.set(body, {className: '-=is-animating'})
	  	}
	  }


	  function setActiveSection(sectionFrom, sectionTo) {
	  	// add active class to the current slide

	  	sectionFrom.classList.remove('active');
	  	sectionTo.classList.add('active');

	  	//add a body class highlight the current slide

	  	body.removeAttribute('class');
	  	body.classList.add(`${sectionTo.getAttribute('id')}-active`)

	  	// gighlight current slide in the nav

	  	navLi.forEach(el => {el.removeAttribute('class')});

	  	navLi[sectionTo.dataset.id].classList.add('active')


	  }
