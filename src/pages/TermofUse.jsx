import React, { useEffect, useRef } from "react";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Lock,
  AlertTriangle,
  ExternalLink,
  Scale,
  Mail,
  Phone,
  CheckCircle2,
  Globe2,
  Gavel,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import termsHeroImg from '../assets/Termofuse.avif';

const COLORS = {
  navy: "#14243D",
  cyan: "#12B5D0",
  green: "#18B99A",
  light: "#F6FBFD",
};

const sections = [
  {
    number: "01",
    title: "ACCEPTANCE OF TERMS",
    icon: CheckCircle2,
    content: (
      <p>
        By accessing or using the MedAorticx HealthTek website, you acknowledge
        that you have read, understood, and agree to be bound by these Terms of
        Use and all applicable laws and regulations.
      </p>
    ),
  },
  {
    number: "02",
    title: "ABOUT MEDAORTICX HEALTHTEK",
    icon: Globe2,
    content: (
      <p>
        MedAorticx HealthTek provides healthcare-related services, including
        medical coding education, revenue cycle management support, healthcare
        technology solutions, and related professional services.
      </p>
    ),
  },
  {
    number: "03",
    title: "USE OF THIS WEBSITE",
    icon: FileText,
    content: (
      <>
        <p>
          You may use this website only for lawful purposes and in accordance
          with these Terms of Use.
        </p>

        <p className="mt-4">
          You agree not to misuse the website, interfere with its operation,
          attempt unauthorized access, or use website content for unlawful or
          prohibited purposes.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "INTELLECTUAL PROPERTY",
    icon: ShieldCheck,
    content: (
      <p>
        All website content, including text, graphics, logos, images, designs,
        branding, software, and other materials, is owned by or licensed to
        MedAorticx HealthTek unless otherwise stated.
      </p>
    ),
  },
  {
    number: "05",
    title: "PROHIBITED USES",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          You must not use this website to violate any applicable law or
          regulation.
        </p>

        <ul className="mt-5 space-y-3">
          {[
            "Attempt to gain unauthorized access to website systems.",
            "Interfere with the security or operation of the website.",
            "Copy, reproduce, modify, or distribute protected content without permission.",
            "Use the website for fraudulent, harmful, or unlawful activities.",
          ].map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span
                className="mt-1.5 h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: COLORS.green }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "06",
    title: "THIRD-PARTY LINKS",
    icon: ExternalLink,
    content: (
      <p>
        This website may contain links to third-party websites or services.
        These links are provided for convenience and informational purposes.
        MedAorticx HealthTek does not control and is not responsible for the
        content, availability, policies, or practices of third-party websites.
      </p>
    ),
  },
  {
    number: "07",
    title: "DISCLAIMER OF WARRANTIES",
    icon: Lock,
    content: (
      <p>
        The website and its content are provided on an "as available" and "as
        is" basis. MedAorticx HealthTek does not guarantee that the website
        will always be available, secure, accurate, complete, or free from
        errors or interruptions.
      </p>
    ),
  },
  {
    number: "08",
    title: "LIMITATION OF LIABILITY",
    icon: ShieldCheck,
    content: (
      <p>
        To the maximum extent permitted by applicable law, MedAorticx HealthTek
        shall not be liable for any direct, indirect, incidental, consequential,
        special, or other damages resulting from your use of or inability to
        use this website.
      </p>
    ),
  },
  {
    number: "09",
    title: "GOVERNING LAW & JURISDICTION",
    icon: Gavel,
    content: (
      <p>
        These Terms of Use shall be governed by and interpreted in accordance
        with the laws of India. Any disputes arising from or relating to these
        Terms shall be subject to the exclusive jurisdiction of the courts at
        Tirupur / Coimbatore, Tamil Nadu.
      </p>
    ),
  },
  {
    number: "10",
    title: "CHANGES TO THESE TERMS",
    icon: Sparkles,
    content: (
      <p>
        MedAorticx HealthTek reserves the right to update or modify these Terms
        of Use from time to time. Changes will become effective when posted on
        this website. Your continued use of the website after changes are
        posted constitutes acceptance of the updated Terms.
      </p>
    ),
  },
];

function AnimatedSection({ children, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("terms-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="terms-section"
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {children}
    </article>
  );
}

function SectionCard({ section, index }) {
  const Icon = section.icon;

  return (
    <AnimatedSection index={index}>
      <div className="relative grid grid-cols-[60px_1fr] md:grid-cols-[90px_1fr] gap-5 md:gap-8">
        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div
            className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.green})`,
            }}
          >
            <Icon size={23} />
          </div>

          {index !== sections.length - 1 && (
            <div
              className="w-px flex-1 mt-4 min-h-[80px]"
              style={{
                background: `linear-gradient(to bottom, ${COLORS.cyan}, ${COLORS.green}, transparent)`,
              }}
            />
          )}
        </div>

        {/* Content */}
        <div
          className="group relative mb-10 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
        >
          {/* Top gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.green})`,
            }}
          />

          {/* Number */}
          <div
            className="absolute top-5 right-6 text-4xl md:text-5xl font-black opacity-[0.06]"
            style={{ color: COLORS.navy }}
          >
            {section.number}
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold tracking-[0.2em]"
                style={{ color: COLORS.cyan }}
              >
                SECTION {section.number}
              </span>
            </div>

            <h2
              className="text-xl md:text-2xl font-bold mb-5"
              style={{ color: COLORS.navy }}
            >
              {section.title}
            </h2>

            <div className="text-[15px] md:text-base leading-8 text-slate-600">
              {section.content}
            </div>
          </div>

          {/* Decorative circle */}
          <div
            className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-[0.05] group-hover:scale-150 transition-transform duration-700"
            style={{
              background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.green})`,
            }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function TermsOfUse() {
  return (
    <>
      <style>{`
        .terms-page {
          background:
            linear-gradient(
              180deg,
              #F6FBFD 0%,
              #FFFFFF 45%,
              #F6FBFD 100%
            );
          color: ${COLORS.navy};
        }

        .terms-hero-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .terms-orb {
          animation: termsFloat 7s ease-in-out infinite;
        }

        .terms-orb-two {
          animation: termsFloatTwo 9s ease-in-out infinite;
        }

        .terms-image {
          animation: imageReveal 1.1s ease-out both;
        }

        .terms-title {
          animation: titleReveal .9s ease-out both;
        }

        .terms-subtitle {
          animation: titleReveal 1s ease-out .15s both;
        }

        .terms-meta {
          animation: titleReveal 1s ease-out .3s both;
        }

        .terms-section {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity .7s ease,
            transform .7s ease;
        }

        .terms-section.terms-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .terms-shine {
          position: relative;
          overflow: hidden;
        }

        .terms-shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.25),
            transparent
          );
          transform: skewX(-20deg);
          animation: shineMove 5s infinite;
        }

        .terms-image-wrap::before {
          content: "";
          position: absolute;
          inset: -12px;
          border: 1px solid rgba(18,181,208,.3);
          border-radius: 32px;
          animation: borderPulse 3s ease-in-out infinite;
        }

        @keyframes termsFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -25px, 0);
          }
        }

        @keyframes termsFloatTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(20px, 20px, 0) rotate(8deg);
          }
        }

        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: scale(.9) translateX(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shineMove {
          0% {
            left: -120%;
          }
          25%, 100% {
            left: 140%;
          }
        }

        @keyframes borderPulse {
          0%, 100% {
            transform: scale(1);
            opacity: .45;
          }
          50% {
            transform: scale(1.025);
            opacity: .9;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .terms-orb,
          .terms-orb-two,
          .terms-image,
          .terms-title,
          .terms-subtitle,
          .terms-meta,
          .terms-shine::after,
          .terms-image-wrap::before {
            animation: none !important;
          }

          .terms-section {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <main
        className="terms-page min-h-screen"
        style={{
          background:
            "linear-gradient(180deg, #F6FBFD 0%, #FFFFFF 45%, #F6FBFD 100%)",
        }}
      >
        {/* ================= HERO ================= */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0B1B32 0%, #14243D 45%, #0F3448 100%)",
          }}
        >
          <div className="terms-hero-grid absolute inset-0" />

          {/* Animated background shapes */}
          <div
            className="terms-orb absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: COLORS.cyan }}
          />

          <div
            className="terms-orb-two absolute top-40 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: COLORS.green }}
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 md:py-16">
            {/* Back */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium mb-12"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>

            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <div
                  className="terms-meta inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
                  style={{
                    borderColor: "rgba(18,181,208,.35)",
                    backgroundColor: "rgba(18,181,208,.08)",
                    color: "#8FEAF5",
                  }}
                >
                  <FileText size={15} />
                  <span className="text-xs font-bold tracking-[0.18em] uppercase">
                    Legal Document
                  </span>
                </div>

                <h1
                  className="terms-title text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]"
                >
                  Terms of
                  <span
                    className="block"
                    style={{
                      background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.green})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Use
                  </span>
                </h1>

                <p className="terms-subtitle mt-7 text-lg md:text-xl text-slate-300 max-w-2xl leading-8">
                  Terms governing your use of this website and the services
                  provided by MedAorticx HealthTek.
                </p>

                <div className="terms-meta mt-8 flex flex-wrap gap-4">
             <div className="px-5 py-3 rounded-2xl bg-[#14243D]/80 border border-white/10">
                    <p className="text-xs text-slate-400">Effective Date</p>
                    <p className="text-sm font-semibold text-white mt-1">
                      September 11, 2026
                    </p>
                  </div>

             <div className="px-5 py-3 rounded-2xl bg-[#14243D]/80 border border-white/10">
                    <p className="text-xs text-slate-400">Document</p>
                    <p className="text-sm font-semibold text-white mt-1">
                      Website Terms
                    </p>
                  </div>
                </div>
              </div>

              {/* Right image */}
              <div className="terms-image relative terms-image-wrap mx-auto w-full max-w-xl">
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={termsHeroImg}
                    alt="Healthcare technology"
                    className="terms-shine w-full h-[360px] md:h-[440px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#14243D] via-transparent to-transparent" />

                  {/* Floating badge */}
               <div className="absolute left-5 bottom-5 right-5 p-5 rounded-2xl bg-[#14243D]/90 backdrop-blur-xl border border-white/20">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                        style={{
                          background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.green})`,
                        }}
                      >
                        <Scale size={22} />
                      </div>

                      <div>
                        <p className="text-white font-bold">
                          Clear & Transparent
                        </p>
                        <p className="text-slate-300 text-sm mt-1">
                          Website usage guidelines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom curve */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#F6FBFD] rounded-t-[50%]" />
        </section>

        {/* ================= INTRO ================= */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p
                className="text-sm font-bold tracking-[0.2em] uppercase"
                style={{ color: COLORS.cyan }}
              >
                MEDAORTICX HEALTHTEK
              </p>

              <h2
                className="mt-3 text-3xl md:text-4xl font-black"
                style={{ color: COLORS.navy }}
              >
                Website Terms & Conditions
              </h2>

              <p className="mt-4 max-w-3xl text-slate-600 leading-8">
                Please read these Terms of Use carefully before accessing or
                using the MedAorticx HealthTek website.
              </p>
            </div>

            <div
              className="hidden md:flex w-16 h-16 rounded-2xl items-center justify-center"
              style={{
                backgroundColor: "rgba(18,181,208,.1)",
                color: COLORS.cyan,
              }}
            >
              <FileText size={28} />
            </div>
          </div>
        </section>

        {/* ================= TERMS TIMELINE ================= */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
          <div className="max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <SectionCard
                key={section.number}
                section={section}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0B1B32 0%, #14243D 50%, #0F3448 100%)",
            }}
          />

          <div
            className="terms-orb absolute -left-20 -bottom-40 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: COLORS.cyan }}
          />

          <div
            className="terms-orb-two absolute right-0 top-0 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: COLORS.green }}
          />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
            <div className="text-center">
              <div
                className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.green})`,
                }}
              >
                <Mail size={27} />
              </div>

              <p
                className="text-sm font-bold tracking-[0.2em] uppercase"
                style={{ color: "#7DE8E4" }}
              >
                HAVE A QUESTION?
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">
                Contact Our Legal Team
              </h2>

              <p className="mt-4 text-slate-300 max-w-xl mx-auto leading-7">
                If you have questions regarding these Terms of Use, please
                contact MedAorticx HealthTek.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
              <a
                href="mailto:medaorticx@gmail.com"
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(18,181,208,.15)",
                      color: "#6DE6F4",
                    }}
                  >
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-white font-medium mt-1">
                      medaorticx@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+919791300897"
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(24,185,154,.15)",
                      color: "#65E0C3",
                    }}
                  >
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Phone</p>
                    <p className="text-white font-medium mt-1">
                      +91 97913 00897
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-1"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.green})`,
                }}
              >
                <ArrowLeft size={17} />
                Return to Home
              </Link>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
      
      </main>
    </>
  );
}