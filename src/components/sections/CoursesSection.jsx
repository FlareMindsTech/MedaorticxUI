import React, { useRef } from 'react';
import { Reveal } from '../common/Reveal';

const CourseCard3D = ({
  id,
  cardClass,
  eyebrow,
  titleTop,
  titleBottom,
  badgeText,
  description,
  features,
  price,
  durationMeta,
  ctaText,
  onClick,
}) => {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    if (!cardRef.current) return;
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 850px)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 3.5;
    const rotateX = ((y / rect.height) - 0.5) * -3.5;

    cardRef.current.style.transform = `translate3d(0,-8px,0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handlePointerLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
      cardRef.current.classList.remove('pressed');
    }
  };

  const handlePointerDown = () => {
    if (cardRef.current) {
      cardRef.current.classList.add('pressed');
    }
  };

  const handlePointerUp = () => {
    if (cardRef.current) {
      cardRef.current.classList.remove('pressed');
    }
  };

  return (
    <a
      ref={cardRef}
      href={`#course-${id}`}
      onClick={(e) => onClick(e, id)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerLeave}
      className={`service-card-3d ${cardClass}`}
      aria-label={`Open ${titleTop} ${titleBottom} Syllabus`}
    >
      <div className="card-top">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>
            {titleTop}
            <br />
            {titleBottom}
          </h2>
        </div>
        <span className="premium-badge">{badgeText}</span>
      </div>

      <div className="card-body">
        <p className="description">{description}</p>

        <div className="key-title">PROGRAM HIGHLIGHTS</div>

        <div className="feature-grid">
          {features.map((feat, fIdx) => (
            <div key={fIdx} className="feature">
              <span className="feature-icon">{feat.icon}</span>
              <span>{feat.text}</span>
            </div>
          ))}
        </div>

        <div className="card-divider" />

        <div className="card-footer">
          <div className="service-label">
            <strong>{price}</strong>
            <small>{durationMeta}</small>
          </div>

          <span className="cta-3d">
            {ctaText} <b>→</b>
          </span>
        </div>

        {/* Decorative elements */}
        <div className="decor decor-1" />
        <div className="decor decor-2" />
        <div className="decor-line" />
      </div>
    </a>
  );
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
    <section id="courses" className="py-8 sm:py-12 md:py-16 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20 w-full" aria-labelledby="courses-heading">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-5 md:px-8 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#16a9aa] uppercase shadow-btn-ghost mb-2.5 border border-[#16a9aa]/20">
            MEDICAL CODING ACADEMY
          </span>
          <h2 id="courses-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#161b3d] mb-2.5 leading-tight">
            Medical Coding <span className="grad-text">Training Programs</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Choose from our specialized programs — the entire card is clickable.
          </p>
        </Reveal>

        {/* 2 Course 3D Cards Grid */}
        <div className="services-3d-grid max-w-5xl mx-auto">
          {/* BASIC COURSE CARD */}
          <Reveal delay={0.05} className="w-full flex">
            <CourseCard3D
              id="basic-medical-coding"
              cardClass="academy-card-theme"
              eyebrow="FOUNDATION COURSE"
              titleTop="Basic Medical"
              titleBottom="Coding Training"
              badgeText="FOUNDATION"
              description="Designed for freshers to learn the fundamentals of medical coding from scratch and build a solid foundation for a successful healthcare career."
              features={[
                { icon: '📘', text: 'Foundation-level training' },
                { icon: '▣', text: '30–50 coding cases' },
                { icon: '▤', text: 'Assessments & mock tests' },
                { icon: '✦', text: 'Placement assistance' },
              ]}
              price="₹7,500/-"
              durationMeta="6–8 WEEKS • 2 HRS/DAY • ONLINE / OFFLINE"
              ctaText="VIEW SYLLABUS"
              onClick={handleCardClick}
            />
          </Reveal>

          {/* ADVANCED COURSE CARD */}
          <Reveal delay={0.12} className="w-full flex">
            <CourseCard3D
              id="advanced-medical-coding"
              cardClass="rcm-card-theme"
              eyebrow="JOB-READY ADVANCED"
              titleTop="Advanced Medical"
              titleBottom="Coding Training"
              badgeText="ADVANCED"
              description="Advanced training covering real-time scenarios, specialty coding, modifiers, E/M coding, live chart reviews, and mock client interviews."
              features={[
                { icon: '🏆', text: 'Job-ready advanced training' },
                { icon: '▣', text: '200–500+ real cases' },
                { icon: '▤', text: 'Weekly exams & chart reviews' },
                { icon: '✦', text: 'Mock client interviews' },
              ]}
              price="₹15,000/-"
              durationMeta="10–12 WEEKS • 2 HRS/DAY • ONLINE / OFFLINE"
              ctaText="VIEW SYLLABUS"
              onClick={handleCardClick}
            />
          </Reveal>
        </div>

        <p className="interaction-note-3d">
          <b>3D INTERACTION:</b> Hover anywhere on a card • click anywhere to view complete course syllabus
        </p>

      </div>
    </section>
  );
};

