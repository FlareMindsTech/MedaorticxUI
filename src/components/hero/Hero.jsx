import React, { useEffect, useRef } from 'react';

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
  pointCount = 46,
  spacing = 24,     // px between base pairs along the strand's length
  radius = 60,       // px radius of the helix
  twistPerPoint = 0.42, // radians — how tight the corkscrew is
  speed = 0.5,        // radians/sec rotation speed
  focal = 480,         // perspective focal length (bigger = flatter)
  className = '',
}) => {
  const backboneARef = useRef(null);
  const backboneBRef = useRef(null);
  const nodeARefs = useRef([]);
  const nodeBRefs = useRef([]);
  const rungRefs = useRef([]);
  const rotationRef = useRef(0);

  const height = (pointCount - 1) * spacing;
  const width = radius * 2 + 40;
  const cx = width / 2;

  useEffect(() => {
    let raf;
    let last = performance.now();
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const draw = (angleOffset) => {
      const ptsA = [];
      const ptsB = [];

      for (let i = 0; i < pointCount; i++) {
        const y = i * spacing;
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

        ptsA.push(`${screenXA.toFixed(1)},${y}`);
        ptsB.push(`${screenXB.toFixed(1)},${y}`);

        const nodeA = nodeARefs.current[i];
        if (nodeA) {
          nodeA.setAttribute('cx', screenXA);
          nodeA.setAttribute('cy', y);
          nodeA.setAttribute('r', (4.5 * pA).toFixed(2));
          nodeA.setAttribute('opacity', Math.max(0.3, pA - 0.1).toFixed(2));
        }
        const nodeB = nodeBRefs.current[i];
        if (nodeB) {
          nodeB.setAttribute('cx', screenXB);
          nodeB.setAttribute('cy', y);
          nodeB.setAttribute('r', (4.5 * pB).toFixed(2));
          nodeB.setAttribute('opacity', Math.max(0.3, pB - 0.1).toFixed(2));
        }
        const rung = rungRefs.current[i];
        if (rung) {
          rung.setAttribute('x1', screenXA);
          rung.setAttribute('y1', y);
          rung.setAttribute('x2', screenXB);
          rung.setAttribute('y2', y);
          rung.setAttribute('opacity', Math.max(0.08, (pA + pB) / 2 - 0.35).toFixed(2));
        }
      }

      if (backboneARef.current) backboneARef.current.setAttribute('points', ptsA.join(' '));
      if (backboneBRef.current) backboneBRef.current.setAttribute('points', ptsB.join(' '));
    };

    draw(0);
    if (prefersReduced) return undefined;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      rotationRef.current += dt * speed;
      draw(rotationRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pointCount, spacing, radius, twistPerPoint, speed, focal, cx]);

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: 'visible' }}
    >
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

      {Array.from({ length: pointCount }).map((_, i) => (
        <line
          key={`rung-${i}`}
          ref={(el) => (rungRefs.current[i] = el)}
          stroke="#94A3B8"
          strokeWidth="1.5"
        />
      ))}

      <polyline ref={backboneARef} fill="none" stroke="url(#dna-strand-a)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <polyline ref={backboneBRef} fill="none" stroke="url(#dna-strand-b)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {Array.from({ length: pointCount }).map((_, i) => (
        <circle key={`node-a-${i}`} ref={(el) => (nodeARefs.current[i] = el)} fill="#64748B" />
      ))}
      {Array.from({ length: pointCount }).map((_, i) => (
        <circle key={`node-b-${i}`} ref={(el) => (nodeBRefs.current[i] = el)} fill="#06B6D4" />
      ))}
    </svg>
  );
};

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative pt-12 sm:pt-16 pb-16 overflow-hidden bg-gradient-to-b from-[#F2F7F9] via-[#EBF3F6] to-[#F5F9FA] text-slate-800 mt-12">

      {/* ──── Real animated 3D DNA double helix background — centered, full-width ──── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-80deg)',
            opacity: 0.5,
          }}
        >
          <AnimatedDNA pointCount={50} spacing={26} radius={64} twistPerPoint={0.4} speed={0.35} />
        </div>

        {/* ──── Molecular node clusters (kept from original for texture) ──── */}
        <svg
          className="absolute w-full h-full opacity-70"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ──── Left Column — Hero Copy & Metrics ──── */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[#161b3d] border-2 border-[#161b3d] shadow-[3px_3px_0_#161b3d]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6d45e5] animate-pulse" />
              Welcome to MedAorticX Healthtek
            </div>

            <h1 className="text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-[1.12] tracking-tight text-[#161b3d]">
              Powering the Pulse of<br className="hidden sm:inline" />
              <span className="grad-text">
                {' '}Healthcare Revenue
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[520px] mx-auto lg:mx-0 font-semibold">
              Where healthcare meets intelligent revenue transformation and comprehensive medical coding excellence.
            </p>

            {/* 3D Neo-Brutalist Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('services')}
                className="btn-3d-primary shadow-btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-white bg-brand-gradient min-h-[48px] cursor-pointer"
              >
                Explore Services <b className="text-lg leading-none">→</b>
              </button>
              <button
                onClick={() => scrollTo('courses')}
                className="btn-3d-ghost shadow-btn-ghost inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-[#161b3d] bg-white min-h-[48px] cursor-pointer"
              >
                Coding Academy <b className="text-lg leading-none">→</b>
              </button>
            </div>

            {/* 3D Metric Cards */}
            <div className="pt-6 sm:pt-8 border-t-2 border-slate-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border-2 border-[#161b3d] shadow-[4px_4px_0_#161b3d] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#161b3d] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#eee9ff] border-2 border-[#161b3d] flex items-center justify-center text-xl shadow-[2px_2px_0_#161b3d] shrink-0">
                    🏥
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-extrabold text-[#161b3d] leading-tight">20% Reduction</div>
                    <div className="text-xs text-slate-500 font-bold mt-0.5">Patient Wait Time</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border-2 border-[#161b3d] shadow-[4px_4px_0_#161b3d] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#161b3d] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#e4f8f8] border-2 border-[#161b3d] flex items-center justify-center text-xl shadow-[2px_2px_0_#161b3d] shrink-0">
                    📋
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-extrabold text-[#161b3d] leading-tight">98% Accuracy</div>
                    <div className="text-xs text-slate-500 font-bold mt-0.5">Documentation</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border-2 border-[#161b3d] shadow-[4px_4px_0_#161b3d] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#161b3d] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#fff7ed] border-2 border-[#161b3d] flex items-center justify-center text-xl shadow-[2px_2px_0_#161b3d] shrink-0">
                    ⚡
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-extrabold text-[#161b3d] leading-tight">3x Faster</div>
                    <div className="text-xs text-slate-500 font-bold mt-0.5">Claims Processing</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ──── Right Column — Live Dashboard Preview Card ──── */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">

            <div className="relative w-full max-w-[440px] mx-auto">

              {/* Soft brand-color glow behind the card for depth */}
              <div
                className="absolute inset-0 -z-10 rounded-[32px] blur-3xl opacity-30"
                style={{
                  background:
                    'radial-gradient(circle at 50% 40%, #16a9aa 0%, #6d45e5 50%, transparent 75%)',
                }}
              />

              {/* 3D Neo-Brutalist Dashboard Preview Card */}
              <div className="dash-fade-in relative z-10 w-full rounded-[24px] sm:rounded-[28px] bg-white border-[3px] border-[#161b3d] shadow-[8px_8px_0_#161b3d] p-5 sm:p-6">

                <div className="flex items-center justify-between mb-4">
                  <div className="text-base font-extrabold text-[#161b3d]">Claims Intelligence</div>
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#087a7d] bg-[#e4f8f8] px-3 py-1 rounded-full border-2 border-[#161b3d] shadow-[2px_2px_0_#161b3d]">
                    <span className="dash-live-dot w-2 h-2 rounded-full bg-[#16a9aa]" />
                    LIVE
                  </div>
                </div>

                <svg viewBox="0 0 360 120" className="w-full h-auto" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#16a9aa" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#16a9aa" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6d45e5" />
                      <stop offset="100%" stopColor="#16a9aa" />
                    </linearGradient>
                  </defs>

                  <line x1="0" y1="30" x2="360" y2="30" stroke="#E2E8F0" strokeWidth="1" />
                  <line x1="0" y1="65" x2="360" y2="65" stroke="#E2E8F0" strokeWidth="1" />
                  <line x1="0" y1="100" x2="360" y2="100" stroke="#E2E8F0" strokeWidth="1" />

                  <path
                    d="M0,95 L40,88 L80,92 L120,70 L160,75 L200,50 L240,55 L280,32 L320,38 L360,15 L360,120 L0,120 Z"
                    fill="url(#chart-fill)"
                  />
                  <path
                    d="M0,95 L40,88 L80,92 L120,70 L160,75 L200,50 L240,55 L280,32 L320,38 L360,15"
                    fill="none"
                    stroke="url(#chart-line)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="360" cy="15" r="6" fill="#16a9aa" stroke="#161b3d" strokeWidth="2" />
                </svg>

                <div className="flex items-center justify-between mt-2 mb-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t-2 border-slate-100">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-base sm:text-lg font-black text-[#161b3d]">99.8%</div>
                    <div className="text-[10px] font-extrabold text-slate-500 uppercase">Accuracy</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-base sm:text-lg font-black text-[#161b3d]">100k+</div>
                    <div className="text-[10px] font-extrabold text-slate-500 uppercase">Claims/Mo</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-base sm:text-lg font-black text-[#161b3d]">3x</div>
                    <div className="text-[10px] font-extrabold text-slate-500 uppercase">Payouts</div>
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