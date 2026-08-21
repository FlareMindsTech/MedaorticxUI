import React, { useState } from 'react';
import { Reveal } from '../common/Reveal';

export const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const clientSolutions = [
    {
      id: 'hospitals',
      title: 'Hospitals & Health Systems',
      icon: '🏥',
      tagline: 'Scale revenue cycle operations across multi-facility networks without workflow disruption.',
      stats: 'Enterprise RCM',
      benefits: [
        'Centralized medical coding and billing oversight across departments',
        'Claims management and denial resolution with root-cause analysis',
        'Accounts receivable follow-up and payment posting at scale',
        'Quality and compliance support aligned with regulatory requirements'
      ]
    },
    {
      id: 'clinics',
      title: 'Specialty Clinics & Practices',
      icon: '⚕️',
      tagline: 'Reduce administrative complexity so specialists can focus on delivering quality patient care.',
      stats: 'Specialty-Focused',
      benefits: [
        'Specialty-specific medical coding with high accuracy rates',
        'Eligibility and benefits verification before patient visits',
        'Charge entry, charge review, and clean claim submission',
        'Denial management and appeals tailored per specialty'
      ]
    },
    {
      id: 'provider-groups',
      title: 'Provider Groups & MSOs',
      icon: '🩺',
      tagline: 'Streamline revenue operations and improve financial visibility across your provider network.',
      stats: 'Multi-Provider',
      benefits: [
        'Group-wide revenue cycle support and performance tracking',
        'Standardized coding and billing workflows across providers',
        'Payment posting reconciliation and A/R management',
        'Scalable recruitment support that adapts to staffing needs'
      ]
    }
  ];

  return (
    <section id="solutions" className="py-6 sm:py-8 md:py-10 relative overflow-hidden glass-section scroll-mt-16 sm:scroll-mt-20 w-full">
      <div className="max-w-[1360px] mx-auto px-2 sm:px-4 md:px-5 lg:px-6 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-2.5 border border-indigo/10">
            Tailored Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-ink mb-2.5 leading-tight">
            Built for Your <span className="grad-text">Practice Needs</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Scalable revenue cycle management, medical coding, and staffing solutions configured for every healthcare setting.
          </p>
        </Reveal>

        {/* Tab Selection — equal-width buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 sm:mb-8 max-w-3xl mx-auto">
          {clientSolutions.map((sol, idx) => (
            <button
              key={sol.id}
              onClick={() => setActiveTab(idx)}
              className={`tab-btn-3d px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm min-h-[48px] text-center leading-snug ${
                activeTab === idx
                  ? 'active bg-brand-gradient text-white'
                  : 'bg-white text-ink hover:bg-slate-50'
              }`}
            >
              <span className="shrink-0">{sol.icon}</span>
              <span>{sol.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          key={activeTab}
          className="box-hover bg-white/85 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 shadow-3d border border-white/80 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center"
          style={{ animation: 'fadeSlideUp 0.35s cubic-bezier(0.22,1,0.36,1)' }}
        >
          <div className="md:col-span-4 text-center md:text-left space-y-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-indigo/20 to-teal/20 text-indigo flex items-center justify-center text-2xl sm:text-3xl mx-auto md:mx-0 shadow-inner">
              {clientSolutions[activeTab].icon}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-ink">{clientSolutions[activeTab].title}</h3>
            <div className="inline-block bg-indigo/10 text-indigo px-3 py-1 rounded-full text-xs font-bold border border-indigo/15">
              {clientSolutions[activeTab].stats}
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {clientSolutions[activeTab].tagline}
            </p>
          </div>

          <div className="md:col-span-8 space-y-2">
            <h4 className="font-bold text-ink text-xs sm:text-sm uppercase tracking-wider">How We Help:</h4>
            <div className="space-y-1.5">
              {clientSolutions[activeTab].benefits.map((b, bIdx) => (
                <div
                  key={bIdx}
                  className="flex items-start gap-2.5 bg-white/70 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-indigo/10 shadow-sm hover:border-indigo/30 hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-gradient text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-sm">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
