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
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-white border border-slate-100 shadow-sm inline-block">
              <picture>
                <source srcSet="/logo-footer.webp" type="image/webp" />
                <img
                  src="/logo-nav.png"
                  alt="MedAorticX HealthTek Logo"
                  width="112"
                  height="56"
                  loading="lazy"
                  decoding="async"
                  className="h-12 sm:h-14 w-auto object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </picture>
            </div>
          </div>
          <p className="text-muted text-sm max-w-md leading-relaxed">
            We are a healthcare Revenue Cycle Management company dedicated to helping healthcare providers and organizations simplify complex revenue processes, improve operational efficiency, and strengthen financial performance.
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
