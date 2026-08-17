gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

/*
 * ========================================
 * PROJECTS DATA (MULTILANGUAGE)
 * ========================================
 */

const projectsData = {
  pt: {
    1: {
      title: "Machine Learning — Projeto Read.Me",
      description:
        "Readme é um projeto em desenvolvimento que investiga o quão atrativo uma leitura pode ser para uma pessoa, considerando seus interesses pessoais e padrões de consumo de conteúdo. O sistema é composto por três ambientes isolados que trabalham em conjunto. O primeiro ambiente realiza a coleta de dados do usuário — frequência de leitura, interesses pessoais e preferências — e o submete a testes que calculam métricas de velocidade de leitura, estabelecendo uma base quantitativa como indicador principal de interesse por conteúdo lido. O segundo ambiente é um módulo de treinamento de Inteligência Artificial, alimentado por livros renomeados sobre leitura e interesse por literatura, que aprende a apresentar leituras de forma personalizada para cada usuário, utilizando métricas matemáticas internas e adaptáveis. O terceiro ambiente é um cenário de leituras rápidas que utiliza Web Scraping em diversos blogs online para expor o usuário a conteúdos alinhados com seus interesses declarados no primeiro ambiente. As interações do usuário com esses textos atualizam continuamente as métricas da IA, gerando dados sobre a personalidade de leitura — úteis para criar perfis semelhantes para outros usuários com padrões parecidos — e sobre o desempenho por categoria de interesse. Os dados refinados retornam ao segundo ambiente, criando correlações que permitem ao sistema prever quais conteúdos oferecer, em que tom e estilo de escrita. O objetivo final é a criação de um aplicativo de jornal inteligente que entregue ao leitor apenas as informações que realmente importam, no formato que mais lhe engaja.",
      tech: ["Python", "Machine Learning", "Web Scraping"],
      image: "assets/images/projects/project-1-detail.jpg"
    },
    2: {
      title: "Projeto 2",
      description:
        "Descrição detalhada do projeto 2. Informações sobre as tecnologias utilizadas, o processo de desenvolvimento e os resultados alcançados.",
      tech: ["Python", "TensorFlow", "Pandas"],
      image: "assets/images/projects/project-2-detail.jpg"
    },
    3: {
      title: "Projeto 3",
      description:
        "Descrição detalhada do projeto 3. Informações sobre as tecnologias utilizadas, o processo de desenvolvimento e os resultados alcançados.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "assets/images/projects/project-3-detail.jpg"
    },
    4: {
      title: "Projeto 4",
      description:
        "Descrição detalhada do projeto 4. Informações sobre as tecnologias utilizadas, o processo de desenvolvimento e os resultados alcançados.",
      tech: ["Unity", "C#", "Blender"],
      image: "assets/images/projects/project-4-detail.jpg"
    },
    5: {
      title: "Projeto 5",
      description:
        "Descrição detalhada do projeto 5. Informações sobre as tecnologias utilizadas, o processo de desenvolvimento e os resultados alcançados.",
      tech: ["Three.js", "GSAP", "WebGL"],
      image: "assets/images/projects/project-5-detail.jpg"
    }
  },

  en: {
    1: {
      title: "Machine Learning — Project Read.Me",
      description:
        "Readme is an ongoing project that explores how engaging reading can be for an individual, taking into account personal interests and content consumption patterns. The system consists of three isolated environments working in synergy. The first environment collects user data — reading frequency, personal interests, and preferences — and subjects them to tests that calculate reading speed metrics, establishing a quantitative baseline as the primary indicator of interest in written content. The second environment is an Artificial Intelligence training module, fed by renowned books on reading and literary interest, that learns how to present readings in a personalized way for each user using internal and adaptive mathematical metrics. The third environment is a fast-reading scenario that uses Web Scraping across multiple online blogs to expose the user to content aligned with their declared interests from the first environment. User interactions with these texts continuously update the AI metrics, generating data on reading personality — useful for creating similar profiles for users with comparable patterns — and on performance by interest category. The refined data flows back to the second environment, creating correlations that allow the system to predict which content to offer, in what tone and writing style. The ultimate goal is the creation of an intelligent news app that delivers to the reader only the information that truly matters, in the format that engages them the most.",
      tech: ["Python", "Machine Learning", "Web Scraping"],
      image: "assets/images/projects/project-1-detail.jpg"
    },
    2: {
      title: "Project 2",
      description:
        "Detailed description of project 2. Information about the technologies used, the development process, and the results achieved.",
      tech: ["Python", "TensorFlow", "Pandas"],
      image: "assets/images/projects/project-2-detail.jpg"
    },
    3: {
      title: "Project 3",
      description:
        "Detailed description of project 3. Information about the technologies used, the development process, and the results achieved.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "assets/images/projects/project-3-detail.jpg"
    },
    4: {
      title: "Project 4",
      description:
        "Detailed description of project 4. Information about the technologies used, the development process, and the results achieved.",
      tech: ["Unity", "C#", "Blender"],
      image: "assets/images/projects/project-4-detail.jpg"
    },
    5: {
      title: "Project 5",
      description:
        "Detailed description of project 5. Information about the technologies used, the development process, and the results achieved.",
      tech: ["Three.js", "GSAP", "WebGL"],
      image: "assets/images/projects/project-5-detail.jpg"
    }
  },

  es: {
    1: {
      title: "Machine Learning — Proyecto Read.Me",
      description:
        "Readme es un proyecto en desarrollo que investiga lo atractiva que puede ser una lectura para una persona, teniendo en cuenta sus intereses personales y patrones de consumo de contenido. El sistema se compone de tres entornos aislados que trabajan en conjunto. El primer entorno recopila datos del usuario — frecuencia de lectura, intereses personales y preferencias — y lo somete a pruebas que calculan métricas de velocidad de lectura, estableciendo una base cuantitativa como indicador principal de interés por el contenido leído. El segundo entorno es un módulo de entrenamiento de Inteligencia Artificial, alimentado por libros reconocidos sobre lectura e interés literario, que aprende a presentar lecturas de forma personalizada para cada usuario utilizando métricas matemáticas internas y adaptables. El tercer entorno es un escenario de lecturas rápidas que utiliza Web Scraping en diversos blogs en línea para exponer al usuario a contenidos alineados con sus intereses declarados en el primer entorno. Las interacciones del usuario con estos textos actualizan continuamente las métricas de la IA, generando datos sobre la personalidad de lectura — útiles para crear perfiles similares para usuarios con patrones comparables — y sobre el rendimiento por categoría de interés. Los datos refinados regresan al segundo entorno, creando correlaciones que permiten al sistema predecir qué contenidos ofrecer, en qué tono y estilo de escritura. El objetivo final es la creación de una aplicación de periódico inteligente que entregue al lector solo la información que realmente importa, en el formato que más lo enganche.",
      tech: ["Python", "Machine Learning", "Web Scraping"],
      image: "assets/images/projects/project-1-detail.jpg"
    },
    2: {
      title: "Proyecto 2",
      description:
        "Descripción detallada del proyecto 2. Información sobre las tecnologías utilizadas, el proceso de desarrollo y los resultados alcanzados.",
      tech: ["Python", "TensorFlow", "Pandas"],
      image: "assets/images/projects/project-2-detail.jpg"
    },
    3: {
      title: "Proyecto 3",
      description:
        "Descripción detallada del proyecto 3. Información sobre las tecnologías utilizadas, el proceso de desarrollo y los resultados alcanzados.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "assets/images/projects/project-3-detail.jpg"
    },
    4: {
      title: "Proyecto 4",
      description:
        "Descripción detallada del proyecto 4. Información sobre las tecnologías utilizadas, el proceso de desarrollo y los resultados alcanzados.",
      tech: ["Unity", "C#", "Blender"],
      image: "assets/images/projects/project-4-detail.jpg"
    },
    5: {
      title: "Proyecto 5",
      description:
        "Descripción detallada del proyecto 5. Información sobre las tecnologías utilizadas, el proceso de desarrollo y los resultados alcanzados.",
      tech: ["Three.js", "GSAP", "WebGL"],
      image: "assets/images/projects/project-5-detail.jpg"
    }
  },

  sv: {
    1: {
      title: "Machine Learning — Projekt Read.Me",
      description:
        "Readme är ett pågående projekt som utforskar hur engagerande läsning kan vara för en individ, med hänsyn till personliga intressen och innehållsvanor. Systemet består av tre isolerade miljöer som samverkar. Den första miljön samlar in användardata — läsfrekvens, personliga intressen och preferenser — och utsätter dem för tester som beräknar läshastighetsmått och etablerar en kvantitativ bas som huvudsakligt intresseindikator för skriftligt innehåll. Den andra miljön är en AI-träningsmodul, fodd med erkända böcker om läsning och litterärt intresse, som lär sig att presentera läsning på ett personligt sätt för varje användare med hjälp av interna och adaptiva matematiska mått. Den tredje miljön är ett snabbläsningsscenario som använder webbskrapning från flera bloggar online för att exponera användaren för innehåll som överensstämmer med deras angivna intressen från den första miljön. Användarens interaktioner med dessa texter uppdaterar kontinuerligt AI-mätten och genererar data om läspersonlighet — användbart för att skapa liknande profiler för användare med jämförbara mönster — samt om prestanda per intressekategori. De förädlade data flödar tillbaka till den andra miljön och skapar korrelationer som gör det möjligt för systemet att förutsäga vilket innehåll som ska erbjudas, i vilken ton och skrivstil. Det slutliga målet är att skapa en intelligent nyhetsapp som levererar till läsaren enbart den information som verkligen betyder något, i det format som engagerar mest.",
      tech: ["Python", "Machine Learning", "Web Scraping"],
      image: "assets/images/projects/project-1-detail.jpg"
    },
    2: {
      title: "Projekt 2",
      description:
        "Detaljerad beskrivning av projekt 2. Information om teknikerna som användes, utvecklingsprocessen och de resultat som uppnåddes.",
      tech: ["Python", "TensorFlow", "Pandas"],
      image: "assets/images/projects/project-2-detail.jpg"
    },
    3: {
      title: "Projekt 3",
      description:
        "Detaljerad beskrivning av projekt 3. Information om teknikerna som användes, utvecklingsprocessen och de resultat som uppnåddes.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "assets/images/projects/project-3-detail.jpg"
    },
    4: {
      title: "Projekt 4",
      description:
        "Detaljerad beskrivning av projekt 4. Information om teknikerna som användes, utvecklingsprocessen och de resultat som uppnåddes.",
      tech: ["Unity", "C#", "Blender"],
      image: "assets/images/projects/project-4-detail.jpg"
    },
    5: {
      title: "Projekt 5",
      description:
        "Detaljerad beskrivning av projekt 5. Information om teknikerna som användes, utvecklingsprocessen och de resultat som uppnåddes.",
      tech: ["Three.js", "GSAP", "WebGL"],
      image: "assets/images/projects/project-5-detail.jpg"
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {

  const bgMusic = document.getElementById("bg-music");

  const musicPlayer =
    document.querySelector(".music-player");

  const playPauseBtn =
    document.querySelector(".play-pause-btn");

  const progressTrack =
    document.querySelector(".progress-track");

  const progressFill =
    document.querySelector(".progress-fill");
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

    const layout = {
      creativeGap: -20,
      developerPosition: 0.5,
      dataGap: -15,
      scientistGap: 6,

      groupOffsetX: 0,

      creativeOffsetX: -6.5,
      developerOffsetX: 0,
      dataOffsetX: -5,
      scientistOffsetX: -5
    };

    creativeMobile.style.left =
      `${dCenterX + layout.groupOffsetX + layout.creativeOffsetX}px`;

    developerMobile.style.left =
      `${dCenterX + layout.groupOffsetX + layout.developerOffsetX}px`;

    dataMobile.style.left =
      `${dCenterX + layout.groupOffsetX + layout.dataOffsetX}px`;

    scientistMobile.style.left =
      `${dCenterX + layout.groupOffsetX + layout.scientistOffsetX}px`;

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

  window.addEventListener(
    "resize",
    requestMobileTextPosition
  );

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

  /*
   * ========================================
   * ANIMAÇÃO DO HEADER
   * ========================================
   */

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=1200",
      scrub: 1
    }
  });

  tl.to(
    ".remove-letter",
    {
      opacity: 0,
      x: 0,
      stagger: 0.05,
      ease: "none"
    },
    0
  );

  tl.to(
    ".i-letter",
    {
      scale: 2.5,
      color: "#ffffff",

      textShadow: `
        0 0 8px rgba(255,255,255,.6),
        0 0 18px rgba(255,255,255,.4),
        0 0 28px rgba(255,255,255,.2)
      `,

      ease: "none"
    },
    0
  );

  tl.to(
    ".surname",
    {
      x: -50,
      color: "#ffffff",
      ease: "none"
    },
    0
  );

  tl.to(
    "nav a",
    {
      color: "#ffffff",
      ease: "none"
    },
    0
  );

  /*
   * ========================================
   * ANIMAÇÕES DOS TEXTOS DO HERO
   * ========================================
   */

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

  /*
   * ========================================
   * SEQUÊNCIA DE FRAMES
   * ========================================
   */

  const frame = document.getElementById("sequence-frame");

  if (!frame) {
    console.warn(
      'Elemento "#sequence-frame" não encontrado.'
    );

    return;
  }

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
    isMobile ? 0.98 : 0.99;

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

        const header =
          document.querySelector("header");

        if (header) {
          if (self.progress >= 0.999) {
            header.classList.add("about-mode");
          } else {
            header.classList.remove("about-mode");
          }
        }
      }
    },

    onUpdate: () => {
      const currentFrame =
        Math.round(sequence.frame);

      frame.src = getFrame(currentFrame);
    }
  });

  /*
   * ========================================
   * ABOUT ME — TÍTULO
   * ========================================
   */

  const aboutHeading =
    document.querySelector(".about-heading");

  const aboutTitle =
    document.querySelector(".about-title");

  const aboutDivider =
    document.querySelector(".about-divider");

  if (
    aboutHeading &&
    aboutTitle &&
    aboutDivider
  ) {
    gsap.set(aboutHeading, {
      autoAlpha: 0
    });

    gsap.set(aboutTitle, {
      scale: 0.94,
      filter: "blur(12px)"
    });

    gsap.set(aboutDivider, {
      autoAlpha: 0,
      scaleX: 0
    });

    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".yellow-section",
        start: "top 99%",
        end: "top 40%",
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    aboutTimeline
      .to(
        aboutHeading,
        {
          autoAlpha: 1,
          duration: 1,
          ease: "none"
        },
        0
      )

      .to(
        aboutTitle,
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "none"
        },
        0
      )

      .to(
        aboutDivider,
        {
          autoAlpha: 1,
          scaleX: 1,
          duration: 0.5,
          ease: "none"
        },
        0.45
      );
  }

  /*
   * ========================================
   * ABOUT ME — PRIMEIRO TEXTO
   * ========================================
   */

  const aboutFirstParagraph =
    document.querySelector(".about-first-text p");

  if (aboutFirstParagraph) {
    const isDesktop = window.innerWidth > 768;

    gsap.fromTo(
      aboutFirstParagraph,
      {
        xPercent: 110,
        autoAlpha: 0,
        filter: "blur(8px)"
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        ease: "none",

        scrollTrigger: {
          trigger: isDesktop
            ? ".yellow-section"
            : ".about-first-text",

          start: isDesktop
            ? "top 25%"
            : "top 90%",

          end: isDesktop
            ? "top 5%"
            : "top 50%",

          scrub: 1,
          invalidateOnRefresh: true
        }
      }
    );
  }

  /*
   * ========================================
   * ABOUT ME — SEGUNDO TEXTO
   * ========================================
   */

  const aboutSecondParagraph =
    document.querySelector(".about-second-text p");

  if (aboutSecondParagraph) {
    const isDesktop2 = window.innerWidth > 768;

    gsap.fromTo(
      aboutSecondParagraph,
      {
        xPercent: -110,
        autoAlpha: 0,
        filter: "blur(8px)"
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        ease: "none",

        scrollTrigger: {
          trigger: ".about-second-text",
          start: isDesktop2
            ? "top 85%"
            : "top 80%",
          end: isDesktop2
            ? "top 50%"
            : "top 60%",
          scrub: 1,
          invalidateOnRefresh: true
        }
      }
    );
  }

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

  /*
   * ========================================
   * ABOUT ME — TERCEIRO TEXTO
   * ========================================
   */

  const aboutThirdParagraph =
    document.querySelector(".about-third-text p");

  if (aboutThirdParagraph) {
    const isDesktop3 = window.innerWidth > 768;

    gsap.fromTo(
      aboutThirdParagraph,
      {
        yPercent: 60,
        autoAlpha: 0,
        filter: "blur(8px)"
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        ease: "none",

        scrollTrigger: {
          trigger: ".about-third-text",
          start: isDesktop3
            ? "top 90%"
            : "top 85%",
          end: isDesktop3
            ? "top 55%"
            : "top 65%",
          scrub: 1,
          invalidateOnRefresh: true
        }
      }
    );
  }

  /*
   * ========================================
   * ENTER BUTTON
   * ========================================
   */

  const enterBtn =
    document.querySelector(".enter-btn");

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {

      if (bgMusic && bgMusic.paused) {
        bgMusic.volume = 0.5;
        bgMusic.play().then(() => {
          if (musicPlayer) {
            musicPlayer.classList.add("playing");
          }
        }).catch(() => {});
      }

      const yellowSection =
        document.querySelector(".yellow-section");

      if (yellowSection) {
        const targetY =
          yellowSection.getBoundingClientRect().top +
          window.pageYOffset;

        gsap.to(window, {
          scrollTo: {
            y: targetY,
            autoKill: false
          },
          duration: 4,
          ease: "power2.inOut"
        });
      }

      enterBtn.classList.add("hidden");
    });
  }

  /*
   * ========================================
   * MUSIC PLAYER
   * ========================================
   */

  if (musicPlayer && bgMusic && playPauseBtn) {

    const playerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            musicPlayer.classList.add("visible");
            playerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    playerObserver.observe(musicPlayer);

    let musicStarted = false;

    function startMusic() {
      if (musicStarted) return;
      musicStarted = true;

      bgMusic.volume = 0.5;
      bgMusic.play().then(() => {
        musicPlayer.classList.add("playing");
      }).catch(() => {
        musicStarted = false;
      });
    }

    startMusic();

    const interactionEvents = [
      "click",
      "mousedown",
      "touchstart",
      "keydown",
      "pointerdown"
    ];

    function onFirstInteraction() {
      startMusic();
      if (musicStarted) {
        interactionEvents.forEach((evt) => {
          window.removeEventListener(evt, onFirstInteraction);
        });
      }
    }

    interactionEvents.forEach((evt) => {
      window.addEventListener(evt, onFirstInteraction);
    });

    playPauseBtn.addEventListener("click", () => {
      if (bgMusic.paused) {
        bgMusic.play();
        musicPlayer.classList.add("playing");
      } else {
        bgMusic.pause();
        musicPlayer.classList.remove("playing");
      }
    });

    bgMusic.addEventListener("pause", () => {
      musicPlayer.classList.remove("playing");
    });

    bgMusic.addEventListener("play", () => {
      musicPlayer.classList.add("playing");
    });

    bgMusic.addEventListener("timeupdate", () => {
      if (bgMusic.duration) {
        const percent =
          (bgMusic.currentTime / bgMusic.duration) * 100;
        progressFill.style.width = `${percent}%`;
      }
    });

    progressTrack.addEventListener("click", (e) => {
      const rect =
        progressTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = clickX / rect.width;
      bgMusic.currentTime =
        percent * bgMusic.duration;
    });

    bgMusic.addEventListener("ended", () => {
      progressFill.style.width = "0%";
    });
  }

  /*
   * ========================================
   * GALLERY
   * ========================================
   */

  const gallerySlider =
    document.querySelector(".gallery-slider");

  const galleryCards =
    document.querySelectorAll(".gallery-card");

  const arrowLeft =
    document.querySelector(".gallery-arrow-left");

  const arrowRight =
    document.querySelector(".gallery-arrow-right");

  const galleryDots =
    document.querySelector(".gallery-dots");

  const projectDetail =
    document.querySelector(".project-detail");

  const backToGallery =
    document.querySelector(".back-to-gallery");

  if (gallerySlider && galleryCards.length > 0) {

    let currentIndex = 0;

    function getVisibleCount() {
      const viewport =
        document.querySelector(".gallery-viewport");

      if (!viewport) return 1;

      const card = galleryCards[0];
      const cardWidth =
        card.offsetWidth +
        parseFloat(getComputedStyle(gallerySlider).gap || 24);

      return Math.max(
        1,
        Math.floor(viewport.offsetWidth / cardWidth)
      );
    }

    function getMaxIndex() {
      return Math.max(
        0,
        galleryCards.length - getVisibleCount()
      );
    }

    function updateSlider() {
      const card = galleryCards[0];
      const gap =
        parseFloat(getComputedStyle(gallerySlider).gap) || 24;

      const offset = currentIndex * (card.offsetWidth + gap);
      gallerySlider.style.transform =
        `translateX(-${offset}px)`;

      updateDots();
    }

    function createDots() {
      if (!galleryDots) return;
      galleryDots.innerHTML = "";

      const max = getMaxIndex() + 1;

      for (let i = 0; i < max; i++) {
        const dot = document.createElement("button");
        dot.classList.add("gallery-dot");

        if (i === currentIndex) {
          dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
          currentIndex = i;
          updateSlider();
        });

        galleryDots.appendChild(dot);
      }
    }

    function updateDots() {
      const dots =
        document.querySelectorAll(".gallery-dot");

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    if (arrowLeft) {
      arrowLeft.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
        }
      });
    }

    if (arrowRight) {
      arrowRight.addEventListener("click", () => {
        if (currentIndex < getMaxIndex()) {
          currentIndex++;
          updateSlider();
        }
      });
    }

    createDots();
    updateSlider();

    window.addEventListener("resize", () => {
      currentIndex = Math.min(currentIndex, getMaxIndex());
      createDots();
      updateSlider();
    });

    /*
     * ========================================
     * PROJETO DETAIL
     * ========================================
     */

    function openProject(projectId) {
  const langData =
    projectsData[currentLanguage] || projectsData.pt;

  const data = langData[projectId];
  if (!data || !projectDetail) return;

  const detailTitle =
    projectDetail.querySelector(".detail-title");

  const detailDesc =
    projectDetail.querySelector(".detail-description");

  const detailTech =
    projectDetail.querySelector(".detail-tech");

  const detailImage =
    projectDetail.querySelector(".detail-image");

  if (detailTitle) detailTitle.textContent = data.title;
  if (detailDesc) detailDesc.textContent = data.description;

  if (detailTech) {
    detailTech.innerHTML = "";
    data.tech.forEach((t) => {
      const tag = document.createElement("span");
      tag.classList.add("tech-tag");
      tag.textContent = t;
      detailTech.appendChild(tag);
    });
  }

  if (detailImage) detailImage.src = data.image;

  projectDetail.dataset.openProject = projectId;

  projectDetail.classList.add("active");
  projectDetail.setAttribute("aria-hidden", "false");
}

    function closeProject() {
      if (!projectDetail) return;
      projectDetail.classList.remove("active");
      projectDetail.setAttribute("aria-hidden", "true");
      projectDetail.dataset.openProject = "";
    }

    galleryCards.forEach((card) => {
      card.addEventListener("click", () => {
        const projectId = card.dataset.project;
        openProject(projectId);
      });
    });

    if (backToGallery) {
      backToGallery.addEventListener("click", closeProject);
    }
  }

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

}); // Fim do DOMContentLoaded

/* ========================================
   LANGUAGE SYSTEM
======================================== */

let currentLanguage =
  localStorage.getItem("portfolio-language") || "pt";

const translations = {
  pt: {
    aboutTitle: "Sobre Mim",

    aboutIntro:
      "Meu nome é Igor Alexandre Babler Cabral, brasileiro e apaixonado por tecnologia, design e inovação. Minha trajetória profissional me levou por diferentes áreas da tecnologia, passando pela análise de dados na equipe de engenharia de satélites da Sencinet, pelo desenvolvimento de soluções web na Sheep Ideas e pela gestão de atividades e pessoas na Toledo do Brasil. Essa combinação de experiências me proporcionou uma visão versátil, unindo pensamento analítico, desenvolvimento de software e liderança. Atualmente, dedico meu tempo ao desenvolvimento de projetos pessoais, onde experimento novas tecnologias, aperfeiçoo minhas habilidades e transformo ideias em experiências digitais que refletem minha paixão por criar soluções modernas e bem construídas.",

    aboutProjects:
    "Minha paixão por tecnologia também está profundamente conectada ao meu lado criativo. Tenho grande interesse por música, ambientação sonora, modelagem 3D e edição de vídeos e imagens, áreas que frequentemente incorporo aos meus trabalhos para criar experiências mais completas e envolventes. Meus projetos variam desde o desenvolvimento de sistemas preditivos utilizando inteligência artificial e a construção de bancos de dados estruturados até iniciativas mais leves e descontraídas, como uma página voltada ao ensino de T.I. com uma abordagem humorística e acessível. Também exploro o desenvolvimento de jogos independentes, combinando programação, narrativa, identidade visual e design sonoro. Independentemente da tecnologia, do formato ou da complexidade, o mais importante para mim é manter sempre acesa a paixão por transformar ideias em projetos, experimentar novas possibilidades e continuar aprendendo durante cada etapa do processo.",

    aboutEducation:
    "Sou formado em Ciência de Dados pela Escola Britânica de Artes Criativas (EBAC) e atualmente curso Análise e Desenvolvimento de Sistemas na Universidade Metrocamp, em Campinas (São Paulo). Meu objetivo é atuar na área de dados, adquirindo experiência e bagagem suficientes para, no futuro, me tornar um gerente de projetos — unindo aquilo que mais me move e motiva: a criação e o desenvolvimento de projetos que geram impacto real. Abaixo, você pode conferir alguns dos meus projetos, tanto concluídos quanto em desenvolvimento.",

    projectsTitle: "Clique para ver mais sobre meus projetos",

    backToGallery: "Voltar",

    footerText: "Caso queira iniciar uma parceria, entre em contato"
  },

  en: {
    aboutTitle: "About Me",

    aboutIntro:
      "My name is Igor Alexandre Babler Cabral, and I am a Brazilian software developer passionate about technology, design, and innovation. Throughout my career, I have had the opportunity to work across different areas of the tech industry, from data analysis within Sencinet's Satellite Engineering Team to web development at Sheep Ideas and operations and people management at Toledo do Brasil. These diverse experiences have given me a broad perspective that combines analytical thinking, software engineering, and leadership. Today, I dedicate part of my time to personal projects, where I explore emerging technologies, refine my skills, and transform ideas into digital experiences that reflect my passion for creating modern and thoughtfully crafted solutions.",

    aboutProjects:
    "My passion for technology is also deeply connected to my creative side. I have a strong interest in music, sound design, 3D modeling, and video and image editing — areas I frequently incorporate into my work to create more complete and engaging experiences. My projects range from developing predictive systems using artificial intelligence and building structured databases to lighter, more casual initiatives, such as a page dedicated to teaching IT with a humorous and accessible approach. I also explore indie game development, combining programming, narrative, visual identity, and sound design. Regardless of the technology, format, or complexity, the most important thing for me is to always keep the passion for turning ideas into projects alive, experiment with new possibilities, and continue learning through every stage of the process.",

    aboutEducation:
    "I hold a degree in Data Science from the British School of Creative Arts (EBAC) and I am currently pursuing a degree in Systems Analysis and Development at Metrocamp University, in Campinas (São Paulo). My goal is to build a career in the data field, gaining the experience and expertise needed to eventually become a project manager — combining what drives and motivates me the most: the creation and development of impactful projects. Below, you can explore some of my projects, both completed and currently in development.",

    projectsTitle: "Click to learn more about my projects",

    backToGallery: "Back",

    footerText: "If you'd like to start a partnership, get in touch"
  },

  es: {
    aboutTitle: "Sobre Mí",

    aboutIntro:
      "Mi nombre es Igor Alexandre Babler Cabral, soy brasileño y un apasionado de la tecnología, el diseño y la innovación. A lo largo de mi trayectoria profesional, he tenido la oportunidad de desempeñarme en diferentes áreas del sector tecnológico, desde el análisis de datos en el equipo de ingeniería de satélites de Sencinet hasta el desarrollo de soluciones web en Sheep Ideas y la gestión de actividades y equipos en Toledo do Brasil. Esta combinación de experiencias me ha permitido desarrollar una visión integral que une el pensamiento analítico, el desarrollo de software y el liderazgo. Actualmente dedico parte de mi tiempo a proyectos personales, donde experimento con nuevas tecnologías, perfecciono mis habilidades y transformo ideas en experiencias digitales que reflejan mi pasión por crear soluciones modernas y bien desarrolladas.",

    aboutProjects:
    "Mi pasión por la tecnología también está profundamente conectada con mi lado creativo. Tengo un gran interés por la música, el diseño sonoro, el modelado 3D y la edición de vídeos e imágenes, áreas que frecuentemente incorporo en mis trabajos para crear experiencias más completas y envolventes. Mis proyectos van desde el desarrollo de sistemas predictivos utilizando inteligencia artificial y la construcción de bases de datos estructuradas hasta iniciativas más ligeras y desenfadadas, como una página dedicada a la enseñanza de T.I. con un enfoque humorístico y accesible. También exploro el desarrollo de juegos independientes, combinando programación, narrativa, identidad visual y diseño sonoro. Independientemente de la tecnología, el formato o la complejidad, lo más importante para mí es mantener siempre viva la pasión por convertir ideas en proyectos, experimentar con nuevas posibilidades y seguir aprendiendo en cada etapa del proceso.",

    aboutEducation:
    "Soy egresado de Ciencia de Datos por la Escuela Británica de Artes Creativas (EBAC) y actualmente curso Análisis y Desarrollo de Sistemas en la Universidad Metrocamp, en Campinas (São Paulo). Mi objetivo es desarrollarme en el área de datos, adquiriendo experiencia y conocimientos suficientes para, en el futuro, convertirme en un gestor de proyectos — uniendo lo que más me impulsa y motiva: la creación y el desarrollo de proyectos que generen un impacto real. A continuación, puedes ver algunos de mis proyectos, tanto concluidos como en desarrollo.",

    projectsTitle: "Haz clic para saber más sobre mis proyectos",

    backToGallery: "Volver",

    footerText: "Si deseas iniciar una alianza, ponte en contacto"
  },

  sv: {
    aboutTitle: "Om Mig",

    aboutIntro:
      "Jag heter Igor Alexandre Babler Cabral och är en brasiliansk mjukvaruutvecklare med en stark passion för teknik, design och innovation. Under min karriär har jag arbetat inom flera olika områden, från dataanalys i Sencinets satellitingenjörsteam till webbutveckling på Sheep Ideas samt verksamhets- och personalledning på Toledo do Brasil. Dessa erfarenheter har gett mig ett brett perspektiv där analytiskt tänkande, mjukvaruutveckling och ledarskap går hand i hand. Idag ägnar jag en del av min tid åt personliga projekt där jag utforskar ny teknik, utvecklar mina färdigheter och omvandlar idéer till digitala upplevelser som speglar min passion för att skapa moderna och genomtänkta lösningar.",

    aboutProjects:
    "Min passion för teknik är också djupt förknippad med min kreativa sida. Jag har ett stort intresse för musik, ljuddesign, 3D-modellering samt redigering av filmer och bilder — områden som jag ofta integrerar i mitt arbete för att skapa mer fullständiga och engagerande upplevelser. Mina projekt sträcker sig från utveckling av prediktiva system med hjälp av artificiell intelligens och byggande av strukturerade databaser till lättare och mer avslappnade initiativ, som en sida ämnad för IT-undervisning med ett humoristiskt och tillgängligt tillvägagångssätt. Jag utforskar även indie-spelutveckling där jag kombinerar programmering, berättande, visuell identitet och ljuddesign. Oavsett teknik, format eller komplexitet är det viktigaste för mig att alltid bibehålla passionen för att förvandla idéer till projekt, experimentera med nya möjligheter och fortsätta lära mig genom varje steg i processen.",

    aboutEducation:
    "Jag är examinerad i data vid British School of Creative Arts (EBAC) och studerar för närvarande systemanalys och systemutveckling vid Metrocamp University i Campinas (São Paulo). Mitt mål är att arbeta inom dataområdet och skapa mig tillräcklig erfarenhet och kompetens för att i framtiden bli projektledare — där jag förenar det som driver och motiverar mig mest: att skapa och utveckla projekt som gör verklig skillnad. Nedan kan du utforska några av mina projekt, både färdiga och under utveckling.",

    projectsTitle: "Klicka för att läsa mer om mina projekt",

    backToGallery: "Tillbaka",

    footerText: "Om du vill starta ett samarbete, kontakta mig"
  }
};

const languageButtons =
  document.querySelectorAll(".language-button");

const translatedElements =
  document.querySelectorAll("[data-i18n]");

function changeLanguage(language) {
  const selectedTranslation =
    translations[language];

  if (!selectedTranslation) {
    console.warn(
      `Idioma não encontrado: ${language}`
    );
    return;
  }

  currentLanguage = language;

  translatedElements.forEach((element) => {
    const translationKey =
      element.dataset.i18n;

    const translatedText =
      selectedTranslation[translationKey];

    if (translatedText !== undefined) {
      element.textContent = translatedText;
    }
  });

  languageButtons.forEach((button) => {
    const isActive =
      button.dataset.language === language;

    button.classList.toggle(
      "active",
      isActive
    );

    button.setAttribute(
      "aria-pressed",
      String(isActive)
    );
  });

  document.documentElement.lang = language;

  localStorage.setItem(
    "portfolio-language",
    language
  );

  /*
   * Se o detail de projeto estiver aberto,
   * atualiza com o idioma novo.
   */

  const detail =
    document.querySelector(".project-detail");

  if (
    detail &&
    detail.classList.contains("active") &&
    detail.dataset.openProject
  ) {
    const projectId = detail.dataset.openProject;
    const langData =
      projectsData[language] || projectsData.pt;
    const data = langData[projectId];

    if (data) {
      const detailTitle =
        detail.querySelector(".detail-title");
      const detailDesc =
        detail.querySelector(".detail-description");
      const detailTech =
        detail.querySelector(".detail-tech");
      const detailImage =
        detail.querySelector(".detail-image");

      if (detailTitle) detailTitle.textContent = data.title;
      if (detailDesc) detailDesc.textContent = data.description;

      if (detailTech) {
        detailTech.innerHTML = "";
        data.tech.forEach((t) => {
          const tag = document.createElement("span");
          tag.classList.add("tech-tag");
          tag.textContent = t;
          detailTech.appendChild(tag);
        });
      }

      if (detailImage) detailImage.src = data.image;
    }
  }

  if (
    typeof ScrollTrigger !== "undefined"
  ) {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage =
      button.dataset.language;

    changeLanguage(selectedLanguage);
  });
});

changeLanguage(currentLanguage);