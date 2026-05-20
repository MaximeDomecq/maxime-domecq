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
    color: "#6366f1",
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
    role: "Fondateur & CEO",
    period: "2023",
    location: "Paris — Île-de-France",
    type: "startup",
    color: "#22c55e",
    icon: "⚽",
    companyDescription:
      "Copratik est une start-up à impact positif que j'ai créée et développée. Son concept : organiser des animations sportives solidaires pour fédérer des équipes en entreprise tout en soutenant des associations. Un projet qui mêle sport, solidarité et cohésion — soutenu par la Région Île-de-France et Station F.",
    mission:
      "Création de A à Z d'une start-up à impact : développement du concept, prospection commerciale, organisation des événements, gestion de l'équipe et communication. Obtention du statut Étudiant-Entrepreneur en 2023, accompagné par le programme PEPITE et incubé à Station F.",
    highlights: [
      "Statut Étudiant-Entrepreneur (PEPITE) acquis en 2023",
      "Soutenu par la Région Île-de-France et Station F",
      "Développement du concept, de l'offre et des premiers clients",
      "Gestion complète : budget, communication, opérationnel",
    ],
    skills: ["Entrepreneuriat", "Leadership", "Marketing", "Gestion budgétaire", "Communication"],
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
      "Application web complète de pronostics entre amis pour la Coupe du Monde 2026. Ligues privées, classements en temps réel, système de points élaboré avec bonus de tournoi, notifications push et chat en direct. Construite de zéro avec Next.js 14 et Supabase.",
    stack: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    color: "#f59e0b",
    icon: "🏆",
    highlights: [
      "Authentification, ligues privées avec code d'invitation",
      "Calcul de points en temps réel après chaque match",
      "Notifications push Web (VAPID)",
      "Chat en temps réel dans chaque ligue",
      "Sync automatique des scores via API football",
    ],
  },
  {
    id: "copratik-tech",
    name: "Copratik — Tech",
    description: "Plateforme digitale pour la start-up",
    longDescription:
      "Dans le cadre de Copratik, développement de la présence digitale : site vitrine, outils de gestion des événements et landing pages pour la prospection. Premier projet full-stack géré en autonomie, de la conception au déploiement.",
    stack: ["JavaScript", "HTML/CSS", "Design UX/UI"],
    color: "#22c55e",
    icon: "⚽",
    highlights: [
      "Site vitrine de la start-up",
      "Outils internes de gestion des événements",
      "Certification Design Thinking (DThinking)",
    ],
  },
];
