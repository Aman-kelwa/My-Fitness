const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoconAnimation(){ 
    var videocon= document.querySelector("#video-container")
    var playbtn= document.querySelector("#play")
    
videocon.addEventListener("mouseenter",function(dets){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
        
    })
    

})

gsap.to("#nav",{
    backgroundColor:"#fff",
    duration:.5,
    height:"100x",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10",
        end:"top -11",
        scrub:1
    }
})
videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            sacle:0,
            opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left:dets.x-75,
            top:dets.y-70

        })

})
}
videoconAnimation()

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.2
    })
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.2,
        duration:0.6,
        
    })
}
loadingAnimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y

    })

})



document.querySelector("#ftext button")
.addEventListener("mouseover",function(){
    gsap.to("#page3 video",{
        opacity:1,
        duration:1.5,
        ease:Power4
    })
    
})

document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
    gsap.to("#page3 video",{
        opacity:0,
        duration:1,
        ease:Power4
    })
})









