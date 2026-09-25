import React from 'react';
import { Reveal } from '../common/Reveal';
import { 
  Building2, 
  Rocket, 
  Target, 
  Briefcase, 
  Users, 
  Sparkles 
} from 'lucide-react';

export const AboutSection = () => {
  const values = [
    {
      title: "Accuracy First",
      desc: "Fundamental to healthcare revenue and coding.",
      icon: Target
    },
    {
      title: "Industry Expertise",
      desc: "Backed by practical U.S. healthcare experience.",
      icon: Briefcase
    },
    {
      title: "People & Process Focused",
      desc: "Connecting the right skills, processes, and opportunities.",
      icon: Users
    },
    {
      title: "Continuous Innovation",
      desc: "Smarter workflows and ongoing professional learning.",
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20 w-full bg-white" aria-labelledby="about-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-block bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#00A8CC] uppercase shadow-xs mb-3 border border-[#00A8CC]/20">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Empowering Healthcare Through <span className="bg-gradient-to-r from-[#00A8CC] to-[#00C989] bg-clip-text text-transparent">Accurate Coding</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We provide comprehensive Revenue Cycle Management, Medical Coding solutions, career support, and professional training built on hands-on U.S. healthcare experience.
          </p>
        </Reveal>

        {/* Narrative Grid: What We Do vs Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8 sm:mb-10 w-full">
          
          {/* What We Do Card */}
          <Reveal className="flex w-full">
            <div className="bg-white/85 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col justify-between w-full hover:border-[#00A8CC]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4 shadow-2xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">What We Do</h3>
                
                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                  <div>
                    <strong className="text-slate-900 block mb-1 font-semibold">Revenue Cycle Management</strong>
                    <p>End-to-end support spanning medical coding, billing, claims management, denial resolution, and AR operations.</p>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1 font-semibold">Career & Recruitment Support</strong>
                    <p>Connecting skilled RCM and coding professionals with ideal career opportunities.</p>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1 font-semibold">Medical Coding Academy</strong>
                    <p>Industry-oriented training designed to build job-ready clinical coding skills.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Vision & Mission Card */}
          <Reveal className="flex w-full">
            <div className="bg-white/85 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col justify-between w-full hover:border-[#00A8CC]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#00C989] flex items-center justify-center mb-4 shadow-2xs">
                  <Rocket className="w-6 h-6" />
                </div>
                
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Our Vision</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      To become a trusted partner in healthcare RCM, medical coding excellence, and career development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Our Mission</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      To empower healthcare organizations and professionals through accurate coding, efficient solutions, and practical training.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100 mt-6 text-center">
                  <span className="text-xs sm:text-sm font-semibold text-[#00A8CC] block">
                    "Better Processes. Better Accuracy. Better Revenue. Better Healthcare."
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {values.map((v, idx) => {
            const IconComponent = v.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05} className="w-full">
                <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between h-full hover:border-[#00A8CC]/40 transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{v.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};