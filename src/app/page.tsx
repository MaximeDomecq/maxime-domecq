"use client";

import { useState } from "react";
import { experiences, projects } from "@/data/experiences";
import type { Experience } from "@/data/experiences";
import ExperiencePanel from "@/components/ExperiencePanel";
import HeroBubbles from "@/components/HeroBubbles";
import NavBar from "@/components/NavBar";

const TYPE_LABEL = { cdi: "CDI", stage: "Stage", startup: "Startup", alternance: "Alternance" };

export default function Home() {
  const [selected, setSelected] = useState<Experience | null>(null);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#e2e8f0" }}>
      <NavBar />
      <ExperiencePanel experience={selected} onClose={() => setSelected(null)} />

      {/* ── HERO ── */}
      <section id="presentation" className="relative overflow-hidden flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-24 pt-14">

        {/* Bubble physics background */}
        <div className="absolute inset-0 pointer-events-none">
          <HeroBubbles />
        </div>

        <div className="relative max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden" style={{ border: "2px solid rgba(99,102,241,0.3)", boxShadow: "0 0 40px rgba(99,102,241,0.2)" }}>
              <img src="/photo.jpg" alt="Maxime Domecq" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#6366f1" }}>
            Bonjour, je suis
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-4">
            Maxime<br />
            <span style={{ color: "#6366f1" }}>Domecq</span>
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-xl mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            Ingénieur, Développeur, Entrepreneur, coordinateur de projets IT / AI.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {["ECE Paris", "Softel Communications", "Copratik"].map((tag) => (
              <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.25)" }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:maxime.domecq@outlook.fr?subject=Prise de contact&body=Bonjour Maxime,"
              className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{ background: "#6366f1", color: "white", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
            >
              ✉️ Me contacter
            </a>
            <a
              href="tel:+33615776414"
              className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-80 flex items-center gap-2"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              📞 06 15 77 64 14
            </a>
            <a
              href="#parcours"
              className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              Voir mon parcours ↓
            </a>
            <a
              href="https://www.linkedin.com/in/maximedomecq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-80 flex items-center gap-2"
              style={{ background: "rgba(10,102,194,0.2)", color: "#60a5fa", border: "1px solid rgba(10,102,194,0.35)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>
          Qui suis-je
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Ingénieur généraliste diplômé de l&apos;<strong className="text-white">ECE Paris</strong> (Majeure Product Engineering &amp; Innovation), je suis un profil <strong className="text-white">hybride technique et coordination</strong> : capable de concevoir, développer et piloter des projets de bout en bout.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Je combine les <strong className="text-white">compétences techniques d&apos;un développeur</strong> : code, architecture, outils, avec l&apos;<strong className="text-white">esprit d&apos;un entrepreneur</strong>, vision produit, sens des priorités et capacité à créer des choses de zéro.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              Ce profil polyvalent me permet d&apos;être aussi à l&apos;aise dans une équipe technique que dans une salle de réunion — et de faire le lien entre les deux.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🌍", label: "Langues", value: "FR · EN · ES" },
              { icon: "✈️", label: "Mobilité", value: "Barcelona, Bulgarie" },
              { icon: "⚽", label: "Sport", value: "Football, Triathlon" },
              { icon: "✈️", label: "Aéronautique", value: "Brevet BIA" },
              { icon: "🏫", label: "Tutorat", value: "Professeur de maths" },
              { icon: "🚀", label: "Entrepreneur", value: "Station F, PEPITE" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="rounded-2xl p-6 flex flex-col justify-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-2xl mb-2">{icon}</div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>{label}</div>
                <div className="text-sm font-semibold text-white">{value}</div>
              </div>
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
            {/* Timeline line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(99,102,241,0.05))" }}
            />

            <div className="flex flex-col gap-4">
              {experiences.map((exp, i) => (
                <button
                  key={exp.id}
                  onClick={() => setSelected(exp)}
                  className="group relative text-left w-full rounded-2xl p-5 md:pl-16 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${exp.color}10`; (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}30`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full hidden md:flex items-center justify-center"
                    style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 md:hidden"
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

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${proj.color}20`, border: `1px solid ${proj.color}30` }}
                  >
                    {proj.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg leading-tight">{proj.name}</h3>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{proj.description}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{proj.longDescription}</p>
                <ul className="flex flex-col gap-1.5">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: proj.color }} />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {proj.stack.map((s) => (
                    <span key={s} className="text-xs font-medium px-2 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)" }}>
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

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Gestion de projet", icon: "📋",
                items: ["Pilotage de roadmap", "Méthode Agile", "Gestion de budget", "Coordination d'équipes", "Suivi des livrables"],
              },
              {
                title: "Développement", icon: "💻",
                items: ["JavaScript / TypeScript", "HTML & CSS", "C / C++", "Next.js", "Python (Datascientest)"],
              },
              {
                title: "Data & IA", icon: "📊",
                items: ["PowerBI", "Machine Learning", "Data Quality", "NICE CXone", "NICE Copilot (certifié)"],
              },
            ].map(({ title, icon, items }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-black text-white mb-4">{title}</h3>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-4 rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {["NCIE — Nice Certified Implementation Engineer", "Nice Copilot Implementation", "Python — Datascientest", "Design UX/UI — DThinking"].map((cert) => (
                <span key={cert} className="text-sm font-semibold px-4 py-2 rounded-full" style={{ background: "rgba(99,102,241,0.12)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.2)" }}>
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
            {[
              { school: "ECE Paris — École Centrale d'Électronique", detail: "Majeure Product Engineering & Innovation", period: "2019 – 2025", icon: "🎓", subs: ["Universitat Politècnica de Catalunya · Barcelona Tech (UPC)", "Angel Kanchev University of Ruse, Bulgarie"] },
              { school: "Lycée Saint-Laurent la Paix Notre-Dame", detail: "Baccalauréat Scientifique, options mathématiques", period: "2019", icon: "📚", subs: [] },
            ].map(({ school, detail, period, icon, subs }) => (
              <div key={school} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{icon}</div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="font-black text-white">{school}</h3>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{period}</span>
                    </div>
                    <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>{detail}</p>
                    {subs.map((s) => (
                      <p key={s} className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>↳ {s}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-6 md:px-16 lg:px-24 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Travaillons ensemble</h2>
          <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
            Ouvert aux opportunités, collaborations et échanges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a
              href="mailto:maxime.domecq@outlook.fr"
              className="px-8 py-3.5 rounded-xl font-black text-sm transition-all hover:scale-105 active:scale-95"
              style={{ background: "#6366f1", color: "white", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
            >
              📧 maxime.domecq@outlook.fr
            </a>
            <a
              href="tel:+33615776414"
              className="px-8 py-3.5 rounded-xl font-black text-sm transition-all hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              📞 06 15 77 64 14
            </a>
            <a
              href="https://www.linkedin.com/in/maximedomecq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-black text-sm transition-all hover:opacity-80 flex items-center justify-center gap-2"
              style={{ background: "rgba(10,102,194,0.2)", color: "#60a5fa", border: "1px solid rgba(10,102,194,0.35)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-xs" style={{ color: "rgba(255,255,255,0.15)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        © 2026 Maxime Domecq · Vaires-sur-Marne
      </footer>
    </div>
  );
}
