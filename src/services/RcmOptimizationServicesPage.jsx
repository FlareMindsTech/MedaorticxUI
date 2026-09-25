import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SlidersHorizontal,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  Home,
  ArrowRight,
  Check,
  Building2,
  Sparkles,
  Clock,
  FileText,
  SearchCheck,
  Settings,
  Menu,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
import revenueCycleSupportImg from '../assets/images/rcm/revenue.jpeg';
import qualityComplianceImg from '../assets/images/rcm/quality.jpeg';
import analyticsReportingImg from '../assets/images/rcm/analytics.jpeg';
import processImprovementImg from '../assets/images/rcm/process.jpeg';

/* =========================================================
   RCM OPTIMIZATION & SUPPORT SERVICES
========================================================= */

const optimizationServices = [
  {
    id: 'revenue-cycle-support',
    icon: SlidersHorizontal,
    sidebarIcon: SlidersHorizontal,

    image:revenueCycleSupportImg,

    navLabel: 'Revenue Cycle Support',

    title: 'Flexible Revenue Cycle Support',

    subheading:
      'Adaptive operational support that scales with your revenue cycle needs.',

    category: 'RCM Optimization & Support',

    intro: [
      'Managing an efficient revenue cycle requires flexible operational capacity that can adapt to changing workloads, priorities, and business demands.',

      'MedAorticX provides scalable revenue cycle support designed to complement your existing teams, workflows, and infrastructure without disrupting daily operations.'
    ],

    highlight:
      'Flexible Scaling. Seamless Integration. Consistent Operations.',

    ctaLabel: 'Enhance Your RCM Support',

    codingBadges: [
      'Workflow Flexibility',
      'Operational Scaling',
      'Team Integration'
    ],

    codingStats: [
      {
        metric: 'Flexible',
        label: 'Operational Coverage',
        icon: TrendingUp
      },
      {
        metric: 'Seamless',
        label: 'Workflow Integration',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Revenue Cycle Support Services',

        items: [
          'Flexible operational assistance across revenue cycle workflows',
          'Volume surge management and backlog reduction',
          'Cross-functional administrative coordination',
          'Task prioritization and queue optimization',
          'Staff augmentation during peak operational periods',
          'Workflow continuity and operational support'
        ]
      }
    ],

    whyMatters:
      'Unexpected volume increases, staffing gaps, and operational bottlenecks can affect revenue cycle performance. Flexible support helps organizations maintain productivity and workflow continuity as operational demands change.',

    valueProps: [
      'Scale support according to operational demand',
      'Reduce workflow backlogs effectively',
      'Maintain operational consistency',
      'Support internal teams during peak periods',
      'Improve daily task execution'
    ]
  },

  {
    id: 'quality-compliance-support',
    icon: ShieldCheck,
    sidebarIcon: ShieldCheck,

    image:qualityComplianceImg,

    navLabel: 'Quality & Compliance',

    title: 'Quality & Compliance Support',

    subheading:
      'Structured quality oversight and compliance-focused revenue cycle support.',

    category: 'RCM Optimization & Support',

    intro: [
      'Maintaining quality and compliance across revenue cycle operations helps organizations reduce process variation, identify operational risks, and strengthen financial controls.',

      'MedAorticX supports structured quality reviews, workflow assessments, documentation checks, and compliance-focused improvement initiatives.'
    ],

    highlight:
      'Structured Reviews. Risk Awareness. Continuous Improvement.',

    ctaLabel: 'Strengthen Quality & Compliance',

    codingBadges: [
      'Quality Reviews',
      'Compliance Support',
      'Error Identification'
    ],

    codingStats: [
      {
        metric: 'Structured',
        label: 'Quality Reviews',
        icon: TrendingUp
      },
      {
        metric: 'Proactive',
        label: 'Risk Monitoring',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Quality & Compliance Services',

        items: [
          'Routine revenue cycle quality assurance reviews',
          'Regulatory and billing guideline alignment reviews',
          'Documentation accuracy evaluations',
          'Internal audit preparation and support',
          'Error identification and corrective action tracking',
          'Compliance guideline communication and workflow updates'
        ]
      }
    ],

    whyMatters:
      'Revenue cycle requirements and operational guidelines continue to evolve. Structured quality reviews help identify process gaps early and support consistent execution across teams and workflows.',

    valueProps: [
      'Identify operational and compliance risks',
      'Support alignment with evolving requirements',
      'Improve documentation accuracy',
      'Strengthen quality control processes',
      'Support continuous operational improvement'
    ]
  },

  {
    id: 'rcm-analytics-reporting',
    icon: BarChart3,
    sidebarIcon: BarChart3,

    image:analyticsReportingImg,

    navLabel: 'Analytics & Reporting',

    title: 'RCM Analytics & Reporting',

    subheading:
      'Clear financial visibility through meaningful revenue cycle performance data.',

    category: 'RCM Optimization & Support',

    intro: [
      'Revenue cycle data becomes valuable when it can be translated into clear performance insights and actionable operational decisions.',

      'MedAorticX provides structured reporting and analytics support to help leadership teams monitor revenue cycle performance, identify trends, and prioritize improvement opportunities.'
    ],

    highlight:
      'Actionable Insights. Performance Visibility. Better Decisions.',

    ctaLabel: 'Unlock RCM Analytics',

    codingBadges: [
      'KPI Tracking',
      'Performance Reporting',
      'Data Visibility'
    ],

    codingStats: [
      {
        metric: 'Visible',
        label: 'RCM Performance',
        icon: TrendingUp
      },
      {
        metric: 'Actionable',
        label: 'Financial Insights',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Analytics & Reporting Services',

        items: [
          'Custom revenue cycle performance dashboards',
          'Key Performance Indicator (KPI) tracking',
          'Collection and aging trend analysis',
          'Payer performance evaluation',
          'Denial and adjustment trend visualization',
          'Executive revenue cycle reporting'
        ]
      }
    ],

    whyMatters:
      'Effective revenue cycle management depends on understanding what is happening across financial and operational workflows. Structured analytics provide leadership with the visibility needed to identify trends, evaluate performance, and prioritize improvement areas.',

    valueProps: [
      'Gain clearer visibility into RCM performance',
      'Identify operational trends earlier',
      'Support data-driven decision making',
      'Monitor key collection and aging metrics',
      'Simplify executive performance reporting'
    ]
  },

  {
    id: 'rcm-process-improvement',
    icon: Settings,
    sidebarIcon: Settings,

    image:processImprovementImg,

    navLabel: 'Process Improvement',

    title: 'RCM Process Improvement',

    subheading:
      'Streamlined workflows designed to improve operational efficiency across the revenue cycle.',

    category: 'RCM Optimization & Support',

    intro: [
      'Inefficient workflows, unnecessary handoffs, and inconsistent processes can increase administrative effort and slow revenue cycle performance.',

      'MedAorticX evaluates existing workflows to identify bottlenecks, standardize processes, identify automation opportunities, and support continuous operational improvement.'
    ],

    highlight:
      'Workflow Optimization. Bottleneck Reduction. Continuous Improvement.',

    ctaLabel: 'Optimize Your Processes',

    codingBadges: [
      'Workflow Redesign',
      'Bottleneck Analysis',
      'Process Automation'
    ],

    codingStats: [
      {
        metric: 'Streamlined',
        label: 'Workflow Processes',
        icon: TrendingUp
      },
      {
        metric: 'Continuous',
        label: 'Process Improvement',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Process Improvement Services',

        items: [
          'Comprehensive RCM workflow assessments',
          'Operational bottleneck identification',
          'Standard operating procedure (SOP) development',
          'Workflow redesign and automation support',
          'Efficiency benchmarking and performance tracking',
          'Continuous improvement strategy development'
        ]
      }
    ],

    whyMatters:
      'Small process inefficiencies can accumulate across high-volume revenue cycle operations. A structured improvement approach helps organizations simplify workflows, reduce unnecessary effort, and create more consistent operational processes.',

    valueProps: [
      'Identify and reduce operational bottlenecks',
      'Streamline administrative workflows',
      'Establish clearer operating procedures',
      'Improve team productivity',
      'Support long-term revenue cycle efficiency'
    ]
  }
];

/* =========================================================
   PULSE PARTICLE BACKGROUND
========================================================= */

const PulseParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || !canvas.parentElement) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;

      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 3 + 1,
      color:
        Math.random() > 0.5
          ? 'rgba(0, 168, 204, 0.4)'
          : 'rgba(0, 201, 137, 0.4)'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) {
          p.vx *= -1;
        }

        if (p.y < 0 || p.y > height) {
          p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(0, 168, 204, ${
              0.2 * (1 - dist / 120)
            })`;

            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-90"
    />
  );
};

/* =========================================================
   MAIN PAGE
========================================================= */

export const RcmOptimizationServicesPage = ({
  onNavigateHome
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const active = optimizationServices[activeIndex];

  const mainRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroContentRef = useRef(null);
  const processStepsRef = useRef(null);
  const servicesListRef = useRef(null);
  const statsRef = useRef(null);



  const WHATSAPP_NUMBER = '919791300897';


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const mobile = formData.mobile.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (
      !firstName ||
      !lastName ||
      !mobile ||
      !email ||
      !message
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    const whatsappMessage = `Hello MedAorticX,

I would like to make an enquiry regarding your RCM Optimization & Support services.

Service: ${active.navLabel}
Service Title: ${active.title}

First Name: ${firstName}
Last Name: ${lastName}
Mobile Number: ${mobile}
Email Address: ${email}

Message / Requirements:
${message}

Thank you.`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  /* -------------------------------------------------------
     Scroll to top when changing service
  ------------------------------------------------------- */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }, [activeIndex]);

  /* -------------------------------------------------------
     Navigation
  ------------------------------------------------------- */

  const goTo = (idx) => {
    if (
      idx < 0 ||
      idx >= optimizationServices.length
    ) {
      return;
    }

    setActiveIndex(idx);
    setMobileMenuOpen(false);
  };

  /* -------------------------------------------------------
     Hero animation
  ------------------------------------------------------- */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      });

      if (heroContentRef.current) {
        tl.fromTo(
          heroContentRef.current,
          {
            opacity: 0,
            x: -50
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8
          }
        );
      }

      if (heroImageRef.current) {
        tl.fromTo(
          heroImageRef.current,
          {
            opacity: 0,
            scale: 1.1
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8
          },
          '-=0.6'
        );
      }
    }, mainRef.current);

    return () => {
      ctx.revert();
    };
  }, [activeIndex]);

  /* -------------------------------------------------------
     Scroll animations
  ------------------------------------------------------- */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (processStepsRef.current) {
        const steps =
          processStepsRef.current.querySelectorAll(
            '[data-step]'
          );

        gsap.fromTo(
          steps,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: 'power3.out',

            scrollTrigger: {
              trigger: processStepsRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      if (servicesListRef.current) {
        const items =
          servicesListRef.current.querySelectorAll(
            '[data-service-item]'
          );

        gsap.fromTo(
          items,
          {
            opacity: 0,
            x: -20
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power3.out',

            scrollTrigger: {
              trigger: servicesListRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      if (statsRef.current) {
        const statCards =
          statsRef.current.querySelectorAll(
            '[data-stat]'
          );

        gsap.fromTo(
          statCards,
          {
            opacity: 0,
            scale: 0.8
          },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: 'back.out(1.4)',

            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      ScrollTrigger.refresh();
    }, mainRef.current);

    return () => {
      ctx.revert();
    };
  }, [activeIndex]);

  /* -------------------------------------------------------
     Render
  ------------------------------------------------------- */

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-slate-50 text-slate-800"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        .wave-divider {
          position: relative;
          margin-top: 4rem;
          margin-bottom: 2rem;
          isolation: isolate;
        }

        .wave-divider::before {
          content: '';
          position: absolute;
          top: -40px;
          left: 0;
          width: 100%;
          height: 120px;
          background: linear-gradient(
            180deg,
            rgba(0,168,204,0.08) 0%,
            transparent 100%
          );
          clip-path: polygon(
            0 0,
            100% 40%,
            100% 100%,
            0 100%
          );
          z-index: 0;
          pointer-events: none;
        }

        .wave-content {
          position: relative;
          z-index: 1;
        }

        header,
        nav.global-navbar {
          display: none !important;
        }
      `}</style>

      <div className="flex">

        {/* =================================================
            LEFT SIDEBAR - Desktop Only
        ================================================= */}

        <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col py-8 px-4 sticky top-0 h-screen shadow-sm">

          <div className="mb-12">

            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00A8CC] to-[#00C989] text-white flex items-center justify-center text-xl font-bold mx-auto mb-2 shadow-md shadow-[#00A8CC]/20">
              <Building2 className="w-6 h-6 text-white" />
            </div>

            <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
              MEDAORTICX
            </p>

          </div>

          <nav className="flex-1 space-y-2">

            {optimizationServices.map((svc, idx) => {

              const IconComponent = svc.sidebarIcon;

              const isActive =
                idx === activeIndex;

              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => goTo(idx)}
                  aria-current={
                    isActive
                      ? 'page'
                      : undefined
                  }
                  className={`w-full flex flex-col items-center justify-center py-4 px-2 rounded-xl transition-all ${
                    isActive
                      ? 'bg-cyan-50 text-[#00A8CC] font-semibold border border-cyan-100 shadow-sm'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >

                  <IconComponent className="w-6 h-6 mb-2" />

                  <span className="text-[10px] font-semibold text-center leading-tight">
                    {svc.navLabel}
                  </span>

                </button>
              );
            })}

          </nav>

          {/* Contact */}

          <div className="mt-8 p-4 bg-slate-900 rounded-xl text-center text-white">

            <p className="text-xs font-semibold text-[#00A8CC] mb-2">
              Need Support?
            </p>

            <button
              type="button"
              onClick={() => {
                const formSection =
                  document.querySelector(
                    '#quick-inquiry'
                  );

                if (formSection) {
                  formSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                }
              }}
              className="w-full bg-gradient-to-r from-[#00A8CC] to-[#00C989] hover:opacity-90 text-white py-2 px-3 rounded-lg text-xs font-semibold transition shadow-sm flex items-center justify-center gap-1"
            >
              Contact Us

              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </aside>

        {/* =================================================
            MOBILE MENU DRAWER
        ================================================= */}

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 left-0 h-screen w-64 bg-white flex flex-col py-8 px-4 shadow-xl z-50 lg:hidden transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00A8CC] to-[#00C989] text-white flex items-center justify-center text-lg font-bold shadow-md shadow-[#00A8CC]/20">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                MEDAORTICX
              </p>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-500 hover:text-slate-900 p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            {optimizationServices.map((svc, idx) => {
              const IconComponent = svc.sidebarIcon;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => goTo(idx)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all text-left ${
                    isActive
                      ? 'bg-cyan-50 text-[#00A8CC] font-semibold border border-cyan-100'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">
                    {svc.navLabel}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 p-4 bg-slate-900 rounded-xl text-center text-white">
            <p className="text-xs font-semibold text-[#00A8CC] mb-2">
              Need Support?
            </p>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);

                const formSection =
                  document.querySelector('#quick-inquiry');

                if (formSection) {
                  formSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                }
              }}
              className="w-full bg-gradient-to-r from-[#00A8CC] to-[#00C989] hover:opacity-90 text-white py-2 px-3 rounded-lg text-xs font-semibold transition shadow-sm flex items-center justify-center gap-1"
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main className="flex-1 px-6 lg:px-12 py-8 lg:py-12 max-w-7xl mx-auto w-full">

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 p-2"
          >
            <Menu className="w-6 h-6" />
            <span className="text-sm font-semibold">Menu</span>
          </button>

          {/* Breadcrumb */}

          <div className="flex items-center gap-3 mb-8 text-sm flex-wrap">

            <button
              type="button"
              onClick={() => {
                if (
                  typeof onNavigateHome ===
                  'function'
                ) {
                  onNavigateHome();
                } else {
                  window.location.href = '/';
                }
              }}
              className="text-[#00A8CC] hover:text-[#008ba8] flex items-center gap-1 font-medium bg-transparent border-none cursor-pointer p-0"
            >
              <Home className="w-4 h-4" />
              Home
            </button>

            <span className="text-slate-300">
              /
            </span>

            <span className="text-slate-500 font-medium">
              RCM Optimization & Support
            </span>

            <span className="text-slate-300">
              /
            </span>

            <span className="text-slate-700 font-semibold">
              {active.navLabel}
            </span>

          </div>

          {/* =================================================
              HERO
          ================================================= */}

          <section className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-sm">

            <PulseParticleCanvas />

            <div
              ref={heroContentRef}
              className="lg:col-span-7 relative z-10"
            >

              <div className="inline-flex items-center gap-2 bg-cyan-50 text-[#00A8CC] px-4 py-2 rounded-full mb-6 border border-cyan-100">

                <Sparkles className="w-3.5 h-3.5 text-[#00A8CC]" />

                <span className="text-xs font-semibold uppercase tracking-wider">
                  {active.category}
                </span>

              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">

                {active.title
                  .split(' ')
                  .map((word, i, arr) => {

                    const isLastTwo =
                      i >= arr.length - 2;

                    return (
                      <span
                        key={`${word}-${i}`}
                        className="inline-block mr-2"
                      >

                        {isLastTwo ? (
                          <span className="bg-gradient-to-r from-[#00A8CC] to-[#00C989] bg-clip-text text-transparent">
                            {word}
                          </span>
                        ) : (
                          <span className="text-slate-900">
                            {word}
                          </span>
                        )}

                      </span>
                    );
                  })}

              </h1>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                {active.subheading}
              </p>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {active.intro[0]}
              </p>

              <div className="border-l-4 border-[#00C989] bg-emerald-50/60 px-4 py-3 rounded-r-xl mb-8">

                <p className="text-sm font-bold text-slate-800">
                  {active.highlight}
                </p>

              </div>

              {/* CTA */}

              <div className="flex flex-wrap gap-4 mb-8">

                <button
                  type="button"
                  onClick={() => {
                    const formSection =
                      document.querySelector(
                        '#quick-inquiry'
                      );

                    if (formSection) {
                      formSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                      });
                    }
                  }}
                  className="bg-gradient-to-r from-[#00A8CC] to-[#00C989] hover:opacity-95 text-white font-semibold px-8 py-3.5 rounded-xl transition transform hover:scale-105 active:scale-95 shadow-lg shadow-[#00A8CC]/20 flex items-center gap-2"
                >
                  {active.ctaLabel}

                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

              <div className="flex flex-wrap gap-3">

                {(active.codingBadges || [])
                  .slice(0, 3)
                  .map((badge, idx) => (

                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg"
                    >

                      <Check className="w-4 h-4 text-[#00C989]" />

                      <span className="text-xs font-semibold text-slate-700">
                        {badge}
                      </span>

                    </div>

                  ))}

              </div>

            </div>

            {/* =================================================
                HERO IMAGE + STATS
            ================================================= */}

            <div className="lg:col-span-5 relative z-10 flex flex-col gap-4">

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">

                <img
                  ref={heroImageRef}
                  src={active.image}
                  alt={`${active.title} - MedAorticX`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#00A8CC]/80 backdrop-blur-md rounded-md mb-2 inline-block">
                    RCM Optimization & Support
                  </span>

                  <p className="text-sm font-semibold">
                    Strategic Revenue Cycle Enhancement
                  </p>

                </div>

              </div>

              <div
                ref={statsRef}
                className="grid grid-cols-2 gap-3"
              >

                {(active.codingStats || []).map(
                  (stat, idx) => {

                    const StatIcon =
                      stat.icon || BarChart3;

                    return (
                      <div
                        key={idx}
                        data-stat
                        className="bg-gradient-to-br from-white to-slate-50/80 rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:border-cyan-200 transition-all"
                      >

                        <div className="flex items-center justify-between mb-2">

                          <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">

                            <StatIcon className="w-4 h-4 text-[#00A8CC]" />

                          </div>

                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            Focus
                          </span>

                        </div>

                        <p className="text-xl font-extrabold text-slate-900">
                          {stat.metric}
                        </p>

                        <p className="text-[11px] text-slate-500 font-medium">
                          {stat.label}
                        </p>

                      </div>
                    );
                  }
                )}

              </div>

            </div>
          </section>

          {/* =================================================
              APPROACH
          ================================================= */}

          <section
            ref={processStepsRef}
            className="mb-20 wave-divider bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-sm"
          >

            <div className="wave-content">

              <div className="mb-12">

                <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mb-2">
                  OUR APPROACH
                </h3>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Strategic RCM Enhancement Framework
                </h2>

                <p className="text-slate-600 max-w-2xl leading-relaxed">
                  {active.intro[1]}
                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {[
                  {
                    step: '1',
                    title: 'Assessment & Review',
                    icon: FileText
                  },
                  {
                    step: '2',
                    title: 'Strategy & Alignment',
                    icon: SearchCheck
                  },
                  {
                    step: '3',
                    title: 'Implementation & Support',
                    icon: Check
                  },
                  {
                    step: '4',
                    title: 'Review & Refinement',
                    icon: ShieldCheck
                  }
                ].map((item, idx) => {

                  const StepIcon = item.icon;

                  return (
                    <div
                      key={idx}
                      data-step
                      className="text-center"
                    >

                      <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center h-44 hover:bg-cyan-50/50 hover:border-cyan-200 border border-slate-200/80 transition shadow-sm">

                        <StepIcon className="w-8 h-8 text-[#00A8CC] mb-3" />

                        <span className="text-xs font-bold text-[#00A8CC] bg-cyan-50 px-2.5 py-1 rounded-full mb-2">
                          Step {item.step}
                        </span>

                        <p className="text-xs font-bold text-slate-700 leading-tight">
                          {item.title}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>
          </section>

          {/* =================================================
              SERVICE BREAKDOWN
          ================================================= */}

          <section className="space-y-8 mb-20">

            {active.serviceGroups.map(
              (group, groupIdx) => (

                <div
                  key={groupIdx}
                  className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-sm"
                >

                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mb-2">
                    SERVICE BREAKDOWN
                  </h3>

                  <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
                    {group.heading}
                  </h2>

                  <div
                    ref={
                      groupIdx === 0
                        ? servicesListRef
                        : null
                    }
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >

                    {group.items.map(
                      (item, idx) => (

                        <div
                          key={idx}
                          data-service-item
                          className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200/60 hover:bg-cyan-50/50 hover:border-cyan-200 transition"
                        >

                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#00C989] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">

                            <Check className="w-3.5 h-3.5" />

                          </span>

                          <span className="text-slate-700 font-semibold text-sm leading-relaxed">
                            {item}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )
            )}

          </section>

          {/* =================================================
              WHY THIS MATTERS
          ================================================= */}

          <section className="mb-20 p-8 lg:p-12 bg-white rounded-3xl border border-slate-200/80 shadow-sm">

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mb-2">
              PERFORMANCE EXCELLENCE
            </h3>

            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why This Matters
            </h2>

            <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
              {active.whyMatters}
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-4">
              MedAorticX Value Proposition
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {(active.valueProps || []).map(
                (prop, idx) => (

                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-200/60"
                  >

                    <span className="w-6 h-6 bg-gradient-to-r from-[#00A8CC] to-[#00C989] text-white rounded-full flex items-center justify-center text-xs shadow-sm flex-shrink-0">

                      <Check className="w-3.5 h-3.5" />

                    </span>

                    <span>
                      {prop}
                    </span>

                  </div>

                )
              )}

            </div>

          </section>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <section
            id="quick-inquiry"
            className="max-w-2xl mx-auto bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-lg"
          >

            <div className="text-center mb-8">

              <span className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] bg-cyan-50 px-3 py-1 rounded-full mb-2 inline-block">
                Quick Inquiry
              </span>

              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                Get in Touch With Our Experts
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                Tell us about your revenue cycle optimization requirements.
              </p>

            </div>

            {/* =================================================
                WHATSAPP FORM
            ================================================= */}

            <form
              onSubmit={handleInquirySubmit}
              className="space-y-4"
            >

              {/* Names */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    First Name *
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    required
                    autoComplete="given-name"
                    placeholder="Enter first name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:bg-white transition"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    required
                    autoComplete="family-name"
                    placeholder="Enter last name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:bg-white transition"
                  />

                </div>

              </div>

              {/* Mobile */}

              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  required
                  autoComplete="tel"
                  placeholder="Enter mobile number"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:bg-white transition"
                />

              </div>

              {/* Email */}

              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  autoComplete="email"
                  placeholder="Enter email address"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:bg-white transition"
                />

              </div>

              {/* Message */}

              <div>

                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message / Requirements *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="4"
                  required
                  placeholder="Tell us about your RCM optimization needs..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:bg-white transition resize-none"
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00A8CC] to-[#00C989] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#00A8CC]/20 hover:opacity-95 transition flex items-center justify-center gap-2"
              >

                Submit Inquiry

                <ArrowRight className="w-4 h-4" />

              </button>

              <p className="text-center text-[11px] text-slate-400 mt-2">
                Your enquiry will open in WhatsApp with the details you provided.
              </p>

            </form>

          </section>

        </main>
      </div>
    </div>
  );
};

export default RcmOptimizationServicesPage;