import React from 'react';

/** Flat 2D floating stat cards — pure CSS animations, no framer-motion */
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
    <div
      className={`card-float bg-white/95 backdrop-blur-md rounded-[14px] px-3 py-2.5 shadow-[0_8px_24px_-6px_rgba(99,102,241,0.12),0_2px_8px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-lg transition-all ${positionClass || 'relative z-[10]'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {icon && value ? (
        /* Stat card with icon + value (left column cards) */
        <div className="flex items-center gap-2.5 min-w-[145px]">
          <div
            className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-sm flex-shrink-0"
            style={{ background: iconBg || '#E9EEFF' }}
          >
            {icon}
          </div>
          <div className="min-w-0">
            <div className="text-[0.65rem] text-slate-400 mb-0.5 whitespace-nowrap">{title}</div>
            <div className="text-[0.95rem] font-black text-ink flex items-center gap-1 leading-none">
              {value}
              {up && <span className="text-emerald-500 text-[0.7rem] font-bold">▲</span>}
            </div>
            <div className="text-[0.6rem] text-slate-400 mt-0.5 whitespace-nowrap">{sub}</div>
          </div>
        </div>
      ) : icon ? (
        /* Feature card with icon only (right column cards) */
        <div className="flex items-center gap-2.5 min-w-[155px]">
          <div
            className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-sm flex-shrink-0"
            style={{ background: iconBg || '#E9EEFF' }}
          >
            {icon}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-ink text-[0.82rem] leading-tight whitespace-nowrap">{title}</div>
            <div className="text-[0.62rem] text-slate-400 mt-0.5 whitespace-nowrap">{sub}</div>
          </div>
        </div>
      ) : (
        /* Value-only card (no icon) */
        <div className="min-w-[130px]">
          <div className="text-[0.65rem] text-slate-400 mb-1 whitespace-nowrap">{title}</div>
          <div className="text-[0.95rem] font-black text-ink flex items-center gap-1 leading-none">
            {value}
            {up && <span className="text-emerald-500 text-[0.7rem] font-bold">▲</span>}
          </div>
          <div className="text-[0.62rem] text-slate-400 mt-1 whitespace-nowrap">{sub}</div>
        </div>
      )}
    </div>
  );
};
