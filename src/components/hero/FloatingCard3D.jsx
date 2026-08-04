import React from 'react';
import { motion } from 'framer-motion';

/** Flat 2D floating stat cards (matches medaorticx-homepage.html) */
export const FloatingCard3D = ({
  title,
  value,
  sub,
  up,
  icon,
  iconBg,
  positionClass = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay,
        },
      }}
      className={`absolute z-[5] bg-white/90 backdrop-blur-sm rounded-[14px] px-4 py-3 shadow-card border border-white/80 ${positionClass}`}
    >
      {icon ? (
        <div className="flex items-center gap-3 min-w-[190px]">
          <div
            className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: iconBg || '#E9EEFF' }}
          >
            {icon}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-ink text-[0.88rem] leading-snug whitespace-nowrap">{title}</div>
            <div className="text-[0.68rem] text-grayLight">{sub}</div>
          </div>
        </div>
      ) : (
        <div className="min-w-[150px]">
          <div className="text-[0.7rem] text-grayLight mb-1 whitespace-nowrap">{title}</div>
          <div className="text-[1.05rem] font-extrabold text-ink flex items-center gap-1.5 leading-none">
            {value}
            {up && <span className="text-emerald-500 text-[0.8rem] font-bold">▲</span>}
          </div>
          <div className="text-[0.68rem] text-grayLight mt-1 whitespace-nowrap">{sub}</div>
        </div>
      )}
    </motion.div>
  );
};
