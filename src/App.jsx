import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';

const AboutSection = lazy(() => import('./components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const ServicesSection = lazy(() => import('./components/sections/ServicesSection').then(m => ({ default: m.ServicesSection })));
const SolutionsSection = lazy(() => import('./components/sections/SolutionsSection').then(m => ({ default: m.SolutionsSection })));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const ContactSection = lazy(() => import('./components/sections/ContactSection').then(m => ({ default: m.ContactSection })));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-indigo selection:text-white">
      <Navbar />
      
      <main className="flex-grow w-full">
        <div id="home">
          <Hero />
        </div>
        <div className="section-divider" />

        <Suspense fallback={<div className="py-12 text-center text-slate-400">Loading...</div>}>
          <AboutSection />
          <div className="section-divider" />

          <ServicesSection />
          <div className="section-divider" />

          <SolutionsSection />
          <div className="section-divider" />

          <ProjectsSection />
          <div className="section-divider" />

          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
