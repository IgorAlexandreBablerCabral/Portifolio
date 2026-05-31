gsap.registerPlugin(ScrollTrigger);

/* ==========================
   ESTADOS INICIAIS
========================== */

gsap.set(".about-content", {
  opacity: 0,
  y: 30
});

gsap.set(".projects-title", {
  opacity: 0,
  y: 120
});

/* ==========================
   TIMELINE PRINCIPAL
========================== */

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=2500",
    scrub: 1.2, // 🔥 IMPORTANTE: suaviza e evita sumiço
    pin: true
  }
});

/* ==========================
   LOGO MORPH
========================== */

tl.to(".remove-letter", {

  opacity:0,

  x:-20,

  stagger:0.05

}, 0.15);

tl.to(".i-letter", {

  scale: 2.5,

  color: "#FFD700",

  textShadow: `
    0 0 8px rgba(255,215,0,.6),
    0 0 18px rgba(255,215,0,.4),
    0 0 28px rgba(255,215,0,.2)
  `,

  ease: "none"

}, 0.15);

tl.to(".surname", {

  x:-45

}, 0.25);

/* ==========================
   ZOOM VÍDEO
========================== */

tl.to(".hero video", {
  scale: 4,
  ease: "none"
}, 0);

/* ==========================
   ESCURECIMENTO
========================== */

tl.to(".overlay", {
  backgroundColor: "rgba(0,0,0,1)",
  ease: "none"
}, 0.2  );

/* ==========================
   TEXTOS LATERAIS
========================== */

tl.to(".side-text", {
  opacity: 0,
  y: 60
}, 0);

/* ==========================
   ABOUT ENTRA E SAI (MAIS LIMPO)
========================== */

tl.to(".about-content", {
  opacity: 1,
  y: 0,
  ease: "none"
}, 0.45);

tl.to(".about-content", {
  opacity: 0,
  y: -40,
  ease: "none"
}, 0.5);

/* ==========================
   PROJECTS ENTRA (FORÇADO E LIMPO)
========================== */

tl.to(".projects-title", {
  opacity: 1,
  y: -40,
  ease: "power2.out"
}, 0.75);

/* ==========================
   GARANTE VISIBILIDADE FINAL
========================== */

tl.set(".projects-title", {
  opacity: 1,
  y: 0
}, 1);
