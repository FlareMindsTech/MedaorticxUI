import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Reveal } from '../components/common/Reveal';
import { SERVICES } from '../data/services';

export const Services = () => {
  return (
    <PageTransition>
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-16">
        
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            Comprehensive Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink mb-6">
            Healthcare Technology <span className="grad-text">Engineered for Scale</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Explore our specialized software suites crafted specifically to solve complex revenue cycle bottlenecks, clinical data fragmentation, and administrative overhead.
          </p>
        </Reveal>

        {/* Detailed Service Blocks */}
        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <Reveal
              key={service.id}
              delay={idx * 0.05}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-ink/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 flex items-center gap-5">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-sm shrink-0"
                  style={{ background: service.gradient }}
                >
                  {service.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo uppercase tracking-wider">Service 0{idx + 1}</span>
                  <h2 className="text-2xl font-bold text-ink">{service.title}</h2>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-muted text-base leading-relaxed">{service.fullDesc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-ink font-semibold">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                        ✓
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};
