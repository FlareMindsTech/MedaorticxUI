import React, { useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Reveal } from '../components/common/Reveal';
import { COURSES } from '../data/courses';

export const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('syllabus');

  return (
    <PageTransition>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4 border border-indigo/10">
            Medical Coding Academy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-4 sm:mb-6">
            Medical Coding <span className="grad-text">Training Programs</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            MedAorticX Healthtek offers two specialized medical coding training programs: Basic and Advanced, providing comprehensive curriculum, real-time chart practice, and placement assistance.
          </p>
        </Reveal>

        {/* 2 Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COURSES.map((course, idx) => {
            const isPurple = course.colorTag === 'purple';
            return (
              <Reveal
                key={course.id}
                variant={idx === 0 ? "slideLeft" : "slideRight"}
                delay={idx * 0.1}
                className="box-hover bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 md:p-10 shadow-3d border border-white/80 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300"
              >
                <div className={`h-2.5 w-full absolute top-0 left-0 ${isPurple ? 'bg-gradient-to-r from-violet to-indigo' : 'bg-gradient-to-r from-indigo to-teal'}`} />

                <div>
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      isPurple 
                        ? 'bg-purple-50 text-purple-800 border-purple-200' 
                        : 'bg-indigo-50 text-indigo border-indigo-200'
                    }`}>
                      {course.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {course.mode}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-ink mb-1">
                    {course.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-indigo mb-4">
                    "{course.tagline}"
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {course.overview}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Program Highlights:</div>
                    {course.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => { setSelectedCourse(course); setActiveTab('syllabus'); }}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-brand-gradient shadow-btn-primary hover:opacity-95 transition-all cursor-pointer border-none min-h-[44px]"
                  >
                    View Complete Curriculum & What You Get →
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Detailed Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-md" role="dialog" aria-modal="true">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 shadow-3d relative border border-white/80 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center font-bold text-ink hover:bg-gray-200 transition-all cursor-pointer border-none"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-indigo/10 text-indigo shrink-0">
                  {selectedCourse.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-ink">{selectedCourse.title}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-indigo">{selectedCourse.tagline}</p>
                </div>
              </div>

              <div className="flex gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('syllabus')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold min-h-[40px] cursor-pointer border-none ${
                    activeTab === 'syllabus' ? 'bg-indigo text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  What You Will Learn ({selectedCourse.whatYouLearn.length})
                </button>
                <button
                  onClick={() => setActiveTab('highlights')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold min-h-[40px] cursor-pointer border-none ${
                    activeTab === 'highlights' ? 'bg-indigo text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  Course Highlights
                </button>
                <button
                  onClick={() => setActiveTab('whatYouGet')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold min-h-[40px] cursor-pointer border-none ${
                    activeTab === 'whatYouGet' ? 'bg-indigo text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  What You Get
                </button>
              </div>

              {activeTab === 'syllabus' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {selectedCourse.whatYouLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-indigo/10 text-indigo flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'highlights' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {selectedCourse.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'whatYouGet' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {selectedCourse.whatYouGet.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-purple-50/60 p-3 rounded-xl border border-purple-100">
                      <span className="w-5 h-5 rounded-full bg-violet text-white flex items-center justify-center text-xs font-bold shrink-0">
                        ★
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => setSelectedCourse(null)}
                className="w-full py-3.5 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all text-sm cursor-pointer border-none min-h-[44px]"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
};
