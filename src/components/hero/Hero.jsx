import React, { Suspense, useState, useEffect } from 'react';
import { HeroStats } from './HeroStats';
import { FloatingCard3D } from './FloatingCard3D';

export const Hero = () => {
  const [useWebGL, setUseWebGL] = useState(false);
  const [DoctorScene, setDoctorScene] = useState(null);

  useEffect(() => {
    // Only load 3D WebGL scene on desktop screens
    if (window.innerWidth >= 1024) {
      setUseWebGL(true);
      import('../three/DoctorScene')
        .then((mod) => {
          setDoctorScene(() => mod.default);
        })
        .catch((err) => {
          console.error("Failed to load DoctorScene:", err);
        });
    }
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative pt-[74px] sm:pt-[76px] pb-8 sm:pb-12 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* ──── Left Column — Hero Copy ──── */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-4 sm:space-y-5 relative z-10 w-full max-w-[680px] mx-auto lg:mx-0 text-center lg:text-left">
            <div
              className="hero-anim inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 shadow-btn-ghost border border-indigo-50"
              style={{ animationDelay: '0s' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gradient animate-pulse" />
              Welcome to MedAorticX Healthtek
            </div>

            <h1
              className="hero-anim text-[clamp(1.8rem,4.2vw,3.2rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink"
              style={{ animationDelay: '0.08s' }}
            >
              Powering the Pulse of<br className="hidden sm:inline" />
              <span className="grad-text"> Healthcare Revenue</span>
            </h1>

            <p
              className="hero-anim text-slate-500 text-sm sm:text-base leading-[1.6] max-w-[480px] mx-auto lg:mx-0"
              style={{ animationDelay: '0.16s' }}
            >
              Where healthcare meets intelligent revenue transformation.
            </p>

            <div
              className="hero-anim flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1"
              style={{ animationDelay: '0.24s' }}
            >
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-[0.95rem] text-white bg-brand-gradient shadow-btn-primary hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all cursor-pointer border-none whitespace-nowrap min-h-[48px] w-full sm:w-auto"
              >
                Explore Services →
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-[0.95rem] text-ink bg-white shadow-btn-ghost hover:-translate-y-0.5 transition-all cursor-pointer border border-slate-100 whitespace-nowrap min-h-[48px] w-full sm:w-auto"
              >
                About Us →
              </button>
            </div>

            <div
              className="hero-anim pt-2 w-full"
              style={{ animationDelay: '0.32s' }}
            >
              <HeroStats />
            </div>
          </div>

          {/* ──── Right Column — Responsive 3D Canvas Visual + Feature Stack ──── */}
          <div className="lg:col-span-6 xl:col-span-5 relative w-full flex flex-col items-center justify-center">

            {/* Desktop Visual Container with Responsive Scaling */}
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">

              {/* Responsive Light Blue Circular Gradient Disc */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] lg:w-[320px] h-[220px] sm:h-[280px] lg:h-[320px] rounded-full bg-gradient-to-tr from-[#DDF3FF] via-[#E8F0FE] to-[#F1EAFF] border border-white/60 shadow-[inset_0_0_40px_rgba(255,255,255,0.8),0_10px_30px_rgba(99,102,241,0.08)] z-[2]" />

              {/* 3D Medical Visual Canvas */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[380px] h-[360px] sm:h-[440px] lg:h-[500px] z-[15]">
                {useWebGL && DoctorScene ? (
                  <Suspense
                    fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border-2 border-indigo border-t-transparent animate-spin" />
                      </div>
                    }
                  >
                    <DoctorScene />
                  </Suspense>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 100 140" className="w-32 h-32 sm:w-44 sm:h-44 drop-shadow-md">
                      <ellipse cx="50" cy="120" rx="35" ry="8" fill="rgba(255,255,255,0.6)" stroke="#5B7CF0" strokeWidth="2" />
                      <circle cx="50" cy="45" r="14" fill="#F8FAFC" />
                      <rect x="42" y="42" width="16" height="6" rx="3" fill="#1FC7C0" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Left Column Floating Stat Cards (Desktop / Large Screens) */}
              <div className="hidden lg:block">
                <FloatingCard3D
                  title="Medical Coding"
                  value="99.8%"
                  sub="Accuracy Rate"
                  up={true}
                  icon="📊"
                  iconBg="#EEF2FF"
                  positionClass="absolute top-[6%] left-[-10px] xl:left-0 z-[30] scale-75 xl:scale-90 2xl:scale-100 origin-left"
                  delay={0}
                />
                <FloatingCard3D
                  title="Claims Processed"
                  value="100k+"
                  sub="Monthly Volume"
                  icon="📅"
                  iconBg="#EEF2FF"
                  positionClass="absolute top-[36%] left-[-10px] xl:left-0 z-[30] scale-75 xl:scale-90 2xl:scale-100 origin-left"
                  delay={0.4}
                />
                <FloatingCard3D
                  title="Revenue Growth"
                  value="Better Outcomes"
                  sub="Optimized RCM"
                  up={true}
                  icon="📈"
                  iconBg="#EEF2FF"
                  positionClass="absolute top-[66%] left-[-10px] xl:left-0 z-[30] scale-75 xl:scale-90 2xl:scale-100 origin-left"
                  delay={0.8}
                />
              </div>

              {/* Right Column Floating Feature Cards (Desktop / Large Screens) */}
              <div className="hidden lg:block">
                <FloatingCard3D
                  title="Denial Management"
                  sub="Swift Appeals"
                  icon="💼"
                  iconBg="#EEF2FF"
                  positionClass="absolute top-[4%] right-[-10px] xl:right-0 z-[30] scale-75 xl:scale-90 2xl:scale-100 origin-right"
                  delay={0.2}
                />
                <FloatingCard3D
                  title="Billing & Coding"
                  sub="HIPAA Compliant"
                  icon="🛡️"
                  iconBg="#E6FBF6"
                  positionClass="absolute top-[26%] right-[-10px] xl:right-0 z-[30] scale-75 xl:scale-90 2xl:scale-100 origin-right"
                  delay={0.6}
                />
                <FloatingCard3D
                  title="Quality & Compliance"
                  sub="Excellence Guaranteed"
                  icon="✅"
                  iconBg="#EAFBEE"
                  positionClass="absolute top-[48%] right-[-10px] xl:right-0 z-[30] scale-75 xl:scale-90 2xl:scale-100 origin-right"
                  delay={1.0}
                />
                <FloatingCard3D
                  title="Smart Workflows"
                  sub="Built for Healthcare"
                  icon="👥"
                  iconBg="#F3E8FF"
                  positionClass="absolute top-[70%] right-[-10px] xl:right-0 z-[30] scale-75 xl:scale-90 2xl:scale-100 origin-right"
                  delay={1.4}
                />
              </div>

            </div>

            {/* Mobile & Tablet Auto-Fitting Feature Grid */}
            <div className="lg:hidden w-full mt-6">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 w-full">
                <FloatingCard3D
                  title="Medical Coding"
                  value="99.8%"
                  sub="Accuracy Rate"
                  up={true}
                  icon="📊"
                  iconBg="#EEF2FF"
                  delay={0}
                />
                <FloatingCard3D
                  title="Claims Processed"
                  value="100k+"
                  sub="Monthly Volume"
                  icon="📅"
                  iconBg="#EEF2FF"
                  delay={0.2}
                />
                <FloatingCard3D
                  title="Denial Management"
                  sub="Swift Appeals"
                  icon="💼"
                  iconBg="#EEF2FF"
                  delay={0.4}
                />
                <FloatingCard3D
                  title="Billing & Coding"
                  sub="HIPAA Compliant"
                  icon="🛡️"
                  iconBg="#E6FBF6"
                  delay={0.6}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};