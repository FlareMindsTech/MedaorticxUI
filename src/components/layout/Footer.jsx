import React from 'react';
import { NAV_LINKS } from '../../data/nav';

export const Footer = () => {
  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-ink/5 pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-extrabold text-lg shadow-md">
              M
            </div>
            <span className="font-extrabold text-xl tracking-tight text-ink">
              MedAortic<span className="text-indigo">X</span> Healthtek
            </span>
          </div>
          <p className="text-muted text-sm max-w-md leading-relaxed">
            Empowering healthcare providers through intelligent tech, accurate coding algorithms, and seamless digital transformation platforms.
          </p>
          <div className="text-xs text-grayLight">
            &copy; {new Date().getFullYear()} MedAorticX Healthtek. All rights reserved.
          </div>
        </div>

        <div>
          <h4 className="font-bold text-ink mb-4 text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted hover:text-indigo transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-ink mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>📍 100 Healthtek Boulevard, Suite 400</li>
            <li>✉️ contact@medaorticx.com</li>
            <li>📞 +1 (800) 555-M3D-TECH</li>
            <li className="pt-2 text-indigo font-semibold">24/7 Global Clinical Support</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};
