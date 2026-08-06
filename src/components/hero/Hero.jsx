import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroStats } from './HeroStats';
import { FloatingCard3D } from './FloatingCard3D';

const DoctorScene = lazy(() => import('../three/DoctorScene'));

export const Hero = () => {
  const [useWebGL, setUseWebGL] = useState(true);

  useEffect(() => {
    // Check screen width and hardware concurrency for low-end / mobile check
    const isMobile = window.innerWidth < 1024;
    const lowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    if (isMobile || lowEnd) {
      setUseWebGL(false);
    }
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative pt-[72px] md:pt-[80px] pb-4 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 items-center">

          {/* ──── Left Column — Hero Copy ──── */}
          <div className="space-y-4 relative z-10 w-full max-w-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 shadow-btn-ghost border border-indigo-50"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gradient animate-pulse" />
              Welcome to MedAorticX HealthTek
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-[clamp(2.2rem,3.4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink"
            >
              Empowering Healthcare<br />
              Through <span className="grad-text">Innovative Tech</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="text-slate-500 text-sm sm:text-base leading-[1.6] max-w-[500px]"
            >
              We build smart, secure and scalable healthcare solutions that simplify operations, enhance patient care and drive better outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-xl font-semibold text-[0.95rem] text-white bg-brand-gradient shadow-btn-primary hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all cursor-pointer border-none whitespace-nowrap min-w-[190px]"
              >
                Explore Services →
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-xl font-semibold text-[0.95rem] text-ink bg-white shadow-btn-ghost hover:-translate-y-0.5 transition-all cursor-pointer border border-slate-100 whitespace-nowrap min-w-[180px]"
              >
                See Our Work →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="pt-2 w-full"
            >
              <HeroStats />
            </motion.div>
          </div>

          {/* ──── Right Column — 3D Doctor + Floating Cards ──── */}
          <div className="relative">

            {/* Desktop Visual Stack */}
            <div className="hidden lg:block relative h-[480px] w-full overflow-visible">

              {/* Light Blue Circular Gradient Disc behind Doctor (exact match to target mockup) */}
              <div className="absolute right-[110px] top-[42%] -translate-y-[50%] w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#DDF3FF] via-[#E8F0FE] to-[#F1EAFF] border border-white/60 shadow-[inset_0_0_40px_rgba(255,255,255,0.8),0_10px_30px_rgba(99,102,241,0.08)] z-[2]" />

              {/* 3D Doctor Canvas — Centered inside the circular disc */}
              <div className="absolute right-[100px] top-[-150px] w-[380px] h-[640px] z-[15] pointer-events-none">
                {useWebGL ? (
                  <Suspense
                    fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-indigo border-t-transparent animate-spin" />
                      </div>
                    }
                  >
                    <DoctorScene />
                  </Suspense>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 100 140" className="w-48 h-48 drop-shadow-md">
                      <ellipse cx="50" cy="120" rx="35" ry="8" fill="rgba(255,255,255,0.6)" stroke="#5B7CF0" strokeWidth="2" />
                      <circle cx="50" cy="45" r="14" fill="#F8FAFC" />
                      <rect x="42" y="42" width="16" height="6" rx="3" fill="#1FC7C0" />
                    </svg>
                  </div>
                )}
              </div>

              {/* ── Left 3 stat cards ── */}
              <FloatingCard3D
                title="Patient Analytics"
                value="+28%"
                sub="vs last month"
                up={true}
                icon="📊"
                iconBg="#EEF2FF"
                positionClass="absolute top-[4%] left-[10px] z-[30]"
                delay={0}
              />
              <FloatingCard3D
                title="Appointments"
                value="1,245"
                sub="This Month"
                icon="📅"
                iconBg="#EEF2FF"
                positionClass="absolute top-[34%] left-[10px] z-[30]"
                delay={0.4}
              />
              <FloatingCard3D
                title="Revenue Growth"
                value="+18.6%"
                sub="vs last month"
                up={true}
                icon="📈"
                iconBg="#EEF2FF"
                positionClass="absolute top-[64%] left-[10px] z-[30]"
                delay={0.8}
              />

              {/* ── Right 4 feature cards ── */}
              <FloatingCard3D
                title="Medical Records"
                sub="Secure & Compliant"
                icon="💼"
                iconBg="#EEF2FF"
                positionClass="absolute top-[2%] right-[-15px] z-[30]"
                delay={0.2}
              />
              <FloatingCard3D
                title="Data Security"
                sub="HIPAA Compliant"
                icon="🛡️"
                iconBg="#E6FBF6"
                positionClass="absolute top-[26%] right-[-15px] z-[30]"
                delay={0.6}
              />
              <FloatingCard3D
                title="System Status"
                sub="All Systems Operational"
                icon="✅"
                iconBg="#EAFBEE"
                positionClass="absolute top-[50%] right-[-15px] z-[30]"
                delay={1.0}
              />
              <FloatingCard3D
                title="Smart Solutions"
                sub="Built for Healthcare"
                icon="👥"
                iconBg="#F3E8FF"
                positionClass="absolute top-[74%] right-[-15px] z-[30]"
                delay={1.4}
              />

            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden mt-8 space-y-4">
              <div className="w-full h-[320px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-indigo/5 to-transparent">
                {useWebGL ? (
                  <Suspense fallback={null}>
                    <DoctorScene />
                  </Suspense>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 100 140" className="w-32 h-32 drop-shadow-md">
                      <ellipse cx="50" cy="120" rx="35" ry="8" fill="rgba(255,255,255,0.6)" stroke="#5B7CF0" strokeWidth="2" />
                      <circle cx="50" cy="45" r="14" fill="#F8FAFC" />
                      <rect x="42" y="42" width="16" height="6" rx="3" fill="#1FC7C0" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};