import React, { useEffect, useRef } from 'react';

/* ============================================================
   PulseNetworkAnimation — Edge-to-Edge & Zoom-Responsive ECG
   ============================================================ */
const PulseNetworkAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    let nodes = [];

    const initNodes = (w, h) => {
      nodes = Array.from({ length: 28 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 2.5,
      }));
    };

    // Dynamically recalculates bounds during window zoom (Ctrl +/-) & resize
    const handleResize = () => {
      if (!container || !canvas) return;
      const scale = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;

      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.scale(scale, scale);

      initNodes(width, height);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    let pulseOffset = 0;

    // Continuous ECG wave moving across full width
    const drawECGWave = (yOffset, opacity, speedFactor, strokeColor) => {
      ctx.beginPath();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.5;
      ctx.globalAlpha = opacity;

      const wavelength = 240;

      for (let x = 0; x <= width; x += 2) {
        const xPos = (x + pulseOffset * speedFactor) % wavelength;
        let y = yOffset;

        const cycle = xPos / wavelength;

        if (cycle > 0.35 && cycle < 0.40) {
          y -= Math.sin((cycle - 0.35) * Math.PI * 20) * 12;
        } else if (cycle >= 0.40 && cycle < 0.43) {
          y += (cycle - 0.40) * 300;
        } else if (cycle >= 0.43 && cycle < 0.48) {
          y -= 90 - Math.abs(cycle - 0.455) * 1200;
        } else if (cycle >= 0.48 && cycle < 0.51) {
          y += (0.51 - cycle) * 300;
        } else if (cycle >= 0.55 && cycle < 0.65) {
          y -= Math.sin((cycle - 0.55) * Math.PI * 10) * 18;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      pulseOffset += 1.2;

      // Draw constellation dots
      ctx.globalAlpha = 1;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#06B6D4';
        ctx.shadowColor = '#06B6D4';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = '#0EA5E9';
            ctx.globalAlpha = (1 - dist / 130) * 0.35;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw ECG waves
      drawECGWave(height * 0.45, 0.30, 0.7, '#0EA5E9');
      drawECGWave(height * 0.58, 0.85, 1.0, '#10B981');

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[420px] relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};

/* ============================================================
   Hero Section Component
   ============================================================ */
export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-8 overflow-hidden bg-white text-slate-800">
      {/* Tightened horizontal padding (px-2 sm:px-4 lg:px-6) */}
      <div className="max-w-[1360px] mx-auto px-2 sm:px-4 lg:px-6 w-full relative z-10">
        
        {/* Tighter grid gap (gap-2 lg:gap-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-center">

          {/* Left Column — Text & Metrics */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-600 border border-slate-200/80 shadow-sm">
              Welcome to MedAorticX Healthtek
            </div>

            <h1 className="text-[clamp(2.4rem,4.2vw,3.8rem)] font-extrabold leading-[1.12] tracking-tight text-[#0B1E36]">
              Powering the Pulse of<br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B5C] via-[#06B6D4] to-[#10B981]">
                {' '}Healthcare Revenue
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[540px] mx-auto lg:mx-0 font-normal">
              Where healthcare meets intelligent revenue transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#06B6D4] to-[#10B981] hover:opacity-95 shadow-md shadow-cyan-500/20 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap min-h-[48px]"
              >
                Explore Services →
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap min-h-[48px]"
              >
                About Us →
              </button>
            </div>

            {/* Metrics Lines */}
            <div className="pt-6 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="pl-4 border-l-4 border-[#0B1E36] text-left">
                  <div className="text-2xl font-black text-[#0B1E36]">20%</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Reduction</div>
                  <div className="text-xs text-slate-500">In Patient Wait Time</div>
                </div>

                <div className="pl-4 border-l-4 border-[#06B6D4] text-left">
                  <div className="text-2xl font-black text-[#0B1E36]">98%</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Accuracy</div>
                  <div className="text-xs text-slate-500">Clinical Documentation</div>
                </div>

                <div className="pl-4 border-l-4 border-[#10B981] text-left">
                  <div className="text-2xl font-black text-[#0B1E36]">3×</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Faster</div>
                  <div className="text-xs text-slate-500">Claims Processing</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column — Snug alignment directly beside left column */}
          <div className="hidden lg:flex lg:col-span-6 relative items-center justify-start h-full min-h-[460px] w-full">
            <PulseNetworkAnimation />
          </div>

        </div>
      </div>
    </section>
  );
};