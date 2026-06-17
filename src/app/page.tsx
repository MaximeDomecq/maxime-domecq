"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { experiences, projects } from "@/data/experiences";
import type { Experience } from "@/data/experiences";
import ExperiencePanel from "@/components/ExperiencePanel";
import HeroBubbles from "@/components/HeroBubbles";
import NavBar from "@/components/NavBar";
import InfoPanel from "@/components/InfoPanel";
import type { InfoPanelData } from "@/components/InfoPanel";

const QRCode = dynamic(() => import("@/components/QRCode"), { ssr: false });

const LINKEDIN_SVG = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GITHUB_SVG = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const INFO_BOXES: { icon: string; label: string; value: string; detail: InfoPanelData }[] = [
  {
    icon: "🌍", label: "Langues", value: "FR · EN · ES · ZH · DE",
    detail: {
      icon: "🌍", label: "Langues",
      sections: [
        {
          flag: "🇫🇷", heading: "Français", level: "Langue maternelle",
          text: "Langue maternelle, pratiquée au quotidien à l'oral comme à l'écrit dans tous les contextes professionnels et personnels.",
          tags: ["Langue maternelle"],
        },
        {
          flag: "🇬🇧", heading: "Anglais", level: "C1 — TOEIC",
          text: "Langue de travail à 100 % chez Softel, entreprise américaine opérant dans des environnements internationaux. Rédaction, réunions, documentation technique : tout se fait en anglais. TOEIC validé niveau C1. Presse, podcasts et lectures de loisir également consommés en anglais au quotidien.",
          tags: ["C1 validé (TOEIC)", "Usage professionnel quotidien", "Environnement international"],
        },
        {
          flag: "🇪🇸", heading: "Espagnol", level: "C1 — Courant",
          text: "Une langue apprise depuis l'âge de 10 ans, enrichie d'un programme d'échange dès la seconde. Le tournant : six mois de vie à Barcelone lors de mon année à l'UPC, une immersion totale qui a ancré l'espagnol comme une vraie langue de vie. Séries, actualités et conversations du quotidien en VO espagnole.",
          tags: ["C1 courant", "6 mois à Barcelone (UPC)", "Pratique depuis 10 ans"],
        },
        {
          flag: "🇩🇪", heading: "Allemand", level: "A2 — En progression",
          text: "Apprentissage initié en octobre 2025, progressant activement via des applications mobiles et des ressources en ligne. Niveau A2 atteint avec une pratique quotidienne et une progression régulière.",
          tags: ["A2 atteint", "Autodidacte", "Depuis octobre 2025"],
        },
        {
          flag: "🇨🇳", heading: "Chinois (Mandarin)", level: "A1 — Notions",
          text: "Découverte de la langue et de la culture mandarine pendant un semestre à l'école d'ingénieur. Niveau A1 acquis, avec une base en conversation simple et une ouverture culturelle profonde sur la Chine, son histoire et ses traditions.",
          tags: ["A1 — Notions", "1 semestre", "École d'ingénieur"],
        },
      ],
    },
  },
  {
    icon: "⚽", label: "Sport", value: "Football, Triathlon",
    detail: {
      icon: "⚽", label: "Sport",
      sections: [
        {
          flag: "⚽", heading: "Football",
          text: "Pratique depuis l'enfance, en club pendant de nombreuses années. Le football reste un vrai fil rouge, entre compétition et convivialité.",
          tags: ["Pratique club", "Depuis l'enfance"],
        },
        {
          flag: "🏊", heading: "Triathlon",
          text: "Discipline complète alliant natation, vélo et course à pied. Goût pour les défis d'endurance et la rigueur de l'entraînement multisports.",
          tags: ["Natation", "Vélo", "Course à pied"],
        },
      ],
    },
  },
  {
    icon: "✈️", label: "Aéronautique", value: "Brevet BIA",
    detail: {
      icon: "✈️", label: "Aéronautique",
      sections: [
        {
          heading: "Brevet d'Initiation Aéronautique (BIA)",
          text: "Formation théorique couvrant la météorologie, la mécanique du vol, la navigation aérienne, la réglementation et l'histoire de l'aéronautique. Une passion pour le ciel, au sol comme en altitude.",
          tags: ["Météorologie", "Mécanique du vol", "Navigation", "Réglementation"],
        },
      ],
    },
  },
  {
    icon: "🏫", label: "Tutorat", value: "Maths · Lycée & Prépa",
    detail: {
      icon: "🏫", label: "Tutorat",
      sections: [
        {
          heading: "Professeur particulier de mathématiques",
          text: "Accompagnement d'élèves de lycée et de classe préparatoire en mathématiques. Pédagogie, patience et capacité à vulgariser des concepts complexes — des qualités transposables à la coordination de projets.",
          tags: ["Lycée", "Prépa", "Pédagogie"],
        },
      ],
    },
  },
  {
    icon: "🚀", label: "Entrepreneur", value: "Station F · PEPITE",
    detail: {
      icon: "🚀", label: "Entrepreneuriat",
      sections: [
        {
          heading: "Station F",
          text: "Intégration du plus grand campus de startups au monde à Paris, dans le cadre du développement de Copratik. Accès à un réseau d'entrepreneurs, mentors et investisseurs.",
          tags: ["Paris", "Startup campus", "Réseau"],
        },
        {
          heading: "PEPITE",
          text: "Programme national d'Entrepreneuriat Étudiant, qui accompagne les étudiants dans la création et le développement de leur projet entrepreneurial.",
          tags: ["Entrepreneuriat étudiant", "Accompagnement", "ECE Paris"],
        },
      ],
    },
  },
];

const TYPE_LABEL = { cdi: "CDI", stage: "Stage", startup: "Startup", alternance: "Alternance" };

const STATS = [
  { value: "1 an", label: "expérience", detail: "CDI depuis sept. 2025" },
  { value: "5", label: "langues pratiquées", detail: "FR · EN · ES · ZH · DE" },
  { value: "5", label: "expériences pro", detail: "AXA · Qorum · Copratik · Stellantis · Softel" },
  { value: "4", label: "certifications", detail: "NCIE · Copilot · Python · UX" },
];

const SKILLS = [
  {
    title: "Coordination & Gestion de Projet",
    icon: "📋",
    color: "#3b82f6",
    items: [
      "Pilotage de roadmap & livrables",
      "Méthode Agile / Scrum",
      "Coordination multi-clients internationale",
      "Gestion budgétaire & priorisation",
      "NICE CXone — Certification NCIE",
      "Interface équipes tech & métiers",
    ],
  },
  {
    title: "IA & Nouvelles Technologies",
    icon: "🤖",
    color: "#0ea5e9",
    items: [
      "NICE Copilot — Certifié",
      "Machine Learning (Datascientest)",
      "PowerBI — Data visualisation",
      "Data Quality & gouvernance",
      "Python — Analyse de données",
      "AI implementation & coordination",
    ],
  },
  {
    title: "Développement Web & Logiciel",
    icon: "💻",
    color: "#06b6d4",
    items: [
      "Next.js / React (TypeScript)",
      "JavaScript · HTML & CSS",
      "Supabase / PostgreSQL",
      "C / C++",
      "Design UX/UI — DThinking certifié",
      "Git · Vercel · CI/CD",
    ],
  },
];

const CERTIFICATIONS = [
  "NCIE — Nice Certified Implementation Engineer",
  "Nice Copilot Implementation",
  "Python — Datascientest",
  "Design UX/UI — DThinking",
];

export default function Home() {
  const [selected, setSelected] = useState<Experience | null>(null);
  const [selectedInfo, setSelectedInfo] = useState<InfoPanelData | null>(null);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#e2e8f0" }}>
      <NavBar />
      <ExperiencePanel experience={selected} onClose={() => setSelected(null)} />
      <InfoPanel data={selectedInfo} onClose={() => setSelectedInfo(null)} />

      {/* ── HERO ── */}
      <section
        id="presentation"
        className="relative overflow-hidden flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-24 pt-14"
      >
        <div className="absolute inset-0 pointer-events-none">
          <HeroBubbles />
        </div>

        {/* Status badges */}
        <div className="relative flex flex-wrap gap-3 mb-10">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
            style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            Disponible · Ouvert aux opportunités
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
            style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#fbbf24" }}
          >
            🏛️ VivaTech 2026 · Paris
          </div>
        </div>

        <div className="relative max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div
              className="w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden"
              style={{ border: "2px solid rgba(59,130,246,0.35)", boxShadow: "0 0 48px rgba(59,130,246,0.2)" }}
            >
              <img src="/photo.jpg" alt="Maxime Domecq" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#3b82f6" }}>
              Bonjour, je suis
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-4">
              Maxime<br />
              <span style={{ color: "#3b82f6" }}>Domecq</span>
            </h1>
            <p className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">
              Ingénieur · Développeur · Entrepreneur
            </p>
            <p className="text-base md:text-lg max-w-xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Profil hybride technique et coordination — je conçois, développe et pilote des projets IT &amp; IA de bout en bout.
            </p>

            {/* Company tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: "ECE Paris", href: "https://www.ece.fr" },
                { label: "Softel Communications", href: "https://softel.com/fr/" },
                { label: "Copratik", href: "https://copratik.fr" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-70"
                  style={{ background: "rgba(59,130,246,0.15)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.25)" }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:maxime.domecq@outlook.fr?subject=Prise de contact&body=Bonjour Maxime,"
                className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                style={{ background: "#3b82f6", color: "white", boxShadow: "0 0 28px rgba(59,130,246,0.4)" }}
              >
                ✉️ Me contacter
              </a>
              <a
                href="/cv-maxime-domecq.pdf"
                download="CV-Maxime-Domecq.pdf"
                className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-80 flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                ↓ CV
              </a>
              <a
                href="https://www.linkedin.com/in/maximedomecq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-80 flex items-center gap-2"
                style={{ background: "rgba(10,102,194,0.2)", color: "#60a5fa", border: "1px solid rgba(10,102,194,0.35)" }}
              >
                {LINKEDIN_SVG} LinkedIn
              </a>
              <a
                href="https://github.com/MaximeDomecq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-80 flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {GITHUB_SVG} GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ background: "#0a0a0f" }}>
          {STATS.map(({ value, label, detail }, i) => (
            <div
              key={label}
              className="py-8 px-6 text-center"
              style={{
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{value}</div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#3b82f6" }}>{label}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── À PROPOS ── */}
      <section id="a-propos" className="px-6 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>
          Qui suis-je
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Ingénieur généraliste diplômé de l&apos;<strong className="text-white">ECE Paris</strong> (Majeure Product Engineering &amp; Innovation), je suis un profil <strong className="text-white">hybride technique et coordination</strong> : capable de concevoir, développer et piloter des projets de bout en bout.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Je combine les <strong className="text-white">compétences d&apos;un développeur</strong> — code, architecture, outils — avec l&apos;<strong className="text-white">esprit d&apos;un entrepreneur</strong> : vision produit, sens des priorités et capacité à créer des choses de zéro.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              Ce profil polyvalent me permet d&apos;être aussi à l&apos;aise dans une équipe technique que dans une salle de réunion — et de <strong className="text-white">faire le lien entre les deux</strong>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {INFO_BOXES.map(({ icon, label, value, detail }, idx) => (
              <button
                key={label}
                onClick={() => setSelectedInfo(detail)}
                className={`rounded-2xl p-5 flex flex-col justify-center text-left transition-all duration-200 group hover:scale-[1.02] active:scale-[0.98]${
                  idx === INFO_BOXES.length - 1 && INFO_BOXES.length % 2 !== 0 ? " col-span-2" : ""
                }`}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.25)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div className="text-2xl mb-2">{icon}</div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>{label}</div>
                <div className="text-sm font-semibold text-white">{value}</div>
                <div className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#93c5fd" }}>En savoir plus →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARCOURS ── */}
      <section id="parcours" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
            Expériences
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Mon parcours</h2>
          <p className="text-sm mb-12" style={{ color: "rgba(255,255,255,0.35)" }}>
            Clique sur une expérience pour en savoir plus →
          </p>

          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(59,130,246,0.05))" }}
            />

            <div className="flex flex-col gap-3">
              {experiences.map((exp, i) => (
                <button
                  key={exp.id}
                  onClick={() => setSelected(exp)}
                  className="group relative text-left w-full rounded-2xl p-5 md:pl-16 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = `${exp.color}10`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}30`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <div
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full hidden md:flex items-center justify-center"
                    style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 md:hidden"
                        style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}30` }}
                      >
                        {exp.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                            style={{ background: `${exp.color}20`, color: exp.color }}
                          >
                            {TYPE_LABEL[exp.type]}
                          </span>
                          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{exp.period}</span>
                          {i === 0 && (
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                              style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)" }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Poste actuel
                            </span>
                          )}
                        </div>
                        <div className="font-black text-white text-base leading-tight">{exp.company}</div>
                        <div className="text-sm mt-0.5 font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>{exp.role}</div>
                      </div>
                    </div>
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-1"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
                    >
                      →
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projets" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
            Réalisations
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Projets</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:scale-[1.01]"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}30`;
                  (e.currentTarget as HTMLElement).style.background = `${proj.color}06`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${proj.color}20`, border: `1px solid ${proj.color}30` }}
                    >
                      {proj.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-black text-white text-base leading-tight">{proj.name}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{proj.description}</p>
                    </div>
                  </div>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex-shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all hover:opacity-70"
                      style={{ background: `${proj.color}20`, color: proj.color, border: `1px solid ${proj.color}30` }}
                    >
                      Voir →
                    </a>
                  )}
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{proj.longDescription}</p>

                <ul className="flex flex-col gap-1.5 flex-1">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: proj.color }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {proj.stack.map((s) => (
                    <span key={s} className="text-xs font-medium px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPÉTENCES ── */}
      <section id="competences" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
            Savoir-faire
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Compétences</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {SKILLS.map(({ title, icon, color, items }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: `${color}20`, border: `1px solid ${color}25` }}
                >
                  {icon}
                </div>
                <h3 className="font-black text-white mb-4 text-sm leading-tight">{title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="text-sm font-semibold px-4 py-2 rounded-full"
                  style={{ background: "rgba(59,130,246,0.12)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMATION ── */}
      <section id="formation" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
            Études
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Formation</h2>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="font-black text-white">ECE Paris — École Centrale d&apos;Électronique</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(59,130,246,0.15)", color: "#93c5fd" }}>2019 – 2025</span>
                  </div>
                  <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Diplôme d&apos;Ingénieur · Majeure Product Engineering &amp; Innovation
                  </p>
                  <div className="flex flex-col gap-2">
                    <div
                      className="flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}
                    >
                      <span className="text-xl">🇪🇸</span>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-white text-sm">Universitat Politècnica de Catalunya (UPC) · Barcelona Tech</span>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Semestre d&apos;échange · Barcelone, Espagne · 2023–2024</p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <span className="text-xl">🇧🇬</span>
                      <div>
                        <span className="font-semibold text-white text-sm">Angel Kanchev University of Ruse</span>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Échange universitaire · Bulgarie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="font-black text-white">Lycée Saint-Laurent la Paix Notre-Dame</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }}>2019</span>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Baccalauréat Scientifique · Mention bien · Options mathématiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Travaillons ensemble</h2>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.4)" }}>
              Ouvert aux opportunités CDI, missions et collaborations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <QRCode size={160} />
              <div className="text-center">
                <p className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>Scanner pour accéder au portfolio</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>ou partager depuis le téléphone</p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:maxime.domecq@outlook.fr"
                  className="flex items-center justify-between px-6 py-4 rounded-2xl transition-all hover:scale-[1.01] group"
                  style={{ background: "#3b82f6", boxShadow: "0 0 32px rgba(59,130,246,0.3)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <div className="font-black text-white text-sm">Email</div>
                      <div className="text-xs text-blue-200">maxime.domecq@outlook.fr</div>
                    </div>
                  </div>
                  <span className="text-white/50 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/maximedomecq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 rounded-2xl transition-all hover:scale-[1.01] group"
                  style={{ background: "rgba(10,102,194,0.2)", border: "1px solid rgba(10,102,194,0.35)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{LINKEDIN_SVG}</span>
                    <div>
                      <div className="font-black text-white text-sm">LinkedIn</div>
                      <div className="text-xs" style={{ color: "#60a5fa" }}>maximedomecq</div>
                    </div>
                  </div>
                  <span className="text-white/30 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="https://github.com/MaximeDomecq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 rounded-2xl transition-all hover:scale-[1.01] group"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{GITHUB_SVG}</span>
                    <div>
                      <div className="font-black text-white text-sm">GitHub</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>MaximeDomecq</div>
                    </div>
                  </div>
                  <span className="text-white/30 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="/cv-maxime-domecq.pdf"
                  download="CV-Maxime-Domecq.pdf"
                  className="flex items-center justify-between px-6 py-4 rounded-2xl transition-all hover:scale-[1.01] group"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📄</span>
                    <div>
                      <div className="font-black text-white text-sm">Curriculum Vitae</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Télécharger le PDF</div>
                    </div>
                  </div>
                  <span className="text-white/30 group-hover:translate-x-1 transition-transform">↓</span>
                </a>

                <a
                  href="tel:+33615776414"
                  className="flex items-center justify-between px-6 py-4 rounded-2xl transition-all hover:scale-[1.01] group"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <div className="font-black text-white text-sm">Téléphone</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>06 15 77 64 14</div>
                    </div>
                  </div>
                  <span className="text-white/30 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="px-6 py-8 text-center text-xs"
        style={{ color: "rgba(255,255,255,0.15)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        © 2026 Maxime Domecq · Vaires-sur-Marne
      </footer>
    </div>
  );
}
