import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Reveal } from '../components/common/Reveal';
import { Link } from 'react-router-dom';

export const Solutions = () => {
  const solutionsByClient = [
    {
      title: 'For Enterprise Hospitals',
      icon: '🏥',
      tagline: 'Scale operations across multi-facility networks without data silos.',
      benefits: [
        'Centralized inpatient and outpatient billing scrubbers',
        'Cross-facility EHR interoperability via FHIR standards',
        'Real-time bed utilization and triage analytics',
        'Sub-second audit trail compliance for joint commission reviews'
      ],
      color: 'from-indigo/10 to-violet/10'
    },
    {
      title: 'For Specialized Clinics & Surgical Centers',
      icon: '⚕️',
      tagline: 'Eliminate administrative overhead so specialists focus on care.',
      benefits: [
        'Automated patient appointment scheduling & SMS reminders',
        'Direct claim scrubbing reducing denial rate under 1.5%',
        'Integrated Telemedicine consultation platform',
        'Custom clinical templates tailored per specialty'
      ],
      color: 'from-teal/10 to-tealLight/10'
    },
    {
      title: 'For Medical Provider Groups & MSOs',
      icon: '🩺',
      tagline: 'Maximize revenue optimization and physician productivity.',
      benefits: [
        'Group-wide financial dashboards and performance metrics',
        'AI medical coding assistant for rapid CPT/ICD-10 suggestion',
        'Automated physician credentialing & payer contract tracking',
        'HIPAA-compliant multi-provider messaging platform'
      ],
      color: 'from-indigo/10 to-teal/10'
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-16">
        
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            Tailored Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink mb-6">
            Architected for Your <span className="grad-text">Specific Practice Needs</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Whether you operate a 500-bed regional hospital system or a multi-provider specialty clinic, MedAorticX adapts to your operational scale.
          </p>
        </Reveal>

        {/* Client Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsByClient.map((sol, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="bg-white rounded-3xl p-8 shadow-card border border-ink/5 flex flex-col justify-between">
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center text-3xl mb-6`}>
                  {sol.icon}
                </div>
                <h2 className="text-2xl font-bold text-ink mb-3">{sol.title}</h2>
                <p className="text-sm text-muted mb-6 leading-relaxed">{sol.tagline}</p>
                <ul className="space-y-3 mb-8">
                  {sol.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-ink font-medium">
                      <span className="text-indigo font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-center text-indigo bg-indigo/10 hover:bg-brand-gradient hover:text-white transition-all duration-200"
              >
                Schedule Solution Demo →
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};
