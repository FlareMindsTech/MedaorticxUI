import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/nav';

export const Navbar = ({ onNavigate, isSubpage, subpageActiveSection }) => {
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isSubpage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSubpage]);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isSubpage || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_-8px_rgba(109,77,224,0.12)] border-b border-slate-200/60 py-2 sm:py-2.5'
          : 'bg-white/60 backdrop-blur-md border-b border-white/50 py-2.5 sm:py-3'
      }`}
      role="banner"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">

        {/* Logo Container */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }} 
          className="flex items-center group cursor-pointer p-1 min-h-[48px] min-w-[48px] rounded-2xl"
          aria-label="MedAorticX HealthTek Homepage"
        >
          <div className="px-3 py-1.5 rounded-2xl bg-white border border-slate-100/80 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <picture>
              <source srcSet="/logo-nav.webp" type="image/webp" />
              <img
                src="/logo-nav.png"
                alt="MedAorticX HealthTek Logo"
                width="160"
                height="48"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ aspectRatio: '160/48' }}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </picture>
          </div>
        </a>

        {/* Desktop Nav - Clean Centered Pill Menu */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50 shadow-inner" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const currentSec = link.href.replace('#', '');
            const isActive = isSubpage 
              ? subpageActiveSection === currentSec
              : activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-2.5 text-[0.88rem] xl:text-[0.92rem] font-semibold transition-all duration-200 rounded-full cursor-pointer border-none min-h-[48px] flex items-center justify-center no-underline ${
                  isActive 
                    ? 'text-indigo bg-white shadow-sm font-bold scale-[1.02]' 
                    : 'text-slate-600 hover:text-indigo hover:bg-white/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Side CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-brand-gradient shadow-btn-primary hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-200 cursor-pointer border-none min-h-[48px] no-underline"
          >
            Contact Us →
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl bg-white/90 flex items-center justify-center shadow-btn-ghost cursor-pointer border border-slate-200/80 p-3"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 flex flex-col items-center justify-center gap-1.5" aria-hidden="true">
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden bg-white border-b border-ink/10 overflow-hidden shadow-3d transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="px-4 sm:px-6 py-5 flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const currentSec = link.href.replace('#', '');
            const isActive = isSubpage 
              ? subpageActiveSection === currentSec
              : activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`min-h-[48px] py-3 flex items-center text-base sm:text-lg font-medium rounded-xl px-4 transition-colors cursor-pointer bg-transparent no-underline ${
                  isActive
                    ? 'text-indigo font-bold bg-indigo/5'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="mt-3 min-h-[48px] py-3.5 w-full flex items-center justify-center rounded-xl font-semibold text-white bg-brand-gradient shadow-btn-primary cursor-pointer border-none no-underline text-base"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </header>
  );
};
