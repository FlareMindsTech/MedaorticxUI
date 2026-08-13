import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Reveal } from '../components/common/Reveal';

export const Projects = () => {
  const caseStudies = [
    {
      client: 'Metro Health System (500+ Beds)',
      category: 'EHR Interoperability & Medical Billing',
      metric: '99.2% First-Pass Claim Approval',
      desc: 'Integrated custom claim scrubber with legacy EHR resulting in $4.2M accelerated cash flow within 90 days.',
      gradient: 'from-indigo to-violet'
    },
    {
      client: 'Apex Specialty Surgical Network',
      category: 'Telemedicine & Patient Portal',
      metric: '40% Reduction in Patient No-Shows',
      desc: 'Deployed automated SMS appointment reminders and WebRTC telehealth modules for over 45,000 active patients.',
      gradient: 'from-violet to-teal'
    },
    {
      client: 'CareFirst Regional Provider Group',
      category: 'AI Diagnostics & Triage',
      metric: '3.5x Faster Patient Triage Speed',
      desc: 'Implemented predictive clinical notes analyzer enabling emergency room doctors to triage incoming cases in under 4 minutes.',
      gradient: 'from-teal to-tealLight'
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-16">
        
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            Case Studies & Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink mb-6">
            Proven Results in <span className="grad-text">Healthcare Innovation</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Discover how leading healthcare organizations leverage MedAorticX technology to modernize operations and achieve measurable revenue growth.
          </p>
        </Reveal>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="bg-white rounded-3xl overflow-hidden shadow-card border border-ink/5 flex flex-col justify-between">
              <div>
                <div className={`h-4 border-b bg-gradient-to-r ${cs.gradient}`} />
                <div className="p-8">
                  <span className="text-xs font-bold text-indigo uppercase tracking-wider">{cs.category}</span>
                  <h2 className="text-xl font-bold text-ink mt-2 mb-4">{cs.client}</h2>
                  <div className="bg-[#F4F2FF] p-4 rounded-2xl mb-4 border border-indigo/10">
                    <div className="text-2xl font-extrabold text-indigo">{cs.metric}</div>
                    <div className="text-xs text-grayLight font-medium">Verified Key Performance Indicator</div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{cs.desc}</p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0">
                <span className="inline-block text-xs font-semibold text-grayLight bg-gray-100 px-3 py-1.5 rounded-full">
                  [Verified Case Study Demo]
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};
