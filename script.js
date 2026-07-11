gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=1200",
      scrub: 1
    }
  });

  tl.to(".remove-letter", {
    opacity: 0,
    x: 0,
    stagger: 0.05,
    ease: "none"
  }, 0);

  tl.to(".i-letter", {
    scale: 2.5,
    color: "#ffffff",
    textShadow: `
      0 0 8px rgba(255,255,255,.6),
      0 0 18px rgba(255,255,255,.4),
      0 0 28px rgba(255,255,255,.2)
    `,
    ease: "none"
  }, 0);

  tl.to(".surname", {
    x: -50,
    color: "#ffffff",
    ease: "none"
  }, 0);

  tl.to("nav a", {
    color: "#ffffff",
    ease: "none"
  }, 0);

  gsap.set(".side-text", {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)"
  });

  gsap.to(".left-text, .right-text", {
    opacity: 0,
    scale: 2.5,
    filter: "blur(8px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=800",
      scrub: 1
    }
  });

  gsap.to(".big-d-mobile", {
    y: 320,
    scaleX: 1.1,
    scaleY: 1.5,
    opacity: 0,
    filter: "blur(8px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=800",
      scrub: 1
    }
  });

  gsap.to(".creative-mobile", {
  y: 320,
  opacity: 0,
  filter: "blur(8px)",
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=800",
    scrub: 1
  }
});
  
  gsap.to(".developer-mobile", {
    scale: 2.8,
    opacity: 0,
    filter: "blur(8px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=800",
      scrub: 1
    }
  });
  
  const frame = document.getElementById("sequence-frame");

  if (!frame) return;

  const isMobile = window.innerWidth <= 768;

  const basePath = isMobile
    ? "assets/frames/Mobile/Notebook_Mobile_Version"
    : "assets/frames/Desktop/NotebookFrame-jpg";

  const frameCount = isMobile ? 212 : 197;

  function getFrame(index) {
    const num = String(index).padStart(3, "0");
    return `${basePath}/ezgif-frame-${num}.jpg`;
  }

  frame.src = getFrame(1);

  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = getFrame(i);
  }

  const sequence = {
    frame: 1
  };

  gsap.to(sequence, {
    frame: frameCount,
    snap: "frame",
    ease: "none",

    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=1300",
      scrub: 1,
      pin: true
    },

    onUpdate: () => {
      frame.src = getFrame(sequence.frame);
    }
  });

});