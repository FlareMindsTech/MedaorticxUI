import React, { useEffect } from 'react';
import { SERVICES } from '../data/services';
import { COURSES } from '../data/courses';

export const ServiceDetail = ({ serviceId, onBack, onNavigateToContact, onNavigateToCourses }) => {
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const isRecruitment = service.id === 'rcm-recruitment-services';

  return (
    <main className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-[#F4F2FF] via-[#EEF2FF] to-[#EAF9F7]">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 md:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md text-indigo font-bold text-sm shadow-btn-ghost hover:bg-white hover:-translate-x-0.5 transition-all cursor-pointer border border-indigo/10 min-h-[48px]"
            aria-label="Back to all services"
          >
            ← Back to All Services
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="cursor-pointer hover:text-indigo" onClick={onBack}>Home</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-indigo" onClick={onBack}>Services</span>
            <span>/</span>
            <span className="text-indigo font-bold">{service.title}</span>
          </div>
        </div>

        {/* Hero Header Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-6 sm:p-10 md:p-14 shadow-3d border border-white/80 mb-10 relative overflow-hidden">
          <div className="h-3 w-full absolute top-0 left-0 bg-brand-gradient" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-indigo/10 text-indigo font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-indigo/15">
                <span>{service.icon}</span>
                <span>{isRecruitment ? 'Specialized Healthcare Staffing' : 'Professional Healthcare Academy'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg font-bold text-indigo leading-snug">
                {service.subtitle}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.fullDesc}
              </p>

              {service.tagline && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-ink font-bold text-sm sm:text-base flex items-center gap-2 shadow-inner">
                  <span className="text-indigo text-lg">✨</span>
                  <span>{service.tagline}</span>
                </div>
              )}
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <button
                onClick={onNavigateToContact}
                className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-brand-gradient shadow-btn-primary hover:opacity-95 transition-all text-center text-sm cursor-pointer border-none min-h-[48px] flex items-center justify-center gap-2"
              >
                {isRecruitment ? 'Hire RCM Talent →' : 'Enroll in Academy →'}
              </button>
              
              {!isRecruitment && onNavigateToCourses && (
                <button
                  onClick={onNavigateToCourses}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-indigo bg-indigo/10 hover:bg-indigo hover:text-white transition-all text-center text-sm cursor-pointer border-none min-h-[44px] flex items-center justify-center gap-2"
                >
                  View Coding Courses 📖
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Roles / Curriculum */}
          <div className="lg:col-span-7 space-y-8">
            <div className="box-hover bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 md:p-10 shadow-3d border border-white/80">
              <h2 className="text-xl sm:text-2xl font-extrabold text-ink mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-indigo/10 text-indigo flex items-center justify-center text-xl font-bold">
                  {isRecruitment ? '👥' : '📚'}
                </span>
                <span>{isRecruitment ? 'Our Recruitment Expertise & Roles' : "What You'll Learn at the Academy"}</span>
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {isRecruitment 
                  ? 'Our recruitment approach focuses on understanding your operational requirements and sourcing candidates with the right combination of industry knowledge, technical skills, communication abilities, and process expertise across:'
                  : 'Our program develops deep practical knowledge of healthcare documentation, medical terminology, and code sets required by global healthcare employers:'
                }
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100/90 hover:border-indigo/20 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* If Academy, show Courses overview block without fee/duration chips */}
            {!isRecruitment && (
              <div className="box-hover bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 md:p-10 shadow-3d border border-white/80">
                <h2 className="text-xl sm:text-2xl font-extrabold text-ink mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-purple-50 text-violet flex items-center justify-center text-xl font-bold">
                    🎓
                  </span>
                  <span>Available Medical Coding Training Programs</span>
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Choose from our two specialized training tracks designed for beginners and experienced candidates:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COURSES.map((c) => (
                    <div key={c.id} className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo/5 border border-indigo/10 space-y-2.5">
                      <span className="text-xs font-bold text-indigo uppercase bg-indigo/10 px-2.5 py-0.5 rounded-full">{c.badge}</span>
                      <h3 className="font-extrabold text-ink text-base">{c.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{c.tagline}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Why Choose & Eligibility */}
          <div className="lg:col-span-5 space-y-8">
            {service.whyChoose && (
              <div className="box-hover bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 shadow-3d border border-white/80 space-y-4">
                <h2 className="text-xl font-extrabold text-ink flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center text-xl font-bold">
                    🏆
                  </span>
                  <span>Why Choose Our Recruitment Services?</span>
                </h2>

                <div className="space-y-3 pt-2">
                  {service.whyChoose.map((why, idx) => {
                    const [title, ...desc] = why.split(':');
                    return (
                      <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <strong className="text-indigo text-sm block mb-1 font-bold">{title}</strong>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{desc.join(':')}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {service.eligibility && (
              <div className="box-hover bg-gradient-to-br from-teal/10 via-white to-indigo/5 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 shadow-3d border border-teal/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center text-xl font-bold shadow-sm">
                  🎯
                </div>
                <h2 className="text-xl font-extrabold text-ink">Who Can Join?</h2>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {service.eligibility}
                </p>
                <div className="pt-2 text-xs text-slate-500 font-semibold">
                  • Life Sciences • Nursing • Pharmacy • B.Sc / M.Sc • Any Graduate
                </div>
              </div>
            )}

            {/* Quick Contact Box */}
            <div className="bg-brand-gradient text-white rounded-[28px] p-6 sm:p-8 shadow-3d space-y-4 text-center sm:text-left">
              <h2 className="text-xl font-extrabold text-white">Get Started with MedAorticX</h2>
              <p className="text-white/90 text-sm leading-relaxed">
                Connect with our team today to discuss your staffing requirements or enroll in our upcoming batch.
              </p>
              <button
                onClick={onNavigateToContact}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-indigo bg-white shadow-md hover:bg-slate-50 transition-all text-sm cursor-pointer border-none min-h-[44px]"
              >
                Inquire Now →
              </button>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};
