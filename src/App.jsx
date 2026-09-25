import React, { useEffect, useState, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams
} from 'react-router-dom';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import MedicalCursor from './components/MedicalCursor';


import { Hero } from './components/hero/Hero';
import CinematicIntro from './components/CinematicIntro';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { ContactSection } from './components/sections/ContactSection';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermofUse';


const ServiceDetail = lazy(() =>
  import('./pages/ServiceDetail').then(m => ({
    default: m.ServiceDetail
  }))
);

const CourseDetail = lazy(() =>
  import('./pages/CourseDetail').then(m => ({
    default: m.CourseDetail
  }))
);

const MidRevenueCycleServicesPage = lazy(() =>
  import('./services/mid-revenue-cyle').then(m => ({
    default: m.MidRevenueCycleServicesPage
  }))
);

const CareersPage = lazy(() =>
  import('./pages/CareersPage')
);

const BackEndRevenueCycleServicesPage = lazy(() =>
  import('./services/BackEndRevenueCycleServicesPage').then(m => ({
    default: m.BackEndRevenueCycleServicesPage
  }))
);

const RcmOptimizationServicesPage = lazy(() =>
  import('./services/RcmOptimizationServicesPage').then(m => ({
    default: m.RcmOptimizationServicesPage
  }))
);


function HomePage({
  onSelectService,
  onSelectCourse,
  onNavigateToSection
}) {
  return (
    <main className="w-full">

      <div id="home">
        <Hero />
      </div>

      <AboutSection />

      <ServicesSection
        onSelectService={onSelectService}
      />

      <CoursesSection
        onSelectCourse={onSelectCourse}
      />

      <SolutionsSection />

      <ContactSection />

    </main>
  );
}


function ServiceRouteWrapper({
  onNavigateToSection
}) {
  const { serviceId } = useParams();

  return (
    <ServiceDetail
      serviceId={serviceId}

      onBack={() =>
        onNavigateToSection('services')
      }

      onNavigateToContact={() =>
        onNavigateToSection('contact')
      }

      onNavigateToCourses={() =>
        onNavigateToSection('courses')
      }
    />
  );
}


function CourseRouteWrapper({
  onNavigateToSection
}) {
  const { courseId } = useParams();

  return (
    <CourseDetail
      courseId={courseId}

      onBack={() =>
        onNavigateToSection('courses')
      }

      onNavigateToContact={() =>
        onNavigateToSection('contact')
      }
    />
  );
}


export default function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [introFinished, setIntroFinished] = useState(false);


  useEffect(() => {
    if (location.pathname !== '/') {
      setIntroFinished(true);
    }
  }, [location.pathname]);


  useEffect(() => {

    const hash = window.location.hash;

    if (
      hash.startsWith('#service-') ||
      hash === '#rcm-recruitment-services' ||
      hash === '#medical-coding-academy'
    ) {

      const serviceId = hash
        .replace('#service-', '')
        .replace('#', '');

      navigate(
        `/services/${serviceId}`,
        { replace: true }
      );

    } else if (
      hash.startsWith('#course-') ||
      hash === '#basic-medical-coding' ||
      hash === '#advanced-medical-coding'
    ) {

      const courseId = hash
        .replace('#course-', '')
        .replace('#', '');

      navigate(
        `/courses/${courseId}`,
        { replace: true }
      );

    } else if (
      location.pathname === '/' &&
      hash
    ) {

      const targetId = hash.replace('#', '');

      const attemptScroll = (attempts = 0) => {

        const el =
          document.getElementById(targetId);

        if (el) {

          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        } else if (attempts < 10) {

          setTimeout(
            () => attemptScroll(attempts + 1),
            30
          );

        }

      };

      setTimeout(
        () => attemptScroll(),
        20
      );
    }

  }, [
    location.pathname,
    location.hash,
    navigate
  ]);


  const handleSelectService = (id) => {
    navigate(`/services/${id}`);
  };


  const handleSelectCourse = (id) => {
    navigate(`/courses/${id}`);
  };


  const handleNavigateToSection = (
    targetSection = 'home'
  ) => {

    const cleanId =
      targetSection.replace('#', '');

    if (location.pathname !== '/') {

      navigate(`/#${cleanId}`);

    } else {

      window.history.pushState(
        null,
        '',
        `#${cleanId}`
      );

      const attemptScroll = (
        attempts = 0
      ) => {

        const el =
          document.getElementById(cleanId);

        if (el) {

          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        } else if (attempts < 10) {

          setTimeout(
            () => attemptScroll(attempts + 1),
            30
          );

        }

      };

      setTimeout(
        () => attemptScroll(),
        10
      );
    }
  };


  const isSubpage =
    location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/courses') ||
    location.pathname.startsWith('/careers') ||
    location.pathname === '/privacy-policy' ||
    location.pathname === '/terms';


  const subpageActiveSection =
    location.pathname.startsWith('/services')
      ? 'services'
      : location.pathname.startsWith('/courses')
      ? 'courses'
      : location.pathname.startsWith('/careers')
      ? 'careers'
      : null;


  return (
    <div className="app-shell min-h-screen flex flex-col justify-between selection:bg-indigo selection:text-white">



      {/* =========================================
          CINEMATIC INTRO
      ========================================= */}

      {location.pathname === '/' &&
        !introFinished && (
          <CinematicIntro
            onComplete={() =>
              setIntroFinished(true)
            }
          />
        )}


      {/* =========================================
          WEBSITE CONTENT
      ========================================= */}

      <div className="app-content flex flex-col min-h-screen">

        <Navbar
          onNavigate={
            handleNavigateToSection
          }

          isSubpage={isSubpage}

          subpageActiveSection={
            subpageActiveSection
          }
        />


        {/* =========================================
            MEDICAL CURSOR
        ========================================= */}

        <MedicalCursor />


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div
          className={`flex-grow w-full transition-all duration-1000 ${
            introFinished
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >

          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">

                <div className="w-8 h-8 rounded-full border-2 border-indigo border-t-transparent animate-spin" />

              </div>
            }
          >

            <Routes>

              {/* =========================================
                  HOME
              ========================================= */}

              <Route
                path="/"
                element={
                  <HomePage
                    onSelectService={
                      handleSelectService
                    }

                    onSelectCourse={
                      handleSelectCourse
                    }

                    onNavigateToSection={
                      handleNavigateToSection
                    }
                  />
                }
              />


              {/* =========================================
                  SERVICES
              ========================================= */}

             <Route
  path="/services/revenue-cycle-management-services"
  element={
    <MidRevenueCycleServicesPage 
      onNavigateHome={() => navigate('/')}  // ← ADD THIS
    />
  }
/>


              <Route
                path="/services/back-end-revenue-cycle-services"
                element={
                  <BackEndRevenueCycleServicesPage
                    onNavigateHome={() =>
                      navigate('/')
                    }
                  />
                }
              />


              <Route
                path="/services/rcm-optimization-support"
                element={
                  <RcmOptimizationServicesPage
                    onNavigateHome={() =>
                      navigate('/')
                    }
                  />
                }
              />


              <Route
                path="/services/:serviceId"
                element={
                  <ServiceRouteWrapper
                    onNavigateToSection={
                      handleNavigateToSection
                    }
                  />
                }
              />


              {/* =========================================
                  COURSES
              ========================================= */}

              <Route
                path="/courses/:courseId"
                element={
                  <CourseRouteWrapper
                    onNavigateToSection={
                      handleNavigateToSection
                    }
                  />
                }
              />


              {/* =========================================
                  CAREERS
              ========================================= */}

              <Route
                path="/careers"
                element={
                  <CareersPage
                    onNavigateToSection={
                      handleNavigateToSection
                    }
                  />
                }
              />


              {/* =========================================
                  PRIVACY
              ========================================= */}

              <Route
                path="/privacy-policy"
                element={
                  <PrivacyPolicy />
                }
              />


              {/* =========================================
                  TERMS
              ========================================= */}

              <Route
                path="/terms"
                element={
                  <TermsOfUse />
                }
              />


              {/* =========================================
                  FALLBACK
              ========================================= */}

              <Route
                path="*"
                element={
                  <HomePage
                    onSelectService={
                      handleSelectService
                    }

                    onSelectCourse={
                      handleSelectCourse
                    }

                    onNavigateToSection={
                      handleNavigateToSection
                    }
                  />
                }
              />

            </Routes>

          </Suspense>

        </div>


        {/* =========================================
            FOOTER
        ========================================= */}

        <Footer
          onNavigate={
            handleNavigateToSection
          }
        />

      </div>

    </div>
  );
}