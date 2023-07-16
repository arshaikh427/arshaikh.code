gsap.from("#welcome #welcomepanel",{
  scale:0,
  duration:1,
  scrub:3
})
gsap.from("#section1 #box1",{
    opacity:0,
    duration:1,
    scrub:3,
    scrollTrigger:{
      trigger: "#section1 #box1",
      scroller: "body",
      start: "top 50%",
      end: "top 50%",
      scrub:5
    }
  })
  gsap.from("#section2 #box2",{
    opacity:0,
    duration:1,
    scrub:3,
    scrollTrigger:{
      trigger: "#section2 #box2",
      scroller: "body",
      start: "top 30%",
      end: "top 50%",
      scrub:5
    }
  })
  gsap.from("#section3 #box3",{
    opacity:0,
    duration:1,
    scrub:3,
    scrollTrigger:{
      trigger: "#section3 #box3",
      scroller: "body",
      start: "top 50%",
      end: "top 50%",
      scrub:5
    }
  })
