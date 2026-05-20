"use client";

import { useEffect } from "react";
import type { Experience } from "@/data/experiences";

interface Props {
  experience: Experience | null;
  onClose: () => void;
}

const TYPE_LABEL = {
  cdi: "CDI",
  stage: "Stage",
  startup: "Startup",
  alternance: "Alternance",
};

export default function ExperiencePanel({ experience, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (experience) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [experience]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 transition-all duration-300"
        style={{
          background: experience ? "rgba(0,0,0,0.6)" : "transparent",
          backdropFilter: experience ? "blur(4px)" : "none",
          pointerEvents: experience ? "auto" : "none",
        }}
      />

      {/* Slide-in panel */}
      <div
        className="fixed top-0 right-0 h-full z-50 w-full max-w-lg flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          transform: experience ? "translateX(0)" : "translateX(100%)",
          background: "#13131a",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {experience && (
          <>
            {/* Header */}
            <div
              className="flex-shrink-0 px-8 pt-10 pb-8"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <button
                onClick={onClose}
                className="mb-6 flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <span>←</span> Fermer
              </button>

              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${experience.color}20`, border: `1px solid ${experience.color}40` }}
                >
                  {experience.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{ background: `${experience.color}25`, color: experience.color }}
                    >
                      {TYPE_LABEL[experience.type]}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {experience.period}
                    </span>
                  </div>
                  <h2 className="text-xl font-black text-white leading-tight">{experience.company}</h2>
                  <p className="text-sm font-medium mt-0.5" style={{ color: experience.color }}>
                    {experience.role}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                    📍 {experience.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto panel-scrollbar px-8 py-7 flex flex-col gap-8">
              {/* Company description */}
              <div>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  L&apos;entreprise
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {experience.companyDescription}
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Ma mission
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {experience.mission}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Points clés
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {experience.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: experience.color }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Compétences mobilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
