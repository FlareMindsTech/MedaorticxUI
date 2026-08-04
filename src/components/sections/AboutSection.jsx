import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../common/Reveal';

export const AboutSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const values = [
    {
      id: 1,
      icon: '🔒',
      title: 'Uncompromised Security',
      summary: 'HIPAA compliance & bank-grade encryption built-in.',
      detail: 'Every layer of our data pipeline uses AES-256 encryption at rest and TLS 1.3 in transit with automated threat detection.'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Clinical Speed',
      summary: 'Sub-second query responses for medical staff.',
      detail: 'Engineered with low-latency indexing algorithms ensuring patient charts and code suggestions load in under 200ms.'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Provider Centricity',
      summary: 'Designed alongside certified medical coders.',
      detail: 'Built directly from clinical observation of physician workflows to reduce administrative burnout and claim rejections.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            About MedAorticX
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-6">
            Empowering Healthcare Through <span className="grad-text">Accurate Tech</span>
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            MedAorticX Healthtek bridges the gap between complex clinical workflows and modern computational intelligence.
          </p>
        </Reveal>

        {/* Interactive Mission / Vision 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Reveal delay={0.1}>
            <div className="tilt-card bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-ink/5 h-full flex flex-col justify-between cursor-pointer">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo/10 text-indigo flex items-center justify-center text-3xl font-bold mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4">Our Mission</h3>
                <p className="text-muted leading-relaxed text-base">
                  To deliver zero-error medical coding platforms, intelligent EHR workflows, and automated revenue cycle management solutions that empower healthcare workers to focus on what matters most: patient care.
                </p>
              </div>
              <div className="pt-6 text-indigo font-semibold text-sm flex items-center gap-2">
                Explore Mission Standards →
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="tilt-card bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-ink/5 h-full flex flex-col justify-between cursor-pointer">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center text-3xl font-bold mb-6">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4">Our Vision</h3>
                <p className="text-muted leading-relaxed text-base">
                  To become the global gold standard for healthcare software infrastructure, setting new benchmarks in HIPAA compliance, interoperability speed, and AI diagnostic accuracy.
                </p>
              </div>
              <div className="pt-6 text-teal font-semibold text-sm flex items-center gap-2">
                View Infrastructure Vision →
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3D Flipping Cards for Core Values */}
        <Reveal className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-ink text-center mb-12">
            Interactive <span className="grad-text">Core Values</span> (Hover/Tap to Flip)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.id}
                className="flip-card h-[220px] cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === v.id ? null : v.id)}
              >
                <div className={`flip-card-inner ${flippedCard === v.id ? '[transform:rotateY(180deg)]' : ''}`}>
                  {/* Front Side */}
                  <div className="flip-card-front bg-white/90 backdrop-blur-md p-6 border border-ink/5 shadow-btn-ghost flex flex-col items-center justify-center text-center">
                    <div className="text-4xl mb-3">{v.icon}</div>
                    <h4 className="font-bold text-ink text-lg mb-2">{v.title}</h4>
                    <p className="text-xs text-grayLight">{v.summary}</p>
                    <span className="mt-3 text-[0.7rem] text-indigo font-semibold uppercase tracking-wider">Hover/Tap to Flip 🔄</span>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-brand-gradient text-white p-6 shadow-card-hover flex flex-col items-center justify-center text-center">
                    <h4 className="font-bold text-white text-lg mb-3">{v.title}</h4>
                    <p className="text-xs leading-relaxed opacity-95">{v.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
