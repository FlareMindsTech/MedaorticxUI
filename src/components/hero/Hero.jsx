import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeroStats } from './HeroStats';
import { FloatingCard3D } from './FloatingCard3D';
import { DoctorScene } from '../three/DoctorScene';

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative pt-12 md:pt-20 pb-10 overflow-visible">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        
          {/* ──── Left Column — Hero Copy ──── */}
          <div className="space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-btn-ghost"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gradient" />
              Welcome to MedAorticX HealthTek
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-[clamp(2.2rem,3.6vw,3.15rem)] font-extrabold leading-[1.14] tracking-[-0.01em] text-ink"
            >
              Empowering Healthcare<br />
              Through <span className="grad-text">Innovative Tech</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="text-muted text-base leading-[1.65] max-w-[480px]"
            >
              We build smart, secure and scalable healthcare solutions that simplify operations, enhance patient care and drive better outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-[14px] font-semibold text-[0.95rem] text-white bg-brand-gradient shadow-btn-primary hover:-translate-y-0.5 transition-transform cursor-pointer border-none"
              >
                Explore Services →
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-[14px] font-semibold text-[0.95rem] text-ink bg-white shadow-btn-ghost hover:-translate-y-0.5 transition-transform cursor-pointer border-none"
              >
                <span className="w-[22px] h-[22px] rounded-full bg-indigo text-white inline-flex items-center justify-center text-[0.6rem]">
                  ▶
                </span>
                See Our Work →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
            >
              <HeroStats />
            </motion.div>
          </div>

          {/* ──── Right Column — 3D Doctor Visual ──── */}
          <div className="relative">

            {/* Desktop Visual Stack */}
            <div className="hidden lg:block relative h-[560px] min-w-[520px] overflow-visible">

              {/* Glow Ring — behind everything (z-0) */}
              <div
                className="absolute left-1/2 top-[8%] -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle, rgba(109,77,224,0.14) 0%, rgba(31,199,192,0.08) 55%, transparent 75%)',
                }}
              />

              {/* Podium — below canvas (z-[1]) */}
              <div className="absolute left-1/2 bottom-[30px] -translate-x-1/2 w-[340px] h-[60px] rounded-full z-[1]"
                style={{
                  background: 'linear-gradient(180deg, #ffffff, #dfe3fb)',
                  boxShadow: '0 30px 60px -20px rgba(109,77,224,0.45), inset 0 2px 0 #fff',
                }}
              >
                <div
                  className="absolute left-1/2 bottom-[14px] -translate-x-1/2 w-[260px] h-[40px] rounded-full"
                  style={{ background: 'linear-gradient(180deg, #eef0ff, #c9cff5)' }}
                />
              </div>

              {/* 3D Doctor Canvas — fixed 340×460 container, z-[3] */}
              <div className="absolute left-1/2 bottom-[64px] -translate-x-1/2 w-[340px] h-[460px] z-[3]">
                <Suspense fallback={null}>
                  <DoctorScene />
                </Suspense>
              </div>

              {/* Decorative floating icons — z-[4] */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                className="absolute top-[6%] left-[32%] w-[52px] h-[52px] bg-white rounded-2xl flex items-center justify-center text-2xl shadow-md z-[4]"
              >
                ❤️
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 0.4 }}
                className="absolute top-[2%] right-[8%] w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-3xl text-white shadow-md z-[4]"
                style={{ background: 'linear-gradient(135deg, #5B7CF0, #6D4DE0)' }}
              >
                ✚
              </motion.div>
              <motion.div
                animate={{ rotate: [-18, 8, -18] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[2%] right-[2%] w-[90px] h-[34px] rounded-full z-[4] opacity-80"
                style={{ background: 'linear-gradient(90deg, #3AD9C9, #6D4DE0)' }}
              />

              {/* 6 Floating Cards — flat 2D, kept inside frame */}
              <FloatingCard3D
                title="Patient Analytics"
                value="+28%"
                sub="vs last month"
                up={true}
                positionClass="top-[16%] left-[2%]"
                delay={0}
              />
              <FloatingCard3D
                title="Appointments"
                value="1,245"
                sub="This Month"
                positionClass="top-[36%] left-0"
                delay={0.6}
              />
              <FloatingCard3D
                title="Revenue Growth"
                value="+18.6%"
                sub="vs last month"
                positionClass="top-[56%] left-[4%]"
                delay={1.2}
              />

              <FloatingCard3D
                title="Medical Records"
                sub="Secure & Compliant"
                icon="📋"
                iconBg="#E9EEFF"
                positionClass="top-[20%] right-0"
                delay={0.3}
              />
              <FloatingCard3D
                title="Data Security"
                sub="HIPAA Compliant"
                icon="🛡️"
                iconBg="#E6FBF6"
                positionClass="top-[40%] right-0"
                delay={0.9}
              />
              <FloatingCard3D
                title="System Status"
                sub="All Systems Operational"
                icon="✅"
                iconBg="#EAFBEE"
                positionClass="top-[60%] right-[2%]"
                delay={1.5}
              />
            </div>

            {/* ──── Mobile Horizontal Swipeable Cards ──── */}
            <div className="lg:hidden mt-8 space-y-4">
              <div className="text-center font-bold text-xs uppercase tracking-wider text-indigo mb-2">
                Healthcare Platform Highlights
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
                <div className="snap-center shrink-0 w-[240px] bg-white p-4 rounded-2xl shadow-btn-ghost border border-ink/5">
                  <div className="text-xs text-grayLight">Patient Analytics</div>
                  <div className="text-xl font-extrabold text-ink mt-1 flex items-center gap-2">
                    +28% <span className="text-emerald-500 text-xs font-bold">▲</span>
                  </div>
                  <div className="text-[0.7rem] text-grayLight">vs last month</div>
                </div>

                <div className="snap-center shrink-0 w-[240px] bg-white p-4 rounded-2xl shadow-btn-ghost border border-ink/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E9EEFF] flex items-center justify-center text-lg">📋</div>
                  <div>
                    <div className="font-bold text-ink text-sm">Medical Records</div>
                    <div className="text-xs text-grayLight">Secure & Compliant</div>
                  </div>
                </div>

                <div className="snap-center shrink-0 w-[240px] bg-white p-4 rounded-2xl shadow-btn-ghost border border-ink/5">
                  <div className="text-xs text-grayLight">Appointments</div>
                  <div className="text-xl font-extrabold text-ink mt-1">1,245</div>
                  <div className="text-[0.7rem] text-grayLight">This Month</div>
                </div>

                <div className="snap-center shrink-0 w-[240px] bg-white p-4 rounded-2xl shadow-btn-ghost border border-ink/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6FBF6] flex items-center justify-center text-lg">🛡️</div>
                  <div>
                    <div className="font-bold text-ink text-sm">Data Security</div>
                    <div className="text-xs text-grayLight">HIPAA Compliant</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
