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
}, 0.3);

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
