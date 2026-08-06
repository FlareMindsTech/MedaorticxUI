import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../common/Reveal';

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const caseStudies = [
    {
      id: 1,
      client: 'Metro Health System',
      category: 'Billing & EHR',
      metric: '99.2%',
      metricLabel: 'First-Pass Claim Approval',
      desc: 'Integrated custom claim scrubber with legacy EHR resulting in $4.2M accelerated cash flow within 90 days.',
      gradient: 'from-indigo to-violet'
    },
    {
      id: 2,
      client: 'Apex Surgical Network',
      category: 'Telemedicine',
      metric: '40%',
      metricLabel: 'Reduction in No-Shows',
      desc: 'Deployed automated SMS appointment reminders and WebRTC telehealth modules for over 45,000 active patients.',
      gradient: 'from-violet to-teal'
    },
    {
      id: 3,
      client: 'CareFirst Provider Group',
      category: 'AI Healthcare',
      metric: '3.5x',
      metricLabel: 'Faster Triage Speed',
      desc: 'Implemented predictive clinical notes analyzer enabling emergency room doctors to triage incoming cases in under 4 minutes.',
      gradient: 'from-teal to-tealLight'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeFilter);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--shine-x', `${x}%`);
    card.style.setProperty('--shine-y', `${y}%`);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb w-80 h-80 bg-indigo/20 top-20 left-[-100px]" />
      <div className="floating-orb-slow w-72 h-72 bg-teal/20 bottom-10 right-[-80px]" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal variant="scaleRotate" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4 border border-indigo/10">
            Case Studies & Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-6">
            Proven Results in <span className="grad-text">Healthcare Tech</span>
          </h2>
        </Reveal>

        {/* Filter Badges */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {['All', 'Billing & EHR', 'Telemedicine', 'AI Healthcare'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer border-none ${
                activeFilter === filter
                  ? 'bg-brand-gradient text-white shadow-3d scale-105'
                  : 'bg-white/80 backdrop-blur-md text-muted hover:text-indigo hover:bg-white shadow-btn-ghost'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 3D Interactive Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((cs, idx) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div
                  onMouseMove={handleMouseMove}
                  className="tilt-card card-shine bg-white/85 backdrop-blur-xl rounded-3xl overflow-hidden shadow-3d border border-white/80 flex flex-col justify-between h-full cursor-pointer group"
                >
                  <div>
                    <div className={`h-3 bg-gradient-to-r ${cs.gradient}`} />
                    <div className="p-8">
                      <span className="text-xs font-bold text-indigo uppercase tracking-wider bg-indigo/10 px-3 py-1 rounded-full border border-indigo/15">
                        {cs.category}
                      </span>
                      <h3 className="text-xl font-bold text-ink mt-4 mb-4 group-hover:text-indigo transition-colors">{cs.client}</h3>
                      
                      <div className="bg-gradient-to-br from-indigo/5 to-teal/5 p-5 rounded-2xl mb-4 border border-indigo/10 text-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <div className="text-3xl font-extrabold text-indigo mb-1 grad-text">{cs.metric}</div>
                        <div className="text-xs text-grayLight font-medium">{cs.metricLabel}</div>
                      </div>
                      
                      <p className="text-sm text-muted leading-relaxed">{cs.desc}</p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-0 flex items-center justify-between">
                    <span className="text-xs font-semibold text-grayLight">
                      Verified Outcome Case
                    </span>
                    <span className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center text-sm font-bold group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110 transition-all duration-200">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
