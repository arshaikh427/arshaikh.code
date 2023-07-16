gsap.from("#welcome #welcomepanel",{
  scale:0,
  duration:1,
  scrub:3
})
gsap.from("#section1 #box1",{
    scale:0,
    duration:1,
    scrub:3,
    scrollTrigger:"#section1 #box1"
  })
gsap.from("#section2 #box",{
    scale:0,
    duration:1,
    scrub:3,
    scrollTrigger:"#section2 #box"
  })
gsap.from("#section3 #box",{
    scale:0,
    duration:1,
    scrub:3,
    scrollTrigger:"#section3 #box"    
  })