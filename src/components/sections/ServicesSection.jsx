import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../common/Reveal';
import { SERVICES } from '../../data/services';

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--shine-x', `${x}%`);
    card.style.setProperty('--shine-y', `${y}%`);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Floating 3D Background Orbs */}
      <div className="floating-orb-slow w-96 h-96 bg-violet/20 top-20 right-[-150px]" />
      <div className="floating-orb w-80 h-80 bg-teal/20 bottom-10 left-[-120px]" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal variant="scaleRotate" className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4 border border-indigo/10">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink">
            Our Core <span className="grad-text">Services</span>
          </h2>
        </Reveal>

        {/* 6 Interactive Service Cards with 3D Tilt Hover & Mouse-Tracking Shine */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              variant={index % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={index * 0.08}
            >
              <div
                onMouseMove={handleMouseMove}
                onClick={() => setSelectedService(service)}
                className="tilt-card card-shine group bg-white/80 backdrop-blur-xl rounded-[24px] p-6 sm:p-8 shadow-3d border border-white/80 flex flex-col justify-between cursor-pointer h-full transition-all duration-300"
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: service.gradient }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2.5 group-hover:text-indigo transition-colors">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold text-indigo opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to Expand
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#F2F1FF] flex items-center justify-center text-indigo text-sm group-hover:bg-brand-gradient group-hover:text-white group-hover:scale-110 transition-all duration-200">
                    →
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Expanded Modal for Detailed View with 3D Scale Animation */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotateX: -10 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white/95 backdrop-blur-2xl rounded-3xl max-w-2xl w-full p-8 shadow-3d relative border border-white/80"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-bold text-ink hover:bg-gray-200 hover:rotate-90 transition-all duration-200"
                >
                  ✕
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md"
                    style={{ background: selectedService.gradient }}
                  >
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-ink">{selectedService.title}</h3>
                    <span className="text-xs text-indigo font-semibold uppercase tracking-wider">Comprehensive Service Suite</span>
                  </div>
                </div>

                <p className="text-muted text-base leading-relaxed mb-6">
                  {selectedService.fullDesc}
                </p>

                <h4 className="font-bold text-ink text-sm uppercase tracking-wider mb-4">Included Features & Modules:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-sm font-semibold text-ink bg-indigo/5 p-2.5 rounded-xl">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs flex-shrink-0">
                        ✓
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-brand-gradient shadow-btn-primary hover:opacity-95 hover:scale-[1.01] transition-all text-sm"
                >
                  Close & Continue Exploring
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
