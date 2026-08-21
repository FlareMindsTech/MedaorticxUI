import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
// Code-split sub-detail pages & below-the-fold sections for minimal initial JS bundle
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const ServicesSection = lazy(() => import('./components/sections/ServicesSection').then(m => ({ default: m.ServicesSection })));
const CoursesSection = lazy(() => import('./components/sections/CoursesSection').then(m => ({ default: m.CoursesSection })));
const SolutionsSection = lazy(() => import('./components/sections/SolutionsSection').then(m => ({ default: m.SolutionsSection })));
const ContactSection = lazy(() => import('./components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const CourseDetail = lazy(() => import('./pages/CourseDetail').then(m => ({ default: m.CourseDetail })));

export default function App() {
  const [activeServicePage, setActiveServicePage] = useState(null);
  const [activeCoursePage, setActiveCoursePage] = useState(null);

  // Check URL hash on load and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#service-rcm-recruitment-services' || hash === '#rcm-recruitment-services') {
        setActiveServicePage('rcm-recruitment-services');
        setActiveCoursePage(null);
      } else if (hash === '#service-medical-coding-academy' || hash === '#medical-coding-academy') {
        setActiveServicePage('medical-coding-academy');
        setActiveCoursePage(null);
      } else if (hash === '#course-basic-medical-coding' || hash === '#basic-medical-coding') {
        setActiveCoursePage('basic-medical-coding');
        setActiveServicePage(null);
      } else if (hash === '#course-advanced-medical-coding' || hash === '#advanced-medical-coding') {
        setActiveCoursePage('advanced-medical-coding');
        setActiveServicePage(null);
      } else {
        setActiveServicePage(null);
        setActiveCoursePage(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectService = (id) => {
    setActiveCoursePage(null);
    setActiveServicePage(id);
    window.location.hash = `service-${id}`;
  };

  const handleSelectCourse = (id) => {
    setActiveServicePage(null);
    setActiveCoursePage(id);
    window.location.hash = `course-${id}`;
  };

  const handleNavigateToSection = (targetSection = 'home') => {
    const cleanId = targetSection.replace('#', '');
    setActiveServicePage(null);
    setActiveCoursePage(null);
    window.history.pushState(null, '', `#${cleanId}`);

    const attemptScroll = (attempts = 0) => {
      const el = document.getElementById(cleanId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 10) {
        setTimeout(() => attemptScroll(attempts + 1), 30);
      }
    };

    setTimeout(() => attemptScroll(), 10);
  };

  const isSubpage = Boolean(activeServicePage || activeCoursePage);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-indigo selection:text-white">
      <Navbar 
        onNavigate={handleNavigateToSection} 
        isSubpage={isSubpage}
        subpageActiveSection={activeServicePage ? 'services' : activeCoursePage ? 'courses' : null}
      />
      
      <div className="flex-grow w-full">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-indigo border-t-transparent animate-spin" />
          </div>
        }>
          {activeServicePage ? (
            <ServiceDetail
              serviceId={activeServicePage}
              onBack={() => handleNavigateToSection('services')}
              onNavigateToContact={() => handleNavigateToSection('contact')}
              onNavigateToCourses={() => handleNavigateToSection('courses')}
            />
          ) : activeCoursePage ? (
            <CourseDetail
              courseId={activeCoursePage}
              onBack={() => handleNavigateToSection('courses')}
              onNavigateToContact={() => handleNavigateToSection('contact')}
            />
          ) : (
            <main className="w-full">
              <div id="home">
                <Hero />
              </div>

              <Suspense fallback={null}>
                <AboutSection />
                <ServicesSection onSelectService={handleSelectService} />
                <CoursesSection 
                  onSelectCourse={handleSelectCourse} 
                  onNavigateToContact={() => handleNavigateToSection('contact')}
                />
                <SolutionsSection />
                <ContactSection />
              </Suspense>
            </main>
          )}
        </Suspense>
      </div>

      <Footer onNavigate={handleNavigateToSection} />
    </div>
  );
}
