import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  HeartPulse,
  Mail,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import teamImage from '../assets/team.png';
import learningImage from '../assets/learning.png';

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  const sectionRefs = useRef([]);

  // Added only for returning to the top when CareersPage opens
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [index]: true,
            }));

            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const benefits = [
    {
      icon: BriefcaseBusiness,
      number: '01',
      title: 'Industry Expertise',
      description:
        'Work alongside professionals with practical experience in U.S. healthcare, medical coding, and revenue cycle operations.',
    },
    {
      icon: GraduationCap,
      number: '02',
      title: 'Growth & Learning',
      description:
        'Build your skills through structured training, certifications, mentorship, and real-world healthcare projects.',
    },
    {
      icon: Users,
      number: '03',
      title: 'People First',
      description:
        'Join a collaborative environment where people, knowledge sharing, and meaningful contribution come first.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Continuous Improvement',
      description:
        'Explore smarter workflows, modern technology, and new ways of improving healthcare revenue operations.',
    },
  ];

  const hiringAreas = [
    'Revenue Cycle Management',
    'Medical Coding & Billing',
    'Claims & Denial Management',
    'Accounts Receivable',
    'Medical Coding Academy',
    'Career & RCM Recruitment',
    'Marketing & Outreach',
    'HR & Administration',
  ];

  const jobs = [
    {
      title: 'Medical Coding Specialist',
      type: 'RCM Operations',
      description:
        'Assign and review ICD, CPT, and HCPCS codes accurately in line with client guidelines and coding standards.',
      tags: ['Medical Coding', 'RCM', 'Healthcare'],
    },
    {
      title: 'Medical Coding Trainer',
      type: 'Academy',
      description:
        'Conduct training sessions covering medical terminology, anatomy, ICD/CPT/HCPCS coding, and coding guidelines.',
      tags: ['Training', 'Coding', 'Education'],
    },
    {
      title: 'AR Caller / Denial Associate',
      type: 'RCM Operations',
      description:
        'Support accounts receivable follow-up and denial management for U.S. healthcare clients.',
      tags: ['AR', 'Denials', 'Healthcare'],
    },
  ];

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main className="min-h-screen bg-[#F6FBFD] text-[#14243D] overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[760px] flex items-center overflow-hidden bg-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(18,181,208,0.12),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(24,185,154,0.10),transparent_28%)]" />

        <div className="absolute top-24 right-[12%] w-4 h-4 rounded-full bg-[#12B5D0] animate-pulse" />
        <div className="absolute top-44 right-[25%] w-2 h-2 rounded-full bg-[#18B99A] animate-ping" />
        <div className="absolute bottom-32 left-[8%] w-3 h-3 rounded-full bg-[#20B989] animate-pulse" />

        <div className="absolute top-40 right-[-100px] w-[500px] h-[500px] rounded-full border border-[#12B5D0]/10" />
        <div className="absolute top-56 right-[-30px] w-[370px] h-[370px] rounded-full border border-[#18B99A]/10" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-24">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-7 animate-[fadeUp_0.7s_ease-out]">
                <span className="w-2 h-2 rounded-full bg-[#18B99A] animate-pulse" />
                <span className="text-sm font-semibold text-[#14243D]">
                  Careers at MedAorticx HealthTek
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.045em] leading-[0.98] text-[#14243D]">
                Build your
                <br />

                <span className="bg-gradient-to-r from-[#08779B] via-[#12B5D0] to-[#18B99A] bg-clip-text text-transparent">
                  future in healthcare.
                </span>
              </h1>

              <p className="mt-7 text-lg sm:text-xl leading-relaxed text-slate-600 max-w-2xl">
                Join a growing team working across healthcare RCM,
                medical coding, training, recruitment, and technology.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <a
                  href="#openings"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#12B5D0] to-[#18B99A] text-white font-bold shadow-lg shadow-[#12B5D0]/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  Explore Opportunities

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <a
                  href="#culture"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-[#14243D] font-bold hover:border-[#12B5D0]/40 hover:bg-[#F6FBFD] transition-all duration-300"
                >
                  Discover Our Culture
                </a>

              </div>

              <div className="grid grid-cols-3 max-w-xl mt-14 border-t border-slate-200 pt-7">

                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#14243D]">
                    RCM
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1">
                    Healthcare Focus
                  </div>
                </div>

                <div className="border-l border-slate-200 pl-5">
                  <div className="text-2xl sm:text-3xl font-bold text-[#12B5D0]">
                    Learn
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1">
                    Grow & Develop
                  </div>
                </div>

                <div className="border-l border-slate-200 pl-5">
                  <div className="text-2xl sm:text-3xl font-bold text-[#18B99A]">
                    Impact
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1">
                    Meaningful Work
                  </div>
                </div>

              </div>
            </div>

            <div className="relative hidden md:block">

              <div className="relative w-full max-w-[560px] mx-auto">

                <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-[10px] border-white bg-white rotate-[-2deg] hover:rotate-0 transition-transform duration-700">

                  <img
                    src={teamImage}
                    alt="Healthcare professionals collaborating"
                    className="w-full h-[500px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#14243D]/50 via-transparent to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-sm font-bold text-[#14243D]">
                      <HeartPulse
                        size={16}
                        className="text-[#12B5D0]"
                      />
                      Healthcare. People. Progress.
                    </div>

                  </div>
                </div>

                <div className="absolute -left-8 top-14 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 animate-[float_4s_ease-in-out_infinite]">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-[#12B5D0]/10 flex items-center justify-center">
                      <Sparkles
                        size={20}
                        className="text-[#12B5D0]"
                      />
                    </div>

                    <div>
                      <div className="font-bold text-[#14243D]">
                        Grow With Us
                      </div>

                      <div className="text-xs text-slate-500">
                        Learn • Build • Lead
                      </div>
                    </div>

                  </div>
                </div>

                <div className="absolute -right-6 bottom-10 bg-[#14243D] text-white rounded-2xl px-5 py-4 shadow-2xl animate-[float_5s_ease-in-out_infinite]">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#18B99A]/20 flex items-center justify-center">
                      <Target
                        size={19}
                        className="text-[#18B99A]"
                      />
                    </div>

                    <div>
                      <div className="text-sm font-bold">
                        Your next chapter
                      </div>

                      <div className="text-xs text-slate-300">
                        Starts here
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <a
          href="#culture"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-[#12B5D0] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
            Scroll
          </span>

          <ChevronDown
            size={18}
            className="animate-bounce"
          />
        </a>

      </section>


      {/* =====================================================
          INTRO / CULTURE
      ====================================================== */}
      <section
        id="culture"
        ref={addRef}
        className={`py-24 sm:py-28 transition-all duration-1000 ${
          visibleSections[0]
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#12B5D0]">
                Life at MedAorticx
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-[#14243D]">
                Work that connects
                <span className="block text-[#12B5D0]">
                  people to purpose.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-slate-600">
                MedAorticx HealthTek brings together healthcare,
                technology, medical coding, RCM expertise, and
                career development.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We believe great work happens when people have
                the opportunity to learn, contribute, collaborate,
                and continuously improve.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.number}
                  className="group relative bg-white rounded-[28px] p-7 border border-slate-200/70 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >

                  <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-[#12B5D0]/5 group-hover:bg-[#12B5D0]/10 transition-colors" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#12B5D0]/10 to-[#18B99A]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          size={22}
                          className="text-[#12A8C2]"
                        />
                      </div>

                      <span className="text-xs font-bold text-slate-300">
                        {benefit.number}
                      </span>

                    </div>

                    <h3 className="mt-7 text-xl font-bold text-[#14243D]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {benefit.description}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-[#12B5D0] to-[#18B99A] group-hover:w-20 transition-all duration-500" />

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          VISUAL STORY
      ====================================================== */}
      <section
        ref={addRef}
        className={`py-24 bg-white transition-all duration-1000 ${
          visibleSections[1]
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">

              <div className="absolute -inset-5 bg-gradient-to-br from-[#12B5D0]/10 to-[#18B99A]/10 rounded-[40px] blur-2xl" />

              <div className="relative rounded-[32px] overflow-hidden border-8 border-white shadow-2xl">

                <img
                  src={learningImage}
                  alt="Professional learning and development"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />

              </div>

              <div className="absolute -bottom-6 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-[#18B99A]/10 flex items-center justify-center">
                    <GraduationCap
                      size={20}
                      className="text-[#18B99A]"
                    />
                  </div>

                  <div>
                    <div className="font-bold text-[#14243D]">
                      Keep Learning
                    </div>
                    <div className="text-xs text-slate-500">
                      Skills that move forward
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="lg:pl-8">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#18B99A]">
                Learning & Development
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#14243D] leading-tight">
                Grow your skills.
                <span className="block text-[#12B5D0]">
                  Expand your possibilities.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Whether you're starting your healthcare career or
                bringing years of experience, we encourage continuous
                learning and professional development.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  'Structured learning and training',
                  'Hands-on healthcare experience',
                  'Collaborative team environment',
                  'Opportunities to develop new skills',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#18B99A] flex-shrink-0"
                    />

                    <span className="text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HIRING AREAS
      ====================================================== */}
      <section
        ref={addRef}
        className={`py-24 bg-[#F6FBFD] transition-all duration-1000 ${
          visibleSections[2]
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#12B5D0]">
              Where You Can Make An Impact
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#14243D]">
              Areas we hire for
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Explore opportunities across our healthcare,
              education, operations, and support teams.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">

            {hiringAreas.map((area, index) => (

              <div
                key={area}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-[#12B5D0]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-[#12B5D0]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#12A8C2]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>

                    <h3 className="font-bold text-[#14243D] leading-6">
                      {area}
                    </h3>

                    <ArrowUpRight
                      size={17}
                      className="mt-4 text-slate-300 group-hover:text-[#12B5D0] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          OPENINGS
      ====================================================== */}
      <section
        id="openings"
        ref={addRef}
        className={`py-24 bg-white transition-all duration-1000 ${
          visibleSections[3]
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#18B99A]">
                Opportunities
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#14243D]">
                Current openings
              </h2>

            </div>

            <p className="max-w-md text-slate-600 leading-7">
              Find a role where your skills can contribute to
              meaningful healthcare outcomes.
            </p>

          </div>

          <div className="mt-12 space-y-4">

            {jobs.map((job, index) => {

              const isOpen = expandedJob === index;

              return (
                <div
                  key={job.title}
                  className={`rounded-[24px] border transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? 'border-[#12B5D0]/40 shadow-xl bg-[#F9FDFE]'
                      : 'border-slate-200 bg-white hover:border-[#12B5D0]/30 hover:shadow-lg'
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedJob(isOpen ? null : index)
                    }
                    className="w-full text-left px-6 sm:px-8 py-6 flex items-center justify-between gap-5"
                  >

                    <div className="flex items-center gap-5">

                      <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-gradient-to-br from-[#12B5D0]/10 to-[#18B99A]/10 items-center justify-center">
                        <BriefcaseBusiness
                          size={21}
                          className="text-[#12A8C2]"
                        />
                      </div>

                      <div>

                        <div className="text-xs font-bold uppercase tracking-wider text-[#12B5D0]">
                          {job.type}
                        </div>

                        <h3 className="mt-1 text-xl font-bold text-[#14243D]">
                          {job.title}
                        </h3>

                      </div>

                    </div>

                    <div
                      className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#12B5D0] text-white' : ''
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>

                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ${
                      isOpen
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="px-6 sm:px-8 pb-7 pt-0">

                        <div className="sm:pl-[68px]">

                          <p className="text-slate-600 leading-7 max-w-3xl">
                            {job.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-5">

                            {job.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 rounded-full bg-[#12B5D0]/8 text-[#08779B] text-xs font-semibold"
                              >
                                {tag}
                              </span>
                            ))}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative py-24 overflow-hidden">

        <div className="absolute inset-0 bg-[#14243D]" />

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#12B5D0]/15 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#18B99A]/15 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-5 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#8DE7F0] text-sm font-semibold">
            <Zap size={15} />
            Your next opportunity could start here
          </div>

          <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to build something
            <span className="block bg-gradient-to-r from-[#12B5D0] to-[#18B99A] bg-clip-text text-transparent">
              meaningful with us?
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-8">
            Send us your resume and tell us where you see yourself
            contributing to the MedAorticx HealthTek journey.
          </p>

          <a
            href="mailto:medaorticx@gmail.com?subject=Career Application - MedAorticx HealthTek"
            className="inline-flex items-center gap-3 mt-9 px-7 py-4 rounded-full bg-white text-[#14243D] font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Send Your Resume

            <ArrowRight size={18} />
          </a>

        </div>
      </section>


      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section className="bg-[#F6FBFD] py-16">

        <div className="max-w-4xl mx-auto px-5">

          <div className="bg-white rounded-[28px] border border-slate-200 p-7 sm:p-10 shadow-sm">

            <div className="grid sm:grid-cols-2 gap-8">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#12B5D0]/10 flex items-center justify-center">
                  <Mail
                    size={21}
                    className="text-[#12A8C2]"
                  />
                </div>

                <div>
                  <div className="text-sm text-slate-500">
                    Email
                  </div>

                  <a
                    href="mailto:medaorticx@gmail.com"
                    className="font-bold text-[#14243D] hover:text-[#12B5D0] transition-colors"
                  >
                    medaorticx@gmail.com
                  </a>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-[#18B99A]/10 flex items-center justify-center">
                  <Phone
                    size={21}
                    className="text-[#18B99A]"
                  />
                </div>

                <div>
                  <div className="text-sm text-slate-500">
                    Phone
                  </div>

                  <a
                    href="tel:+919791300897"
                    className="font-bold text-[#14243D] hover:text-[#18B99A] transition-colors"
                  >
                    +91 97913 00897
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

    </main>
  );
}