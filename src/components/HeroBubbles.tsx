"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  color: string;
  opacity: number;
}

const COLORS = ["99,102,241", "14,165,233", "139,92,246", "168,85,247", "56,189,248"];

export default function HeroBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const bubbles: Bubble[] = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: 50 + Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: 0.05 + Math.random() * 0.07,
    }));

    function resolveCollision(a: Bubble, b: Bubble) {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const minDist = a.radius + b.radius;
      if (dist >= minDist || dist === 0) return;

      const nx = dx / dist;
      const ny = dy / dist;
      const dot = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
      if (dot <= 0) return;

      a.vx -= dot * nx;
      a.vy -= dot * ny;
      b.vx += dot * nx;
      b.vy += dot * ny;

      const overlap = (minDist - dist) / 2;
      a.x -= overlap * nx;
      a.y -= overlap * ny;
      b.x += overlap * nx;
      b.y += overlap * ny;
    }

    let animId: number;

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const b of bubbles) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.radius < 0)              { b.x = b.radius;               b.vx = Math.abs(b.vx); }
        if (b.x + b.radius > canvas!.width)  { b.x = canvas!.width - b.radius;  b.vx = -Math.abs(b.vx); }
        if (b.y - b.radius < 0)              { b.y = b.radius;               b.vy = Math.abs(b.vy); }
        if (b.y + b.radius > canvas!.height) { b.y = canvas!.height - b.radius; b.vy = -Math.abs(b.vy); }
      }

      for (let i = 0; i < bubbles.length; i++)
        for (let j = i + 1; j < bubbles.length; j++)
          resolveCollision(bubbles[i], bubbles[j]);

      for (const b of bubbles) {
        // Glow fill
        const grad = ctx!.createRadialGradient(
          b.x - b.radius * 0.25, b.y - b.radius * 0.25, b.radius * 0.05,
          b.x, b.y, b.radius
        );
        grad.addColorStop(0,   `rgba(${b.color},${b.opacity * 2})`);
        grad.addColorStop(0.5, `rgba(${b.color},${b.opacity})`);
        grad.addColorStop(1,   `rgba(${b.color},0)`);
        ctx!.beginPath();
        ctx!.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();

        // Glass rim
        ctx!.beginPath();
        ctx!.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(${b.color},${b.opacity * 0.8})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Inner shine
        ctx!.beginPath();
        ctx!.arc(b.x - b.radius * 0.28, b.y - b.radius * 0.28, b.radius * 0.18, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${b.opacity * 0.6})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
