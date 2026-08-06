import React from 'react';
import { motion } from 'framer-motion';

export const HeroStats = () => {
  const stats = [
    { icon: '🏥', num: '50+', label: 'Projects Delivered', badgeBg: 'bg-emerald-500/10 text-emerald-600', iconBg: 'bg-emerald-50' },
    { icon: '🤝', num: '30+', label: 'Happy Clients', badgeBg: 'bg-indigo-500/10 text-indigo-600', iconBg: 'bg-indigo-50' },
    { icon: '⏱️', num: '10+', label: 'Years Experience', badgeBg: 'bg-purple-500/10 text-purple-600', iconBg: 'bg-purple-50' },
    { icon: '🎧', num: '24/7', label: 'Support Available', badgeBg: 'bg-cyan-500/10 text-cyan-600', iconBg: 'bg-cyan-50' },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-3.5 sm:p-4 border border-white/80 shadow-[0_8px_30px_rgba(99,102,241,0.06),0_2px_8px_rgba(0,0,0,0.02)] w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100/80">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
            className={`flex items-center gap-2 ${idx !== 0 ? 'sm:pl-2.5 pt-2 sm:pt-0' : ''}`}
          >
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${stat.iconBg} flex items-center justify-center text-sm shrink-0 shadow-sm border border-white`}>
              {stat.icon}
            </div>
            <div className="min-w-0">
              <div className="font-black text-ink text-xs sm:text-sm leading-tight tracking-tight">
                {stat.num}
              </div>
              <div className="text-[0.6rem] sm:text-[0.68rem] font-medium text-slate-500 leading-tight mt-0.5 whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
