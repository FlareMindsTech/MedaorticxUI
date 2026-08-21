import React from 'react';
import { Reveal } from '../common/Reveal';

export const AboutSection = () => {
  const values = [
    {
      title: "Integrity & Compliance",
      desc: "Strict adherence to HIPAA regulations, industry coding ethics, and healthcare privacy standards.",
      icon: "🛡️"
    },
    {
      title: "Accuracy-Driven",
      desc: "Delivering exceptional coding accuracy that eliminates denials and accelerates reimbursement.",
      icon: "🎯"
    },
    {
      title: "Industry Expertise",
      desc: "Certified professionals with hands-on experience across multiple medical specialties.",
      icon: "💼"
    },
    {
      title: "Education-Focused",
      desc: "Empowering the next generation of healthcare coders through comprehensive academy training.",
      icon: "🎓"
    }
  ];

  return (
    <section id="about" className="pt-3 sm:pt-4 pb-6 sm:pb-8 md:pb-10 relative overflow-hidden glass-section scroll-mt-16 sm:scroll-mt-20 w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 md:mb-8">
          <span className="inline-block bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-2.5 border border-indigo/10">
            About Us
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink mb-2.5 leading-tight px-1 sm:px-0">
            Transforming Healthcare Revenue Through <span className="grad-text">Expertise, Accuracy & Innovation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
            We are a healthcare Revenue Cycle Management company dedicated to helping healthcare providers and organizations simplify complex revenue processes, improve operational efficiency, and strengthen financial performance.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed px-1 sm:px-0">
            Built by professionals with hands-on experience in U.S. healthcare and medical coding, our approach combines industry expertise, attention to detail, technology-driven workflows, and a commitment to delivering consistent results.
          </p>
        </Reveal>

        {/* Narrative & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch mb-6 sm:mb-8 md:mb-10 w-full">
          
          <Reveal className="flex w-full">
            <div className="box-hover bg-white/85 backdrop-blur-xl p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl shadow-3d border border-white/80 flex flex-col justify-between w-full box-border">
              <div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo/20 to-teal/20 text-indigo flex items-center justify-center text-xl mb-3 shadow-inner">
                  🏢
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">Who We Are</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2.5">
                  We believe healthcare providers should be focused on what matters most — delivering quality patient care. Behind every successful healthcare organization is a strong and efficient revenue cycle. From accurate medical coding to claims management and denial resolution, every step plays an important role in protecting revenue and maintaining a healthy financial operation.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our team provides specialized healthcare support across key areas of the revenue cycle and professional training at our Medical Coding Academy, helping clients reduce administrative burdens, improve documentation, and maintain financial stability.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex w-full">
            <div className="box-hover bg-white/85 backdrop-blur-xl p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl shadow-3d border border-white/80 flex flex-col justify-between w-full box-border">
              <div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal/20 to-indigo/20 text-teal flex items-center justify-center text-xl mb-3 shadow-inner">
                  🚀
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">Our Mission</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2.5">
                  To empower healthcare organizations with high-accuracy coding, reliable RCM support, and skilled talent acquisition, while developing the next generation of healthcare revenue cycle professionals.
                </p>
                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo/5 to-teal/5 border border-indigo/10 mt-2.5">
                  <span className="text-xs sm:text-sm font-semibold text-indigo block leading-relaxed">
                    "Bridging the gap between clinical documentation and financial sustainability through precision, technology, and continuous talent development."
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {values.map((v, idx) => (
            <Reveal key={idx} delay={idx * 0.06} className="w-full">
              <div className="box-hover bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-sm flex flex-col justify-between h-full w-full box-border">
                <div>
                  <div className="text-xl mb-2">{v.icon}</div>
                  <h4 className="font-bold text-ink text-sm sm:text-base mb-1">{v.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
