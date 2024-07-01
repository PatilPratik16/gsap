// gsap.from(".p1 .box", {
//     scale:0,
//     duration:2,
//     delay:1,
//     rotate:360,

// });

gsap.from(".p2 .left" , {
    x: 200,
    opacity : 0,
    duration: 0.5,
    stagger: 0.3,

    scrollTrigger :{
        trigger : ".p2 .left",
        scroller : "body",
        markers : true,
        start : "top 80%",

        scrub:5,
    } 
})

gsap.from(".p2 .right" , {
    x: -200,
    opacity : 0,
    duration: 0.5,
    stagger: 0.3,

    scrollTrigger :{
        trigger : ".p2 .right",
        scroller : "body",
        markers : true,
        start : "top 80%",
        end : "top 50%",
        scrub: 5,
    } 
})

