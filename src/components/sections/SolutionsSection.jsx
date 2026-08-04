import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../common/Reveal';

export const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const clientSolutions = [
    {
      id: 'hospitals',
      title: 'Hospitals & Medical Networks',
      icon: '🏥',
      tagline: 'Scale operations across multi-facility networks without data silos.',
      stats: '500+ Beds Supported',
      benefits: [
        'Centralized inpatient and outpatient billing scrubbers',
        'Cross-facility EHR interoperability via HL7 FHIR standards',
        'Real-time bed allocation and triage analytics dashboard',
        'Sub-second audit trail compliance for joint commission reviews'
      ]
    },
    {
      id: 'clinics',
      title: 'Specialty Clinics & Centers',
      icon: '⚕️',
      tagline: 'Eliminate administrative overhead so specialists focus on patient care.',
      stats: '1.5% Denial Rate Guarantee',
      benefits: [
        'Automated patient appointment scheduling & SMS reminders',
        'Direct claim scrubbing reducing claim denial rate under 1.5%',
        'Integrated Telemedicine consultation platform',
        'Custom clinical templates tailored per specialty'
      ]
    },
    {
      id: 'provider-groups',
      title: 'Provider Groups & MSOs',
      icon: '🩺',
      tagline: 'Maximize revenue optimization and physician clinical productivity.',
      stats: '3.5x Faster Triage',
      benefits: [
        'Group-wide financial dashboards and performance metrics',
        'AI medical coding assistant for rapid CPT/ICD-10 suggestion',
        'Automated physician credentialing & payer contract tracking',
        'HIPAA-compliant multi-provider messaging platform'
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 relative">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-6">
            Architected for Your <span className="grad-text">Specific Practice Needs</span>
          </h2>
        </Reveal>

        {/* Tab Selection */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {clientSolutions.map((sol, idx) => (
            <button
              key={sol.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer border-none ${
                activeTab === idx
                  ? 'bg-brand-gradient text-white shadow-btn-primary scale-105'
                  : 'bg-white text-ink shadow-btn-ghost hover:bg-indigo/5'
              }`}
            >
              <span>{sol.icon}</span>
              <span>{sol.title}</span>
            </button>
          ))}
        </div>

        {/* Animated Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-ink/5 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-4 text-center md:text-left space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-indigo/10 text-indigo flex items-center justify-center text-4xl mx-auto md:mx-0 shadow-sm">
                {clientSolutions[activeTab].icon}
              </div>
              <h3 className="text-2xl font-extrabold text-ink">{clientSolutions[activeTab].title}</h3>
              <div className="inline-block bg-indigo/10 text-indigo px-3 py-1 rounded-full text-xs font-bold">
                {clientSolutions[activeTab].stats}
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {clientSolutions[activeTab].tagline}
              </p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <h4 className="font-bold text-ink text-sm uppercase tracking-wider">Solution Highlights & Core Benefits:</h4>
              <div className="space-y-3">
                {clientSolutions[activeTab].benefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 bg-[#F4F2FF] p-4 rounded-2xl border border-indigo/10">
                    <span className="w-6 h-6 rounded-full bg-brand-gradient text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-ink leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
