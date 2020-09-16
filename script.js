gsap.registerPlugin(SrollTrigger);

// var tl = gsap.timeline();

// tl.from('nav img',{
//     y: -30,
//     opacity: 0,
//     ease: 'expo.easeInOut',
//     delay: .3
// })

// .from('nav #links a',{
//     stagger: .2,
//     y: -40,
//     opacity: 0,
//     ease: 'expo.easeInOut',
// })

// .from('nav>a',{
//     y: -30,
//     opacity: 0,
//     ease: 'expo.easeInOut',
// })



// .from('#main #left .elem',{
//     x: 40,
//     opacity: 0,
//     ease: 'expo.easeInOut',
// })

// .from('#main #left #wrapper',{
//     x: -50,
//     opacity: 0,
//     duration: 1,
//     ease: 'expo.easeInOut',
// })

// .from('#main #right #rytbig',{
//     x: 50,
//     opacity: 0,
//     duration: 1,
//     ease: 'expo.easeInOut',
// })

// .from('#main #search',{
//     y: 70,
//     opacity: 0,
//     ease: 'expo.easeInOut',
// })

// .from('#main #left #featured',{
//     x: -40,
//     opacity: 0,
//     ease: 'expo.easeInOut',
// })

// .from('#main #right #para',{
//     x: 20,
//     opacity: 0,
//     ease: 'expo.easeInOut',
// })








gsap.from('#lastsec .brelem', {
    scrollTrigger: {
        trigger: '#lastsec',
        toggleActions: "play pause resume reverse"
    },
    stagger: .2,
    y: 30,
    duration: 5,
    opacity: 0,
    ease: 'expo.easeInOut'
})