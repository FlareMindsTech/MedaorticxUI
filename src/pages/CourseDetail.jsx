import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';

export const CourseDetail = ({ courseId: propCourseId, onBack: propOnBack, onNavigateToContact: propOnContact }) => {
  const params = useParams();
  const navigate = useNavigate();
  const courseId = propCourseId || params.courseId || 'basic-medical-coding';
  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const [activeTab, setActiveTab] = useState('syllabus'); // 'syllabus' | 'highlights' | 'whatYouGet'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const originalTitle = document.title;
    document.title = `${course.title} | MedAorticX HealthTek Academy`;
    return () => {
      document.title = originalTitle;
    };
  }, [course.title]);

  const isPurple = course.colorTag === 'purple';

  const handleBack = () => {
    if (propOnBack) {
      propOnBack();
    } else {
      navigate('/#courses');
    }
  };

  const handleContact = () => {
    if (propOnContact) {
      propOnContact();
    } else {
      navigate('/#contact');
    }
  };

  return (
    <main className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 bg-white">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 md:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md text-indigo font-bold text-sm shadow-btn-ghost hover:bg-white hover:-translate-x-0.5 transition-all cursor-pointer border border-indigo/10 min-h-[48px]"
            aria-label="Back to all courses"
          >
            ← Back to All Courses
          </button>

          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-600">
            <ol className="flex items-center gap-2 list-none p-0 m-0">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/#home')}
                  className="p-0 border-0 bg-transparent text-slate-600 hover:text-indigo transition-colors cursor-pointer font-semibold underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo/40 rounded-sm"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li>
                <button
                  type="button"
                  onClick={handleBack}
                  className="p-0 border-0 bg-transparent text-slate-600 hover:text-indigo transition-colors cursor-pointer font-semibold underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo/40 rounded-sm"
                >
                  Courses
                </button>
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li aria-current="page" className="text-indigo font-bold">
                {course.title}
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Banner Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-6 sm:p-10 md:p-14 shadow-3d border border-white/80 mb-10 relative overflow-hidden">
          <div className={`h-3 w-full absolute top-0 left-0 ${isPurple ? 'bg-gradient-to-r from-violet to-indigo' : 'bg-gradient-to-r from-indigo to-teal'}`} />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${
                  isPurple 
                    ? 'bg-purple-50 text-purple-800 border-purple-200' 
                    : 'bg-indigo-50 text-indigo border-indigo-200'
                }`}>
                  {course.badge}
                </span>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full">
                  Mode: {course.mode}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg font-bold text-indigo leading-snug">
                "{course.tagline}"
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {course.overview}
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col gap-3 min-w-[240px]">
              <button
                type="button"
                onClick={handleContact}
                className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-brand-gradient shadow-btn-primary hover:opacity-95 transition-all text-center text-sm cursor-pointer border-none min-h-[48px]"
              >
                Enroll / Inquire for this Program →
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation for Detailed Sections */}
        <div className="flex gap-2 sm:gap-3 border-b border-slate-200/80 pb-4 mb-8 overflow-x-auto" role="tablist" aria-label="Course curriculum and highlights">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'syllabus'}
            onClick={() => setActiveTab('syllabus')}
            className={`shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer border-none min-h-[44px] flex items-center gap-2 ${
              activeTab === 'syllabus'
                ? 'bg-indigo text-white shadow-3d scale-105'
                : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white shadow-btn-ghost'
            }`}
          >
            <span aria-hidden="true">📖</span>
            <span>What You Will Learn ({course.whatYouLearn.length} Modules)</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'highlights'}
            onClick={() => setActiveTab('highlights')}
            className={`shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer border-none min-h-[44px] flex items-center gap-2 ${
              activeTab === 'highlights'
                ? 'bg-indigo text-white shadow-3d scale-105'
                : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white shadow-btn-ghost'
            }`}
          >
            <span aria-hidden="true">⭐</span>
            <span>Course Highlights</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'whatYouGet'}
            onClick={() => setActiveTab('whatYouGet')}
            className={`shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer border-none min-h-[44px] flex items-center gap-2 ${
              activeTab === 'whatYouGet'
                ? 'bg-indigo text-white shadow-3d scale-105'
                : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white shadow-btn-ghost'
            }`}
          >
            <span aria-hidden="true">🎁</span>
            <span>What You Get</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Tab Content Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {activeTab === 'syllabus' && (
              <div className="box-hover bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 md:p-10 shadow-3d border border-white/80 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-ink">Comprehensive Syllabus Curriculum</h2>
                  <span className="text-xs font-bold text-indigo bg-indigo/10 px-3 py-1 rounded-full">{course.whatYouLearn.length} Core Modules</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {course.whatYouLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50/90 p-4 rounded-2xl border border-slate-100 hover:border-indigo/20 transition-colors">
                      <span className="w-6 h-6 rounded-full bg-indigo/10 text-indigo flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5" aria-hidden="true">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'highlights' && (
              <div className="box-hover bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 md:p-10 shadow-3d border border-white/80 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-ink">Program Highlights & Practical Training</h2>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Job-Ready Standard</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {course.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0" aria-hidden="true">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'whatYouGet' && (
              <div className="box-hover bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 md:p-10 shadow-3d border border-white/80 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-ink">Deliverables & Student Benefits</h2>
                  <span className="text-xs font-bold text-violet bg-purple-50 px-3 py-1 rounded-full">Included In Program</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {course.whatYouGet.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-purple-50/60 p-4 rounded-2xl border border-purple-100">
                      <span className="w-6 h-6 rounded-full bg-violet text-white flex items-center justify-center text-xs font-bold shrink-0" aria-hidden="true">
                        ★
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar: Placement & Enrollment */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Enrollment Action Card */}
            <div className="box-hover bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 shadow-3d border border-white/80 space-y-4">
              <h3 className="text-lg font-extrabold text-ink">Ready to Start?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Join MedAorticX Healthtek Academy to master real-world medical coding guidelines, anatomy, and documentation.
              </p>

              <button
                type="button"
                onClick={handleContact}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-brand-gradient shadow-btn-primary hover:opacity-95 transition-all text-center text-sm cursor-pointer border-none min-h-[44px]"
              >
                Register / Inquire Now →
              </button>
            </div>

            {/* Placement Assistance Badge */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal/10 rounded-[28px] p-6 border border-emerald-200/60 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <span className="text-xl" aria-hidden="true">🤝</span>
                <span>Placement Assistance Guaranteed</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Resume building, mock interviews (technical + HR), LinkedIn optimization, and direct placement support for top healthcare RCM organizations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};
