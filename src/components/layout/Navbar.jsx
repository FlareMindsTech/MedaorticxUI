import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
          ? 'bg-white/75 backdrop-blur-2xl shadow-[0_10px_40px_-15px_rgba(109,77,224,0.2)] border-b border-white/60'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 h-[86px] flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-extrabold text-xl shadow-3d group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            M
          </div>
          <span className="font-extrabold text-xl tracking-tight text-ink">
            MedAortic<span className="text-indigo">X</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative py-1 text-[0.94rem] font-medium transition-colors cursor-pointer bg-transparent border-none ${isActive ? 'text-indigo font-semibold' : 'text-ink hover:text-indigo'
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-gradient"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm text-white bg-brand-gradient shadow-3d hover:scale-105 transition-all duration-300 cursor-pointer border-none"
          >
            Contact Us →
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-btn-ghost cursor-pointer border-none"
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-ink/10 overflow-hidden shadow-3d"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`min-h-[48px] flex items-center text-lg font-medium rounded-xl px-4 transition-colors cursor-pointer bg-transparent border-none ${activeSection === link.href
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
