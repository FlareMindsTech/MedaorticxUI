import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../common/Reveal';
import { SERVICES } from '../../data/services';

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink">
            Our Core <span className="grad-text">Services</span>
          </h2>
        </Reveal>

        {/* 6 Interactive Service Cards with 3D Tilt Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onClick={() => setSelectedService(service)}
              className="tilt-card group bg-white rounded-[20px] p-6 sm:p-8 shadow-[0_10px_30px_-14px_rgba(20,24,51,0.12)] border border-ink/5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div
                  className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ background: service.gradient }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-2.5">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{service.shortDesc}</p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-semibold text-indigo opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to Expand
                </span>
                <div className="w-9 h-9 rounded-full bg-[#F2F1FF] flex items-center justify-center text-indigo text-sm group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-200">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal for Detailed View */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-card relative border border-white/60"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-bold text-ink hover:bg-gray-200 transition-colors"
                >
                  ✕
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
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
                    <div key={fIdx} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                        ✓
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-brand-gradient shadow-btn-primary hover:opacity-95 transition-opacity text-sm"
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
