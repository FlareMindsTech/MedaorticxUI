import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { ContactSection } from './components/sections/ContactSection';

// Code-split subpage detail routes
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const CourseDetail = lazy(() => import('./pages/CourseDetail').then(m => ({ default: m.CourseDetail })));

function HomePage({ onSelectService, onSelectCourse, onNavigateToSection }) {
  return (
    <main className="w-full">
      <div id="home">
        <Hero />
      </div>

      <AboutSection />
      <ServicesSection onSelectService={onSelectService} />
      <CoursesSection 
        onSelectCourse={onSelectCourse} 
        onNavigateToContact={() => onNavigateToSection('contact')}
      />
      <SolutionsSection />
      <ContactSection />
    </main>
  );
}

function ServiceRouteWrapper({ onNavigateToSection }) {
  const { serviceId } = useParams();
  return (
    <ServiceDetail
      serviceId={serviceId}
      onBack={() => onNavigateToSection('services')}
      onNavigateToContact={() => onNavigateToSection('contact')}
      onNavigateToCourses={() => onNavigateToSection('courses')}
    />
  );
}

function CourseRouteWrapper({ onNavigateToSection }) {
  const { courseId } = useParams();
  return (
    <CourseDetail
      courseId={courseId}
      onBack={() => onNavigateToSection('courses')}
      onNavigateToContact={() => onNavigateToSection('contact')}
    />
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Backward compatibility: Convert legacy URL hashes (#service-*, #course-*) to canonical routes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#service-') || hash === '#rcm-recruitment-services' || hash === '#medical-coding-academy') {
      const serviceId = hash.replace('#service-', '').replace('#', '');
      navigate(`/services/${serviceId}`, { replace: true });
    } else if (hash.startsWith('#course-') || hash === '#basic-medical-coding' || hash === '#advanced-medical-coding') {
      const courseId = hash.replace('#course-', '').replace('#', '');
      navigate(`/courses/${courseId}`, { replace: true });
    } else if (location.pathname === '/' && hash) {
      const targetId = hash.replace('#', '');
      const attemptScroll = (attempts = 0) => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 10) {
          setTimeout(() => attemptScroll(attempts + 1), 30);
        }
      };
      setTimeout(() => attemptScroll(), 20);
    }
  }, [location.pathname, location.hash, navigate]);

  const handleSelectService = (id) => {
    navigate(`/services/${id}`);
  };

  const handleSelectCourse = (id) => {
    navigate(`/courses/${id}`);
  };

  const handleNavigateToSection = (targetSection = 'home') => {
    const cleanId = targetSection.replace('#', '');
    if (location.pathname !== '/') {
      navigate(`/#${cleanId}`);
    } else {
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
    }
  };

  const isSubpage = location.pathname.startsWith('/services') || location.pathname.startsWith('/courses');
  const subpageActiveSection = location.pathname.startsWith('/services')
    ? 'services'
    : location.pathname.startsWith('/courses')
    ? 'courses'
    : null;

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-indigo selection:text-white">
      <Navbar 
        onNavigate={handleNavigateToSection} 
        isSubpage={isSubpage}
        subpageActiveSection={subpageActiveSection}
      />
      
      <div className="flex-grow w-full">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-indigo border-t-transparent animate-spin" />
          </div>
        }>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectService={handleSelectService}
                  onSelectCourse={handleSelectCourse}
                  onNavigateToSection={handleNavigateToSection}
                />
              }
            />
            <Route
              path="/services/:serviceId"
              element={<ServiceRouteWrapper onNavigateToSection={handleNavigateToSection} />}
            />
            <Route
              path="/courses/:courseId"
              element={<CourseRouteWrapper onNavigateToSection={handleNavigateToSection} />}
            />
            <Route
              path="*"
              element={
                <HomePage
                  onSelectService={handleSelectService}
                  onSelectCourse={handleSelectCourse}
                  onNavigateToSection={handleNavigateToSection}
                />
              }
            />
          </Routes>
        </Suspense>
      </div>

      <Footer onNavigate={handleNavigateToSection} />
    </div>
  );
}
