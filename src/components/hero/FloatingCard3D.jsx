import React from 'react';

/** Flat 2D floating stat cards with high contrast */
export const FloatingCard3D = ({
  title,
  value,
  sub,
  up,
  icon,
  iconBg,
  positionClass = '',
}) => {
  return (
    <div
      className={`bg-white/95 backdrop-blur-md rounded-[14px] px-3 py-2.5 shadow-[0_8px_24px_-6px_rgba(99,102,241,0.12),0_2px_8px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-lg transition-all ${positionClass || 'relative z-[10]'}`}
    >
      {icon && value ? (
        /* Stat card with icon + value */
        <div className="flex items-center gap-2.5 min-w-0 w-full">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
            style={{ background: iconBg || '#E9EEFF' }}
          >
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-bold text-slate-700 mb-0.5 truncate">{title}</div>
            <div className="text-sm font-black text-ink flex items-center gap-1 leading-none">
              {value}
              {up && <span className="text-emerald-600 text-xs font-bold">▲</span>}
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5 truncate">{sub}</div>
          </div>
        </div>
      ) : icon ? (
        /* Feature card with icon only */
        <div className="flex items-center gap-2.5 min-w-0 w-full">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
            style={{ background: iconBg || '#E9EEFF' }}
          >
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-bold text-ink text-xs sm:text-sm leading-tight truncate">{title}</div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5 truncate">{sub}</div>
          </div>
        </div>
      ) : (
        /* Value-only card */
        <div className="min-w-0 w-full">
          <div className="text-xs font-bold text-slate-700 mb-1 truncate">{title}</div>
          <div className="text-sm font-black text-ink flex items-center gap-1 leading-none">
            {value}
            {up && <span className="text-emerald-600 text-xs font-bold">▲</span>}
          </div>
          <div className="text-xs font-semibold text-slate-500 mt-1 truncate">{sub}</div>
        </div>
      )}
    </div>
  );
};
