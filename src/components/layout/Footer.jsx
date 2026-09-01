import React from 'react';
import { FOOTER_NAV_LINKS } from '../../data/nav';

export const Footer = ({ onNavigate }) => {
  const handleLinkClick = (href) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const firstColLinks = FOOTER_NAV_LINKS.slice(0, 3);
  const secondColLinks = FOOTER_NAV_LINKS.slice(3);

  return (
    <footer className="bg-white/95 backdrop-blur-sm border-t border-slate-200/60 py-6 sm:py-8" role="contentinfo">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 items-start">

        {/* Company Info */}
        <div className="md:col-span-2 space-y-2.5">
          <div className="flex items-center gap-3">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="p-1.5 min-h-[48px] min-w-[48px] rounded-xl bg-white border border-slate-100 shadow-sm inline-flex items-center cursor-pointer"
              aria-label="MedAorticX HealthTek Home"
            >
              <picture>
                <source srcSet="/logo-footer.webp" type="image/webp" />
                <img
                  src="/logo-nav.png"
                  alt="MedAorticX HealthTek Logo"
                  width="160"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: '160/48' }}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </picture>
            </a>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">
            MedAorticX Healthtek empowers healthcare organizations with premier Medical Coding Academy training, specialized RCM recruitment, and intelligent revenue cycle solutions.
          </p>
          <div className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} MedAorticX Healthtek. All rights reserved.
          </div>
        </div>

        {/* Navigation Links - 2 Columns of 3 links */}
        <nav aria-label="Footer Navigation" className="md:col-span-1">
          <h4 className="font-bold text-ink mb-3 text-xs sm:text-sm uppercase tracking-wider">Navigation</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <ul className="space-y-2 list-none p-0 m-0">
              {firstColLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-xs sm:text-sm font-medium text-slate-600 hover:text-indigo transition-colors cursor-pointer py-2 px-1 min-h-[40px] inline-flex items-center text-left no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 list-none p-0 m-0">
              {secondColLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-xs sm:text-sm font-medium text-slate-600 hover:text-indigo transition-colors cursor-pointer py-2 px-1 min-h-[40px] inline-flex items-center text-left no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Contact & Support */}
        <div>
          <h4 className="font-bold text-ink mb-3 text-xs sm:text-sm uppercase tracking-wider">Contact & Support</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-none p-0 m-0">
            <li className="py-1 flex items-start gap-2">
              <svg className="w-4 h-4 text-indigo mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Room No.302, State Bank of India Building, 3rd Floor, Avinashi Road, Anupparpalayam, Tirupur - 641 652.</span>
            </li>
            <li className="py-1 flex items-center gap-2">
              {/* TEMP: replace with permanent domain email when ready */}
              <svg className="w-4 h-4 text-indigo shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto:medaorticx@gmail.com" className="text-slate-600 hover:text-indigo transition-colors py-1.5 px-0 inline-flex items-center">medaorticx@gmail.com</a>
            </li>
            <li className="py-1 flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+919791300897" className="text-slate-600 hover:text-indigo transition-colors py-1.5 px-0 inline-flex items-center">+91 97913 00897</a>
            </li>
            <li className="pt-2 text-indigo font-bold text-xs">24/7 Clinical & Academic Support</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};
