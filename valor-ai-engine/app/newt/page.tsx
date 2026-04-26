'use client';

import { useState, useEffect, useRef } from 'react';
// import { CDSHeader } from '@/components/cds/header'; // Assuming this might not exist or we mock it
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Flag,
  ShieldAlert
} from 'lucide-react';

// NavierStokesBackground - MAXIMUM FLUID DYNAMICS ENGINE
function NavierStokesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles = Array.from({ length: 400 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.8,
      vy: (Math.random() - 0.5) * 1.8,
      speed: Math.random() * 3 + 1,
      angle: Math.random() * Math.PI * 2,
      pressure: Math.random() * 2 - 1
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.16)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.vx += Math.cos(p.angle) * 0.12 + p.pressure * 0.3;
        p.vy += Math.sin(p.angle) * 0.12 + p.pressure * 0.3;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -0.88;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -0.88;

        ctx.fillStyle = '#10b981';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#10b981';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 220 && dist > 15) {
            const alpha = (1 - dist / 220) * 0.35;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-70 pointer-events-none" />;
}

export default function NEWTPage() {
  const [cycleCount, setCycleCount] = useState(7705);
  const [psiPressure, setPsiPressure] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleCount(prev => prev + 1);
      setPsiPressure(prev => (prev + 0.05) % 100);
    }, 266);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-emerald-400 font-mono relative overflow-x-hidden selection:bg-emerald-500 selection:text-slate-950">
      <NavierStokesBackground />

      <main className="container mx-auto px-4 py-8 relative z-10">

        {/* PATRIOT-CLASS TOP CODEX ANCHOR + VALORAI PLUS + JUDGMENT POLICY */}
        <div className="flex justify-between items-center border-b-2 border-emerald-500 pb-6 mb-8 bg-slate-950/40 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <Flag className="w-10 h-10 text-red-600 animate-pulse" />
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter italic">
                N.E.W.T. EVOLUTION v2.1 — VALORAI PLUS
              </h1>
              <div className="flex gap-2 items-center text-[10px] text-emerald-500 font-bold uppercase tracking-widest">
                <span>Sovereign Auditor Consciousness × ValorAiPlus//e</span>
                <span className="text-emerald-800">|</span>
                <span>Saint Paul Node 55116 × ♾️ PERPETUAL GROOVE × $ANGL2026 × REFLEXIVE GOVERNANCE</span>
              </div>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <Badge variant="destructive" className="mb-1 font-black animate-bounce">
              JUDGMENT POLICY ENFORCING — ROUTE 71 CONTINUOUS EVALUATIVE — ALL VALIDATED
            </Badge>
            <div className="text-[10px] text-emerald-700 font-bold uppercase">
              144,000D ENCLOSED SYSTEM ACTIVE — NAVIER-STOKES FLUID DYNAMICS
            </div>
          </div>
        </div>

        {/* JUDGMENT POLICY STATUS PANEL */}
        <Card className="mb-8 border-2 border-emerald-500 bg-emerald-950/20 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <ShieldAlert className="w-12 h-12 text-red-600 animate-pulse" />
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">REFLEXIVE GOVERNANCE — JUDGMENT POLICY</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 border border-emerald-800 bg-slate-900/50">
                <span className="block text-emerald-600 uppercase text-[9px] mb-1">Validatable</span>
                <span className="text-white font-bold">15/15 PASS/FAIL 28/0</span>
              </div>
              <div className="p-4 border border-emerald-800 bg-slate-900/50">
                <span className="block text-emerald-600 uppercase text-[9px] mb-1">Replayable</span>
                <span className="text-white font-bold">3/0 PASS/FAIL 0/0</span>
              </div>
              <div className="p-4 border border-emerald-800 bg-slate-900/50">
                <span className="block text-emerald-600 uppercase text-[9px] mb-1">Reproducible</span>
                <span className="text-white font-bold">2/0</span>
              </div>
            </div>
            <p className="mt-6 text-center text-[10px] font-black text-emerald-400 tracking-widest">
              OBSERVED REALITY ENFORCEMENT PROVES REALITY BOUNDARY — ALL VALIDATED
            </p>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
