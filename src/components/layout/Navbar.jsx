import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/nav';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(109,77,224,0.15)] border-b border-white/80 py-1.5'
          : 'bg-transparent py-2.5'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo Container */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} 
          className="flex items-center group cursor-pointer"
        >
          <div className="px-3 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-sm transition-all duration-300 group-hover:scale-105">
            <picture>
              <source srcSet="/logo-nav.webp" type="image/webp" />
              <img
                src="/logo-nav.png"
                alt="MedAorticX HealthTek Logo"
                width="160"
                height="56"
                loading="eager"
                decoding="async"
                className="h-11 sm:h-13 max-w-[170px] sm:max-w-[200px] w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </picture>
          </div>
        </a>

        {/* Desktop Nav - Floating Glass Bar */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/90 shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-[0.95rem] font-semibold transition-all rounded-full cursor-pointer border-none ${
                  isActive 
                    ? 'text-indigo bg-white shadow-sm font-bold' 
                    : 'text-slate-600 hover:text-indigo hover:bg-white/60'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Side CTA */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden sm:inline-flex items-center justify-center px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-brand-gradient shadow-3d hover:scale-105 transition-all duration-300 cursor-pointer border-none"
          >
            Contact Us →
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-btn-ghost cursor-pointer border border-white/80"
            aria-label="Toggle Menu"
          >
            <div className="w-4 flex flex-col items-center justify-center gap-1">
              <span className={`block w-4 h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-4 h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-4 h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer — CSS transition instead of framer-motion */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-2xl border-b border-ink/10 overflow-hidden shadow-3d transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`min-h-[48px] flex items-center text-lg font-medium rounded-xl px-4 transition-colors cursor-pointer bg-transparent border-none ${
                activeSection === link.href
                  ? 'text-indigo font-bold bg-indigo/5'
                  : 'text-ink hover:bg-gray-50'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-3 min-h-[48px] w-full flex items-center justify-center rounded-xl font-semibold text-white bg-brand-gradient shadow-3d cursor-pointer border-none"
          >
            Contact Us →
          </button>
        </div>
      </div>
    </header>
  );
};
