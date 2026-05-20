"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const VISITED: Record<number, string> = {
  124: "Canada",
  840: "États-Unis",
  484: "Mexique",
  540: "Nouvelle-Calédonie",
  250: "France",
  724: "Espagne",
  620: "Portugal",
  380: "Italie",
  756: "Suisse",
  826: "Royaume-Uni",
  203: "Tchéquie",
  499: "Monténégro",
  642: "Roumanie",
  196: "Chypre",
  100: "Bulgarie",
  638: "La Réunion",
  643: "Russie",
  634: "Qatar",
};

const COUNTRIES_LIST = [
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇺🇸", name: "États-Unis" },
  { flag: "🇲🇽", name: "Mexique" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇬🇧", name: "Royaume-Uni" },
  { flag: "🇪🇸", name: "Espagne" },
  { flag: "🇵🇹", name: "Portugal" },
  { flag: "🇮🇹", name: "Italie" },
  { flag: "🇨🇭", name: "Suisse" },
  { flag: "🇨🇿", name: "Tchéquie" },
  { flag: "🇲🇪", name: "Monténégro" },
  { flag: "🇷🇴", name: "Roumanie" },
  { flag: "🇨🇾", name: "Chypre" },
  { flag: "🇧🇬", name: "Bulgarie" },
  { flag: "🇷🇺", name: "Russie" },
  { flag: "🇶🇦", name: "Qatar" },
  { flag: "🇳🇨", name: "Nouvelle-Calédonie" },
  { flag: "🇷🇪", name: "La Réunion" },
];

export default function MobilityMap() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <div>
      <div
        className="relative rounded-2xl overflow-hidden mb-5"
        style={{ background: "rgba(5,5,10,0.9)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        {tooltip && (
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 z-10 text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none whitespace-nowrap"
            style={{ background: "rgba(99,102,241,0.92)", color: "white" }}
          >
            {tooltip}
          </div>
        )}
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{ scale: 140, center: [10, 8] }}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => {
                const id = Number(geo.id);
                const name = VISITED[id];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => { if (name) setTooltip(name); }}
                    onMouseLeave={() => setTooltip(null)}
                    fill={name ? "#6366f1" : "rgba(255,255,255,0.07)"}
                    stroke="rgba(0,0,0,0.35)"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: "none", transition: "fill 0.15s" },
                      hover: { outline: "none", fill: name ? "#818cf8" : "rgba(255,255,255,0.13)" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
        {COUNTRIES_LIST.length} pays &amp; territoires visités
      </p>
      <div className="flex flex-wrap gap-2">
        {COUNTRIES_LIST.map(({ flag, name }) => (
          <span
            key={name}
            className="text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.65)" }}
          >
            {flag} {name}
          </span>
        ))}
      </div>
    </div>
  );
}
