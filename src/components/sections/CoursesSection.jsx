import React from 'react';
import { Reveal } from '../common/Reveal';
import { TiltCard3D } from '../common/TiltCard3D';
import { COURSES } from '../../data/courses';

const COURSE_META = {
  'basic-medical-coding': {
    cardClass: 'academy-card-theme',
    eyebrow: 'FOUNDATION COURSE',
    titleTop: 'Basic Medical',
    titleBottom: 'Coding Training',
    badgeText: 'FOUNDATION',
    ctaText: 'VIEW SYLLABUS',
    featureIcons: ['📘', '▣', '▤', '✦'],
  },
  'advanced-medical-coding': {
    cardClass: 'rcm-card-theme',
    eyebrow: 'JOB-READY ADVANCED',
    titleTop: 'Advanced Medical',
    titleBottom: 'Coding Training',
    badgeText: 'ADVANCED',
    ctaText: 'VIEW SYLLABUS',
    featureIcons: ['🏆', '▣', '▤', '✦'],
  },
};

export const CoursesSection = ({ onSelectCourse }) => {
  const handleCardClick = (e, courseId) => {
    e.preventDefault();
    if (onSelectCourse) {
      onSelectCourse(courseId);
    } else {
      window.location.hash = `course-${courseId}`;
    }
  };

  return (
    <section id="courses" className="py-6 sm:py-8 md:py-10 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20 w-full bg-white" aria-labelledby="courses-heading">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-5 md:px-8 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-tealDark uppercase shadow-btn-ghost mb-2 border border-tealDark/20">
            MEDICAL CODING ACADEMY
          </span>
          <h2 id="courses-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#161b3d] mb-2 leading-tight">
            Medical Coding <span className="grad-text">Training Programs</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Choose from our specialized programs — the entire card is clickable.
          </p>
        </Reveal>

        {/* 2 Course 3D Cards Grid */}
        <div className="services-3d-grid max-w-5xl mx-auto">
          {COURSES.map((course, idx) => {
            const meta = COURSE_META[course.id] || {};
            const cardFeatures = course.highlights.slice(0, 4).map((featText, fIdx) => ({
              icon: (meta.featureIcons && meta.featureIcons[fIdx]) || '▣',
              text: featText,
            }));

            return (
              <Reveal key={course.id} delay={0.05 + idx * 0.07} className="w-full flex">
                <TiltCard3D
                  id={course.id}
                  cardClass={meta.cardClass}
                  eyebrow={meta.eyebrow}
                  titleTop={meta.titleTop}
                  titleBottom={meta.titleBottom}
                  badgeText={meta.badgeText}
                  description={course.overview}
                  features={cardFeatures}
                  keyTitle="PROGRAM HIGHLIGHTS"
                  labelStrong={course.duration.toUpperCase()}
                  labelSmall={`${course.classes.toUpperCase()} • ${course.mode.toUpperCase()}`}
                  ctaText={meta.ctaText}
                  href={`/courses/${course.id}`}
                  ariaLabel={`Open ${meta.titleTop} ${meta.titleBottom} Syllabus`}
                  onClick={handleCardClick}
                  titleTag="h3"
                />
              </Reveal>
            );
          })}
        </div>

        <p className="interaction-note-3d">
          <b>3D INTERACTION:</b> Hover anywhere on a card • click anywhere to view complete course syllabus
        </p>

      </div>
    </section>
  );
};
