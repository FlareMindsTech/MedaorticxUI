import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-indigo selection:text-white">
      <Navbar />
      
      <main className="flex-grow w-full">
        <div id="home">
          <Hero />
        </div>
        <div className="section-divider" />

        <AboutSection />
        <div className="section-divider" />

        <ServicesSection />
        <div className="section-divider" />

        <SolutionsSection />
        <div className="section-divider" />

        <ProjectsSection />
        <div className="section-divider" />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
