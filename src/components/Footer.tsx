import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, HeartPulse, ExternalLink, ShieldCheck, Mail, ArrowUp } from 'lucide-react';
import { ActiveTab } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative">
      
      {/* Scroll to Top button embedded in footer style */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          id="back-to-top-btn"
          onClick={handleScrollToTop}
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-600/20 group"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Store Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <HeartPulse className="h-5 w-5" />
              </div>
              <span className="text-white font-display font-bold text-lg leading-tight">
                Sri Pawanputra Hanuman Medical
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your most trusted family medical store and pharmacy in Tekari Rd, Gaya. Providing 100% genuine medicines, baby products, medical supplies, and general healthcare goods for over a decade.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-800/50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-800">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Government Registered & Licensed Retail Drug Pharmacy.</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase font-mono relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Page', value: 'home' as ActiveTab },
                { label: 'About Our Pharmacy', value: 'about' as ActiveTab },
                { label: 'Medicines & Services', value: 'services' as ActiveTab },
                { label: 'Store Photo Gallery', value: 'gallery' as ActiveTab },
                { label: 'Contact Us & Location', value: 'contact' as ActiveTab },
                { label: 'WhatsApp Order Form', value: 'whatsapp-order' as ActiveTab }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.value)}
                    className="hover:text-emerald-400 text-slate-400 transition-colors flex items-center space-x-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase font-mono relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id} className="flex items-start space-x-2">
                  <span className="text-emerald-500 select-none">•</span>
                  <span>{service.title}</span>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-emerald-500 hover:text-emerald-400 font-semibold text-xs mt-1 inline-flex items-center space-x-1 group"
                >
                  <span>View All Services</span>
                  <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Store Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase font-mono relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
              Contact & Hours
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="h-4 w-4 text-emerald-500 shrink-0" />
                <div>
                  <p className="text-xs">Mon - Sat: {BUSINESS_INFO.workingHours.weekdays}</p>
                  <p className="text-xs">Sun: {BUSINESS_INFO.workingHours.sunday}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href={BUSINESS_INFO.phoneCallUrl}
                  className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-750 text-white px-3 py-2 rounded-lg text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-sky-400" />
                  <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5 fill-white/10" />
                  <span>WhatsApp: Order Direct</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p>© {new Date().getFullYear()} Sri Pawanputra Hanuman Medical. All rights reserved. | Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 underline decoration-dotted underline-offset-2 transition-colors">WMIT</a></p>
            <p className="mt-1 text-[10px]">Licensed Retail Chemist & Druggist. Gaya, Bihar, India.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => setModalType('privacy')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-800">|</span>
            <button 
              onClick={() => setModalType('terms')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-800">|</span>
            <button 
              onClick={() => setModalType('disclaimer')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl max-h-[80vh] overflow-y-auto border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
              <h4 className="text-lg font-bold font-display text-slate-950 dark:text-white">
                {modalType === 'privacy' && 'Privacy Policy'}
                {modalType === 'terms' && 'Terms & Conditions'}
                {modalType === 'disclaimer' && 'Medical Disclaimer'}
              </h4>
              <button 
                onClick={() => setModalType(null)}
                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="py-4 text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
              {modalType === 'privacy' && (
                <>
                  <p>At Sri Pawanputra Hanuman Medical, we respect your privacy. Any personal information shared with us, including your name, telephone number, home address, email, or digital prescription photos, is handled with utmost security.</p>
                  <p><strong>Information Collection:</strong> We collect details only when you submit them via our Contact Form or WhatsApp Order Form. This information is processed exclusively to deliver your medicine and answer questions.</p>
                  <p><strong>Third-Party Sharing:</strong> Your prescriptions are private. We never sell, lease, or share patient medical data with advertising corporations. We comply strictly with Indian pharmacy guidelines regarding customer healthcare data.</p>
                </>
              )}
              {modalType === 'terms' && (
                <>
                  <p>By browsing this website or placing medicine orders with Sri Pawanputra Hanuman Medical via WhatsApp/phone, you agree to comply with our commercial terms.</p>
                  <p><strong>Prescription Requirement:</strong> Certain drugs designated under Schedule H, H1, or X by the Drugs and Cosmetics Act of India require a valid physician prescription. We reserve the absolute right to cancel orders if a valid prescription is not uploaded or presented.</p>
                  <p><strong>Product Pricing:</strong> All pricing details listed online are estimated averages. Actual retail drug pricing will correspond strictly to the maximum retail price (MRP) printed on physical packaging, inclusive of standard discounts.</p>
                </>
              )}
              {modalType === 'disclaimer' && (
                <>
                  <p className="font-semibold text-amber-600 dark:text-amber-400">Important Health Notice:</p>
                  <p>The health tips, blog articles, and medicine catalog descriptions published on this web portal are provided solely for general educational purposes. They do not constitute formal professional medical diagnosis, treatment suggestions, or specific therapeutic advice.</p>
                  <p>Do not rely on this website as a replacement for consulting with a qualified healthcare practitioner. Always seek primary advice from a doctor for specific health disorders. Never ignore or delay professional medical assistance due to content read on this web app.</p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button 
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}

// Simple internal helper icon to avoid extra module imports
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
