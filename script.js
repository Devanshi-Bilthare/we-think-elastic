function startAnimation(){
    var tl = gsap.timeline()

tl.to(".st_img1",{
    display:"block",
    duration:.0001
})

tl.to(".st_img1",{
    display:"none"
})
tl.to(".st_img2",{
    display:"block",
    duration:.0001
})

tl.to(".st_img2",{
    display:"none"
})
tl.to(".st_img3",{
    display:"block",
    duration:.0001
})

tl.to(".st_img3",{
    display:"none"
})
tl.to(".st_img4",{
    display:"block",
    duration:.0001
})

tl.to(".st_img4",{
    display:"none"
})
tl.to(".st_img5",{
    display:"block",
    duration:.0001
})

tl.to(".st_img5",{
    display:"none"
})
tl.to(".st_img6",{
    display:"block",
    duration:.0001
})

tl.to(".st_img6",{
    display:"none"
})

tl.to(".st_img1",{
    display:"block",
    duration:.0001
})

tl.to(".st_img1",{
    display:"none"
})
tl.to(".st_img2",{
    display:"block",
    duration:.0001
})

tl.to(".st_img2",{
    display:"none"
})
tl.to(".st_img3",{
    display:"block",
    duration:.0001
})

tl.to("#page1",{
    transform:"translateY(0)"
})

tl.to("nav",{
    zIndex:999,
})

tl.from('#page1 h1',{
    transform:"translateY(80%)",
    stagger:.1,
    duration:1
})

tl.to("body",{
    overflow:"auto"
})
}
startAnimation();

function videoAnimation(){
    gsap.from("#page2 video",{
        transform: "scaleX(.3)",
        scrollTrigger:{
            trigger:"#page2 video",
            scroller:"body",
            // markers:true,
            end:"top 1%",
            scrub:true
        }
    })
}
videoAnimation()

function page3Animation(){
    gsap.from('#page3 h2',{
        transform:"translateY(50%)",
        opacity:0,
        stagger:.5,
        duration:1,
        scrollTrigger:{
            trigger:"#page3 h2",
            scroller:"body",
            // markers:true,
            start:"top 90%"
        }
    })
}
page3Animation()


function cursorEffect(){
    var circle = document.querySelectorAll('.circle')
document.addEventListener("mousemove",(e)=>{
    gsap.to("#cursor",{
        top: e.y,
        left: e.x
    })
})
    
circle.forEach(circle => {
    circle.addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
           transform:"scale(1)",
            duration: 0.3 
        });
    });

    circle.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
            transform:"scale(0)",
            duration: 0.3 
        });
    });
});

}
cursorEffect()