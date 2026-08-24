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
      image: "assets/images/brainstorm-readme.png"
    },
    2: {
      title: "P.C.S. — Sistema Preditivo de Gráficos",
      description:
        "Um sistema de análise em tempo real desenvolvido para interpretar gráficos financeiros com base em métricas gráficas e financeiras. O sistema combina a análise dos gráficos com um sistema de Web Scraping em tempo real aplicado a blogs financeiros e fontes relevantes, coletando informações relacionadas ao ativo analisado. Essas informações são processadas em conjunto com os dados gráficos, proporcionando uma análise mais abrangente e contribuindo para avaliações preditivas baseadas tanto em métricas quantitativas quanto nas informações financeiras mais recentes.",
      tech: ["Python", "TensorFlow", "Pandas"],
      image: "assets/images/brainstorm-p-c-s.png"
    },
    3: {
      title: "Sistema de Secretaria — Projeto em C++",
      description:
              "Sistema de Secretaria Escolar desenvolvido em C++ com o objetivo didático de reforçar a estruturação da linguagem, promover boas práticas de desenvolvimento e integrar conceitos essenciais da engenharia de software. O sistema permite a adição de usuários com informações como nome, sobrenome, CPF e cargo — abrangendo perfis como alunos, professores e funcionários. Oferece funcionalidades de consulta de registros para análise de dados, exclusão de usuários e organização por tags e atributos atrelados a cada perfil. A interface funciona via linha de comando, com entrada e saída de dados focada em usabilidade. O projeto trabalha conceitos fundamentais como modularização e organização de código em C++, criação e leitura de arquivos para simular um banco de dados, estruturas de decisões e laços de repetição, princípios básicos de arquitetura de software com separação de camadas e responsabilidades, além da construção de fluxogramas para representar a lógica do sistema e a elaboração de um roadmap evolutivo com releases simuladas para acompanhamento de stakeholders.",
      tech: ["C++", "CLI", "Arquivo de Dados"],
      image: "assets/images/brainstorm-input-data.png"
    },
    4: {
      title: "Projetos Web — Desenvolvimento Criativo",
      description:
        "Meus projetos web são construídos com um olhar voltado para a imersão e a experiência do usuário. A cada novo projeto, busco evoluir e trazer mais sentimento ao que crio — cada detalhe visual, cada transição e cada movimentação são pensados para gerar uma conexão genuína com quem acessa. Na maioria dos meus projetos, utilizo vídeos criados no After Effects para a produção de movimentações brutas que servem como base para as animações finais. Esses vídeos passam por um processo de posicionamento e conceituação de animação, onde defino timing, direção e fluidez para que cada elemento se comporte de forma coerente dentro da interface. O refinamento gráfico e a melhoria visual dos projetos são realizados através de Inteligências Artificiais locais, as quais aloquei na minha própria máquina. Essa escolha se dá tanto por questões financeiras — evitando custos recorrentes com serviços na nuvem — quanto pelo ganho de conhecimento adquirido ao explorar o funcionamento local de modelos de IA, entendendo seus limites, possibilidades e como extraí-los o melhor resultado para cada cenário.",
      tech: ["HTML", "CSS", "JavaScript", "After Effects", "IA Local"],
      image: "assets/images/brainstorm-web-design.png"
    },
    5: {
      title: "Projetos Diversos — Hardware, Fork, The Cure & Comunidade",
      description:
        "Além do desenvolvimento web, possuo projetos que envolvem hardware, jogos e comunidade. Como técnico mecatrônico formado, tenho facilidade com eletrônica e programação embarcada. Meu projeto de hardware mais recente é uma câmera com Arduino integrado capaz de identificar se uma pessoa está de pé, sentada ou deitada — com o intuito de comercializar essa solução para casas de repousos que cuidam de idosos, oferecendo monitoramento inteligente e acessível. Também mantenho o portal de informações Fork Nosso de Cada Dia, onde compartilho ensinamentos breves sobre tecnologia para a comunidade, e o canal no YouTube de mesmo nome, voltado para projetos mais extensos, debates sobre assuntos que demandam maior aprofundamento e ensinamentos relevantes para a comunidade de T.I. Atualmente estou desenvolvendo um survival horror game nas horas vagas chamado The Cure. O jogo é protagonizado por uma mulher que vive com esquizofrenia e é sequestrada por um homem que insiste que ela está doente e precisa de uma cura. Após o sequestro, ela se encontra trancada em um quarto de uma casa de horrores em um parque de diversões abandonado e descobre que o homem já havia sequestrado outras três mulheres: uma portadora de deficiência visual que a deixava parcialmente cega, uma mulher com aspecto autista e outra que sofria de bipolaridade. Todas acreditavam ter sido sequestradas por um lunático que se referia à sua condição com tom preconceituoso, mas estavam prestes a descobrir que a doença à qual ele se referia era na verdade uma maldição espiritual que a maioria delas não sabia possuir. O jogo tem como objetivo trazer, de forma poética, a inversão da visão negativa que a sociedade impõe através de preconceitos capacitistas, transformando essas particularidades em habilidades sobrenaturais únicas em cada personagem. Cada uma vive em um universo de horror espiritual construído por cenários baseados em projeções de complexos fóbicos de suas próprias mentes, oprimidas pela vivência do preconceito social. Eu amo fazer minhas ideias impactarem pessoas, acredito que a mudança dentro de nós só pode ser aceita se ela é primeiramente vivida, por isso me empenho tanto em trazer ambientes com maior otimização, melhores visuais, melhores ambientações sonoras, cada vez melhores em cada projeto que crio. Para mim, não é só sobre performance — é sobre o sentimento do usuário, seja um cliente, seja um comprador, seja um seguidor em uma rede social, se forem impactados da maneira correta, eu vou saber que meu dever foi cumprido.",
      tech: ["Arduino", "C++", "Hardware", "Game Design", "YouTube"],
      image: "assets/images/brainstorm-outros-projetos.png"
    },
  },

  en: {
    1: {
      title: "Machine Learning — Project Read.Me",
      description:
        "Readme is an ongoing project that explores how engaging reading can be for an individual, taking into account personal interests and content consumption patterns. The system consists of three isolated environments working in synergy. The first environment collects user data — reading frequency, personal interests, and preferences — and subjects them to tests that calculate reading speed metrics, establishing a quantitative baseline as the primary indicator of interest in written content. The second environment is an Artificial Intelligence training module, fed by renowned books on reading and literary interest, that learns how to present readings in a personalized way for each user using internal and adaptive mathematical metrics. The third environment is a fast-reading scenario that uses Web Scraping across multiple online blogs to expose the user to content aligned with their declared interests from the first environment. User interactions with these texts continuously update the AI metrics, generating data on reading personality — useful for creating similar profiles for users with comparable patterns — and on performance by interest category. The refined data flows back to the second environment, creating correlations that allow the system to predict which content to offer, in what tone and writing style. The ultimate goal is the creation of an intelligent news app that delivers to the reader only the information that truly matters, in the format that engages them the most.",
      tech: ["Python", "Machine Learning", "Web Scraping"],
      image: "assets/images/brainstorm-readme.png"
    },
    2: {
      title: "P.C.S Predictive Chart Sistem",
      description:
        "A real-time analytical system designed to interpret financial charts based on technical and financial metrics. The system combines graphical analysis with real-time web scraping from financial blogs and relevant sources, collecting information about the analyzed asset. These market insights are processed alongside the chart data to provide a more comprehensive analysis and support predictive evaluations based on both quantitative metrics and current financial information.",
      tech: ["Python", "TensorFlow", "Pandas"],
      image: "assets/images/brainstorm-p-c-s.png"
    },
    3: {
      title: "School Secretary System — C++ Project",
      description:
        "A School Secretary System developed in C++ with the didactic goal of reinforcing language structuring, promoting good development practices, and integrating essential software engineering concepts. The system allows adding users with information such as first name, last name, ID number, and role — covering profiles like students, teachers, and staff. It offers record querying for data analysis, user deletion, and organization through tags and attributes linked to each profile. The interface operates via command line, with input and output focused on usability. The project covers fundamental concepts such as modularization and code organization in C++, file creation and reading to simulate a database, decision structures and loops, basic software architecture principles with separation of layers and responsibilities, as well as the construction of flowcharts to represent the system logic and the development of an evolutionary roadmap with simulated releases for stakeholder tracking.",
      tech: ["C++", "CLI", "File Database"],
      image: "assets/images/brainstorm-input-data.png"
    },
    4: {
      title: "Web Projects — Creative Development",
      description:
        "My web projects are built with a focus on immersion and user experience. With each new project, I strive to evolve and bring more feeling into what I create — every visual detail, every transition, and every movement is designed to forge a genuine connection with the viewer. In most of my projects, I use videos created in After Effects to produce raw animations that serve as the foundation for the final motion design. These videos go through a positioning and animation concept process, where I define timing, direction, and fluidity so that each element behaves coherently within the interface. The visual refinement and graphic enhancement of the projects are carried out through local Artificial Intelligence models, which I have deployed on my own machine. This approach is driven both by financial considerations — avoiding recurring costs with cloud services — and by the knowledge gained from exploring how AI models operate locally, understanding their limitations, possibilities, and how to extract the best results for each scenario.",
      tech: ["HTML", "CSS", "JavaScript", "After Effects", "Local AI"],
      image: "assets/images/brainstorm-web-design.png"
    },
    5: {
      title: "Other Projects — Hardware, Fork, The Cure & Community",
      description:
        "Beyond web development, I have projects involving hardware, games, and community. As a graduated mechatronics technician, I have a natural ease with electronics and embedded programming. My most recent hardware project is an Arduino-integrated camera capable of identifying whether a person is standing, sitting, or lying down — with the goal of commercializing this solution for elderly care homes, offering intelligent and accessible monitoring. I also maintain the information portal Fork Nosso de Cada Dia, where I share brief technology lessons for the community, and the YouTube channel of the same name, focused on more in-depth projects, debates on topics that require deeper discussion, and relevant teachings for the IT community. I am currently developing a survival horror game in my spare time called The Cure. The game is protagonized by a woman living with schizophrenia who is kidnapped by a man who insists she is sick and needs a cure. After the abduction, she finds herself locked in a room inside a haunted house in an abandoned amusement park and discovers that the man had already kidnapped three other women: one with a visual impairment that left her partially blind, one woman on the autism spectrum, and another who suffered from bipolar disorder. They all believed they had been kidnapped by a lunatic who referred to their conditions with a prejudiced tone, but they were about to discover that the disease he referred to was actually a spiritual curse that most of them did not know they possessed. The game aims to poetically invert the negative perception that society imposes through ableist prejudice, transforming these particularities into unique supernatural abilities for each character. Each one lives in a spiritual horror universe built from scenarios based on projections of phobic complexes from their own minds, oppressed by the experience of social prejudice. I love making my ideas impact people. I believe that change within us can only be accepted if it is first lived, which is why I work so hard to bring environments with greater optimization, better visuals, better sound design — always better with each project I create. For me, it is not just about performance — it is about the user's feeling, whether a client, a buyer, or a follower on social media. If they are impacted the right way, I know my duty has been fulfilled.",
      tech: ["Arduino", "C++", "Hardware", "Game Design", "YouTube"],
      image: "assets/images/brainstorm-outros-projetos.png"
    },
  },

  es: {
    1: {
      title: "Machine Learning — Proyecto Read.Me",
      description:
        "Readme es un proyecto en desarrollo que investiga lo atractiva que puede ser una lectura para una persona, teniendo en cuenta sus intereses personales y patrones de consumo de contenido. El sistema se compone de tres entornos aislados que trabajan en conjunto. El primer entorno recopila datos del usuario — frecuencia de lectura, intereses personales y preferencias — y lo somete a pruebas que calculan métricas de velocidad de lectura, estableciendo una base cuantitativa como indicador principal de interés por el contenido leído. El segundo entorno es un módulo de entrenamiento de Inteligencia Artificial, alimentado por libros reconocidos sobre lectura e interés literario, que aprende a presentar lecturas de forma personalizada para cada usuario utilizando métricas matemáticas internas y adaptables. El tercer entorno es un escenario de lecturas rápidas que utiliza Web Scraping en diversos blogs en línea para exponer al usuario a contenidos alineados con sus intereses declarados en el primer entorno. Las interacciones del usuario con estos textos actualizan continuamente las métricas de la IA, generando datos sobre la personalidad de lectura — útiles para crear perfiles similares para usuarios con patrones comparables — y sobre el rendimiento por categoría de interés. Los datos refinados regresan al segundo entorno, creando correlaciones que permiten al sistema predecir qué contenidos ofrecer, en qué tono y estilo de escritura. El objetivo final es la creación de una aplicación de periódico inteligente que entregue al lector solo la información que realmente importa, en el formato que más lo enganche.",
      tech: ["Python", "Machine Learning", "Web Scraping"],
      image: "assets/images/brainstorm-readme.png"
    },
    2: {
      title: "P.C.S. — Predictive Chart System",
      description:
        "Un sistema de análisis en tiempo real desarrollado para interpretar gráficos financieros basándose en métricas gráficas y financieras. El sistema combina el análisis de gráficos con un sistema de Web Scraping en tiempo real aplicado a blogs financieros y fuentes relevantes, recopilando información relacionada con el activo analizado. Esta información se procesa junto con los datos gráficos, proporcionando un análisis más completo y contribuyendo a evaluaciones predictivas basadas tanto en métricas cuantitativas como en la información financiera más reciente.",
      tech: ["Python", "TensorFlow", "Pandas"],
      image: "assets/images/brainstorm-p-c-s.png"
    },
    3: {
      title: "Sistema de Secretaría — Proyecto en C++",
      description:
        "Sistema de Secretaría Escolar desarrollado en C++ con el objetivo didáctico de reforzar la estructuración del lenguaje, promover buenas prácticas de desarrollo e integrar conceptos esenciales de la ingeniería de software. El sistema permite agregar usuarios con información como nombre, apellido, documento de identidad y cargo — abarcando perfiles como alumnos, profesores y personal administrativo. Ofrece funcionalidades de consulta de registros para análisis de datos, eliminación de usuarios y organización mediante etiquetas y atributos vinculados a cada perfil. La interfaz funciona a través de línea de comandos, con entrada y salida de datos enfocada en la usabilidad. El proyecto trabaja conceptos fundamentales como modularización y organización de código en C++, creación y lectura de archivos para simular una base de datos, estructuras de decisiones y bucles, principios básicos de arquitectura de software con separación de capas y responsabilidades, además de la construcción de diagramas de flujo para representar la lógica del sistema y la elaboración de un roadmap evolutivo con lanzamientos simulados para el seguimiento de stakeholders.",
      tech: ["C++", "CLI", "Archivo de Datos"],
      image: "assets/images/brainstorm-input-data.png"
    },
    4: {
      title: "Proyectos Web — Desarrollo Creativo",
      description:
        "Mis proyectos web se construyen con una mirada enfocada en la inmersión y la experiencia del usuario. Con cada nuevo proyecto, busco evolucionar y aportar más sentimiento a lo que creo — cada detalle visual, cada transición y cada movimiento están pensados para generar una conexión genuina con quien accede. En la mayoría de mis proyectos, utilizo vídeos creados en After Effects para la producción de movimientos brutos que sirven como base para las animaciones finales. Estos vídeos pasan por un proceso de posicionamiento y conceptualización de animación, donde defino timing, dirección y fluidez para que cada elemento se comporte de forma coherente dentro de la interfaz. El refinamiento gráfico y la mejora visual de los proyectos se realizan a través de Inteligencias Artificiales locales, las cuales he desplegado en mi propia máquina. Esta elección se debe tanto a cuestiones financieras — evitando costos recurrentes con servicios en la nube — como al conocimiento adquirido al explorar el funcionamiento local de modelos de IA, entendiendo sus limitaciones, posibilidades y cómo extraer el mejor resultado para cada escenario.",
      tech: ["HTML", "CSS", "JavaScript", "After Effects", "IA Local"],
      image: "assets/images/brainstorm-web-design.png"
    },
    5: {
      title: "Otros Proyectos — Hardware, Fork, The Cure & Comunidad",
      description:
        "Más allá del desarrollo web, tengo proyectos que involucran hardware, juegos y comunidad. Como técnico mecatrónico formado, tengo facilidad con electrónica y programación embebida. Mi proyecto de hardware más reciente es una cámara con Arduino integrado capaz de identificar si una persona está de pie, sentada o acostada — con el objetivo de comercializar esta solución para casas de reposo que cuidan de personas mayores, ofreciendo monitoreo inteligente y accesible. También mantengo el portal de información Fork Nosso de Cada Dia, donde comparto enseñanzas breves sobre tecnología para la comunidad, y el canal de YouTube del mismo nombre, orientado a proyectos más extensos, debates sobre temas que requieren mayor profundidad y enseñanzas relevantes para la comunidad de T.I. Actualmente estoy desarrollando un survival horror game en mis ratos libres llamado The Cure. El juego está protagonizado por una mujer que vive con esquizofrenia y es secuestrada por un hombre que insiste en que está enferma y necesita una cura. Tras el secuestro, se encuentra encerrada en una habitación de una casa de horrores en un parque de diversiones abandonado y descubre que el hombre ya había secuestrado a otras tres mujeres: una con discapacidad visual que la dejaba parcialmente ciega, una mujer con rasgos autistas y otra que sufría de bipolaridad. Todas creían haber sido secuestradas por un lunático que se refería a su condición con tono prejuicioso, pero estaban a punto de descubrir que la enfermedad a la que se refería era en realidad una maldición espiritual que la mayoría no sabía que poseía. El juego tiene como objetivo traer, de forma poética, la inversión de la visión negativa que la sociedad impone a través de prejuicios capacitistas, transformando estas particularidades en habilidades sobrenaturales únicas en cada personaje. Cada una vive en un universo de horror espiritual construido por escenarios basados en proyecciones de complejos fóbicos de sus propias mentes, oprimidas por la vivencia del prejuicio social. Amo hacer que mis ideas impacten a las personas, creo que el cambio dentro de nosotros solo puede ser aceptado si primero es vivido, por eso me esfuerzo tanto en traer ambientes con mayor optimización, mejores visuales, mejores diseños de sonido, cada vez mejores en cada proyecto que creo. Para mí, no se trata solo de rendimiento — se trata del sentimiento del usuario, sea un cliente, un comprador o un seguidor en una red social. Si son impactados de la manera correcta, mi deber se habrá cumplido.",
      tech: ["Arduino", "C++", "Hardware", "Game Design", "YouTube"],
      image: "assets/images/brainstorm-outros-projetos.png"
    },
  },

  sv: {
    1: {
      title: "Machine Learning — Projekt Read.Me",
      description:
        "Readme är ett pågående projekt som utforskar hur engagerande läsning kan vara för en individ, med hänsyn till personliga intressen och innehållsvanor. Systemet består av tre isolerade miljöer som samverkar. Den första miljön samlar in användardata — läsfrekvens, personliga intressen och preferenser — och utsätter dem för tester som beräknar läshastighetsmått och etablerar en kvantitativ bas som huvudsakligt intresseindikator för skriftligt innehåll. Den andra miljön är en AI-träningsmodul, fodd med erkända böcker om läsning och litterärt intresse, som lär sig att presentera läsning på ett personligt sätt för varje användare med hjälp av interna och adaptiva matematiska mått. Den tredje miljön är ett snabbläsningsscenario som använder webbskrapning från flera bloggar online för att exponera användaren för innehåll som överensstämmer med deras angivna intressen från den första miljön. Användarens interaktioner med dessa texter uppdaterar kontinuerligt AI-mätten och genererar data om läspersonlighet — användbart för att skapa liknande profiler för användare med jämförbara mönster — samt om prestanda per intressekategori. De förädlade data flödar tillbaka till den andra miljön och skapar korrelationer som gör det möjligt för systemet att förutsäga vilket innehåll som ska erbjudas, i vilken ton och skrivstil. Det slutliga målet är att skapa en intelligent nyhetsapp som levererar till läsaren enbart den information som verkligen betyder något, i det format som engagerar mest.",
      tech: ["Python", "Machine Learning", "Web Scraping"],
      image: "assets/images/brainstorm-readme.png"
    },
    2: {
      title: "P.C.S. — Prediktivt Diagram System",
      description:
        "Ett realtidssystem utvecklat för att analysera finansiella diagram baserat på grafiska och finansiella mätvärden. Systemet kombinerar diagramanalys med Web Scraping i realtid från finansiella bloggar och relevanta källor för att samla in information om den analyserade tillgången. Informationen behandlas tillsammans med diagramdata för att ge en mer omfattande analys och möjliggöra prediktiva bedömningar baserade på både kvantitativa mätvärden och aktuell finansiell information.",
      tech: ["Python", "TensorFlow", "Pandas"],
      image: "assets/images/brainstorm-p-c-s.png"
    },
    3: {
      title: "Skolsekreterarsystem — C++-projekt",
      description:
        "Ett skolsekreterarsystem utvecklat i C++ med det didaktiska målet att stärka språkstrukturen, främja god utvecklingspraxis och integrera väsentliga mjukvaru ingenjörskoncept. Systemet tillåter tillägg av användare med information som förnamn, efternamn, personnummer och roll — med profiler som elever, lärare och personal. Det erbjuder funktioner för registerförfrågningar för dataanalys, användarborttagning och organisering genom taggar och attribut kopplade till varje profil. Gränssnittet fungerar via kommandoraden, med in- och utdata fokuserad på användbarhet. Projektet täcker grundläggande koncept som modularisering och kodorganisering i C++, filskapande och läsning för att simulera en databas, beslutstrukturer och loopar, grundläggande principer för mjukvaruarkitektur med separation av lager och ansvarsområden, samt konstruktion av flödesscheman för att representera systemlogiken och utveckling av en evolutionsvägkarta med simulerade releaser för intressentuppföljning.",
      tech: ["C++", "CLI", "Fildatabas"],
      image: "assets/images/brainstorm-input-data.png"
    },
    4: {
      title: "Webbprojekt — Kreativ Utveckling",
      description:
        "Mina webbprojekt byggs med fokus på immersion och användarupplevelse. Med varje nytt projekt strävar jag efter att utvecklas och lägga mer känsla i det jag skapar — varje visuell detalj, varje övergång och varje rörelse är utformad för att skapa en genuin koppling med betraktaren. I de flesta av mina projekt använder jag videor skapade i After Effects för att producera råa animationer som fungerar som grund för den slutliga rörlsdesignen. Dessa videor genomgår en process av positionering och animationskoncept, där jag definierar timing, riktning och fluiditet så att varje element beter sig konsekvent i gränssnittet. Den grafiska förfiningen och den visuella förbättringen av projekten utförs genom lokala artificiella intelligensmodeller, som jag har implementerat på min egen maskin. Detta tillvägagångssätt drivs både av ekonomiska överväganden — undvika återkommande kostnader för molntjänster — och av kunskapen som erhålls genom att utforska hur AI-modeller fungerar lokalt, förstå deras begränsningar, möjligheter och hur man utvinner de bästa resultaten för varje scenario.",
      tech: ["HTML", "CSS", "JavaScript", "After Effects", "Lokal AI"],
      image: "assets/images/brainstorm-web-design.png"
    },
    5: {
      title: "Övriga Projekt — Hårdvara, Fork, The Cure & Community",
      description:
        "Utöver webbutveckling har jag projekt som involverar hårdvara, spel och community. Som examinerad mekatronikingenjör har jag en naturlig fallenhet för elektronik och inbäddad programmering. Mitt senaste hårdvaruprojekt är en Arduino-integrerad kamera som kan identifiera om en person står, sitter eller ligger — med målet att kommersialisera denna lösning för äldreboenden, och erbjuda intelligent och tillgänglig övervakning. Jag driver även informationsportalen Fork Nosso de Cada Dia, där jag delar korta tekniklektioner för communityn, samt YouTube-kanalen med samma namn, fokuserad på mer omfattande projekt, debatter om ämnen som kräver djupare diskussion och relevanta lärdomar för IT-communityn. Jag utvecklar för närvarande ett survival horror game på fritiden som heter The Cure. Spelet kretsar kring en kvinna som lever med schizofreni och kidnappas av en man som insisterar på att hon är sjuk och behöver en bot. Efter kidnappningen befinner hon sig inspärrad i ett rum i ett spökhus på en övergiven nöjespark och upptäcker att mannen redan hade kidnappat tre andra kvinnor: en med en synskada som gjorde henne delvis blind, en kvinna med autistiska drag och en annan som led av bipolär sjukdom. Alla trodde att de hade kidnappats av en galning som hänvisade till deras tillstånd med fördomsfull ton, men de var på väg att upptäcka att sjukdomen han talade om egentligen var en andlig förbannelse som de flesta av dem inte visste att de besatt. Spelet syftar poetiskt att vända den negativa syn som samhället lägger på funktionsnedsättningar genom att förvandla dessa särdrag till unika övernaturliga förmågor för varje karaktär. Var och en lever i ett andligt skräckuniversum byggt av scenarier baserade på projektioner av fobiska komplex från deras egna sinnen, förtryckta av den sociala fördomens påverkan. Jag älskar att låta mina idéer påverka människor. Jag tror att förändring inom oss bara kan accepteras om den först levs, därför arbetar jag så hårt med att skapa miljöer med bättre optimering, bättre visuella effekter, bättre ljuddesign — alltid bättre med varje projekt jag skapar. För mig handlar det inte bara om prestanda — det handlar om användarens känsla, oavsett om det är en kund, en köpare eller en följare på sociala medier. Om de påverkas på rätt sätt vet jag att min plikt är fullgjord.",
      tech: ["Arduino", "C++", "Hårdvara", "Game Design", "YouTube"],
      image: "assets/images/brainstorm-outros-projetos.png"
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
        bgMusic.volume = 0.2;
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

      bgMusic.volume = 0.2;
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
