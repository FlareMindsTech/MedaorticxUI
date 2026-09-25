import React, { useEffect, useRef } from "react";
import {
  ShieldCheck,
  Lock,
  Cookie,
  UserCheck,
  Database,
  Mail,
  Phone,
  ArrowLeft,
  Eye,
  Server,
  FileCheck,
  HeartPulse,
  Fingerprint,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   PRIVACY POLICY
========================================================= */

export default function PrivacyPolicy() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("privacy-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main className="privacy-page min-h-screen bg-[#F6FBFD] text-[#14243D] overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="privacy-hero relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(18,181,208,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(24,185,154,0.14),transparent_25%),linear-gradient(135deg,#ffffff,#f6fbfd)]" />

        <div className="privacy-grid absolute inset-0 opacity-40" />

        <div className="privacy-orbit privacy-orbit-one" />
        <div className="privacy-orbit privacy-orbit-two" />
        <div className="privacy-orbit privacy-orbit-three" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-24">

          <Link
            to="/"
            className="privacy-back inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#12B5D0] transition-colors mb-14"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

            {/* LEFT */}
            <div className="privacy-hero-content">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#12B5D0]/20 shadow-sm text-xs font-bold uppercase tracking-[0.18em] text-[#18B99A] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#18B99A] animate-pulse" />
                Privacy & Data Protection
              </div>

              <div className="flex items-start gap-5">

                <div className="relative shrink-0">

                  <div className="privacy-shield-glow absolute inset-0 rounded-[26px]" />

                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[26px] bg-[#14243D] flex items-center justify-center shadow-2xl">
                    <ShieldCheck
                      size={42}
                      strokeWidth={1.7}
                      className="text-[#8DE7F0]"
                    />

                    <span className="absolute -right-2 -top-2 w-7 h-7 rounded-full bg-[#18B99A] border-4 border-white flex items-center justify-center">
                      <Lock size={12} className="text-white" />
                    </span>
                  </div>

                </div>

                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#18B99A] mb-2">
                    MedAorticX HealthTek
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#14243D] leading-[1.05]">
                    Privacy
                    <span className="block text-[#12B5D0]">
                      Policy
                    </span>
                  </h1>
                </div>

              </div>

              <p className="mt-7 text-lg sm:text-xl text-slate-600 max-w-2xl leading-8">
                How we collect, use, and protect your information while
                delivering healthcare training, recruitment, and RCM services.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <div className="privacy-pill">
                  <ShieldCheck size={15} />
                  Secure
                </div>

                <div className="privacy-pill">
                  <Database size={15} />
                  Protected
                </div>

                <div className="privacy-pill">
                  <UserCheck size={15} />
                  Responsible
                </div>

              </div>

              <div className="mt-7 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
                <FileCheck size={16} className="text-[#12B5D0]" />
                Effective Date: September 11, 2026
              </div>

            </div>

            {/* RIGHT VISUAL */}
            <PrivacyVisual />

          </div>

          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
                Explore Policy
              </span>

              <ChevronDown
                size={20}
                className="animate-bounce text-[#12B5D0]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="relative py-16 sm:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <div className="relative">

            <div className="privacy-timeline absolute left-[24px] sm:left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-[#12B5D0] via-[#18B99A] to-transparent" />

            {/* 01 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="01"
              title="OVERVIEW"
              icon={<ShieldCheck size={21} />}
            >
              <p>
                This Privacy Policy explains how MedAorticx HealthTek
                (“MedAorticx,” “we,” “our,” or “us”) collects, uses, and
                protects personal information gathered through our website,
                when you enquire about or register for our training programs,
                apply for a role with us, or use our Career & RCM Recruitment
                Support services.
              </p>
            </AnimatedPolicyCard>

            {/* 02 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="02"
              title="INFORMATION WE COLLECT"
              icon={<Database size={21} />}
            >
              <h3>Automatically Collected Information</h3>

              <p>
                As with most websites, our server logs may record details such
                as your IP address, browser type, device information, referring
                page, and the time and duration of your visit.
              </p>

              <h3>Cookies</h3>

              <p>
                We may use cookies or similar technologies to remember your
                preferences and improve your experience on our website. You can
                control or disable cookies through your browser settings,
                though this may limit some website features.
              </p>

              <h3>Information You Provide to Us</h3>

              <p>
                This may include your name, email address, mobile/WhatsApp
                number, residential address, date of birth, educational
                qualifications, resume or CV, course preferences, payment and
                transaction details, and any other information you submit
                through our enquiry, admission, registration, or job application
                forms.
              </p>
            </AnimatedPolicyCard>

            {/* 03 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="03"
              title="HOW WE USE YOUR INFORMATION"
              icon={<UserCheck size={21} />}
            >
              <PolicyList
                items={[
                  "Respond to enquiries and provide information about our courses and services",
                  "Process admissions and registrations for training programs",
                  "Process job applications and career or recruitment support requests",
                  "Communicate class schedules, updates, and service-related information",
                  "Process payments for our services",
                  "Improve our website, courses, and services",
                  "Meet applicable legal and administrative requirements",
                ]}
              />
            </AnimatedPolicyCard>

            {/* 04 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="04"
              title="SHARING & DISCLOSURE OF INFORMATION"
              icon={<Lock size={21} />}
            >
              <p>
                MedAorticx HealthTek does not sell, rent, or lease your personal
                information to third parties for commercial purposes.
              </p>

              <p>
                We may share information, on a need-to-know basis, with our
                authorized team members, service providers (such as payment
                processors or IT service providers), placement or recruitment
                partners (with your consent), and government or legal
                authorities where required by law.
              </p>
            </AnimatedPolicyCard>

            {/* 05 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="05"
              title="CLIENT & PATIENT DATA (RCM SERVICES)"
              icon={<HeartPulse size={21} />}
            >
              <p>
                This Privacy Policy governs personal information collected
                through our website and the activities described above. It does
                not apply to patient or health information (PHI) that
                MedAorticx HealthTek processes on behalf of healthcare clients
                under Revenue Cycle Management (RCM) service agreements.
              </p>

              <p>
                Such information is handled in accordance with the applicable
                client agreement, our internal Client Confidentiality & Data
                Protection Policy, and applicable law.
              </p>
            </AnimatedPolicyCard>

            {/* 06 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="06"
              title="DATA SECURITY"
              icon={<Lock size={21} />}
            >
              <p>
                We adopt reasonable administrative, physical, and technical
                safeguards to protect personal information against unauthorized
                access, misuse, alteration, or disclosure.
              </p>

              <p>
                However, no method of transmission or storage over the internet
                can be guaranteed to be completely secure.
              </p>
            </AnimatedPolicyCard>

            {/* 07 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="07"
              title="DATA RETENTION & DELETION"
              icon={<Database size={21} />}
            >
              <p>
                Personal information is retained only for as long as reasonably
                necessary to fulfil the purposes described in this policy,
                unless a longer period is required by law or for legitimate
                business or record-keeping purposes.
              </p>

              <p>
                You may request deletion of your personal information from our
                records by writing to us at the email address below, from your
                registered email ID.
              </p>
            </AnimatedPolicyCard>

            {/* 08 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="08"
              title="YOUR CHOICES"
              icon={<UserCheck size={21} />}
            >
              <p>
                If you have subscribed to receive updates from us, you may
                unsubscribe at any time using the instructions in our emails.
              </p>

              <p>
                You may also manage or block cookies through your browser
                settings, though this may affect access to certain website
                features.
              </p>
            </AnimatedPolicyCard>

            {/* 09 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="09"
              title="CHILDREN'S PRIVACY"
              icon={<UserCheck size={21} />}
            >
              <p>
                Our website and services are intended for adults seeking
                training, career, or RCM services.
              </p>

              <p>
                We do not knowingly collect personal information from minors
                without appropriate parental or guardian consent.
              </p>
            </AnimatedPolicyCard>

            {/* 10 */}
            <AnimatedPolicyCard
              ref={addSectionRef}
              number="10"
              title="CHANGES TO THIS POLICY"
              icon={<ShieldCheck size={21} />}
            >
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable law.
              </p>

              <p>
                The updated version will be posted on this page with a revised
                effective date.
              </p>
            </AnimatedPolicyCard>

          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

         <section
  ref={addSectionRef}
  className="privacy-contact relative overflow-hidden mt-14 rounded-[32px] bg-[#14243D] p-7 sm:p-10 lg:p-12"
>

            <div className="absolute inset-0 opacity-30">
              <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-[#12B5D0] blur-[100px]" />
              <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-[#18B99A] blur-[100px]" />
            </div>

            <div className="relative grid lg:grid-cols-[1fr_0.8fr] gap-10 items-center">

              <div>

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Mail size={22} className="text-[#8DE7F0]" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-[#8DE7F0] font-bold">
                      Section 11
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      CONTACT US
                    </h2>
                  </div>

                </div>

                <p className="text-slate-300 leading-8 max-w-xl">
                  If you have questions about this Privacy Policy or how your
                  information is handled, please contact us:
                </p>

              </div>

              <div className="grid gap-4">

                <a
                  href="mailto:medaorticx@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] border border-white/10 p-5 hover:bg-white/[0.12] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#12B5D0]/10 flex items-center justify-center">
                    <Mail size={19} className="text-[#12B5D0]" />
                  </div>

                  <div>
                    <div className="text-xs text-slate-400">
                      Privacy Contact
                    </div>

                    <div className="text-white font-semibold break-all">
                      medaorticx@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919791300897"
                  className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] border border-white/10 p-5 hover:bg-white/[0.12] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#18B99A]/10 flex items-center justify-center">
                    <Phone size={19} className="text-[#18B99A]" />
                  </div>

                  <div>
                    <div className="text-xs text-slate-400">
                      Phone
                    </div>

                    <div className="text-white font-semibold">
                      +91 97913 00897
                    </div>
                  </div>
                </a>

              </div>

            </div>

          </section>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-slate-200 bg-white py-7">

        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">

          <span>
            © {new Date().getFullYear()} MedAorticX Healthtek. All rights
            reserved.
          </span>

          <div className="flex items-center gap-6">

            <Link
              to="/terms"
              className="hover:text-[#12B5D0] transition-colors"
            >
              Terms of Use
            </Link>

            <Link
              to="/"
              className="hover:text-[#12B5D0] transition-colors"
            >
              Home
            </Link>

          </div>

        </div>

      </footer>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`

        /* ==============================
           HERO
        ============================== */

        .privacy-hero {
          min-height: 680px;
        }

        .privacy-grid {
          background-image:
            linear-gradient(rgba(20,36,61,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,36,61,0.035) 1px, transparent 1px);
          background-size: 45px 45px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent
          );
        }

        .privacy-orbit {
          position: absolute;
          border-radius: 9999px;
          border: 1px solid rgba(18,181,208,0.14);
          pointer-events: none;
        }

        .privacy-orbit-one {
          width: 500px;
          height: 500px;
          right: -180px;
          top: -160px;
          animation: orbitFloat 12s ease-in-out infinite;
        }

        .privacy-orbit-two {
          width: 330px;
          height: 330px;
          right: -80px;
          top: -80px;
          border-color: rgba(24,185,154,0.16);
          animation: orbitFloat 9s ease-in-out infinite reverse;
        }

        .privacy-orbit-three {
          width: 180px;
          height: 180px;
          right: 80px;
          top: 60px;
          border-color: rgba(18,181,208,0.2);
          animation: orbitFloat 7s ease-in-out infinite;
        }

        @keyframes orbitFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(0, 18px, 0) rotate(8deg);
          }
        }

        .privacy-back {
          animation: fadeDown 0.7s ease both;
        }

        .privacy-hero-content {
          animation: heroEnter 0.9s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .privacy-shield-glow {
          background: rgba(18,181,208,0.35);
          filter: blur(22px);
          animation: shieldGlow 3s ease-in-out infinite;
        }

        @keyframes shieldGlow {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.92);
          }

          50% {
            opacity: 0.7;
            transform: scale(1.08);
          }
        }

        .privacy-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(18,181,208,0.15);
          color: #475569;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 5px 20px rgba(20,36,61,0.05);
          transition: all 0.3s ease;
        }

        .privacy-pill:hover {
          transform: translateY(-3px);
          border-color: rgba(18,181,208,0.4);
          box-shadow: 0 10px 25px rgba(18,181,208,0.1);
        }

        /* ==============================
           VISUAL
        ============================== */

        .privacy-visual {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: visualEnter 1s cubic-bezier(.22,1,.36,1) 0.15s both;
        }

        @keyframes visualEnter {
          from {
            opacity: 0;
            transform: translateX(45px) scale(0.94);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .privacy-visual-card {
          position: relative;
          width: min(100%, 390px);
          min-height: 370px;
          border-radius: 36px;
          background:
            linear-gradient(
              145deg,
              rgba(20,36,61,0.98),
              rgba(24,53,75,0.98)
            );
          box-shadow:
            0 35px 80px rgba(20,36,61,0.22),
            inset 0 1px rgba(255,255,255,0.12);
          overflow: hidden;
        }

        .privacy-visual-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 25% 20%,
              rgba(18,181,208,0.35),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(24,185,154,0.28),
              transparent 35%
            );
        }

        .privacy-visual-ring {
          position: absolute;
          width: 270px;
          height: 270px;
          border-radius: 50%;
          border: 1px solid rgba(141,231,240,0.18);
          animation: visualRing 10s linear infinite;
        }

        .privacy-visual-ring::before,
        .privacy-visual-ring::after {
          content: "";
          position: absolute;
          inset: 25px;
          border-radius: 50%;
          border: 1px dashed rgba(141,231,240,0.14);
        }

        .privacy-visual-ring::after {
          inset: 60px;
          border-style: solid;
          border-color: rgba(24,185,154,0.2);
        }

        @keyframes visualRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .privacy-visual-shield {
          position: relative;
          z-index: 2;
          width: 120px;
          height: 140px;
          clip-path: polygon(
            50% 0%,
            90% 16%,
            90% 56%,
            76% 78%,
            50% 100%,
            24% 78%,
            10% 56%,
            10% 16%
          );
          background: linear-gradient(
            145deg,
            #12B5D0,
            #18B99A
          );
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 15px 25px rgba(18,181,208,0.3));
          animation: shieldFloat 4s ease-in-out infinite;
        }

        @keyframes shieldFloat {
          0%, 100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }

        .privacy-visual-dots span {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #8DE7F0;
          box-shadow: 0 0 15px rgba(141,231,240,0.7);
          animation: dotPulse 2.5s ease-in-out infinite;
        }

        .privacy-visual-dots span:nth-child(1) {
          left: 22%;
          top: 25%;
        }

        .privacy-visual-dots span:nth-child(2) {
          right: 18%;
          top: 35%;
          animation-delay: .5s;
        }

        .privacy-visual-dots span:nth-child(3) {
          left: 28%;
          bottom: 23%;
          animation-delay: 1s;
        }

        .privacy-visual-dots span:nth-child(4) {
          right: 25%;
          bottom: 20%;
          animation-delay: 1.5s;
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(0.7);
            opacity: 0.4;
          }

          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        .privacy-mini-card {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 11px 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          color: white;
          font-size: 11px;
          font-weight: 700;
          animation: miniFloat 4s ease-in-out infinite;
        }

        .privacy-mini-one {
          left: 20px;
          top: 70px;
        }

        .privacy-mini-two {
          right: 18px;
          bottom: 75px;
          animation-delay: 1s;
        }

        @keyframes miniFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        /* ==============================
           CONTENT REVEAL
        ============================== */

.privacy-reveal {
  opacity: 0;
  transform: translateY(45px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(.22, 1, .36, 1);
}

.privacy-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

        .privacy-card {
          position: relative;
          margin-left: 70px;
          margin-bottom: 28px;
          padding: 30px;
          border-radius: 28px;
          background: rgba(255,255,255,0.95);
          border: 1px solid #e2e8f0;
          box-shadow:
            0 10px 30px rgba(20,36,61,0.045);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .privacy-card:hover {
          transform: translateY(-5px);
          border-color: rgba(18,181,208,0.25);
          box-shadow:
            0 20px 45px rgba(20,36,61,0.08);
        }

        .privacy-card-number {
          position: absolute;
          left: -70px;
          top: 22px;
          width: 50px;
          height: 50px;
          border-radius: 17px;
          background: #14243D;
          border: 4px solid #F6FBFD;
          color: #8DE7F0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .05em;
          box-shadow: 0 8px 25px rgba(20,36,61,0.16);
          z-index: 3;
        }

        .privacy-card-icon {
          width: 46px;
          height: 46px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(18,181,208,0.08);
          color: #12B5D0;
          flex-shrink: 0;
          transition: transform .35s ease;
        }

        .privacy-card:hover .privacy-card-icon {
          transform: rotate(-8deg) scale(1.08);
        }

        .privacy-content h3 {
          color: #14243D;
          font-size: 1rem;
          font-weight: 800;
          margin-top: 1.5rem;
          margin-bottom: .55rem;
        }

        .privacy-content p {
          color: #64748b;
          line-height: 1.85;
          margin-bottom: 1rem;
        }

        .privacy-content p:last-child {
          margin-bottom: 0;
        }

        .privacy-content ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: .8rem;
        }

        .privacy-content li {
          position: relative;
          padding: 13px 16px 13px 42px;
          border-radius: 14px;
          background: #f8fbfc;
          border: 1px solid #edf2f4;
          color: #64748b;
          line-height: 1.65;
          transition: all .3s ease;
        }

        .privacy-content li:hover {
          background: #f1fbfd;
          border-color: rgba(18,181,208,.18);
          transform: translateX(4px);
        }

        .privacy-content li::before {
          content: "✓";
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg,#12B5D0,#18B99A);
          color: white;
          font-size: 10px;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ==============================
           RESPONSIVE
        ============================== */

        @media (max-width: 640px) {

          .privacy-hero {
            min-height: auto;
          }

          .privacy-visual {
            min-height: 380px;
          }

          .privacy-visual-card {
            min-height: 330px;
          }

          .privacy-card {
            margin-left: 0;
            padding: 23px;
            border-radius: 23px;
          }

          .privacy-card-number {
            position: relative;
            left: auto;
            top: auto;
            margin-bottom: 16px;
            width: 43px;
            height: 43px;
          }

          .privacy-timeline {
            display: none;
          }

          .privacy-card-icon {
            width: 42px;
            height: 42px;
          }

          .privacy-content li {
            padding-left: 38px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }


        /* =====================================================
           CONTACT SECTION FIX
        ===================================================== */

        .privacy-contact {
          background: #14243D !important;
          opacity: 1 !important;
          transform: none !important;
          position: relative !important;
          z-index: 10000 !important;
          isolation: isolate !important;
        }

        .privacy-contact > .absolute {
          opacity: 0.30 !important;
          pointer-events: none !important;
          z-index: 0 !important;
        }

        .privacy-contact > .relative {
          position: relative !important;
          z-index: 2 !important;
        }

        .privacy-contact h2 {
          color: #ffffff !important;
        }

        .privacy-contact p {
          color: #cbd5e1 !important;
        }

        .privacy-contact a {
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.10) !important;
        }

        .privacy-contact a .text-white {
          color: #ffffff !important;
        }

      `}</style>

    </main>
  );
}


/* =========================================================
   HERO VISUAL
========================================================= */

function PrivacyVisual() {
  return (
    <div className="privacy-visual">

      <div className="privacy-visual-card">

        <div className="privacy-visual-ring" />

        <div className="privacy-visual-dots">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="privacy-mini-card privacy-mini-one">
          <Fingerprint
            size={16}
            className="text-[#8DE7F0]"
          />
          Data Protected
        </div>

        <div className="privacy-mini-card privacy-mini-two">
          <Server
            size={16}
            className="text-[#18B99A]"
          />
          Secure Storage
        </div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="privacy-visual-shield">

            <ShieldCheck
              size={60}
              strokeWidth={1.5}
              className="text-white"
            />

          </div>

        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 text-center">

          <div className="text-white font-bold text-lg">
            Your Privacy Matters
          </div>

          <div className="text-slate-400 text-xs mt-1">
            Secure • Responsible • Transparent
          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   POLICY CARD
========================================================= */

const AnimatedPolicyCard = React.forwardRef(
  ({ number, title, icon, children }, ref) => {
    return (
      <article
        ref={ref}
        className="privacy-card privacy-reveal"
      >

        <div className="privacy-card-number">
          {number}
        </div>

        <div className="flex items-start gap-4 mb-6">

          <div className="privacy-card-icon">
            {icon}
          </div>

          <div>
            <div className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#18B99A] mb-1">
              SECTION {number}
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#14243D] leading-tight">
              {title}
            </h2>
          </div>

        </div>

        <div className="privacy-content">
          {children}
        </div>

      </article>
    );
  }
);


/* =========================================================
   POLICY LIST
========================================================= */

function PolicyList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}