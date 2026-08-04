import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-[20px] p-6 sm:p-8 shadow-[0_10px_30px_-14px_rgba(20,24,51,0.12)] hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(109,77,224,0.3)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div
          className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center text-2xl shadow-sm"
          style={{ background: service.gradient }}
        >
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-ink mb-2.5">{service.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-6">{service.shortDesc}</p>
      </div>

      <Link
        to="/services"
        className="w-9 h-9 rounded-full bg-[#F2F1FF] flex items-center justify-center text-indigo text-sm group-hover:bg-brand-gradient group-hover:text-white transition-colors duration-200"
      >
        →
      </Link>
    </motion.div>
  );
};
