
const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger2",
      start: "top",
     end: "center",
      scrub: true,
      pin: ".pin",
      markers: true
    }
  });
  
  
  
  
  tl4.fromTo(".screen-center", 
    {translateY:"-50", scale: 1.1,},
    {translateY:"-650", scale: 1, duration: 1},  "-=.4");

  tl4.fromTo(".screen-left", 
  {translateX:"80", rotate: "-11deg", duration: 1},
  {translateX:"0", translateY:"-100",  rotate: "0deg", transformOrigin: "center center"},
  "-=1");
  
  
  
  tl4.fromTo(".screen-right", 
  {translateX:"-80", rotate: "11deg", duration: 1},
  {translateX:"0", translateY:"350", rotate: "0deg", transformOrigin: "center center"},
  "-=1");
  
  
const tlC = gsap.timeline({
    scrollTrigger: {
      trigger: ".tc",
      start: "-100",
     end: "bottom",
    //   scrub: true,
    //   pin: ".pin",
      markers: true
    }
  });
  
  tlC.from(".content-box", 
        {translateX:"-80", opacity:0, duration: 1,});
        
        
      