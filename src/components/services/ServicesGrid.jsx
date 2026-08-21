import React, { useState } from 'react';
import { SERVICES } from '../../data/services';
import { ServiceCard } from './ServiceCard';
import { Reveal } from '../common/Reveal';
import { AnimatePresence, motion } from 'framer-motion';

export const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-16 sm:py-20 md:py-28 relative" id="services">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Head */}
        <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#6d45e5] uppercase shadow-btn-ghost mb-2.5 border border-[#6d45e5]/10">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#161b3d] mb-2.5">
            Healthcare <span className="grad-text">Services</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our services — the entire card is clickable.
          </p>
        </Reveal>

        {/* 2 Grid Cards */}
        <div className="services-3d-grid max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        {/* Detailed Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white/95 backdrop-blur-2xl rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 shadow-3d relative border border-white/80 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center font-bold text-ink hover:bg-gray-200 transition-all duration-200 cursor-pointer border-none"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md shrink-0"
                    style={{ background: selectedService.gradient }}
                  >
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-ink">{selectedService.title}</h3>
                    <span className="text-xs text-indigo font-bold uppercase tracking-wider">{selectedService.subtitle}</span>
                  </div>
                </div>

                <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                  {selectedService.fullDesc}
                </p>

                {selectedService.tagline && (
                  <div className="bg-indigo/5 border border-indigo/10 rounded-2xl p-4 mb-6 text-center text-indigo font-bold text-sm sm:text-base">
                    ✨ {selectedService.tagline}
                  </div>
                )}

                <h4 className="font-bold text-ink text-sm uppercase tracking-wider mb-4">
                  {selectedService.id === 'rcm-recruitment-services' ? 'Our Recruitment Expertise:' : "What You'll Learn:"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {selectedService.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-ink bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs flex-shrink-0">
                        ✓
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>

                {selectedService.whyChoose && (
                  <div className="mb-6 space-y-2.5">
                    <h4 className="font-bold text-ink text-sm uppercase tracking-wider mb-3">Why Choose Our RCM Recruitment Services?</h4>
                    {selectedService.whyChoose.map((why, wIdx) => (
                      <div key={wIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="text-indigo font-bold">•</span>
                        <span>{why}</span>
                      </div>
                    ))}
                  </div>
                )}

                {selectedService.eligibility && (
                  <div className="mb-6 bg-teal/10 border border-teal/20 rounded-2xl p-4 text-xs sm:text-sm text-slate-700">
                    <strong className="text-teal font-bold block mb-1">Who Can Join?</strong>
                    {selectedService.eligibility}
                  </div>
                )}

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-brand-gradient shadow-btn-primary hover:opacity-95 transition-all text-sm cursor-pointer border-none min-h-[44px]"
                >
                  Close & Continue
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
