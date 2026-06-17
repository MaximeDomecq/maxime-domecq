export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "cdi" | "stage" | "startup" | "alternance";
  color: string;
  icon: string;
  companyDescription: string;
  mission: string;
  highlights: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "softel",
    company: "Softel Communications",
    role: "Développeur & Coordinateur Projet IT",
    period: "Sept. 2025 — Aujourd'hui",
    location: "Paris, France",
    type: "cdi",
    color: "#3b82f6",
    icon: "🛰️",
    companyDescription:
      "Softel Communications est un intégrateur de solutions de communication d'entreprise, spécialisé dans les technologies NICE (CXone, Copilot). L'entreprise accompagne de grands comptes internationaux dans la transformation de leurs centres de contact et de leur infrastructure IT.",
    mission:
      "Coordination des échanges entre équipes techniques et métiers sur plusieurs projets clients internationaux — Stellantis, Henry Schein, Screwfix et DKB. Développement et maintenance de solutions applicatives, participation au suivi opérationnel et à la priorisation des roadmaps fonctionnelles.",
    highlights: [
      "Gestion de projets multi-clients en environnement international",
      "Interface entre équipes techniques et métiers",
      "Développement de solutions applicatives sur mesure",
      "Certifié NCIE (Nice Certified Implementation Engineer) & Nice Copilot",
    ],
    skills: ["NICE CXone", "Gestion de projet", "Coordination", "JavaScript", "Agile"],
  },
  {
    id: "stellantis",
    company: "Stellantis",
    role: "IT Project Leader — Stage",
    period: "2025",
    location: "Paris, France",
    type: "stage",
    color: "#0ea5e9",
    icon: "🚗",
    companyDescription:
      "Stellantis est l'un des plus grands constructeurs automobiles mondiaux, né de la fusion de PSA et Fiat Chrysler. Présent dans plus de 130 pays, le groupe pilote des marques emblématiques comme Peugeot, Citroën, Jeep et Fiat. Sa DSI gère des projets IT stratégiques à l'échelle mondiale.",
    mission:
      "Participation à la gestion de projets informatiques au sein de la DSI : recueil des besoins métiers, planification, coordination des équipes techniques et suivi des livrables. Animation de réunions avec les parties prenantes — équipes métiers, développeurs, prestataires.",
    highlights: [
      "Pilotage de projets IT dans un environnement grand groupe international",
      "Animation de comités de pilotage et réunions de suivi",
      "Recueil et formalisation des besoins fonctionnels",
      "Suivi des livrables et gestion des priorités",
    ],
    skills: ["Gestion de projet", "Agile", "Communication", "Roadmap", "PowerPoint"],
  },
  {
    id: "qorum",
    company: "Qorum Secur'Num / ID Logism",
    role: "Stagiaire — Direction Générale",
    period: "2024",
    location: "France",
    type: "stage",
    color: "#f59e0b",
    icon: "🔐",
    companyDescription:
      "Qorum Secur'Num et ID Logism sont des sociétés spécialisées dans la cybersécurité et la gestion d'identité numérique. Elles accompagnent des organisations dans la sécurisation de leurs systèmes d'information et la gestion des accès. Un environnement startup agile avec de forts enjeux stratégiques.",
    mission:
      "Assistance directe à la Direction Générale dans la gestion quotidienne des activités stratégiques et opérationnelles. Participation aux décisions liées à la cybersécurité, suivi des projets clients et support à la gestion commerciale et administrative.",
    highlights: [
      "Immersion au cœur de la stratégie d'une structure cybersécurité",
      "Support direct à la DG sur des sujets à haute valeur ajoutée",
      "Compréhension des enjeux de la sécurité des SI",
      "Participation aux échanges avec les clients et partenaires",
    ],
    skills: ["Cybersécurité", "Gestion opérationnelle", "Stratégie", "Communication"],
  },
  {
    id: "copratik",
    company: "Copratik",
    role: "Co-fondateur & Directeur Général",
    period: "2023 — Aujourd'hui",
    location: "Paris — Île-de-France",
    type: "startup",
    color: "#22c55e",
    icon: "⚽",
    companyDescription:
      "Copratik est une start-up à impact créée en 2023 autour d'un concept simple et fédérateur : organiser des animations sportives solidaires en entreprise. Chaque événement crée de la cohésion d'équipe tout en reversant une part des bénéfices à des associations partenaires. Le projet a été soutenu par la Région Île-de-France, incubé à Station F et accompagné par le programme national PEPITE.",
    mission:
      "En tant que co-fondateur et Directeur Général, j'ai piloté l'entreprise de sa conception à ses premières ventes : structuration du modèle économique, développement de l'offre commerciale, prospection et acquisition clients, management de l'équipe, organisation des événements sur le terrain et déploiement de la stratégie de communication. Une expérience fondatrice, portée de bout en bout.",
    highlights: [
      "Co-fondation et direction générale, de l'idée aux premières ventes",
      "Statut Étudiant-Entrepreneur (PEPITE) obtenu en 2023",
      "Soutien de la Région Île-de-France, incubation à Station F",
      "Structuration de l'offre, acquisition des premiers clients",
      "Gestion 360° : stratégie, finances, communication, opérations terrain",
    ],
    skills: ["Entrepreneuriat", "Leadership", "Développement commercial", "Gestion budgétaire", "Communication"],
  },
  {
    id: "axa",
    company: "AXA France",
    role: "Stagiaire Data Analyst",
    period: "2022",
    location: "Paris, France",
    type: "stage",
    color: "#e879f9",
    icon: "📊",
    companyDescription:
      "AXA est l'un des leaders mondiaux de l'assurance et de la gestion d'actifs. AXA France gère des millions de contrats et génère des volumes de données considérables. La DSI et les équipes data travaillent à l'amélioration continue de la qualité des données et à leur valorisation via le Machine Learning.",
    mission:
      "Découverte du métier de Data Analyst au sein d'une grande entreprise. Participation active à un projet de Data Quality sur le provisionnement — analyse, nettoyage et fiabilisation des données. Travaux sur PowerBI pour la visualisation et premières expériences en Machine Learning.",
    highlights: [
      "Projet de Data Quality sur des données de provisionnement",
      "Création de tableaux de bord PowerBI",
      "Introduction au Machine Learning appliqué",
      "Compréhension des enjeux data dans un grand groupe",
    ],
    skills: ["Python", "PowerBI", "Machine Learning", "Data Quality", "SQL"],
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  stack: string[];
  color: string;
  icon: string;
  link?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "cdm26",
    name: "CDM 2026",
    description: "App de pronostics pour la Coupe du Monde",
    longDescription:
      "Application web complète de pronostics entre amis pour la Coupe du Monde 2026. Ligues privées, classements en temps réel, système de points élaboré avec bonus de tournoi, chat en direct et notifications push. Construite de zéro avec Next.js 14 et Supabase — PWA installable sur mobile.",
    stack: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    color: "#f59e0b",
    icon: "🏆",
    link: "https://github.com/MaximeDomecq/CDM26",
    highlights: [
      "Authentification, ligues privées avec code d'invitation",
      "Calcul de points en temps réel après chaque match",
      "Chat en temps réel dans chaque ligue (Supabase Realtime)",
      "Sync automatique des scores via API football-data.org",
      "PWA installable sur mobile — notifications push Web",
    ],
  },
  {
    id: "velosolidaire",
    name: "Vélo Solidaire — Dashboard",
    description: "Dashboard TV temps réel pour animation sportive",
    longDescription:
      "Dashboard interactif développé pour les animations Vélo Solidaire de Copratik. Affichage en temps réel des performances des participants via Bluetooth, avec 5 thèmes visuels configurables. Déployé sur écrans TV lors d'événements d'entreprise.",
    stack: ["Next.js 16", "TypeScript", "Web Bluetooth API", "Tailwind CSS"],
    color: "#22c55e",
    icon: "🚴",
    highlights: [
      "Connexion Bluetooth en temps réel avec capteurs de vélo",
      "5 thèmes visuels configurables par événement",
      "Classements live sur grand écran en entreprise",
      "Persistance des sessions via localStorage",
    ],
  },
  {
    id: "idlogism",
    name: "ID Logism — Refonte web",
    description: "Refonte du site corporate d'une société de cybersécurité",
    longDescription:
      "Refonte complète du site web d'ID Logism, société spécialisée en cybersécurité et gestion d'identité numérique. Modernisation de l'identité visuelle, restructuration de l'architecture de l'information et amélioration de l'expérience utilisateur pour mettre en valeur les offres de sécurité.",
    stack: ["HTML/CSS", "JavaScript", "Design UX/UI"],
    color: "#ef4444",
    icon: "🔐",
    highlights: [
      "Refonte complète de l'identité visuelle",
      "Restructuration de l'architecture de l'information",
      "Optimisation UX et parcours de navigation",
      "Mise en valeur des offres cybersécurité & identité numérique",
    ],
  },
  {
    id: "materiauxdelagny",
    name: "Matériaux de Lagny — Refonte web",
    description: "Refonte du site d'une entreprise de matériaux de construction",
    longDescription:
      "Refonte du site web de Matériaux de Lagny, entreprise locale de vente de matériaux de construction. Modernisation de la présence en ligne, amélioration de l'ergonomie et mise en valeur du catalogue produits pour faciliter la prise de contact.",
    stack: ["HTML/CSS", "JavaScript", "Design UX/UI"],
    color: "#84cc16",
    icon: "🏗️",
    highlights: [
      "Modernisation complète de la présence en ligne",
      "Refonte ergonomique et responsive design",
      "Mise en valeur du catalogue de produits",
      "Amélioration du tunnel de contact et devis",
    ],
  },
  {
    id: "copratik-tech",
    name: "Copratik — Digital",
    description: "Présence digitale et outils de la start-up",
    longDescription:
      "Développement de la présence digitale de Copratik : site vitrine, landing pages de prospection et outils de gestion des événements solidaires. Premier projet full-stack géré en totale autonomie, de la conception UX au déploiement.",
    stack: ["JavaScript", "HTML/CSS", "Design UX/UI", "Vercel"],
    color: "#f97316",
    icon: "🌐",
    link: "https://copratik.fr",
    highlights: [
      "Site vitrine de la start-up",
      "Outils internes de gestion des événements",
      "Landing pages pour la prospection commerciale",
      "Certification Design Thinking (DThinking)",
    ],
  },
];
