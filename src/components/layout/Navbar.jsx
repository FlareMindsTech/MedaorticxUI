import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/nav';

export const Navbar = ({ onNavigate, isSubpage, subpageActiveSection }) => {
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isSubpage) return;

    let rafId = null;

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
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
          className="flex items-center group cursor-pointer p-0.5 no-underline"
          aria-label="MedAorticX HealthTek Homepage"
        >
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/70 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center">
            <picture>
              <source srcSet="/logo-nav.webp" type="image/webp" />
              <img
                src="/logo-nav.png"
                alt="MedAorticX HealthTek Logo"
                width="180"
                height="54"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ aspectRatio: '180/54' }}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-200"
              />
            </picture>
          </div>
        </a>

        {/* Desktop Nav - Clean Centered Pill Menu with 10px spacing */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50 shadow-inner" aria-label="Main Navigation">
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
                className={`relative px-[10px] py-2 text-[0.88rem] xl:text-[0.92rem] font-semibold transition-all duration-200 rounded-full cursor-pointer border-none flex items-center justify-center no-underline ${
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
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-brand-gradient shadow-md hover:shadow-lg hover:opacity-95 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer min-h-[42px] no-underline"
          >
            Contact Us →
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer p-2.5"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 flex flex-col items-center justify-center gap-1.5" aria-hidden="true">
              <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[550px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen ? true : undefined}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-2.5">
          {NAV_LINKS.map((link) => {
            const currentSec = link.href.replace('#', '');
            const isActive = isSubpage 
              ? subpageActiveSection === currentSec
              : activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                tabIndex={mobileMenuOpen ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`min-h-[46px] py-2.5 px-4 flex items-center justify-between rounded-xl border transition-all duration-200 cursor-pointer no-underline text-sm sm:text-base font-bold ${
                  isActive
                    ? 'bg-indigo/10 text-indigo border-indigo/20 shadow-sm font-extrabold'
                    : 'bg-white/80 text-slate-700 border-slate-200/70 hover:bg-white hover:border-indigo/20'
                }`}
              >
                <span className="flex items-center gap-2">
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#6d45e5] animate-pulse" aria-hidden="true" />}
                  {link.name}
                </span>
                <span className="text-slate-600 font-bold text-sm" aria-hidden="true">→</span>
              </a>
            );
          })}
          <a
            href="#contact"
            tabIndex={mobileMenuOpen ? 0 : -1}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="mt-1.5 min-h-[46px] py-3 w-full flex items-center justify-center rounded-xl font-bold text-white bg-brand-gradient shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer no-underline text-sm sm:text-base"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </header>
  );
};
