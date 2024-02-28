gsap.from("header",{
    y:-100,
    duration:0.9,
    delay:1,
    opacity:0,
    stagger:0.5,
    color:"black"
    // scale:0
})
gsap.to(".imgcontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:1.5,
    stagger:2
})
gsap.to(".text h1",{
    // delay:1.5,
    ease:Expo.easeInOut,
    stagger:2,
    top:"0",
    
})
gsap.to(".text h1",{
    delay:1.5,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%",
    
})