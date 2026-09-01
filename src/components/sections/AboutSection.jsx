import React from 'react';
import { Reveal } from '../common/Reveal';

export const AboutSection = () => {
  const stats = [
    {
      value: "98%+",
      label: "Claim Accuracy",
      iconBg: "bg-purple-50 text-purple-600 border border-purple-100",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M19 5l1-1M5 5L4 4" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      value: "30%+",
      label: "Faster Reimbursements",
      iconBg: "bg-sky-50 text-sky-600 border border-sky-100",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      value: "20%+",
      label: "Revenue Improvement",
      iconBg: "bg-teal-50 text-teal-600 border border-teal-100",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M7 16v-4" />
          <path d="M12 16V9" />
          <path d="M17 16V5" />
          <path d="M7 12l5-5 5 4 4-4" />
        </svg>
      )
    },
    {
      value: "500+",
      label: "Healthcare Partners",
      iconBg: "bg-purple-50 text-indigo-600 border border-indigo-100",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  const coreValues = [
    {
      title: "Integrity & Compliance",
      desc: "We uphold the highest standards of HIPAA compliance, ethics, and data security.",
      ringColor: "border-indigo-400/40 shadow-[0_0_22px_rgba(99,102,241,0.35)]",
      iconColor: "text-indigo-400",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Accuracy–Driven",
      desc: "Precision in coding. Excellence in outcomes. Every time.",
      ringColor: "border-cyan-400/40 shadow-[0_0_22px_rgba(6,182,212,0.35)]",
      iconColor: "text-cyan-400",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      )
    },
    {
      title: "Industry Expertise",
      desc: "Deep domain knowledge across specialties and care settings.",
      ringColor: "border-teal-400/40 shadow-[0_0_22px_rgba(20,184,166,0.35)]",
      iconColor: "text-teal-300",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <line x1="12" y1="12" x2="12" y2="12.01" strokeWidth="3" />
        </svg>
      )
    },
    {
      title: "Education–Focused",
      desc: "Investing in people and training to build the next generation of experts.",
      ringColor: "border-purple-400/40 shadow-[0_0_22px_rgba(168,85,247,0.35)]",
      iconColor: "text-purple-300",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    }
  ];

  const handleGetInTouch = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20 w-full bg-[#FAFAFC]" aria-labelledby="about-heading">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10 w-full box-border">
        
        {/* ========================================================================= */}
        {/* Top Header: Badge, Title & Subtitle                                      */}
        {/* ========================================================================= */}
        <Reveal className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo inline-block"></span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-indigo uppercase">
              ABOUT US
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo inline-block"></span>
          </div>

          <h2 id="about-heading" className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#111633] mb-4 leading-[1.18] tracking-tight">
            Transforming Healthcare Revenue <br className="hidden sm:inline" />
            Through <span className="bg-gradient-to-r from-[#6D4DE0] via-[#3B82F6] to-[#0D9488] bg-clip-text text-transparent">Expertise, Accuracy & Innovation</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We simplify complex revenue processes so healthcare providers can focus on what matters most — <span className="text-[#6D4DE0] font-bold">patient care.</span>
          </p>
        </Reveal>

        {/* ========================================================================= */}
        {/* Metrics / Stats Cards                                                    */}
        {/* ========================================================================= */}
        <Reveal delay={0.1} className="mb-10 sm:mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-6px_rgba(109,77,224,0.12)] transition-all duration-300 flex items-center gap-3 sm:gap-4"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium truncate sm:whitespace-normal">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* Two Main Cards: "01 Who We Are" & "02 Our Mission"                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-16">
          
          {/* Card 1: Who We Are (Dark Cyber Wave Card) */}
          <Reveal delay={0.15} className="flex h-full w-full">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0B0E23] via-[#101438] to-[#1C1445] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-indigo-900/30 w-full min-h-[460px]">
              
              {/* Subtle top radial glow */}
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
              
              {/* Large Watermark "01" */}
              <div className="absolute top-4 left-6 text-7xl sm:text-8xl font-black text-indigo-400/[0.11] select-none pointer-events-none tracking-tighter">
                01
              </div>

              {/* Content Header & Body */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 pt-2">
                  Who We Are
                </h3>
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-indigo via-purple-400 to-teal mb-5" />

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  A team of healthcare revenue cycle experts committed to delivering accurate coding, seamless workflows, and measurable results.
                </p>

                {/* 3 Checkmark Pills */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {[
                    { label: "People", sub: "Who Care" },
                    { label: "Process", sub: "That Works" },
                    { label: "Results", sub: "That Matter" }
                  ].map((pill, pIdx) => (
                    <div 
                      key={pIdx}
                      className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-md text-xs sm:text-sm text-white font-medium shadow-inner"
                    >
                      <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full border border-indigo-400/60 bg-indigo-500/25 flex items-center justify-center text-indigo-300 flex-shrink-0">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2.5 6 5 8.5 9.5 3.5" />
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-200">{pill.label} <span className="font-normal text-slate-300">{pill.sub}</span></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Cyber Wave Graphic (Matching Image) */}
              <div className="relative w-full h-32 sm:h-40 mt-8 overflow-hidden pointer-events-none select-none">
                <svg className="w-full h-full object-cover" viewBox="0 0 500 160" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cyberWaveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Subtle dot matrix in the background */}
                  <g opacity="0.15" fill="#818CF8">
                    {Array.from({ length: 24 }).map((_, r) =>
                      Array.from({ length: 8 }).map((_, c) => (
                        <circle key={`${r}-${c}`} cx={r * 22 + 10} cy={c * 18 + 10} r="1" />
                      ))
                    )}
                  </g>

                  {/* Flowing glow area */}
                  <path d="M0,130 C120,60 220,150 340,90 C420,50 480,100 500,120 L500,160 L0,160 Z" fill="url(#neonGlow)" />

                  {/* Primary Sine Ribbon Wave */}
                  <path d="M0,120 C100,50 200,145 320,85 C410,40 460,95 500,110" stroke="url(#cyberWaveGrad)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M0,128 C110,65 210,155 330,95 C415,50 465,102 500,118" stroke="url(#cyberWaveGrad)" strokeWidth="1.2" strokeOpacity="0.6" />
                  <path d="M0,136 C120,78 220,162 340,105 C420,60 470,110 500,125" stroke="#6366F1" strokeWidth="0.75" strokeOpacity="0.4" />
                  
                  {/* Glowing light particles */}
                  <circle cx="160" cy="115" r="2.5" fill="#C084FC" />
                  <circle cx="240" cy="130" r="3" fill="#60A5FA" />
                  <circle cx="320" cy="85" r="3.5" fill="#FFFFFF" filter="drop-shadow(0 0 6px #A855F7)" />
                  <circle cx="380" cy="65" r="2" fill="#38BDF8" />
                  <circle cx="430" cy="85" r="2.5" fill="#C084FC" />
                  <circle cx="100" cy="80" r="1.5" fill="#E0E7FF" />
                </svg>
              </div>

            </div>
          </Reveal>

          {/* Card 2: Our Mission (Light Frosted Glass Card) */}
          <Reveal delay={0.2} className="flex h-full w-full">
            <div className="relative overflow-hidden rounded-3xl bg-[#F6F9FD] border border-slate-200/90 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm w-full min-h-[460px]">
              
              {/* Concentric circle ripples in background */}
              <div className="absolute -top-10 -right-10 w-96 h-96 pointer-events-none opacity-40 select-none">
                <svg className="w-full h-full" viewBox="0 0 300 300" fill="none">
                  <circle cx="200" cy="100" r="80" stroke="#0D9488" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
                  <circle cx="200" cy="100" r="120" stroke="#0D9488" strokeWidth="1" strokeOpacity="0.2" />
                  <circle cx="200" cy="100" r="160" stroke="#0D9488" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" />
                  <circle cx="200" cy="100" r="200" stroke="#0D9488" strokeWidth="1" strokeOpacity="0.1" />
                </svg>
              </div>

              {/* Large Watermark "02" */}
              <div className="absolute top-4 right-6 text-7xl sm:text-8xl font-black text-slate-300/[0.11] select-none pointer-events-none tracking-tighter">
                02
              </div>

              {/* Content Header & Body */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2 pt-2">
                  Our Mission
                </h3>
                <div className="w-10 h-1 rounded-full bg-teal mb-5" />

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  Empowering healthcare organizations with precision, technology, and talent to build a healthier financial future.
                </p>
              </div>

              {/* Quote Card (Matching Image) */}
              <div className="relative z-10 bg-white rounded-2xl p-5 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-slate-100 mt-auto">
                <div className="flex gap-3">
                  <span className="text-teal text-3xl sm:text-4xl font-serif font-black leading-none select-none flex-shrink-0">
                    “
                  </span>
                  <p className="text-slate-700 font-medium text-xs sm:text-sm md:text-[15px] leading-relaxed pt-1 pr-6">
                    Bridging the gap between clinical documentation and financial sustainability through precision, technology, and continuous talent development.
                  </p>
                </div>
                <div className="text-right mt-1">
                  <span className="text-teal text-3xl sm:text-4xl font-serif font-black leading-none select-none inline-block">
                    ”
                  </span>
                </div>
              </div>

              {/* Bottom Right Dot Grid */}
              <div className="absolute bottom-3 right-4 pointer-events-none opacity-30 select-none">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="#0D9488">
                  {Array.from({ length: 6 }).map((_, r) =>
                    Array.from({ length: 4 }).map((_, c) => (
                      <circle key={`${r}-${c}`} cx={r * 10 + 5} cy={c * 10 + 5} r="1.5" />
                    ))
                  )}
                </svg>
              </div>

            </div>
          </Reveal>

        </div>

        {/* ========================================================================= */}
        {/* "What Sets Us Apart" / "Our Core Values" (Dark Midnight Container)        */}
        {/* ========================================================================= */}
        <Reveal delay={0.25} className="w-full">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-[#0A0D22] border border-slate-800/80 pt-10 sm:pt-14 pb-8 sm:pb-12 px-6 sm:px-8 md:px-12 shadow-2xl text-white">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="text-teal font-bold tracking-[0.25em] text-[11px] sm:text-xs uppercase block mb-2">
                WHAT SETS US APART
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
                Our Core Values
              </h3>
              <div className="w-12 h-1 rounded-full bg-teal mx-auto" />
            </div>

            {/* 4 Value Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
              {coreValues.map((v, idx) => (
                <div 
                  key={idx}
                  className={`flex flex-col items-center text-center px-4 lg:px-6 relative ${
                    idx !== coreValues.length - 1 ? 'lg:border-r lg:border-white/10' : ''
                  }`}
                >
                  {/* Glowing circular icon ring */}
                  <div className={`w-16 h-16 rounded-full border bg-white/[0.04] flex items-center justify-center mb-5 ${v.ringColor} ${v.iconColor} transition-transform duration-300 hover:scale-110`}>
                    {v.icon}
                  </div>

                  <h4 className="font-bold text-white text-base sm:text-lg mb-2">
                    {v.title}
                  </h4>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* ===================================================================== */}
            {/* Bottom CTA Card: "Let's Build Better Together"                       */}
            {/* ===================================================================== */}
            <div className="mt-12 sm:mt-16 pt-2">
              <div className="bg-white rounded-2xl sm:rounded-full p-4 sm:p-5 md:pl-6 md:pr-4 shadow-xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 max-w-3xl mx-auto">
                
                {/* Left: Purple play/action icon */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-indigo via-[#6366F1] to-violet flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo/35 text-white">
                    <svg className="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>

                  {/* Middle Text */}
                  <div className="text-left">
                    <span className="text-indigo font-bold text-[11px] sm:text-xs tracking-wider uppercase block">
                      LET'S BUILD BETTER TOGETHER
                    </span>
                    <h4 className="text-[#0F172A] font-extrabold text-base sm:text-lg leading-snug">
                      Ready to Optimize Your Revenue Cycle?
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm hidden sm:block">
                      Partner with experts who care about your growth as much as you do.
                    </p>
                  </div>
                </div>

                {/* Right: CTA Button */}
                <button
                  onClick={handleGetInTouch}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#5B3DF5] via-[#4338CA] to-[#0284C7] hover:from-[#4E2DE8] hover:to-[#0369A1] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Get in Touch</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
