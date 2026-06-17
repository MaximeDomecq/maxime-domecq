"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const MobilityMap = dynamic(() => import("./MobilityMap"), { ssr: false });

export interface InfoSection {
  flag?: string;
  heading: string;
  level?: string;
  text: string;
  tags?: string[];
}

export interface InfoPanelData {
  icon: string;
  label: string;
  sections?: InfoSection[];
  mapMode?: boolean;
}

interface Props {
  data: InfoPanelData | null;
  onClose: () => void;
}

export default function InfoPanel({ data, onClose }: Props) {
  useEffect(() => {
    if (!data) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [data, onClose]);

  return (
    <>
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: "rgba(0,0,0,0.55)",
          opacity: data ? 1 : 0,
          pointerEvents: data ? "auto" : "none",
        }}
        onClick={onClose}
      />
      <div
        className="fixed top-0 right-0 h-full z-50 w-full max-w-lg overflow-y-auto panel-scrollbar transition-transform duration-500"
        style={{
          background: "#0f0f17",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          transform: data ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {data && (
          <div className="p-8">
            <button
              onClick={onClose}
              className="mb-8 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-opacity hover:opacity-60"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              ← Fermer
            </button>
            <div className="text-4xl mb-3">{data.icon}</div>
            <h2 className="text-2xl font-black text-white mb-8">{data.label}</h2>

            {data.mapMode ? (
              <MobilityMap />
            ) : (
              <div className="flex flex-col gap-5">
                {data.sections?.map((s, i) => (
                  <div key={i} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      {s.flag && <span className="text-2xl">{s.flag}</span>}
                      <div>
                        <span className="font-black text-white">{s.heading}</span>
                        {s.level && (
                          <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(59,130,246,0.2)", color: "#93c5fd" }}>
                            {s.level}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>{s.text}</p>
                    {s.tags && s.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
