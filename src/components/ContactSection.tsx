import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, HeartPulse, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { InquiryFormData } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    medicineName: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill out the required fields: Name, Phone, and Message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate successful form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        medicineName: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact-page-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Page Header */}
      <div className="text-center">
        <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
          Contact Our Store
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          Have an inquiry about medicine availability? Send us a message below, walk into our store on Tekari Road, or give us a direct phone call.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info (Left) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800/60 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display flex items-center space-x-2">
              <HeartPulse className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>Store Information</span>
            </h3>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm shrink-0">
                  <MapPin className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-950 dark:text-white">Our Address</p>
                  <p className="text-xs sm:text-sm mt-0.5">{BUSINESS_INFO.address}</p>
                  <a
                    href={BUSINESS_INFO.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold hover:underline mt-1 inline-flex items-center space-x-1 group"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm shrink-0">
                  <Phone className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-950 dark:text-white">Call Store Phone</p>
                  <p className="text-xs sm:text-sm mt-0.5">{BUSINESS_INFO.phoneFormatted}</p>
                  <a
                    href={BUSINESS_INFO.phoneCallUrl}
                    className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold hover:underline mt-1 inline-block"
                  >
                    Click to Call Store Now
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm shrink-0">
                  <Mail className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-950 dark:text-white">Email Address</p>
                  <p className="text-xs sm:text-sm mt-0.5">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm shrink-0">
                  <Clock className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-950 dark:text-white">Working Hours</p>
                  <div className="text-xs sm:text-sm mt-1 space-y-1">
                    <p className="flex justify-between">
                      <span className="text-slate-500">Mon - Sat:</span>
                      <span className="font-semibold">{BUSINESS_INFO.workingHours.weekdays}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-500">Sunday:</span>
                      <span className="font-semibold">{BUSINESS_INFO.workingHours.sunday}</span>
                    </p>
                    <p className="text-[11px] text-rose-500 font-semibold pt-1 border-t border-slate-200/50 dark:border-slate-800/50 mt-1">
                      {BUSINESS_INFO.workingHours.emergency}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800/85 shadow-xl relative overflow-hidden">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
                <div className="mx-auto bg-emerald-100 dark:bg-emerald-950/40 p-4 rounded-full w-16 h-16 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Thank you for contacting Sri Pawanputra Hanuman Medical. Our team will review your inquiry and call you back shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form id="contact-inquiry-form" onSubmit={handleFormSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white font-display mb-4">
                  Send a Quick Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="inquiry-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Mohan Prasad"
                      className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="inquiry-phone" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="inquiry-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., 9631715619"
                      className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="inquiry-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-slate-450 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="inquiry-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., mohan@gmail.com"
                      className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>

                  {/* Medicine Name Target */}
                  <div className="space-y-1">
                    <label htmlFor="inquiry-med" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Medicine Inquiry <span className="text-slate-450 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-med"
                      name="medicineName"
                      value={formData.medicineName}
                      onChange={handleInputChange}
                      placeholder="e.g., Dolo 650 or Accu-chek strips"
                      className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="inquiry-msg" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="inquiry-msg"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your requirement. If asking for rare drugs, please state dosage, packing, and doctor recommendation details."
                    className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-all disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Embedded Google Map Section */}
      <div id="google-map-iframe-container" className="space-y-4">
        <h3 className="text-xl font-bold text-slate-950 dark:text-white font-display text-center">
          Locate Our Store
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-sm mx-auto -mt-2">
          Choti, Tekari Rd, near Kharkhura, Delha, Gaya, Bihar 823002
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 h-96 w-full">
          <iframe
            src={BUSINESS_INFO.mapCoordinates}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Pawanputra Hanuman Medical Location Map"
          />
        </div>
      </div>

    </section>
  );
}
