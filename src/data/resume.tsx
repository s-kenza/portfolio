import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kenza Schuler",
  initials: "KS",
  url: "https://kenza.io",
  location: "Lyon, France",
  locationLink: "https://www.google.com/maps/place/lyon",
  description:
    "Développeuse web. J'aime rendre le web humain et efficace, comme il devrait toujours l'être. Du sens, du soin, du solide.",
  summary:
    "Actuellement responsable applicatif chez [APRR](/#work), j’allie expertise technique et exigences du secteur industriel. J’aime la musique et l'informatique, deux passions qui se croisent par l’écriture créative, où chaque ligne a son importance pour créer œuvre complète. Cette double approche se nourrit aussi de ma formation en [M2 Ingénierie du Web à l’ESGI Lyon](#education).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kenza.schuler@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/s-kenza",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kenza-schuler-9aa4ab231/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Envoyer un mail",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "APRR",
      href: "https://voyage.aprr.fr/",
      badges: [],
      location: "Saint-Apollinaire, France",
      title: "Cheffe de projet informatique",
      logoUrl: "/aprr.png",
      start: "Sept. 2023",
      end: "Aujourd'hui",
      description:
        "Actuellement en charge du développement, du pilotage et de la maintenance d’une application stratégique utilisée par plus de 1700 collaborateurs (APRR & filiale AREA) pour la gestion des heures travaillées, des projets et des fiches de paie. \n👩‍💻 Mes missions sont hybrides :\n📌 Gestion de projet & Pilotage fonctionnel\n- Interlocutrice directe des équipes métier pour la collecte des besoins (incidents, évolutions, correctifs).\n- Animation du backlog sur Azure DevOps : cadrage, priorisation, suivi des sprints en méthode Agile.\n- Rédaction d’estimations de charge et d’études de faisabilité (évolutions majeures, impacts RGPD, sécurité, etc.).\n- Coordination des projets transverses (ex. : intégration d'une nouvelle société et ses flux RH / paie).\n- Présentation des livrables et reporting d’avancement aux équipes métier et direction.\n\n💻 Développement & Suivi technique\n- Contribution active au développement PHP (framework interne) et validation des pull requests.\n- Gestion des mises en production, du cycle de vie applicatif et des performances globales.\n- Supervision des échanges de données inter-applicatives (paie, badgeage, SIRH, APIs…).\n- Travail étroit avec les pôles sécurité, architecture et RGPD dans le cadre de la procédure « 3 Visas ».\n\n👥 Encadrement & Communication\nRéférente technique auprès d'une petite équipe - 2 personnes - (revues de code, accompagnement métier, best practices).\n- Organisation des comités projet, weekly devs, points de synchronisation et arbitrage de charge.\n- Coordination entre les interlocuteurs techniques et fonctionnels pour fluidifier la communication et garantir la satisfaction client.",
    },
    {
      company: "APRR",
      badges: [],
      href: "https://voyage.aprr.fr/",
      location: "Saint-Apollinaire, France",
      title: "Développeuse fullstack",
      logoUrl: "/aprr.png",
      start: "Sept. 2022",
      end: "Août 2023",
      description:
        "Refonte de l'interface utilisateur et de l'API pour le catalogue des offres d'APRR avec React et TypeScript pour le front-end, et JavaScript pour le back-end. \n\n- Collaboration avec les équipes produit et UX pour définir les besoins fonctionnels et optimiser la gestion des offres. \n- Intégration de nouvelles fonctionnalités et amélioration des performances de l'application. \n- Réalisation de tests et de débogage pour garantir la stabilité du produit, tout en appliquant des bonnes pratiques de développement et en gérant le code et les versions via Git.",
    },
    {
      company: "APRR",
      href: "https://voyage.aprr.fr/",
      badges: [],
      location: "Saint-Apollinaire, France",
      title: "Développeuse Java",
      logoUrl: "/aprr.png",
      start: "Avril 2022",
      end: "Juin 2022",
      description:
        "Développement d’un outil en Java afin d’implémenter et manier des API Rest via OpenShift avec Spring Boot en respectant les principes de conception SOLID et de Docker.",
    },
    {
      company: "Würth France",
      href: "https://entreprise.wurth.fr/le-groupe-wurth/",
      badges: [],
      location: "Erstein, France",
      title: "Préparateur de commande",
      logoUrl: "/wurth.png",
      start: "Juil. 2018",
      end: "Août 2018",
      description:
        "Réception des marchandises, participation aux rangements et à la propreté des magasins.\nGestion des stocks, contrôle de la conformité des produits à livrer.",
    },
    {
      company: "Caisse d'Épargne Grand Est Europe",
      href: "https://www.agences.caisse-epargne.fr/banque-assurance/strasbourg-danube-id15135000026",
      badges: [],
      location: "Strasbourg, France",
      title: "Stage en Marketing et Communication",
      logoUrl: "/caisse.png",
      start: "Juil. 2016",
      end: "Août 2016",
      description:
        "Aide à la préparation de compte rendus d’entretien et la gestion de l’agenda.\nRéaliser des supports (écrits, photos, campagne publicitaire), rédaction de contenu.",
    },
  ],
  education: [
    {
      school: "ESGI Lyon",
      href: "https://www.esgi.fr/campus-lyon.html",
      degree: "Master en Ingénierie du Web, Informatique",
      logoUrl: "/esgi.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "ESGI Lyon",
      href: "https://www.esgi.fr/campus-lyon.html",
      degree: "Bachelor's Degree en Ingénierie du Web, Informatique",
      logoUrl: "/esgi.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "IUT Dijon-Auxerre-Nevers",
      href: "https://iutdijon.u-bourgogne.fr/www/",
      degree: "Diplôme universitaire de Technologie en Informatique (DUT)",
      logoUrl: "/iut.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "Lycée Louis Pasteur Strasbourg",
      href: "https://lyc-pasteur.monbureaunumerique.fr/",
      degree: "Baccalauréat Économiques et Sociales (ES)",
      logoUrl: "/lycée.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Portfolio de Kenza Schuler",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Portfolio moderne et minimaliste développé avec Next.js, TailwindCSS et Shadcn UI. Présente mes projets, expériences et compétences de manière claire et esthétique.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "CRM Axignis",
      href: "https://github.com/Projet-annuel-Axignis",
      dates: "Avril 2025 - Juillet 2025",
      active: true,
      description:
        "Projet de fin d'études pour la création d'un CRM complet de gestion des ERP pour la société Axignis.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Docker",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Projet-annuel-Axignis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/axignis.png",
    },
    {
      title: "Jeu du pendu",
      href: "https://github.com/s-kenza/game-react",
      dates: "Février 2025",
      active: true,
      description:
       "Développé un jeu du pendu en React, pour jouer en simultané à 2 joueurs en devinant des mots en un nombre limité d'essais.",
      technologies: [
        "React",
        "Node.js",
        "Fastify",
        "MariaDB",
        "Docker",
        "DaisyUI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/s-kenza/game-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
