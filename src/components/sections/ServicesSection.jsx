import React from 'react';
import { Reveal } from '../common/Reveal';
import { TiltCard3D } from '../common/TiltCard3D';
import { SERVICES } from '../../data/services';

const SERVICE_META = {
  'rcm-recruitment-services': {
    cardClass: 'rcm-card-theme',
    eyebrow: 'HEALTHCARE',
    titleTop: 'RCM',
    titleBottom: 'Recruitment Services',
    badgeText: 'RCM',
    labelStrong: 'RCM',
    labelSmall: 'Recruitment',
    ctaText: 'VIEW DETAILS',
    featureIcons: ['▣', '▣', 'T', '✦'],
  },
  'medical-coding-academy': {
    cardClass: 'academy-card-theme',
    eyebrow: 'EDUCATION',
    titleTop: 'Medical',
    titleBottom: 'Coding Academy',
    badgeText: 'ACADEMY',
    labelStrong: 'ACADEMY',
    labelSmall: 'Medical Coding',
    ctaText: 'VIEW DETAILS',
    featureIcons: ['▤', '♙', '</>', '▣'],
  },
};

export const ServicesSection = ({ onSelectService }) => {
  const handleCardClick = (e, serviceId) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService(serviceId);
    } else {
      window.location.hash = `service-${serviceId}`;
    }
  };

  return (
    <section id="services" className="py-6 sm:py-8 md:py-10 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20 w-full bg-white" aria-labelledby="services-heading">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-5 md:px-8 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-2 border border-indigo/10">
            OUR CORE SERVICES
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#161b3d] mb-2 leading-tight">
            Comprehensive <span className="grad-text">Healthcare Solutions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Choose from our specialized services — the entire card is clickable.
          </p>
        </Reveal>

        {/* Services 3D Grid */}
        <div className="services-3d-grid max-w-5xl mx-auto">
          {SERVICES.map((service, idx) => {
            const meta = SERVICE_META[service.id] || {};
            const cardFeatures = service.features.slice(0, 4).map((featText, fIdx) => ({
              icon: (meta.featureIcons && meta.featureIcons[fIdx]) || '▣',
              text: featText,
            }));

            return (
              <Reveal key={service.id} delay={0.05 + idx * 0.07} className="w-full flex">
                <TiltCard3D
                  id={service.id}
                  cardClass={meta.cardClass}
                  eyebrow={meta.eyebrow}
                  titleTop={meta.titleTop}
                  titleBottom={meta.titleBottom}
                  badgeText={meta.badgeText}
                  description={service.shortDesc}
                  features={cardFeatures}
                  keyTitle="KEY AREAS"
                  labelStrong={meta.labelStrong}
                  labelSmall={meta.labelSmall}
                  ctaText={meta.ctaText}
                  href={`/services/${service.id}`}
                  onClick={handleCardClick}
                  titleTag="h3"
                />
              </Reveal>
            );
          })}
        </div>

        <p className="interaction-note-3d">
          <b>3D INTERACTION:</b> Hover anywhere on a card • click anywhere to open the service page
        </p>

      </div>
    </section>
  );
};
