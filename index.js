gsap.to("#box" , {
 x: 1000,
 duration:3,
 delay:1,
 rotate:360,
 backgroundColor : 'green',
 borderRadius : '50%',
 scale : 1,
})
gsap.from("#box1" , {
 x: 1000,
 duration:3,
 delay:1,
 backgroundColor : "blue",
})
gsap.from('h1' , {
    color : "red",
    duration: 3,
    delay: 1,
    opacity : 0,
    y: 200,
    // x:300,

    stagger:0.5,
    // stagger:0.3,
    // stagger:-1,
})
gsap.to('.box2', {
    x:1200,
    duration:1,
    // delay:1,
    rotate:360,
    // repeat:3,
    repeat:-1,

    yoyo:true,
})




// gsap.to(".b1", {
//     x:1000,
//     duration:2,
//     delay:1,
//     borderRadius: 12,
// });
// gsap.to(".b2", {
//     x:1000,
//     duration:2,
//     borderRadius: 12,
//     backgroundColor:'red',
//     delay:3,
// });
// gsap.to(".b3", {
//     x:1000,
//     duration:2,
//     borderRadius: 12,
//     backgroundColor:'blue',
//     delay:5,
// });

var tl = gsap.timeline();
tl.to('.b1', {
    x:700,
    duration:1.5,
    delay:1
})
tl.to(".b2" , {
    duration:1.5,
    x:800,
})
tl.to(".b3" , {
    duration:1.5,
    x:900,
})