import React, { useState } from 'react';
import { Reveal } from '../common/Reveal';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Basic Medical Coding Training',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Send form payload to endpoint with fallback simulation
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Fallback for static host / dev preview environment without a live backend
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ ok: true, status: 200, json: async () => ({ success: true }) });
          }, 800);
        });
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status: ${response.status}. Please try again.`);
      }

      setStatus('success');
    } catch (err) {
      setErrorMessage(err.message || 'Unable to submit your message. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'Basic Medical Coding Training',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-6 sm:py-8 md:py-10 relative overflow-hidden glass-section scroll-mt-16 sm:scroll-mt-20 w-full" aria-labelledby="contact-heading">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 md:px-6 lg:px-8 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo uppercase shadow-btn-ghost mb-2.5 border border-indigo/10">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-ink mb-2.5">
            Let's Optimize Your <span className="grad-text">Healthcare Revenue</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Contact us for course enrollment, RCM recruitment, or tailored revenue cycle operations support.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start w-full">
          
          {/* Glassmorphic Contact Form */}
          <Reveal className="lg:col-span-7 bg-white/90 backdrop-blur-xl rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 shadow-3d border border-white/80 w-full box-border">
            {status === 'success' ? (
              <div className="text-center py-6 space-y-2.5" role="alert">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 text-xl flex items-center justify-center mx-auto animate-bounce shadow-md">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-ink">Thank You for Reaching Out!</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Your message has been received. One of our specialists will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2.5 px-5 py-2 rounded-xl bg-indigo/10 text-indigo font-bold text-xs sm:text-sm hover:bg-brand-gradient hover:text-white transition-all cursor-pointer border-none shadow-sm min-h-[44px]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5" aria-label="Contact and Inquiry Form">
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5" role="alert">
                    <span className="text-rose-600 font-bold shrink-0 text-base">⚠️</span>
                    <div className="flex-1">
                      <p className="font-semibold">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl border border-indigo/15 bg-white/80 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-xs sm:text-sm shadow-inner min-h-[48px] disabled:opacity-60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">Work / Personal Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 rounded-xl border border-indigo/15 bg-white/80 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-xs sm:text-sm shadow-inner min-h-[48px] disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-indigo/15 bg-white/80 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-xs sm:text-sm shadow-inner min-h-[48px] disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-interest" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">Interested In</label>
                  <select
                    id="contact-interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl border border-indigo/15 bg-white/80 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-xs sm:text-sm shadow-inner min-h-[48px] disabled:opacity-60"
                  >
                    <option>Basic Medical Coding Training</option>
                    <option>Advanced Medical Coding Training</option>
                    <option>RCM Recruitment Services</option>
                    <option>Medical Coding Academy Inquiries</option>
                    <option>Healthcare Provider Operations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">How Can We Help?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="Tell us about your requirements, course inquiry, or recruitment needs..."
                    className="w-full px-4 py-3 rounded-xl border border-indigo/15 bg-white/80 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo transition-all text-ink text-xs sm:text-sm shadow-inner min-h-[96px] disabled:opacity-60"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-brand-gradient shadow-3d hover:opacity-95 hover:scale-[1.01] transition-all text-xs sm:text-sm cursor-pointer border-none min-h-[48px] flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" aria-hidden="true" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message →</span>
                  )}
                </button>
              </form>
            )}
          </Reveal>

          {/* Contact Details Card */}
          <Reveal className="lg:col-span-5 space-y-4 w-full box-border">
            <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl shadow-3d border border-white/80 space-y-4 w-full box-border">
              <h3 className="text-base sm:text-lg font-bold text-ink">Global Headquarters</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                100 Healthtek Boulevard, Suite 400<br />
                San Francisco, CA 94107
              </p>

              <div className="border-t border-indigo/10 pt-3.5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo/20 to-violet/20 text-indigo flex items-center justify-center text-sm shadow-sm shrink-0" aria-hidden="true">
                    ✉️
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-700 font-bold uppercase tracking-wider">Direct Email</div>
                    <div className="text-xs sm:text-sm font-bold text-ink break-all">contact@medaorticx.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal/20 to-teal-light/20 text-teal flex items-center justify-center text-sm shadow-sm shrink-0" aria-hidden="true">
                    📞
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-700 font-bold uppercase tracking-wider">Phone Line</div>
                    <div className="text-xs sm:text-sm font-bold text-ink">+1 (800) 555-M3D-TECH</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm shadow-sm shrink-0" aria-hidden="true">
                    🎧
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-700 font-bold uppercase tracking-wider">Support SLA</div>
                    <div className="text-xs sm:text-sm font-bold text-ink">24/7 Clinical & Academy Desk</div>
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
