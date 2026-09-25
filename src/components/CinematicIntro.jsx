import React, { useEffect } from "react";

const CinematicIntro = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="cinematic-intro fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-100/30 blur-3xl" />

      {/* Medical tech particles */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[25%] left-[20%] w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <div className="absolute top-[65%] left-[75%] w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
      </div>

      {/* Logo */}
      <div className="cinematic-logo relative z-10">
        <div className="bg-white rounded-3xl px-10 py-8 shadow-[0_20px_80px_rgba(6,182,212,0.15)] border border-slate-100">

        <img
  src="/logo-nav.png"
  alt="MedAorticX Healthtek"
  className="w-[320px] h-auto object-contain"
/>

        </div>
      </div>

    </div>
  );
};

export default CinematicIntro;