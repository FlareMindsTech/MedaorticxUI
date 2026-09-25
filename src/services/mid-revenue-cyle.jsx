import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FileText,
  FileCode,
  ShieldCheck,
  SearchCheck,
  ClipboardCheck,
  Home,
  ArrowRight,
  Check,
  BarChart3,
  Target,
  Building2,
  Sparkles,
  TrendingUp,
  Clock,
  Menu,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import chargeEntryImg from '../assets/images/ mid-revenue-cycle/charges&review.jpeg';
import medicalCodingImg from '../assets/images/ mid-revenue-cycle/medical-coding.jpeg';
import revenueIntegrityImg from '../assets/images/ mid-revenue-cycle/revenue.jpeg';
import codingAuditImg from '../assets/images/ mid-revenue-cycle/Audit.jpeg';
import documentationImg from '../assets/images/ mid-revenue-cycle/document.jpeg';

const WHATSAPP_NUMBER = '919791300897'; 

const services = [
  {
    id: 'charge-entry-charge-review',
    icon: FileText,
    sidebarIcon: FileText,
    image: chargeEntryImg,
    navLabel: 'Charge Entry & Review',
    title: 'Charge Entry & Charge Review',
    subheading: 'A missed charge never raises its hand. It just quietly disappears.',
    intro: [
      "A missed charge doesn't announce itself — it's just revenue that never gets billed, never gets questioned, and never comes back.",
      "MedAorticX closes the gap from both directions: precise charge entry at the point of capture, and a structured review layer that catches what entry alone misses."
    ],
    highlight: 'Fewer Errors. Cleaner Claims. Stronger Revenue.',
    ctaLabel: 'Strengthen Charge Accuracy',
    codingBadges: ['CPT Capture', 'Modifier Validation', 'Charge Reconciliation', 'Fee Schedule Review'],
    codingStats: [
      { metric: '99.1%', label: 'Capture Precision', icon: TrendingUp },
      { metric: 'Immediate', label: 'Reconciliation Flow', icon: Clock }
    ],
    serviceGroups: [
      {
        heading: 'Our Charge Entry Services',
        subheading: 'Our charge entry process stays consistent from intake through to billing:',
        items: [
          'Review source documents, charge tickets, superbills, and client-provided information',
          'Capture relevant service and provider information',
          'Enter and validate procedure and diagnosis information',
          'Review units and applicable modifiers',
          'Identify incomplete or missing charge information',
          'Coordinate for clarification when required',
          'Perform quality checks before billing'
        ]
      },
      {
        heading: 'Our Charge Review Services',
        subheading: 'Before charges go out the door, we run a structured review to catch what entry alone might miss:',
        items: [
          'Identify missing or duplicate charges',
          'Review potential undercharges and overcharges',
          'Validate charge information against available documentation',
          'Review units and modifiers',
          'Identify charge-related discrepancies',
          'Support accurate and consistent charge processing'
        ]
      }
    ],
    whyMatters: "Most charge-related revenue loss traces back to a handful of causes — a missed charge, an unbilled unit, a modifier that didn't get applied. Catching these at the review stage, before a claim is submitted, is far less costly than fixing a denial after the fact.",
    valueProps: [
      'Improve charge accuracy',
      'Reduce potential revenue leakage',
      'Support cleaner claims',
      'Improve workflow consistency',
      'Strengthen downstream RCM performance'
    ]
  },
  {
    id: 'medical-coding-services',
    icon: FileCode,
    sidebarIcon: FileCode,
    image:medicalCodingImg,
    navLabel: 'Medical Coding Services',
    title: 'Medical Coding Services',
    subheading: "The code is the claim's entire argument. It has to be right the first time.",
    intro: [
      "Every service your team delivers has to survive translation into a code before it can be reimbursed.",
      'Our coding professionals work specialty by specialty — reading documentation the way a payer will.'
    ],
    highlight: 'Accurate Coding. Consistent Quality. Compliant Reimbursement.',
    ctaLabel: 'Get Coding Support',
    codingBadges: ['ICD-10-CM', 'CPT® 2026', 'HCPCS Level II', 'E/M Leveling', 'HCC Risk Adjustment'],
    codingStats: [
      { metric: '98.5%', label: 'First-Pass Accuracy', icon: TrendingUp },
      { metric: '24-48h', label: 'Average Turnaround', icon: Clock }
    ],
    approach: 'We review clinical documentation, identify applicable diagnoses and procedures, assign appropriate codes, and follow established coding guidelines and client requirements.',
    serviceGroups: [
      {
        heading: 'Our Medical Coding Services',
        subheading: 'Our coding teams work across the full range of clinical and coding scenarios your organization sees:',
        items: [
          'Comprehensive medical coding across specialties',
          'Diagnosis and procedure coding',
          'Professional and facility coding',
          'Inpatient and outpatient coding',
          'E/M coding',
          'Surgical and procedural coding',
          'ICD-10-CM, CPT, and HCPCS coding',
          'Specialty-specific coding',
          'Coding quality review'
        ]
      }
    ],
    whyMatters: "Coding sits at the intersection of clinical documentation and reimbursement — a small inconsistency in code selection can ripple into denied claims, compliance exposure, or under-reimbursement. Specialty-specific expertise and a consistent quality-review step help keep that risk contained.",
    valueProps: [
      'Experienced coding professionals',
      'Accuracy-focused processes',
      'Specialty-specific expertise',
      'Consistent quality review',
      'Support for compliant reimbursement'
    ]
  },
  {
    id: 'revenue-integrity',
    icon: ShieldCheck,
    sidebarIcon: ShieldCheck,
    image: revenueIntegrityImg,
    navLabel: 'Revenue Integrity',
    title: 'Revenue Integrity',
    subheading: "Revenue rarely fails in one big collapse. It leaks in a hundred small gaps.",
    intro: [
      'A charge that never reached coding. A code that drifted from the documentation.',
      'MedAorticX Revenue Integrity exists to walk that entire chain and find exactly where it breaks.'
    ],
    highlight: 'Identify Gaps. Protect Revenue. Strengthen Accuracy.',
    ctaLabel: 'Protect Your Revenue',
    codingBadges: ['Leakage Analysis', 'Charge Capture Audit', 'Compliance Shield', 'Workflow Optimization'],
    codingStats: [
      { metric: '100%', label: 'Chain Visibility', icon: TrendingUp },
      { metric: 'Zero', label: 'Unnoticed Drift', icon: Clock }
    ],
    serviceGroups: [
      {
        heading: 'Our Revenue Integrity Support',
        subheading: 'We look for revenue leakage across the points where clinical activity, coding, and billing intersect:',
        items: [
          'Charge capture review',
          'Coding-to-charge validation',
          'Identification of potential missed charges',
          'Review of billing and coding discrepancies',
          'Identification of revenue leakage opportunities',
          'Payment and reimbursement analysis',
          'Process and workflow review',
          'Revenue-impacting error identification'
        ]
      }
    ],
    whyMatters: "Revenue leakage is rarely one big failure — it's usually a series of small gaps between departments: a charge that didn't make it to coding, a code that didn't match documentation, a payment that didn't reconcile. Revenue integrity reviews exist to find and close those gaps before they compound.",
    valueProps: [
      'Identify potential revenue leakage',
      'Improve revenue capture',
      'Strengthen charge accuracy',
      'Identify process gaps',
      'Support sustainable RCM improvement'
    ]
  },
  {
    id: 'medical-coding-audit',
    icon: SearchCheck,
    sidebarIcon: SearchCheck,
    image: codingAuditImg,
    navLabel: 'Medical Coding Audit',
    title: 'Medical Coding Audit',
    subheading: "One finding is a fix. A pattern of findings is where an audit earns its keep.",
    intro: [
      "Coding errors are rarely random — they cluster around a specialty or provider.",
      'Our audits examine documentation-to-code alignment from multiple angles.'
    ],
    highlight: 'Structured Reviews. Fewer Errors. Stronger Compliance.',
    ctaLabel: 'Request a Coding Audit',
    codingBadges: ['Pattern Recognition', 'Provider Feedback', 'Overcoding Defense', 'Trend Analysis'],
    codingStats: [
      { metric: 'Full', label: 'Specialty Review', icon: TrendingUp },
      { metric: 'Rapid', label: 'Correction Cycle', icon: Clock }
    ],
    serviceGroups: [
      {
        heading: 'Our Coding Audit Services',
        subheading: 'Our audits examine coding accuracy from multiple angles:',
        items: [
          'Diagnosis and procedure validation',
          'Documentation-to-code validation',
          'Coding error identification',
          'Overcoding and undercoding review',
          'Specialty-specific coding audits',
          'Error trend analysis'
        ]
      }
    ],
    whyMatters: "A single audit finding is useful; a pattern of findings is where the real value is. Tracking error trends across audits helps identify whether an issue is a one-off or a process gap worth correcting at the source.",
    valueProps: [
      'Improve coding accuracy',
      'Identify recurring coding errors',
      'Support compliance',
      'Identify potential revenue opportunities',
      'Provide actionable audit findings'
    ]
  },
  {
    id: 'clinical-documentation-improvement',
    icon: ClipboardCheck,
    sidebarIcon: ClipboardCheck,
    image: documentationImg,
    navLabel: 'Clinical Documentation',
    title: 'Clinical Documentation Improvement',
    subheading: "Coding can only be as accurate as the documentation it's built on.",
    intro: [
      'When documentation is incomplete or unclear, coders are left guessing.',
      "MedAorticX works through documentation the way a coder would: finding what's missing."
    ],
    highlight: 'Stronger Documentation. Accurate Coding. Better Reimbursement.',
    ctaLabel: 'Strengthen Documentation',
    codingBadges: ['Clarity Review', 'Query Management', 'Specificity Boost', 'Payer Alignment'],
    codingStats: [
      { metric: 'High', label: 'Clarity Index', icon: TrendingUp },
      { metric: 'Complete', label: 'Record Mapping', icon: Clock }
    ],
    serviceGroups: [
      {
        heading: 'Our Documentation Improvement Support',
        subheading: 'We work through documentation the same way a coder or auditor would, to find where it needs strengthening:',
        items: [
          'Documentation quality review',
          'Documentation-to-code analysis',
          'Identification of missing or unclear information',
          'Coding-related documentation gap identification',
          'Support for improved documentation practices',
          'Identification of documentation issues affecting reimbursement',
          'Collaboration with appropriate client teams'
        ]
      }
    ],
    whyMatters: "Coding can only be as accurate as the documentation behind it. When documentation is incomplete or unclear, coders are left to make judgment calls that can go either way — closing that gap upstream reduces both compliance risk and claim rework downstream.",
    valueProps: [
      'Improve documentation quality',
      'Support accurate coding',
      'Reduce documentation-related claim issues',
      'Strengthen compliance',
      'Support appropriate reimbursement'
    ]
  }
];

const PulseParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;

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

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

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

export const MidRevenueCycleServicesPage = ({ onNavigateHome }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    message: ''
  });

  const active = services[activeIndex];

  const mainRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroContentRef = useRef(null);
  const processStepsRef = useRef(null);
  const servicesListRef = useRef(null);
  const statsRef = useRef(null);
  const outcomeCardRef = useRef(null);
  const outcomeGlowRef = useRef(null);
  const outcomeRingRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeIndex]);

  const goTo = (idx) => {
    setActiveIndex(idx);
    setMobileMenuOpen(false);
  };

  const scrollToInquiry = () => {
    const formSection = document.querySelector('#quick-inquiry');

    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

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
    const message = formData.message.trim();

    if (!firstName || !lastName || !mobile || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    const whatsappMessage = `Hello MedAorticX,

I would like to make an enquiry.

Service: ${active.title}

First Name: ${firstName}
Last Name: ${lastName}
Mobile Number: ${mobile}

Message:
${message}

Thank you.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      tl.fromTo(
        heroContentRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8 }
      );

      tl.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=0.6'
      );
    }, mainRef.current);

    return () => ctx.revert();
  }, [activeIndex]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (processStepsRef.current) {
        const steps =
          processStepsRef.current.querySelectorAll('[data-step]');

        gsap.fromTo(
          steps,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            scrollTrigger: {
              trigger: processStepsRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      if (servicesListRef.current) {
        const items =
          servicesListRef.current.querySelectorAll('[data-service-item]');

        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.08,
            duration: 0.5,
            scrollTrigger: {
              trigger: servicesListRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      if (statsRef.current) {
        const statCards =
          statsRef.current.querySelectorAll('[data-stat]');

        gsap.fromTo(
          statCards,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%'
            }
          }
        );
      }

      if (outcomeGlowRef.current && outcomeCardRef.current) {
        gsap.set(outcomeGlowRef.current, {
          x: -40,
          y: -40,
          opacity: 0.55
        });

        gsap.to(outcomeGlowRef.current, {
          x: 260,
          y: 520,
          ease: 'none',
          scrollTrigger: {
            trigger: outcomeCardRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6
          }
        });

        gsap.to(outcomeGlowRef.current, {
          opacity: 0.85,
          scale: 1.25,
          duration: 1.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: outcomeCardRef.current,
            start: 'top 85%',
            toggleActions: 'play pause resume pause'
          }
        });
      }

      if (outcomeRingRef.current) {
        gsap.to(outcomeRingRef.current, {
          scale: 2.2,
          opacity: 0,
          duration: 1.6,
          ease: 'power1.out',
          repeat: -1,
          scrollTrigger: {
            trigger: outcomeCardRef.current,
            start: 'top 85%',
            toggleActions: 'play pause resume pause'
          }
        });
      }

      ScrollTrigger.refresh();
    }, mainRef.current);

    return () => ctx.revert();
  }, [activeIndex]);

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
        }

        header,
        nav.global-navbar {
          display: none !important;
        }
      `}</style>

      <div className="flex">

        {/* Left Sidebar Navigation - Desktop Only */}
        <div className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col py-8 px-4 sticky top-0 h-screen shadow-xs">

          <div className="mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00A8CC] to-[#00C989] text-white flex items-center justify-center text-xl font-bold mx-auto mb-2 shadow-md shadow-[#00A8CC]/20">
              <Building2 className="w-6 h-6 text-white" />
            </div>

            <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
              MEDAORTICX
            </p>
          </div>

          <nav className="flex-1 space-y-2">
            {services.map((svc, idx) => {
              const IconComponent = svc.sidebarIcon;

              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`w-full flex flex-col items-center justify-center py-4 px-2 rounded-xl transition-all ${
                    idx === activeIndex
                      ? 'bg-cyan-50 text-[#00A8CC] font-semibold border border-cyan-100 shadow-2xs'
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

          <div className="mt-8 p-4 bg-slate-900 rounded-xl text-center text-white">
            <p className="text-xs font-semibold text-[#00A8CC] mb-2">
              Need Support?
            </p>

            <button
              type="button"
              onClick={scrollToInquiry}
              className="w-full bg-gradient-to-r from-[#00A8CC] to-[#00C989] hover:opacity-90 text-white py-2 px-3 rounded-lg text-xs font-semibold transition shadow-sm flex items-center justify-center gap-1"
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
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
            {services.map((svc, idx) => {
              const IconComponent = svc.sidebarIcon;

              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all text-left ${
                    idx === activeIndex
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
                scrollToInquiry();
              }}
              className="w-full bg-gradient-to-r from-[#00A8CC] to-[#00C989] hover:opacity-90 text-white py-2 px-3 rounded-lg text-xs font-semibold transition shadow-sm flex items-center justify-center gap-1"
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
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

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-3 mb-8 text-sm flex-wrap">

            <button
              type="button"
              onClick={() => {
                if (typeof onNavigateHome === 'function') {
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

            <span className="text-slate-300">/</span>

            <span className="text-slate-500">
              Services
            </span>

            <span className="text-slate-300">/</span>

            <span className="text-slate-500">
              Revenue Cycle Management
            </span>

            <span className="text-slate-300">/</span>

            <span className="text-slate-700 font-semibold">
              {active.navLabel}
            </span>
          </div>

          {/* Hero Section */}
          <section className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-xs">

            <PulseParticleCanvas />

            <div
              ref={heroContentRef}
              className="lg:col-span-7 relative z-10"
            >
              <div className="inline-flex items-center gap-2 bg-cyan-50 text-[#00A8CC] px-4 py-2 rounded-full mb-6 border border-cyan-100">
                <Sparkles className="w-3.5 h-3.5 text-[#00A8CC]" />

                <span className="text-xs font-semibold">
                  {active.navLabel}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                {active.title.split(' ').map((word, i, arr) => {
                  const isLastTwo = i >= arr.length - 2;

                  return (
                    <span
                      key={i}
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

              <p className="text-slate-600 mb-3 leading-relaxed">
                {active.intro[0]}
              </p>

              <p className="text-slate-600 mb-8 leading-relaxed">
                {active.intro[1]}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  type="button"
                  onClick={scrollToInquiry}
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

            <div className="lg:col-span-5 relative z-10 flex flex-col gap-4">

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                <img
                  ref={heroImageRef}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#00A8CC]/80 backdrop-blur-md rounded-md mb-1 inline-block">
                    Verified Module
                  </span>

                  <p className="text-sm font-semibold truncate">
                    Specialized Clinical Workflow Execution
                  </p>
                </div>
              </div>

              <div
                ref={statsRef}
                className="grid grid-cols-2 gap-3"
              >
                {(active.codingStats || [
                  {
                    metric: '98.5%',
                    label: 'First Pass Accuracy',
                    icon: TrendingUp
                  },
                  {
                    metric: '24-48h',
                    label: 'Turnaround Time',
                    icon: Clock
                  }
                ]).map((stat, idx) => {
                  const StatIcon = stat.icon || BarChart3;

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
                          Optimal
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
                })}
              </div>
            </div>
          </section>

          {/* Process / Approach Section */}
          {active.approach && (
            <section
              ref={processStepsRef}
              className="mb-20 wave-divider bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-xs"
            >
              <div className="mb-12">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mb-2">
                  OUR APPROACH
                </h3>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Precision in Every Code
                </h2>

                <p className="text-slate-600 max-w-2xl leading-relaxed">
                  {active.approach}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: '1',
                    title: 'Review Documentation',
                    icon: FileText
                  },
                  {
                    step: '2',
                    title: 'Identify Codes',
                    icon: SearchCheck
                  },
                  {
                    step: '3',
                    title: 'Assign & Verify',
                    icon: Check
                  },
                  {
                    step: '4',
                    title: 'Quality Check',
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
                      <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center h-44 hover:bg-cyan-50/50 hover:border-cyan-200 border border-slate-200/80 transition shadow-2xs">

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
            </section>
          )}

          {/* Services & Outcome Card Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

            <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-xs">

              <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mb-2">
                OUR SERVICES
              </h3>

              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Our teams work across the full range of clinical scenarios
              </h2>

              <div
                ref={servicesListRef}
                className="space-y-10"
              >
                {active.serviceGroups.map((group, gIdx) => (
                  <div key={gIdx}>

                    {active.serviceGroups.length > 1 && (
                      <h4 className="text-sm font-extrabold text-slate-900 mb-1">
                        {group.heading}
                      </h4>
                    )}

                    {group.subheading && (
                      <p className="text-xs text-slate-500 italic mb-4">
                        {group.subheading}
                      </p>
                    )}

                    <div className="space-y-3">
                      {group.items.map((item, idx) => (
                        <div
                          key={idx}
                          data-service-item
                          className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200/60 hover:bg-cyan-50/50 hover:border-cyan-200 transition"
                        >
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#00C989] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </span>

                          <span className="text-slate-700 font-semibold text-sm">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome Card */}
            <div
              ref={outcomeCardRef}
              className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex flex-col p-8 text-white border border-slate-800 transition-all duration-500 hover:shadow-cyan-900/30 group"
            >

              <canvas
                ref={(el) => {
                  if (!el) return;

                  const ctx = el.getContext('2d');
                  let animId;
                  let scrollProgress = 0;

                  const resize = () => {
                    el.width = el.parentElement.offsetWidth;
                    el.height = el.parentElement.offsetHeight;
                  };

                  resize();

                  window.addEventListener('resize', resize);

                  const handleScroll = () => {
                    const rect = el.getBoundingClientRect();
                    const winHeight = window.innerHeight;

                    scrollProgress = Math.max(
                      0,
                      Math.min(
                        1,
                        (winHeight - rect.top) /
                          (winHeight + rect.height)
                      )
                    );
                  };

                  window.addEventListener(
                    'scroll',
                    handleScroll,
                    { passive: true }
                  );

                  let angle = 0;

                  const renderDNA = () => {
                    ctx.clearRect(
                      0,
                      0,
                      el.width,
                      el.height
                    );

                    angle += 0.02;

                    const totalNodes = 14;
                    const spacing =
                      el.height / (totalNodes + 1);

                    for (let i = 0; i < totalNodes; i++) {
                      const currentAngle =
                        angle +
                        i * 0.4 +
                        scrollProgress * Math.PI * 4;

                      const centerX = el.width / 2;

                      const x1 =
                        centerX +
                        Math.sin(currentAngle) * 55;

                      const x2 =
                        centerX -
                        Math.sin(currentAngle) * 55;

                      const y = spacing * (i + 1);

                      ctx.beginPath();
                      ctx.moveTo(x1, y);
                      ctx.lineTo(x2, y);
                      ctx.strokeStyle =
                        'rgba(0, 168, 204, 0.18)';
                      ctx.lineWidth = 1.5;
                      ctx.stroke();

                      ctx.beginPath();
                      ctx.arc(
                        x1,
                        y,
                        Math.sin(currentAngle) > 0
                          ? 4
                          : 2.5,
                        0,
                        Math.PI * 2
                      );
                      ctx.fillStyle = '#00A8CC';
                      ctx.fill();

                      ctx.beginPath();
                      ctx.arc(
                        x2,
                        y,
                        Math.sin(currentAngle) <= 0
                          ? 4
                          : 2.5,
                        0,
                        Math.PI * 2
                      );
                      ctx.fillStyle = '#00C989';
                      ctx.fill();
                    }

                    animId =
                      requestAnimationFrame(renderDNA);
                  };

                  renderDNA();

                  return () => {
                    cancelAnimationFrame(animId);
                    window.removeEventListener(
                      'resize',
                      resize
                    );
                    window.removeEventListener(
                      'scroll',
                      handleScroll
                    );
                  };
                }}
                className="absolute inset-0 pointer-events-none z-0 opacity-40"
              />

              <div
                ref={outcomeGlowRef}
                className="absolute -top-12 -right-12 w-48 h-48 bg-[#00A8CC]/20 rounded-full blur-3xl pointer-events-none z-0"
              ></div>

              <div className="relative z-10 flex items-center gap-3 mb-8">

                <div className="relative w-11 h-11 rounded-xl bg-[#00A8CC]/20 border border-[#00A8CC]/30 flex items-center justify-center flex-shrink-0">

                  <span
                    ref={outcomeRingRef}
                    className="absolute inset-0 rounded-xl border-2 border-[#00A8CC] opacity-0"
                  ></span>

                  <Target className="w-5 h-5 text-[#00A8CC]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#00A8CC]">
                    OUTCOME
                  </p>

                  <h3 className="text-lg font-extrabold text-white">
                    Optimal Results
                  </h3>
                </div>
              </div>

              <div className="relative z-10 mt-auto">

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-6">
                  {active.highlight ||
                    'Fewer Errors. Cleaner Claims. Stronger Revenue.'}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {(active.valueProps || [
                    'Improve accuracy and consistency',
                    'Reduce potential errors and leakage',
                    'Support cleaner claims and workflow'
                  ]).map((prop, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-300 font-medium"
                    >
                      <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-[#00A8CC] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>

                      <span>{prop}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Quick Inquiry Section */}
          <section
            id="quick-inquiry"
            className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-lg mt-20 mb-20"
          >

            <div className="text-center mb-8">

              <span className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] bg-cyan-50 px-3 py-1 rounded-full mb-2 inline-block">
                Quick Inquiry
              </span>

              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                Get in Touch With Our Experts
              </h2>
            </div>

            <form
              onSubmit={handleInquirySubmit}
              className="space-y-4"
              style={{ display: 'block' }}
            >

              {/* First + Last Name */}
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

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="3"
                  required
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00A8CC] focus:bg-white transition resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-2 text-center">

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00A8CC] to-[#00C989] hover:opacity-95 text-white font-bold py-3 rounded-xl transition shadow-md shadow-[#00A8CC]/20 text-sm flex items-center justify-center gap-2"
                >
                  Submit Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MidRevenueCycleServicesPage;