gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {

  const mobileGroup = document.querySelector(".mobile-d-group");
const bigD = document.querySelector(".big-d-mobile");

const creativeMobile = document.querySelector(".creative-mobile");
const developerMobile = document.querySelector(".developer-mobile");
const dataMobile = document.querySelector(".data-mobile");
const scientistMobile = document.querySelector(".scientist-mobile");

let positionFrame = null;

function positionMobileTexts() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (
    !isMobile ||
    !mobileGroup ||
    !bigD ||
    !creativeMobile ||
    !developerMobile ||
    !dataMobile ||
    !scientistMobile
  ) {
    return;
  }

  const groupRect = mobileGroup.getBoundingClientRect();
  const dRect = bigD.getBoundingClientRect();

  const dTop = dRect.top - groupRect.top;
  const dBottom = dRect.bottom - groupRect.top;
  const dCenterX =
    dRect.left - groupRect.left + dRect.width / 2;

  /*
   * Configurações ajustáveis
   */
  const layout = {

    /* POSIÇÃO VERTICAL */

    creativeGap: -20,
    developerPosition: 0.5,
    dataGap: -15,
    scientistGap: 6,

    /* POSIÇÃO HORIZONTAL */

    groupOffsetX: 0,

    creativeOffsetX: -6.5,
    developerOffsetX: 0,
    dataOffsetX: -5,
    scientistOffsetX: -5
  };

  /*
   * LEFT
   */

  creativeMobile.style.left =
    `${dCenterX + layout.groupOffsetX + layout.creativeOffsetX}px`;

  developerMobile.style.left =
    `${dCenterX + layout.groupOffsetX + layout.developerOffsetX}px`;

  dataMobile.style.left =
    `${dCenterX + layout.groupOffsetX + layout.dataOffsetX}px`;

  scientistMobile.style.left =
    `${dCenterX + layout.groupOffsetX + layout.scientistOffsetX}px`;

  /*
   * TOP
   */

  const creativeTop =
    dTop -
    creativeMobile.offsetHeight -
    layout.creativeGap;

  creativeMobile.style.top = `${creativeTop}px`;

  const developerCenter =
    dTop + dRect.height * layout.developerPosition;

  const developerTop =
    developerCenter -
    developerMobile.offsetHeight / 2;

  developerMobile.style.top = `${developerTop}px`;

  const dataTop =
    dBottom +
    layout.dataGap;

  dataMobile.style.top = `${dataTop}px`;

  const scientistTop =
    dataTop +
    dataMobile.offsetHeight +
    layout.scientistGap;

  scientistMobile.style.top = `${scientistTop}px`;
}

function requestMobileTextPosition() {
  if (positionFrame) {
    cancelAnimationFrame(positionFrame);
  }

  positionFrame = requestAnimationFrame(() => {
    positionMobileTexts();
    positionFrame = null;
  });
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    requestMobileTextPosition();
  });
} else {
  requestMobileTextPosition();
}

window.addEventListener("resize", requestMobileTextPosition);

window.addEventListener(
  "orientationchange",
  requestMobileTextPosition
);

if ("ResizeObserver" in window && bigD) {
  const bigDObserver = new ResizeObserver(() => {
    requestMobileTextPosition();
  });

  bigDObserver.observe(bigD);
}

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
    scaleX: 2.8,
    scaleY: 3.5,
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

  gsap.to(".data-mobile, .scientist-mobile", {
  y: -320,
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


  const yellowTransition =
  document.querySelector(".yellow-transition");

const yellowTransitionStart = 
  isMobile ? 0.98: 0.99;

/*
 * Garante que o primeiro frame esteja visível
 * antes de o ScrollTrigger começar.
 */
sequence.frame = 1;
frame.src = getFrame(1);

if (yellowTransition) {
  gsap.set(yellowTransition, {
    opacity: 0
  });
}

gsap.to(sequence, {
  frame: frameCount,
  snap: "frame",
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,

    onUpdate: (self) => {
      if (yellowTransition) {
        const yellowOpacity = gsap.utils.clamp(
          0,
          1,
          (self.progress - yellowTransitionStart) /
          (1 - yellowTransitionStart)
        );

        gsap.set(yellowTransition, {
          opacity: yellowOpacity
        });
      }
    }
  },

  onUpdate: () => {
    const currentFrame = Math.round(sequence.frame);
    frame.src = getFrame(currentFrame);
  }
});

});