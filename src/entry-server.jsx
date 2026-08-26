import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ServiceDetail } from './pages/ServiceDetail';
import { CourseDetail } from './pages/CourseDetail';

function StaticHomePage() {
  return (
    <main className="w-full">
      <div id="home">
        <Hero />
      </div>
      <AboutSection />
      <ServicesSection />
      <CoursesSection />
      <SolutionsSection />
      <ContactSection />
    </main>
  );
}

function StaticApp({ url }) {
  const isSubpage = url.startsWith('/services') || url.startsWith('/courses');
  const subpageActiveSection = url.startsWith('/services')
    ? 'services'
    : url.startsWith('/courses')
    ? 'courses'
    : null;

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-indigo selection:text-white">
      <Navbar isSubpage={isSubpage} subpageActiveSection={subpageActiveSection} />
      <div className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<StaticHomePage />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="*" element={<StaticHomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export function render(url) {
  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <StaticApp url={url} />
    </MemoryRouter>
  );
  return html;
}
