import React, { useEffect, useRef, useMemo } from 'react';

/* ============================================================
   AnimatedDNA — an actual double-helix drawing, not scattered
   dots. Two continuous backbone strands (polylines) twist around
   a shared axis with real 3D math (rotation + perspective
   projection computed on every animation frame), and each
   base pair is a rung connecting the two strands — same anatomy
   as a real DNA diagram. Drawn straight to SVG attributes via
   refs so it stays smooth without re-rendering React.
   ============================================================ */
const AnimatedDNA = ({
  pointCount = 50,
  spacing = 26,     // px between base pairs along the strand's length
  radius = 64,       // px radius of the helix
  twistPerPoint = 0.4, // radians — how tight the corkscrew is
  speed = 0.35,        // radians/sec rotation speed
  focal = 480,         // perspective focal length (bigger = flatter)
}) => {
  const backboneARef = useRef(null);
  const backboneBRef = useRef(null);
  const nodeARefs = useRef([]);
  const nodeBRefs = useRef([]);
  const rungRefs = useRef([]);
  const rotationRef = useRef(0);

  const cx = 84;

  const initialPoints = useMemo(() => {
    const ptsA = [];
    const ptsB = [];
    const rungs = [];
    const nodesA = [];
    const nodesB = [];

    for (let i = 0; i < pointCount; i++) {
      const y = i * spacing;
      const angleA = i * twistPerPoint;
      const angleB = angleA + Math.PI;

      const xA = Math.cos(angleA) * radius;
      const zA = Math.sin(angleA) * radius;
      const xB = Math.cos(angleB) * radius;
      const zB = Math.sin(angleB) * radius;

      const pA = focal / (focal + zA);
      const pB = focal / (focal + zB);

      const screenXA = cx + xA * pA;
      const screenXB = cx + xB * pB;

      ptsA.push(`${screenXA.toFixed(1)},${y}`);
      ptsB.push(`${screenXB.toFixed(1)},${y}`);

      nodesA.push({
        cx: screenXA,
        cy: y,
        r: (4.5 * pA).toFixed(2),
        opacity: Math.max(0.3, pA - 0.1).toFixed(2),
      });

      nodesB.push({
        cx: screenXB,
        cy: y,
        r: (4.5 * pB).toFixed(2),
        opacity: Math.max(0.3, pB - 0.1).toFixed(2),
      });

      rungs.push({
        x1: screenXA,
        y1: y,
        x2: screenXB,
        y2: y,
        opacity: Math.max(0.08, (pA + pB) / 2 - 0.35).toFixed(2),
      });
    }

    return {
      pointsA: ptsA.join(' '),
      pointsB: ptsB.join(' '),
      rungs,
      nodesA,
      nodesB,
    };
  }, [pointCount, spacing, radius, twistPerPoint, focal, cx]);

  useEffect(() => {
    let raf;
    let last = performance.now();
    let isVisible = true;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const draw = (angleOffset) => {
      for (let i = 0; i < pointCount; i++) {
        const angleA = i * twistPerPoint + angleOffset;
        const angleB = angleA + Math.PI;

        const xA = Math.cos(angleA) * radius;
        const zA = Math.sin(angleA) * radius;
        const xB = Math.cos(angleB) * radius;
        const zB = Math.sin(angleB) * radius;

        const pA = focal / (focal + zA);
        const pB = focal / (focal + zB);

        const screenXA = cx + xA * pA;
        const screenXB = cx + xB * pB;

        const nodeA = nodeARefs.current[i];
        if (nodeA) {
          nodeA.setAttribute('cx', screenXA);
          nodeA.setAttribute('r', (4.5 * pA).toFixed(2));
          nodeA.setAttribute('opacity', Math.max(0.3, pA - 0.1).toFixed(2));
        }
        const nodeB = nodeBRefs.current[i];
        if (nodeB) {
          nodeB.setAttribute('cx', screenXB);
          nodeB.setAttribute('r', (4.5 * pB).toFixed(2));
          nodeB.setAttribute('opacity', Math.max(0.3, pB - 0.1).toFixed(2));
        }
        const rung = rungRefs.current[i];
        if (rung) {
          rung.setAttribute('x1', screenXA);
          rung.setAttribute('x2', screenXB);
          rung.setAttribute('opacity', Math.max(0.08, (pA + pB) / 2 - 0.35).toFixed(2));
        }
      }

      if (backboneARef.current) {
        let ptsA = [], ptsB = [];
        for (let i = 0; i < pointCount; i++) {
          const y = i * spacing;
          const a = i * twistPerPoint + angleOffset;
          ptsA.push(`${(cx + Math.cos(a) * radius * (focal / (focal + Math.sin(a) * radius))).toFixed(1)},${y}`);
          ptsB.push(`${(cx + Math.cos(a + Math.PI) * radius * (focal / (focal + Math.sin(a + Math.PI) * radius))).toFixed(1)},${y}`);
        }
        backboneARef.current.setAttribute('points', ptsA.join(' '));
        backboneBRef.current.setAttribute('points', ptsB.join(' '));
      }
    };

    if (prefersReduced) return undefined;

    const tick = (now) => {
      if (!isVisible) return;
      const dt = (now - last) / 1000;
      last = now;
      rotationRef.current += dt * speed;
      draw(rotationRef.current);
      raf = requestAnimationFrame(tick);
    };

    const startAnimation = () => {
      cancelAnimationFrame(raf);
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const stopAnimation = () => {
      cancelAnimationFrame(raf);
    };

    let idleTimer = null;
    if (typeof requestIdleCallback !== 'undefined') {
      idleTimer = requestIdleCallback(() => startAnimation(), { timeout: 400 });
    } else {
      idleTimer = setTimeout(() => startAnimation(), 400);
    }

    return () => {
      stopAnimation();
      if (idleTimer) {
        if (typeof cancelIdleCallback !== 'undefined') cancelIdleCallback(idleTimer);
        else clearTimeout(idleTimer);
      }
    };
  }, [pointCount, spacing, radius, twistPerPoint, speed, focal, cx]);

  return (
    <g transform="translate(720, 450) rotate(-80) translate(-84, -637)" opacity="0.5">
      <defs>
        <linearGradient id="dna-strand-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="dna-strand-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>

      {initialPoints.rungs.map((r, i) => (
        <line
          key={`rung-${i}`}
          ref={(el) => (rungRefs.current[i] = el)}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke="#94A3B8"
          strokeWidth="1.5"
          opacity={r.opacity}
        />
      ))}

      <polyline
        ref={backboneARef}
        fill="none"
        stroke="url(#dna-strand-a)"
        strokeWidth="3.5"
        strokeLinecap="round"
        points={initialPoints.pointsA}
      />
      <polyline
        ref={backboneBRef}
        fill="none"
        stroke="url(#dna-strand-b)"
        strokeWidth="3.5"
        strokeLinecap="round"
        points={initialPoints.pointsB}
      />

      {initialPoints.nodesA.map((n, i) => (
        <circle
          key={`nodeA-${i}`}
          ref={(el) => (nodeARefs.current[i] = el)}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="#94A3B8"
          opacity={n.opacity}
        />
      ))}
      {initialPoints.nodesB.map((n, i) => (
        <circle
          key={`nodeB-${i}`}
          ref={(el) => (nodeBRefs.current[i] = el)}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="#06B6D4"
          opacity={n.opacity}
        />
      ))}
    </g>
  );
};

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12 overflow-hidden bg-white text-slate-800">

      {/* ──── Unified full-bleed background SVG (zero layout shifts) ──── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AnimatedDNA pointCount={50} spacing={26} radius={64} twistPerPoint={0.4} speed={0.35} />
          <defs>
            <filter id="helix-glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g opacity="0.75" filter="url(#helix-glow)">
            <line x1="900" y1="80" x2="960" y2="120" stroke="#06B6D4" strokeWidth="2.5" />
            <line x1="960" y1="120" x2="1000" y2="100" stroke="#06B6D4" strokeWidth="2.5" />
            <line x1="960" y1="120" x2="950" y2="180" stroke="#22D3EE" strokeWidth="2.5" />
            <circle cx="900" cy="80" r="7" fill="#94A3B8" opacity="0.95" />
            <circle cx="960" cy="120" r="9" fill="#06B6D4" opacity="1" />
            <circle cx="1000" cy="100" r="7" fill="#94A3B8" opacity="0.95" />
            <circle cx="950" cy="180" r="6" fill="#10B981" opacity="0.9" />
          </g>

          <g opacity="0.7" filter="url(#helix-glow)">
            <line x1="1150" y1="90" x2="1210" y2="140" stroke="#06B6D4" strokeWidth="2.5" />
            <line x1="1210" y1="140" x2="1270" y2="110" stroke="#22D3EE" strokeWidth="2.5" />
            <circle cx="1150" cy="90" r="7" fill="#94A3B8" opacity="0.95" />
            <circle cx="1210" cy="140" r="9" fill="#06B6D4" opacity="1" />
            <circle cx="1270" cy="110" r="7" fill="#10B981" opacity="0.9" />
          </g>

          <g opacity="0.4" filter="url(#helix-glow)">
            <circle cx="500" cy="150" r="3" fill="#06B6D4" />
            <circle cx="1100" cy="750" r="2.5" fill="#10B981" />
            <circle cx="300" cy="450" r="2" fill="#06B6D4" />
            <circle cx="1350" cy="350" r="2.5" fill="#10B981" />
            <circle cx="600" cy="800" r="3" fill="#06B6D4" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* ──── Left Column — Hero Copy & Metrics ──── */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-3 sm:space-y-4 lg:space-y-4 text-center lg:text-left">

            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 border border-slate-200/80 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6d45e5] animate-pulse shrink-0" />
              <span>Welcome to MedAorticX Healthtek</span>
            </div>

            <h1 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-extrabold leading-[1.12] tracking-tight text-[#0f172a]">
              Powering the Pulse of<br className="hidden sm:inline" />
              <span className="grad-text">
                {' '}Healthcare Revenue
              </span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-[0.95rem] leading-relaxed max-w-[500px] mx-auto lg:mx-0 font-medium">
              Where healthcare meets intelligent revenue transformation and comprehensive medical coding excellence.
            </p>

            {/* Modern Glass Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-0.5 sm:pt-1">
              <button
                onClick={() => scrollTo('services')}
                className="btn-3d-primary shadow-btn-primary inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-gradient min-h-[44px] cursor-pointer"
              >
                Explore Services <b className="text-base leading-none">→</b>
              </button>
              <button
                onClick={() => scrollTo('courses')}
                className="btn-3d-ghost shadow-btn-ghost inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-700 bg-white/80 backdrop-blur-md min-h-[44px] cursor-pointer"
              >
                Coding Academy <b className="text-base leading-none">→</b>
              </button>
            </div>

            {/* Metric Cards — Glassmorphic Transparent Cards */}
            <div className="pt-2.5 sm:pt-3.5 border-t border-slate-200/60">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">

                <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo/30 hover:-translate-y-0.5 transition-all min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-indigo flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-inner" aria-hidden="true">
                    🏥
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight truncate sm:whitespace-normal">20% Reduction</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-0.5 leading-tight">Patient Wait Time</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal/30 hover:-translate-y-0.5 transition-all min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-inner" aria-hidden="true">
                    📋
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight truncate sm:whitespace-normal">98% Accuracy</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-0.5 leading-tight">Documentation</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 transition-all min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-inner" aria-hidden="true">
                    ⚡
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight truncate sm:whitespace-normal">3x Faster</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-0.5 leading-tight">Claims Processing</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ──── Right Column — Live Dashboard Preview Card ──── */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center mt-3 lg:mt-0">

            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] xl:max-w-[420px] mx-auto">

              {/* Soft brand-color glow behind the card for depth */}
              <div
                className="absolute inset-0 -z-10 rounded-[32px] blur-2xl opacity-20"
                style={{
                  background:
                    'radial-gradient(circle at 50% 40%, #14B8A6 0%, #6D4DE0 50%, transparent 75%)',
                }}
              />

              {/* Glassmorphic Dashboard Preview Card */}
              <div className="dash-fade-in relative z-10 w-full rounded-[24px] sm:rounded-[28px] bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-xl p-4 sm:p-5 lg:p-6">

                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm sm:text-base font-extrabold text-slate-900">Claims Intelligence</div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal bg-teal/10 px-2.5 py-0.5 rounded-full border border-teal/20">
                    <span className="dash-live-dot w-1.5 h-1.5 rounded-full bg-teal" />
                    LIVE
                  </div>
                </div>

                <svg viewBox="0 0 360 95" className="w-full h-auto" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6D4DE0" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>

                  <line x1="0" y1="25" x2="360" y2="25" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="0" y1="52" x2="360" y2="52" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="0" y1="80" x2="360" y2="80" stroke="#F1F5F9" strokeWidth="1" />

                  <path
                    d="M0,75 L40,70 L80,73 L120,55 L160,60 L200,40 L240,44 L280,26 L320,30 L360,12 L360,95 L0,95 Z"
                    fill="url(#chart-fill)"
                  />
                  <path
                    d="M0,75 L40,70 L80,73 L120,55 L160,60 L200,40 L240,44 L280,26 L320,30 L360,12"
                    fill="none"
                    stroke="url(#chart-line)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="360" cy="12" r="5" fill="#14B8A6" stroke="#ffffff" strokeWidth="2" className="shadow-sm" />
                </svg>

                <div className="flex items-center justify-between mt-1 mb-2.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-slate-100">
                  <div className="p-2 rounded-xl bg-slate-50/80 border border-slate-100 text-center">
                    <div className="text-sm sm:text-base font-black text-slate-900">99.8%</div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase">Accuracy</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50/80 border border-slate-100 text-center">
                    <div className="text-sm sm:text-base font-black text-slate-900">100k+</div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase">Claims/Mo</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50/80 border border-slate-100 text-center">
                    <div className="text-sm sm:text-base font-black text-slate-900">3x</div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase">Payouts</div>
                  </div>
                </div>

              </div>

              <style>{`
                .dash-fade-in {
                  animation: dash-fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                @keyframes dash-fade-in {
                  from { opacity: 0; transform: translateY(14px) scale(0.98); }
                  to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                .dash-live-dot {
                  animation: dash-pulse 1.8s ease-in-out infinite;
                }
                @keyframes dash-pulse {
                  0%, 100% { opacity: 1; transform: scale(1); }
                  50% { opacity: 0.4; transform: scale(1.3); }
                }
                @media (prefers-reduced-motion: reduce) {
                  .dash-fade-in { animation: none; }
                  .dash-live-dot { animation: none; }
                }
              `}</style>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};