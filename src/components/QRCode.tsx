"use client";

import { useEffect, useState } from "react";

export default function QRCode({ size = 180 }: { size?: number }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  if (!url) {
    return (
      <div
        style={{ width: size + 24, height: size + 24, background: "rgba(255,255,255,0.04)", borderRadius: "1rem" }}
        className="animate-pulse"
      />
    );
  }

  const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&bgcolor=ffffff&color=0a0a14&qzone=2&format=png`;

  return (
    <div style={{ background: "white", padding: 12, borderRadius: "1rem", display: "inline-block", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
      <img src={src} alt="QR Code — Portfolio Maxime Domecq" width={size} height={size} />
    </div>
  );
}
