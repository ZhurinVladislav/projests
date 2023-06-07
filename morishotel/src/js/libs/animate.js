gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	// ScrollSmoother.create({
	// 	wrapper: '.content-wrapper',
	// 	content: '.content-main',
	// 	smooth: 1,
	// 	// effects: true
	// })

	gsap.fromTo('.home-page__hero', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.home-page__hero',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	gsap.fromTo('.parallax', { y: 0 }, {
		y: 20,
		scrollTrigger: {
			trigger: '.parallax',
			start: '-200',
			end: '-100',
			scrub: true
		}
	})

	gsap.fromTo('.parallax-text', { y: 100 }, {
		y: 0,
		scrollTrigger: {
			trigger: '.parallax-text',
			start: '-200',
			end: '-200',
			scrub: true
		}
	})

	// let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	// itemsL.forEach(item => {
	// 	gsap.fromTo(item, { opacity: 0, x: -50 }, {
	// 		opacity: 1, x: 0,
	// 		scrollTrigger: {
	// 			trigger: item,
	// 			start: '-850',
	// 			end: '-100',
	// 			scrub: true
	// 		}
	// 	})
	// })

	// let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	// itemsR.forEach(item => {
	// 	gsap.fromTo(item, { opacity: 0, x: 50 }, {
	// 		opacity: 1, x: 0,
	// 		scrollTrigger: {
	// 			trigger: item,
	// 			start: '-750',
	// 			end: 'top',
	// 			scrub: true
	// 		}
	// 	})
	// })

}
