gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	// ScrollSmoother.create({
	// 	wrapper: 'body',
	// 	content: 'body',
	// 	smooth: 1.5,
	// 	effects: true
	// })

	gsap.fromTo('.about', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.about',
			start: 'center',
			end: '820',
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
