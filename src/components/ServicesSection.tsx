import React, { useState } from 'react';
import { 
  FileText, Sparkles, Baby, HeartHandshake, Activity, Syringe, 
  BriefcaseMedical, HeartPulse, ShieldAlert, ArrowRight, CheckCircle2, MessageSquare
} from 'lucide-react';
import { SERVICES } from '../data';
import { ActiveTab } from '../types';

interface ServicesSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ServicesSection({ setActiveTab }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Helper to resolve dynamic icon component based on the data string
  const renderServiceIcon = (iconName: string) => {
    const classStyle = "h-6 w-6";
    switch (iconName) {
      case 'FileText': return <FileText className={classStyle} />;
      case 'Sparkles': return <Sparkles className={classStyle} />;
      case 'Baby': return <Baby className={classStyle} />;
      case 'HeartHandshake': return <HeartHandshake className={classStyle} />;
      case 'Activity': return <Activity className={classStyle} />;
      case 'Syringe': return <Syringe className={classStyle} />;
      case 'BriefcaseMedical': return <BriefcaseMedical className={classStyle} />;
      case 'HeartPulse': return <HeartPulse className={classStyle} />;
      case 'ShieldAlert': return <ShieldAlert className={classStyle} />;
      default: return <FileText className={classStyle} />; // fallback
    }
  };

  const handleOrderRedirect = () => {
    setActiveTab('whatsapp-order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services-page-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
          Professional Services
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
          Comprehensive Healthcare Solutions
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          We are more than just a drug dispensary. Explore our range of specialized healthcare categories, medical equipment, and pediatric support systems designed for your absolute convenience.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const isExpanded = selectedService === service.id;
          return (
            <div 
              key={service.id}
              id={`service-card-${service.id}`}
              className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group ${
                isExpanded 
                  ? 'ring-2 ring-emerald-500 border-transparent shadow-xl translate-y-[-4px]' 
                  : 'border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-lg hover:border-slate-200 dark:hover:border-slate-700 hover:translate-y-[-2px]'
              }`}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider z-10">
                  Popular Service
                </span>
              )}

              {/* Card Content */}
              <div className="p-6">
                <div className={`p-3 rounded-xl inline-block mb-4 transition-colors ${
                  isExpanded 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/50'
                }`}>
                  {renderServiceIcon(service.iconName)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Interactive Details Dropdown (Expandable) */}
                <div className={`mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 transition-all duration-300 ${
                  isExpanded ? 'block animate-in fade-in slide-in-from-top-2' : 'hidden'
                }`}>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest font-mono mb-2">
                    What we offer:
                  </h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-slate-50/50 dark:bg-slate-950/30 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(isExpanded ? null : service.id)}
                  className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center space-x-1"
                >
                  <span>{isExpanded ? 'Hide Details' : 'View Scope & Details'}</span>
                  <ArrowRight className={`h-3 w-3 transform transition-transform ${isExpanded ? '-rotate-90 text-emerald-500' : 'group-hover:translate-x-0.5'}`} />
                </button>

                <button
                  onClick={handleOrderRedirect}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center space-x-1.5 transition-colors shadow-sm"
                >
                  <MessageSquare className="h-3 w-3" />
                  <span>Order Now</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Trust Banner Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 shadow-xl text-center md:text-left md:flex md:items-center md:justify-between border border-emerald-500/10">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-xl sm:text-2xl font-bold font-display">Looking for custom medical configurations?</h3>
          <p className="text-sm text-emerald-100 leading-relaxed">
            Need rare oncology medications, customized first-aid kits, bulk hospital supplies, or orthopedic braces in specific sizes? Talk with our pharmacists now.
          </p>
        </div>
        <button
          onClick={handleOrderRedirect}
          className="mt-6 md:mt-0 px-6 py-3 bg-white text-emerald-700 hover:bg-slate-50 font-bold rounded-xl text-sm transition-all shadow-md shadow-emerald-900/10"
        >
          Request Special Sourcing
        </button>
      </div>

    </section>
  );
}
