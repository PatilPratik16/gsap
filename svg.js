let path = "M 10 100 Q 500 100 990 100";
let finalpath = "M 10 100 Q 500 100 990 100";

document.querySelector('.container').addEventListener('mousemove' , (details)=>{
    path = `M 10 100 Q 500 ${details.y} 990 100`;

    gsap.to("svg path", {
        attr : {d : path},
        duration : 0.1,
        ease : "power3.out",
    });
})

document.querySelector('.container').addEventListener('mouseleave' , ()=>{
    gsap.to("svg path", {
        attr:{d : finalpath},
        duration : 1.5,
        ease : "elastic.out(1,0.2)",
    });
})