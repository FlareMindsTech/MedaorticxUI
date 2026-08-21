import React, { useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Reveal } from '../components/common/Reveal';
import { SERVICES } from '../data/services';

export const Services = () => {
  return (
    <PageTransition>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4 border border-indigo/10">
            Comprehensive Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-4 sm:mb-6">
            Healthcare Services <span className="grad-text">Engineered for Excellence</span>
          </h1>
          <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed">
            Discover our specialized RCM recruitment solutions and our industry-leading Medical Coding Academy designed to power modern healthcare organizations.
          </p>
        </Reveal>

        {/* Detailed Service Blocks */}
        <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
          {SERVICES.map((service, idx) => (
            <Reveal
              key={service.id}
              delay={idx * 0.08}
              className="bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 md:p-10 shadow-3d border border-white/80 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
            >
              <div className="lg:col-span-4 flex items-start gap-4">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-sm shrink-0"
                  style={{ background: service.gradient }}
                >
                  {service.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo uppercase tracking-wider">Service 0{idx + 1}</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-ink mt-0.5">{service.title}</h2>
                  <p className="text-xs text-slate-500 font-semibold mt-1">{service.subtitle}</p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-muted text-sm sm:text-base leading-relaxed">{service.fullDesc}</p>
                
                {service.tagline && (
                  <div className="bg-indigo/5 border border-indigo/10 rounded-xl p-3 text-indigo font-bold text-xs sm:text-sm">
                    ✨ {service.tagline}
                  </div>
                )}

                <h3 className="font-bold text-ink text-xs sm:text-sm uppercase tracking-wider pt-2">
                  {service.id === 'rcm-recruitment-services' ? 'Recruitment Expertise' : "What You'll Learn"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-ink font-semibold bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>

                {service.whyChoose && (
                  <div className="pt-2 space-y-2">
                    <h4 className="font-bold text-ink text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</h4>
                    {service.whyChoose.map((why, wIdx) => (
                      <div key={wIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-indigo font-bold">•</span>
                        <span>{why}</span>
                      </div>
                    ))}
                  </div>
                )}

                {service.eligibility && (
                  <div className="bg-teal/10 border border-teal/20 rounded-xl p-3.5 text-xs sm:text-sm text-slate-700 mt-2">
                    <strong className="text-teal font-bold block mb-1">Who Can Join?</strong>
                    {service.eligibility}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};
