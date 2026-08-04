import React from 'react';
import { SERVICES } from '../../data/services';
import { ServiceCard } from './ServiceCard';
import { Reveal } from '../common/Reveal';

export const ServicesGrid = () => {
  return (
    <section className="py-20 md:py-28 relative" id="services">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* Head */}
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            Our Core <span className="grad-text">Services</span>
          </h2>
        </Reveal>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
