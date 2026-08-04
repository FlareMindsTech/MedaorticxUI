import React from 'react';
import { motion } from 'framer-motion';

export const HeroStats = () => {
  const stats = [
    { icon: '🏥', num: '50+', label: 'Projects Delivered' },
    { icon: '🤝', num: '30+', label: 'Happy Clients' },
    { icon: '⏱️', num: '10+', label: 'Years of Experience' },
    { icon: '🎧', num: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 pt-2">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 + idx * 0.08 }}
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-lg shadow-btn-ghost flex-shrink-0">
            {stat.icon}
          </div>
          <div>
            <div className="font-extrabold text-ink text-[1.15rem] leading-none">{stat.num}</div>
            <div className="text-[0.76rem] text-grayLight font-medium mt-0.5">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
