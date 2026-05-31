gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({

  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"+=2500",
    scrub:true,
    pin:true
  }

});

/* ZOOM DO VÍDEO */

tl.to(".hero video",{

  scale:2.5,

  ease:"none",

  duration:1

},0);

/* ESCURECIMENTO */

tl.to(".overlay",{

  backgroundColor:"rgba(0,0,0,1)",

  duration:1

},0);

/* TEXTOS SOMEM */

tl.to(".side-text",{

  opacity:0,

  duration:.5

},0);

/* ABOUT APARECE NO CENTRO */

tl.to(".about-content",{

  opacity:1,

  duration:.7

},0.4);
tl.to(".projects-title", {

  opacity: 1,

  y: 0,

  duration: 0.6

}, 0.65);
