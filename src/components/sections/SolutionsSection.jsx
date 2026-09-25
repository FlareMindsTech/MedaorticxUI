import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../common/Reveal';
import {
  ClipboardList,
  WalletCards,
  ChartNoAxesCombined
} from 'lucide-react';

export const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  const clientSolutions = [
    {
      id: 'mid-revenue-cycle',
      path: '/services/revenue-cycle-management-services',
      title: 'Mid-Revenue Cycle Services',
      icon: ClipboardList,
      tagline:
        'Accurate charge capture, coding, and documentation that protect revenue before claims go out.',
      stats: '5 Services',
      benefits: [
        'Charge Entry & Charge Review',
        'Medical Coding Services',
        'Revenue Integrity',
        'Medical Coding Audit',
        'Clinical Documentation Improvement'
      ]
    },
    {
      id: 'back-end-revenue-cycle',
      path: '/services/back-end-revenue-cycle-services',
      title: 'Back-End Revenue Cycle Services',
      icon: WalletCards,
      tagline:
        'Posting, A/R follow-up, denial resolution, and claims management through final resolution.',
      stats: '5 Services',
      benefits: [
        'Remittance Processing & Payment Posting',
        'Accounts Receivable Management',
        'Denial Management',
        'Credit Balance Management',
        'Medical Billing & Claims Management'
      ]
    },
    {
      id: 'rcm-optimization',
      path: '/services/rcm-optimization-support',
      title: 'RCM Optimization & Support',
      icon: ChartNoAxesCombined,
      tagline:
        'Flexible support, quality reviews, analytics, and process improvement across your RCM operations.',
      stats: '4 Services',
      benefits: [
        'Revenue Cycle Support',
        'Quality & Compliance Support',
        'RCM Analytics & Reporting',
        'RCM Process Improvement'
      ]
    }
  ];

  const handleKeyDown = (e, index) => {
    let nextIndex = null;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % clientSolutions.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + clientSolutions.length) % clientSolutions.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = clientSolutions.length - 1;
    }

    if (nextIndex !== null) {
      setActiveTab(nextIndex);

      if (tabRefs.current[nextIndex]) {
        tabRefs.current[nextIndex].focus();
      }
    }
  };

  const ActiveIcon = clientSolutions[activeTab].icon;

  return (
    <section
      id="solutions"
      className="py-8 sm:py-10 md:py-12 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20 w-full bg-white"
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-[1240px] mx-auto px-3 sm:px-5 md:px-8 relative z-10 w-full box-border">

        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-2.5 border border-indigo/10">
            REVENUE CYCLE MANAGEMENT
          </span>

          <h2
            id="solutions-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#161b3d] mb-2.5 leading-tight"
          >
            Specialized RCM <span className="grad-text">Services</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Mid-cycle, back-end, and revenue optimization services covering the full healthcare revenue cycle.
          </p>
        </Reveal>

        {/* Tab Selection — Accessible WAI-ARIA tablist */}
        <div
          role="tablist"
          aria-label="Revenue Cycle Management Service Categories"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto mb-6 sm:mb-8 w-full"
        >
          {clientSolutions.map((sol, idx) => (
            <button
              key={sol.id}
              ref={(el) => (tabRefs.current[idx] = el)}
              role="tab"
              id={`solution-tab-${sol.id}`}
              aria-selected={activeTab === idx}
              aria-controls={`solution-panel-${sol.id}`}
              tabIndex={activeTab === idx ? 0 : -1}
              onClick={() => setActiveTab(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`tab-btn-3d px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm md:text-base min-h-[50px] text-center leading-snug flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                activeTab === idx
                  ? 'active text-white'
                  : 'text-slate-700 hover:text-indigo'
              }`}
            >
              <sol.icon
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                aria-hidden="true"
              />

              <span className="truncate sm:whitespace-normal">
                {sol.title}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Card — Transparent Glass Layout */}
        <div
          role="tabpanel"
          id={`solution-panel-${clientSolutions[activeTab].id}`}
          aria-labelledby={`solution-tab-${clientSolutions[activeTab].id}`}
          tabIndex={0}
          key={activeTab}
          className="w-full max-w-5xl mx-auto rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-7 border border-slate-200/80 shadow-xl bg-white/90 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center focus:outline-none focus:ring-2 focus:ring-indigo/40"
          style={{
            animation:
              'fadeSlideUp 0.35s cubic-bezier(0.22,1,0.36,1)'
          }}
        >
          <div className="lg:col-span-5 text-center lg:text-left space-y-2 sm:space-y-3">

            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo/10 border border-indigo/15 text-indigo flex items-center justify-center mx-auto lg:mx-0 shrink-0 shadow-inner"
              aria-hidden="true"
            >
              <ActiveIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {clientSolutions[activeTab].title}
              </h3>

              <div className="inline-block bg-teal/10 text-tealDark px-3.5 py-1 rounded-full text-xs font-bold border border-teal/25 mt-2">
                {clientSolutions[activeTab].stats}
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {clientSolutions[activeTab].tagline}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-2">

            <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
              What's Included:
            </h4>

            <div className="space-y-1.5">
              {clientSolutions[activeTab].benefits.map((b, bIdx) => (
                <div
                  key={bIdx}
                  className="flex items-start gap-2.5 bg-white/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-slate-200/70 shadow-sm hover:border-indigo/30 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <span
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-brand-gradient text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-sm"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span className="text-xs sm:text-sm md:text-[0.95rem] font-semibold text-slate-800 leading-snug">
                    {b}
                  </span>
                </div>
              ))}
            </div>

            {/* View All — links to the category page */}
            <Link
              to={clientSolutions[activeTab].path}
              className="inline-flex items-center gap-1.5 font-bold text-sm text-indigo hover:text-indigo/80 transition-colors pt-1"
            >
              View All
              <span aria-hidden="true">→</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};