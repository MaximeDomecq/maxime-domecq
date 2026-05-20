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
        background: scrolled ? "rgba(10,10,15,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-16 h-14 flex items-center justify-between">
        {/* Logo / name */}
        <a
          href="#presentation"
          className="text-sm font-black text-white tracking-tight hover:opacity-70 transition-opacity"
        >
          MD<span style={{ color: "#6366f1" }}>.</span>
        </a>

        {/* Links */}
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

        {/* Mobile: just email CTA */}
        <a
          href="mailto:maxime.domecq@outlook.fr?subject=Prise de contact&body=Bonjour Maxime,"
          className="md:hidden text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
          style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
