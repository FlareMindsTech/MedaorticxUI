import React, { useState } from 'react';
import { Reveal } from '../common/Reveal';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden glass-section">
      {/* Section Content */}

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal variant="scaleRotate" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-4 border border-indigo/10">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-6">
            Let's Optimize Your <span className="grad-text">Revenue Cycle</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Glassmorphic Contact Form */}
          <Reveal variant="slideLeft" className="lg:col-span-7 glass-form p-8 sm:p-10 shadow-3d">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl flex items-center justify-center mx-auto animate-bounce shadow-md">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-ink">Thank You for Reaching Out!</h3>
                <p className="text-muted text-sm max-w-md mx-auto">
                  Your message has been received. One of our revenue cycle specialists will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-indigo/10 text-indigo font-bold text-sm hover:bg-brand-gradient hover:text-white transition-all cursor-pointer border-none shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Sarah Jenkins"
                    className="w-full px-4 py-3.5 rounded-xl border border-indigo/15 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-sm shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@metrohealth.org"
                    className="w-full px-4 py-3.5 rounded-xl border border-indigo/15 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-sm shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Organization / Practice</label>
                  <input
                    type="text"
                    placeholder="Metro Health System"
                    className="w-full px-4 py-3.5 rounded-xl border border-indigo/15 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-sm shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink mb-2">How Can We Help?</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your revenue cycle management or medical coding needs..."
                    className="w-full px-4 py-3.5 rounded-xl border border-indigo/15 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-sm shadow-inner"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-brand-gradient shadow-3d hover:opacity-95 hover:scale-[1.01] transition-all text-sm cursor-pointer border-none"
                >
                  Send Message →
                </button>
              </form>
            )}
          </Reveal>

          {/* Contact Details Card */}
          <Reveal variant="slideRight" delay={0.2} className="lg:col-span-5 space-y-6">
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-3d border border-white/80 space-y-6">
              <h3 className="text-xl font-bold text-ink">Global Headquarters</h3>
              <p className="text-sm text-muted leading-relaxed">
                100 Healthtek Boulevard, Suite 400<br />
                San Francisco, CA 94107
              </p>

              <div className="border-t border-indigo/10 pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo/20 to-violet/20 text-indigo flex items-center justify-center text-lg shadow-sm">
                    ✉️
                  </div>
                  <div>
                    <div className="text-xs text-grayLight font-bold uppercase">Direct Email</div>
                    <div className="text-sm font-bold text-ink">contact@medaorticx.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal/20 to-teal-light/20 text-teal flex items-center justify-center text-lg shadow-sm">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-grayLight font-bold uppercase">Phone Line</div>
                    <div className="text-sm font-bold text-ink">+1 (800) 555-M3D-TECH</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg shadow-sm">
                    🎧
                  </div>
                  <div>
                    <div className="text-xs text-grayLight font-bold uppercase">Support SLA</div>
                    <div className="text-sm font-bold text-ink">24/7 Clinical Desk Active</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
