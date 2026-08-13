import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Reveal } from '../components/common/Reveal';

export const About = () => {
  return (
    <PageTransition>
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-16">
        
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            About MedAorticX
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink mb-6">
            Empowering Healthcare Through <span className="grad-text">Accurate Coding & Technology</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            MedAorticX Healthtek was founded to bridge the gap between complex clinical workflows and modern computational intelligence. We equip hospitals, clinics, and provider networks with tools that eliminate revenue loss and elevate patient outcomes.
          </p>
        </Reveal>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <Reveal delay={0.1} className="bg-white p-8 rounded-3xl shadow-card border border-ink/5">
            <div className="w-12 h-12 rounded-2xl bg-indigo/10 text-indigo flex items-center justify-center text-2xl font-bold mb-6">
              🎯
            </div>
            <h2 className="text-2xl font-bold text-ink mb-4">Our Mission</h2>
            <p className="text-muted leading-relaxed">
              To deliver zero-error medical coding platforms, intelligent EHR workflows, and automated revenue cycle management solutions that empower healthcare workers to focus on what matters most: patient care.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="bg-white p-8 rounded-3xl shadow-card border border-ink/5">
            <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center text-2xl font-bold mb-6">
              🚀
            </div>
            <h2 className="text-2xl font-bold text-ink mb-4">Our Vision</h2>
            <p className="text-muted leading-relaxed">
              To become the global gold standard for healthcare software infrastructure, setting new benchmarks in HIPAA compliance, interoperability speed, and AI diagnostic accuracy.
            </p>
          </Reveal>
        </div>

        {/* Core Values */}
        <Reveal className="my-20">
          <h2 className="text-3xl font-extrabold text-ink text-center mb-12">
            The Principles That <span className="grad-text">Guide Us</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-ink/5 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-ink text-lg mb-2">Uncompromised Security</h3>
              <p className="text-sm text-muted">HIPAA compliance and bank-grade encryption are built into every single line of code.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-ink/5 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-ink text-lg mb-2">Clinical Speed</h3>
              <p className="text-sm text-muted">Sub-second query responses and real-time chart synchronization for busy clinical staff.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-ink/5 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-ink text-lg mb-2">Provider Centricity</h3>
              <p className="text-sm text-muted">Designed side-by-side with physicians and medical coders to eliminate burnout.</p>
            </div>
          </div>
        </Reveal>

      </div>
    </PageTransition>
  );
};
