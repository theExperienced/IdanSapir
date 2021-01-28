//////////////////////////////SPLASH


gsap.timeline({
    delay: 1
})
.to('.splash__stripe', {
    // rotateY: 90,
    opacity: 0,
    // backgroundColor: 'rgb(212, 207, 142)',
    duration: .2,
    stagger: {
        amount: 1.1
    },
    ease: 'power4.easeOut',
    onComplete: () => {
        document.querySelector('.splash').classList.add('hidden');
    }
})
.from('.container', {
    opacity: 0,
    duration: 1
}, '<')
.from('.header__heading-span', {
    yPercent: 100,
    stagger: .1,
    duration: .8,
    ease: 'power3.out'
}, '<1')
.from('.header__subheading', {
    opacity: 0,
    x: 50,
    duration: .8
}, '<.3')
.from('.header__desc', {
    opacity: 0,
    duration: 1
}, '<.3')
.from('.navbar__item', {
    opacity: 0,
    stagger: {
        amount: .4
    }
}, '<.3')
// .to('.splash__stripe', {
//     opacity: 0,
//     duration: .2,
//     stagger: {
//         amount: .35
//     }
// }, '< .25')

// .from('.header__heading-span', {
//     yPercent: 100,
//     duration: .45,
//     ease: 'power3.out',
//     stagger: {
//         amount: .3
//     }
// }, '< .25')
// .from('.header__heading-span', {
//     scaleY: 0,
//     skewY: 16,
//     duration: .2,
//     ease: 'power1.out',
//     stagger: {
//         amount: .3
//     }
// }, '< .25')
// .from('.navbar__link', {
//     x: -20,
//     opacity: 0,
//     duration: 1,
//     ease: 'power3.out',
//     stagger: {
//         amount: .4
//     }
// }, '< .3')



//////////////////////////NAVBAR


gsap.to('.navbar', {
    scrollTrigger: {
        trigger: '.header',
        start: 'bottom 10%',
        toggleActions: 'play none none reverse'
    },
    // height: '10vh',
    // backgroundColor: 'rgb(250, 250, 250)',
    duration: .5
});

gsap.to('.navbar__item', {
    scrollTrigger: {
        trigger: '.header',
        start: 'bottom 10%',
        toggleActions: 'play none none reverse'
    },
    marginLeft:' 0rem',
    duration: .2
});

gsap.to('.navbar__link', {
    scrollTrigger: {
        trigger: '.header',
        start: 'bottom 10%',
        toggleActions: 'play none none reverse'
    },
    // fontSize: '1.25rem',
    // color: 'rgb(20, 20, 20)',
    // padding: '1rem 2rem',
    duration: .2
});