import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CreditCard,
  Inbox,
  Ban,
  Wallet,
  UploadCloud,
  Banknote,
  Home,
  ArrowRight,
  Check,
  Building2,
  Sparkles,
  TrendingUp,
  Clock,
  BarChart3,
  FileText,
  SearchCheck,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';



gsap.registerPlugin(ScrollTrigger);

import paymentPostingImg from '../assets/images/backend-revenue/payment1.jpeg';
import arManagementImg from '../assets/images/backend-revenue/payment.jpeg';
import underpaymentImg from '../assets/images/backend-revenue/underpayment.jpeg';
import denialManagementImg from '../assets/images/backend-revenue/dental.jpeg';
import creditBalanceImg from '../assets/images/backend-revenue/credit.jpeg';
import medicalBillingImg from '../assets/images/backend-revenue/medical.jpeg';

const WHATSAPP_NUMBER = '919791300897';

const backendServices = [
  {
    id: 'remittance-processing-payment-posting',
    icon: CreditCard,
    sidebarIcon: CreditCard,
    image:
      paymentPostingImg,
    navLabel: 'Payment Posting',
    title: 'Remittance Processing & Payment Posting',
    subheading: 'Accurate Posting. Clear Financial Visibility.',
    category: 'Back-End Revenue Cycle Service',

    intro: [
      'Accurate payment posting is essential for maintaining clean patient accounts and reliable financial reporting.',
      'MedAorticX supports the processing and posting of insurance and patient payments, remittances, adjustments, and related transactions.'
    ],

    highlight:
      'Accurate Posting. Reliable Reconciliation. Clear Visibility.',
    ctaLabel: 'Streamline Payment Posting',

    codingBadges: [
      'ERA Processing',
      'EOB Management',
      'Adjustment Tracking',
      'Reconciliation'
    ],

    codingStats: [
      {
        metric: '100%',
        label: 'Posting Accuracy',
        icon: TrendingUp
      },
      {
        metric: 'Same-Day',
        label: 'Posting Turnaround',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Payment Posting Services',
        items: [
          'ERA processing',
          'EOB processing',
          'Insurance payment posting',
          'Patient payment posting',
          'Adjustment posting',
          'Denial and remark code review',
          'Payment reconciliation',
          'Unapplied payment identification',
          'Account balance validation',
          'CARC and RARC code review',
          'Contractual adjustment review',
          'Secondary and tertiary payment review',
          'Batch balancing and deposit reconciliation',
          'Posting variance investigation'
        ]
      }
    ],

    whyMatters:
      'Posting errors are easy to miss in the moment but compound quickly — an unapplied payment or an unresolved adjustment can distort account balances and slow down everything downstream, from patient statements to A/R follow-up.',

    valueProps: [
      'Improve posting accuracy',
      'Maintain accurate account balances',
      'Support timely A/R follow-up',
      'Improve reconciliation',
      'Strengthen financial visibility'
    ]
  },

  {
    id: 'accounts-receivable-management',
    icon: Inbox,
    sidebarIcon: Inbox,
    image:arManagementImg,
    navLabel: 'A/R Management',
    title: 'Accounts Receivable Management',
    subheading: 'Reduce A/R Aging. Improve Revenue Recovery.',
    category: 'Back-End Revenue Cycle Service',

    intro: [
      "Unresolved and aging receivables can significantly affect healthcare organizations' cash flow.",
      'At MedAorticX, our A/R management services focus on systematic account review, prioritization, payer follow-up, and resolution.'
    ],

    highlight: 'Faster Follow-Up. Lower Aging. Stronger Cash Flow.',
    ctaLabel: 'Reduce A/R Aging',

    codingBadges: [
      'A/R Aging Analysis',
      'Payer Follow-Up',
      'Underpayment Recovery',
      'Escalation Flow'
    ],

    codingStats: [
      {
        metric: 'Optimized',
        label: 'Collection Cycle',
        icon: TrendingUp
      },
      {
        metric: 'Systematic',
        label: 'Account Review',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our A/R Services',
        items: [
          'A/R aging analysis',
          'Insurance follow-up',
          'Outstanding claim follow-up',
          'Account prioritization',
          'Payer communication',
          'Underpayment identification',
          'Unresolved account review',
          'A/R status tracking',
          'Escalation of complex accounts',
          'Resolution follow-up',
          'A/R aging bucket management',
          'High-dollar account prioritization',
          'Patient and self-pay A/R review',
          'No-response payer follow-up',
          'Timely filing follow-up',
          'Payer escalation',
          'A/R inventory cleanup',
          'Collection trend tracking'
        ]
      }
    ],

    whyMatters:
      'Aging A/R rarely improves on its own — accounts that go unworked tend to become harder to collect the longer they sit. A structured, prioritized follow-up process is what keeps aging under control instead of accumulating.',

    valueProps: [
      'Reduce aging A/R',
      'Improve collection efficiency',
      'Prioritize high-value accounts',
      'Identify unresolved issues',
      'Support improved cash flow'
    ]
  },

  {
    id: 'underpayment-management',
    icon: Banknote,
    sidebarIcon: Banknote,
    image:underpaymentImg,
    navLabel: 'Underpayment',
    title: 'Underpayment Management',
    subheading: 'Identify Payment Gaps. Recover Earned Revenue.',
    category: 'Back-End Revenue Cycle Service',

    intro: [
      'Underpayments can leave earned revenue uncollected even when a claim has been processed and paid.',
      'MedAorticX supports payment variance review, expected-versus-actual reimbursement analysis, payer follow-up, and recovery of identified underpayments.'
    ],

    highlight:
      'Find Payment Gaps. Recover Revenue. Strengthen Reimbursement.',
    ctaLabel: 'Recover Underpayments',

    codingBadges: [
      'Payment Variance Review',
      'Expected vs. Actual',
      'Payer Follow-Up',
      'Recovery Tracking'
    ],

    codingStats: [
      {
        metric: 'Systematic',
        label: 'Payment Review',
        icon: TrendingUp
      },
      {
        metric: 'Tracked',
        label: 'Recovery Workflow',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Underpayment Management Services',
        items: [
          'Underpayment identification',
          'Expected reimbursement review',
          'Actual payment comparison',
          'Contractual allowance review',
          'Payment variance analysis',
          'Payer underpayment follow-up',
          'Underpayment recovery tracking',
          'Recurring underpayment identification',
          'Payer escalation support',
          'Resolution documentation'
        ]
      }
    ],

    whyMatters:
      'A claim can be paid and still leave revenue behind. Comparing expected reimbursement with actual payer payment helps identify payment gaps that may otherwise remain hidden in completed accounts.',

    valueProps: [
      'Identify missed reimbursement',
      'Improve payment accuracy',
      'Support underpayment recovery',
      'Track payer payment variances',
      'Strengthen revenue recovery'
    ]
  },

  {
    id: 'denial-management',
    icon: Ban,
    sidebarIcon: Ban,
    image:denialManagementImg,
    navLabel: 'Denial Management',
    title: 'Denial Management',
    subheading:
      'Turn Denials Into Actionable Revenue Opportunities.',
    category: 'Back-End Revenue Cycle Service',

    intro: [
      'Claim denials can create significant delays in reimbursement and contribute to revenue loss.',
      'MedAorticX provides structured denial management focused on identifying denial causes, resolving outstanding claims, supporting appeals, and reducing recurring denial patterns.'
    ],

    highlight: 'Fewer Denials. Faster Resolution. Protected Revenue.',
    ctaLabel: 'Resolve Denials Faster',

    codingBadges: [
      'Root-Cause Analysis',
      'Appeal Support',
      'Preventive Coding',
      'Trend Tracking'
    ],

    codingStats: [
      {
        metric: 'High',
        label: 'Appeal Recovery Rate',
        icon: TrendingUp
      },
      {
        metric: 'Proactive',
        label: 'Trend Reduction',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Denial Management Services',
        items: [
          'Denial identification and categorization',
          'Root-cause analysis',
          'Claim review',
          'Payer follow-up',
          'Denial correction',
          'Appeal preparation and support',
          'Documentation review',
          'Denial trend analysis',
          'Recurring denial identification',
          'Corrective action recommendations',
          'Eligibility-related denial review',
          'Authorization-related denial review',
          'Timely filing denial review',
          'Medical necessity denial review',
          'Duplicate and bundling denial review',
          'CARC and RARC analysis',
          'Appeal status tracking',
          'Denial prevention reporting'
        ]
      }
    ],

    whyMatters:
      'A denial that gets resolved but never analyzed is likely to happen again. Looking at denials in aggregate — by payer, reason, and service line — is what turns a reactive resolution process into a preventive one.',

    valueProps: [
      'Reduce avoidable denials',
      'Improve denial resolution',
      'Identify recurring issues',
      'Support appeals and recovery',
      'Strengthen preventive RCM processes'
    ]
  },

  {
    id: 'credit-balance-management',
    icon: Wallet,
    sidebarIcon: Wallet,
    image:creditBalanceImg,
    navLabel: 'Credit Balance',
    title: 'Credit Balance Management',
    subheading: 'Accurate Account Review. Responsible Resolution.',
    category: 'Back-End Revenue Cycle Service',

    intro: [
      'Credit balances require timely review and appropriate resolution to maintain accurate patient and payer accounts.',
      'At MedAorticX, we help identify, validate, research, and resolve credit balance accounts based on client requirements and applicable processes.'
    ],

    highlight:
      'Accurate Review. Timely Resolution. Compliant Accounts.',
    ctaLabel: 'Resolve Credit Balances',

    codingBadges: [
      'Duplicate Review',
      'Refund Processing',
      'Payer Balancing',
      'Compliance Ready'
    ],

    codingStats: [
      {
        metric: 'Compliant',
        label: 'Account Resolution',
        icon: TrendingUp
      },
      {
        metric: 'Accurate',
        label: 'Reconciliation',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Credit Balance Services',
        items: [
          'Credit balance identification',
          'Account validation',
          'Payment and adjustment review',
          'Duplicate payment review',
          'Payer credit balance review',
          'Patient credit balance review',
          'Account reconciliation',
          'Resolution tracking',
          'Refund support where applicable',
          'Credit balance aging review',
          'Duplicate payment investigation',
          'Refund validation and documentation',
          'Recoupment tracking',
          'Resolution approval workflow support',
          'Root-cause identification'
        ]
      }
    ],

    whyMatters:
      "Unresolved credit balances aren't just a compliance risk — they're also a sign of upstream issues like duplicate payments or posting errors. Resolving them properly, and tracking why they occurred, helps prevent the same balances from reappearing.",

    valueProps: [
      'Improve account accuracy',
      'Support timely resolution',
      'Reduce unresolved credit balances',
      'Strengthen account reconciliation',
      'Support compliant financial processes'
    ]
  },

  {
    id: 'medical-billing-claims-management',
    icon: UploadCloud,
    sidebarIcon: UploadCloud,
    image:medicalBillingImg,
    navLabel: 'Billing & Claims',
    title: 'Medical Billing & Claims Management',
    subheading: 'From Billing Preparation to Claim Resolution.',
    category: 'Back-End Revenue Cycle Service',

    intro: [
      'Accurate billing and effective claims management are critical to maintaining a healthy revenue cycle.',
      'At MedAorticX, we support billing and claims workflows from claim preparation and submission through tracking, rejection handling, payer follow-up, and resolution.'
    ],

    highlight:
      'Clean Claims. Timely Submission. Faster Resolution.',
    ctaLabel: 'Optimize Claims Management',

    codingBadges: [
      'Clean-Claim Validation',
      'Electronic Submission',
      'Rejection Handling',
      'Status Tracking'
    ],

    codingStats: [
      {
        metric: '98%',
        label: 'First-Pass Clean Claims',
        icon: TrendingUp
      },
      {
        metric: 'Rapid',
        label: 'Submission Turnaround',
        icon: Clock
      }
    ],

    serviceGroups: [
      {
        heading: 'Our Medical Billing Services',
        items: [
          'Claim preparation',
          'Billing validation',
          'Charge and coding review',
          'Clean-claim support',
          'Electronic claim submission',
          'Claim status monitoring',
          'Rejected claim review',
          'Billing error identification',
          'Payer follow-up',
          'Demographic and insurance validation',
          'Claim scrubbing support',
          'Clearinghouse rejection review',
          'Claim correction and resubmission',
          'Timely filing monitoring',
          'Secondary claim support'
        ]
      },

      {
        heading: 'Our Claims Management Services',
        items: [
          'Claim submission monitoring',
          'Claim status follow-up',
          'Rejection resolution',
          'Payer communication',
          'Outstanding claim tracking',
          'Claim issue identification',
          'Resolution follow-up',
          'Payer portal follow-up',
          'No-response claim escalation',
          'Claim aging review',
          'Documentation request follow-up',
          'Timely filing status tracking'
        ]
      }
    ],

    whyMatters:
      'A clean claim on first submission is the cheapest claim to process — every rejection or resubmission adds cost and delays cash flow. Keeping billing and claims follow-up tightly connected is what keeps that first-pass rate high.',

    valueProps: [
      'Improve claim accuracy',
      'Support timely claim submission',
      'Reduce avoidable rejections',
      'Improve claim follow-up',
      'Support faster resolution'
    ]
  }
];

const PulseParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

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

export const BackEndRevenueCycleServicesPage = ({
  onNavigateHome
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    message: ''
  });

  const active = backendServices[activeIndex];

  const mainRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroContentRef = useRef(null);
  const processStepsRef = useRef(null);
  const servicesListRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [activeIndex]);

  const goTo = (idx) => {
    setActiveIndex(idx);
    setMobileMenuOpen(false);
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

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      });

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
    }, mainRef.current);

    return () => ctx.revert();
  }, [activeIndex]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });

      if (processStepsRef.current) {
        const steps =
          processStepsRef.current.querySelectorAll('[data-step]');

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
            scrollTrigger: {
              trigger: processStepsRef.current,
              start: 'top 80%'
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
          {
            opacity: 0,
            scale: 0.8
          },
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

        {/* LEFT SIDEBAR - Desktop Only */}

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

            {backendServices.map((svc, idx) => {
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
              onClick={() => {
                document
                  .getElementById('quick-inquiry')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
              }}
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
            {backendServices.map((svc, idx) => {
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
                document
                  .getElementById('quick-inquiry')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
              }}
              className="w-full bg-gradient-to-r from-[#00A8CC] to-[#00C989] hover:opacity-90 text-white py-2 px-3 rounded-lg text-xs font-semibold transition shadow-sm flex items-center justify-center gap-1"
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}

        <main className="flex-1 px-6 lg:px-12 py-8 lg:py-12 max-w-7xl mx-auto">

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 p-2"
          >
            <Menu className="w-6 h-6" />
            <span className="text-sm font-semibold">Menu</span>
          </button>

          {/* BREADCRUMB */}

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

            <span className="text-slate-500 font-medium">
              Back-End Revenue Cycle Management
            </span>

            <span className="text-slate-300">/</span>

            <span className="text-slate-700 font-semibold">
              {active.navLabel}
            </span>

          </div>

          {/* HERO */}

          <section className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-xs">

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

                {active.title.split(' ').map((word, i, arr) => {

                  const isLastTwo =
                    i >= arr.length - 2;

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

              <p className="text-slate-600 mb-8 leading-relaxed">
                {active.intro[0]}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">

                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById('quick-inquiry')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                      });
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

            {/* HERO IMAGE */}

            <div className="lg:col-span-5 relative z-10 flex flex-col gap-4">

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">

                <img
                  ref={heroImageRef}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#00A8CC]/80 backdrop-blur-md rounded-md mb-1 inline-block">
                    Back-End RCM Module
                  </span>

                  <p className="text-sm font-semibold truncate">
                    Specialized Healthcare Workflow Execution
                  </p>

                </div>

              </div>

              {/* STATS */}

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

          {/* PROCESS */}

          <section
            ref={processStepsRef}
            className="mb-20 wave-divider bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-xs"
          >

            <div className="mb-12">

              <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mb-2">
                OUR APPROACH
              </h3>

              <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Systematic Revenue Execution
              </h2>

              <p className="text-slate-600 max-w-2xl leading-relaxed">
                {active.intro[1] ||
                  'We follow structured protocols and industry best practices to ensure seamless execution across every step of your revenue cycle.'}
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                {
                  step: '1',
                  title: 'Intake & Review',
                  icon: FileText
                },
                {
                  step: '2',
                  title: 'Process & Validate',
                  icon: SearchCheck
                },
                {
                  step: '3',
                  title: 'Execution & Quality',
                  icon: Check
                },
                {
                  step: '4',
                  title: 'Resolution & Reporting',
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

          {/* SERVICES */}

          <section className="space-y-8 mb-20">

            {active.serviceGroups.map(
              (group, groupIdx) => (
                <div
                  key={groupIdx}
                  className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-xs"
                >

                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mb-2">
                    SERVICE BREAKDOWN
                  </h3>

                  <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
                    {group.heading}
                  </h2>

                  <div
                    ref={groupIdx === 0 ? servicesListRef : null}
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

                          <span className="text-slate-700 font-semibold text-sm">
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

          {/* WHY THIS MATTERS */}

          <section className="mb-20 p-8 lg:p-12 bg-white rounded-3xl border border-slate-200/80 shadow-xs">

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

                    <span className="w-6 h-6 bg-gradient-to-r from-[#00A8CC] to-[#00C989] text-white rounded-full flex items-center justify-center text-xs shadow-2xs flex-shrink-0">

                      <Check className="w-3.5 h-3.5" />

                    </span>

                    {prop}

                  </div>
                )
              )}

            </div>

          </section>

          {/* CONTACT */}

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

            </div>

            <form
              onSubmit={handleInquirySubmit}
              className="space-y-4"
            >

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
                />

              </div>

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

export default BackEndRevenueCycleServicesPage;