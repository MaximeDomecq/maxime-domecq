"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Présentation", href: "#presentation" },
  { label: "Parcours",     href: "#parcours" },
  { label: "Projets",      href: "#projets" },
  { label: "Compétences",  href: "#competences" },
  { label: "Formation",    href: "#formation" },
  { label: "Contact",      href: "#contact" },
];

const GITHUB_SVG = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("presentation");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,15,0.80)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-16 h-14 flex items-center justify-between">
        {/* Logo + disponible badge */}
        <a href="#presentation" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <span className="text-sm font-black text-white tracking-tight">
            MD<span style={{ color: "#6366f1" }}>.</span>
          </span>
          <span
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Disponible
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                  style={{
                    color:      isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
                    background: isActive ? "rgba(99,102,241,0.15)" : "transparent",
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/MaximeDomecq"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {GITHUB_SVG}
          </a>
          <a
            href="mailto:maxime.domecq@outlook.fr?subject=Prise de contact&body=Bonjour Maxime,"
            className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
            style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
