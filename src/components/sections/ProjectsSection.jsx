import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            Case Studies & Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-6">
            Proven Results in <span className="grad-text">Healthcare Tech</span>
          </h2>
        </Reveal>

        {/* Filter Badges */}
        <div className="flex justify-center gap-3 mb-12">
          {['All', 'Billing & EHR', 'Telemedicine', 'AI Healthcare'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border-none ${
                activeFilter === filter
                  ? 'bg-indigo text-white shadow-btn-primary'
                  : 'bg-white text-muted hover:text-indigo shadow-btn-ghost'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 3D Interactive Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((cs, idx) => (
            <Reveal key={cs.id} delay={idx * 0.1}>
              <div className="tilt-card bg-white rounded-3xl overflow-hidden shadow-card border border-ink/5 flex flex-col justify-between h-full cursor-pointer">
                <div>
                  <div className={`h-3 bg-gradient-to-r ${cs.gradient}`} />
                  <div className="p-8">
                    <span className="text-xs font-bold text-indigo uppercase tracking-wider">{cs.category}</span>
                    <h3 className="text-xl font-bold text-ink mt-2 mb-4">{cs.client}</h3>
                    
                    <div className="bg-[#F4F2FF] p-5 rounded-2xl mb-4 border border-indigo/10 text-center">
                      <div className="text-3xl font-extrabold text-indigo mb-1">{cs.metric}</div>
                      <div className="text-xs text-grayLight font-medium">{cs.metricLabel}</div>
                    </div>
                    
                    <p className="text-sm text-muted leading-relaxed">{cs.desc}</p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0 flex items-center justify-between">
                  <span className="text-xs font-semibold text-grayLight">
                    Verified Outcome Case
                  </span>
                  <span className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center text-sm font-bold">
                    →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
