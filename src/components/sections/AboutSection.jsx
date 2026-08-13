import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../common/Reveal';

export const AboutSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const approaches = [
    {
      id: 1,
      icon: '🎯',
      title: 'Accuracy First.',
      detail: 'Healthcare revenue depends on getting the details right. We focus on accuracy, consistency, and quality at every stage of the process.'
    },
    {
      id: 2,
      icon: '🤝',
      title: 'Client-Centric Partnership.',
      detail: "We don't believe in a one-size-fits-all approach. Every client has different workflows, specialties, challenges, and goals. We build our processes around those requirements."
    },
    {
      id: 3,
      icon: '💼',
      title: 'Experienced Professionals.',
      detail: 'Our team brings practical knowledge of U.S. healthcare processes and medical coding, allowing us to understand the challenges our clients face and respond with industry-specific solutions.'
    },
    {
      id: 4,
      icon: '💡',
      title: 'Technology & Innovation.',
      detail: 'We continuously explore smarter workflows, automation, analytics, and technology-enabled solutions to improve efficiency and scalability.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden glass-section">
      {/* Section Content */}

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal variant="scaleRotate" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4 border border-indigo/10">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-6">
            Transforming Healthcare Revenue Through <span className="grad-text">Expertise, Accuracy & Innovation</span>
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-4">
            We are a healthcare Revenue Cycle Management company dedicated to helping healthcare providers and organizations simplify complex revenue processes, improve operational efficiency, and strengthen financial performance.
          </p>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Built by professionals with hands-on experience in U.S. healthcare and medical coding, our approach combines industry expertise, attention to detail, technology-driven workflows, and a commitment to delivering consistent results.
          </p>
        </Reveal>

        {/* Who We Are Sub-block */}
        <Reveal variant="fadeIn" className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-3d border border-white/80 max-w-4xl mx-auto mb-20 text-center">
          <h3 className="text-2xl font-bold text-ink mb-4">Who We Are</h3>
          <p className="text-muted leading-relaxed text-base mb-4 font-medium text-indigo">
            We believe healthcare providers should be focused on what matters most — delivering quality patient care.
          </p>
          <p className="text-muted leading-relaxed text-base mb-4">
            Behind every successful healthcare organization is a strong and efficient revenue cycle. From accurate medical coding to claims management and denial resolution, every step plays an important role in protecting revenue and maintaining a healthy financial operation.
          </p>
          <p className="text-muted leading-relaxed text-base">
            Our team provides specialized healthcare support across key areas of the revenue cycle, helping clients reduce administrative complexity, improve accuracy, and create more efficient workflows.
          </p>
        </Reveal>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Reveal variant="slideLeft" delay={0.1}>
            <div className="tilt-card card-shine bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-3d border border-white/80 h-full flex flex-col justify-between cursor-pointer group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo/20 to-violet/20 text-indigo flex items-center justify-center text-3xl font-bold mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-indigo transition-colors">Our Vision</h3>
                <p className="text-muted leading-relaxed text-base">
                  To become a trusted global healthcare operations partner, recognized for excellence in medical coding, revenue cycle management, innovation, and client success.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="slideRight" delay={0.2}>
            <div className="tilt-card card-shine bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-3d border border-white/80 h-full flex flex-col justify-between cursor-pointer group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/20 to-teal-light/20 text-teal flex items-center justify-center text-3xl font-bold mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-teal transition-colors">Our Mission</h3>
                <p className="text-muted leading-relaxed text-base">
                  To empower healthcare organizations with accurate, efficient, and scalable revenue cycle solutions that improve financial performance while allowing healthcare professionals to focus on patient care.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4-Card Our Approach Grid */}
        <Reveal variant="fadeIn" className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-ink text-center mb-12">
            Our <span className="grad-text">Approach</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((app) => (
              <div
                key={app.id}
                className="bg-white/85 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-3d flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo/10 text-indigo flex items-center justify-center text-2xl mb-4 font-bold">
                    {app.icon}
                  </div>
                  <h4 className="font-bold text-ink text-lg mb-3">{app.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{app.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Closing Partner Statement */}
        <Reveal variant="fadeIn" className="mt-16 text-center max-w-3xl mx-auto bg-brand-gradient text-white p-8 sm:p-10 rounded-3xl shadow-3d">
          <h3 className="text-2xl font-extrabold text-white mb-4">
            More Than a Service Provider — Your RCM Partner
          </h3>
          <p className="text-white/90 leading-relaxed text-base mb-6">
            We aim to build long-term relationships based on trust, transparency, accountability, and measurable performance. As we grow, our commitment remains simple:
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full font-bold text-white tracking-wide text-sm sm:text-base border border-white/20">
            Better Processes. Better Accuracy. Better Revenue. Better Healthcare.
          </div>
        </Reveal>

      </div>
    </section>
  );
};
