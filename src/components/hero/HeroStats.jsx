import React from 'react';

export const HeroStats = () => {
  const stats = [
    { icon: '⏱️', num: '10+', label: 'Years Experience', iconBg: 'bg-purple-50' },
    { icon: '🎧', num: '24/7', label: 'Support Available', iconBg: 'bg-cyan-50' },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-3.5 sm:p-4 border border-white/80 shadow-[0_8px_30px_rgba(99,102,241,0.06),0_2px_8px_rgba(0,0,0,0.02)] w-full max-w-[420px] mx-auto lg:mx-0">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 divide-x divide-slate-100/80">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2.5 sm:gap-3 ${idx !== 0 ? 'pl-3 sm:pl-4' : ''}`}
          >
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${stat.iconBg} flex items-center justify-center text-base sm:text-lg shrink-0 shadow-sm border border-white`}>
              {stat.icon}
            </div>
            <div className="min-w-0">
              <div className="font-black text-ink text-sm sm:text-base leading-tight tracking-tight">
                {stat.num}
              </div>
              <div className="text-xs font-semibold text-slate-700 leading-tight mt-0.5">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
