import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        'Scalable support that adapts to changing operational needs'
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden glass-section">
      {/* Section Content */}

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal variant="scaleRotate" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4 border border-indigo/10">
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-6">
            Built for Your <span className="grad-text">Practice Needs</span>
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
                  ? 'bg-brand-gradient text-white shadow-3d scale-105'
                  : 'bg-white/80 backdrop-blur-md text-ink shadow-btn-ghost hover:bg-white hover:scale-[1.02]'
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
            initial={{ opacity: 0, rotateX: 12, y: 20 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -12, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="bg-white/85 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-3d border border-white/80 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-4 text-center md:text-left space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo/20 to-teal/20 text-indigo flex items-center justify-center text-4xl mx-auto md:mx-0 shadow-inner">
                {clientSolutions[activeTab].icon}
              </div>
              <h3 className="text-2xl font-extrabold text-ink">{clientSolutions[activeTab].title}</h3>
              <div className="inline-block bg-indigo/10 text-indigo px-3 py-1 rounded-full text-xs font-bold border border-indigo/15">
                {clientSolutions[activeTab].stats}
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {clientSolutions[activeTab].tagline}
              </p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <h4 className="font-bold text-ink text-sm uppercase tracking-wider">How We Help:</h4>
              <div className="space-y-3">
                {clientSolutions[activeTab].benefits.map((b, bIdx) => (
                  <motion.div
                    key={bIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: bIdx * 0.08 }}
                    className="flex items-start gap-3 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-indigo/10 shadow-sm hover:border-indigo/30 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-gradient text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-sm">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-ink leading-snug">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
