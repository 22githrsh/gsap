// gsap.to(".page img",{
//     left:"50%",
//     duration:6,
//     delay:2
// })

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page",
    start:"top top",
    end:"50% top",
    pin:true,
    markers:true,
    scrub:true
  }
})
tl
.to(".image0",{
    left:"50%"
})
.to(".image1",{
    left:"50%"
})
.to(".image2",{
    left:"50%"
})
.to(".image3",{
    left:"50%"
})