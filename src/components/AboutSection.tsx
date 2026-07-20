import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Award, Users, MapPin, Store, History, Quote } from 'lucide-react';
import { BUSINESS_INFO, TIMELINE_EVENTS } from '../data';

export default function AboutSection() {
  const values = [
    { title: 'Authenticity First', description: 'Every single capsule, tablet or equipment is sourced strictly from genuine manufacturers.', icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20' },
    { title: 'Compassionate Care', description: 'Our team listens first. We treat every customer with dignity and care as our own family.', icon: Heart, color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/20' },
    { title: 'Uncompromising Quality', description: 'We track batch expiries digitally to prevent any suboptimal product distribution.', icon: Award, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/20' },
    { title: 'Community Support', description: 'Available 24/7 for emergency supplies. Serving Delha and Kharkhura with loyalty.', icon: Users, color: 'text-sky-600 bg-sky-50 dark:bg-sky-950/20' }
  ];

  return (
    <section id="about-us-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* 1. Hero / Business Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
            Established 2012
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Our Business Story & Heritage
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Sri Pawanputra Hanuman Medical was founded in 2012 with a single mission: to provide high-quality, genuine, and affordable healthcare supplies to the residents of Kharkhura, Delha, and the wider Gaya community. Named after Lord Hanuman, the symbol of selfless service and vital health force (Sanjeevani), we strive to incorporate those values into our everyday operations.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Over the last decade, under the guidance of <strong>Sri Manoj Kumar</strong>, our storefront on Tekari Road has expanded from a modest chemist shop into Gaya's most reliable hub for surgical gear, pediatric supplies, chronic diabetic care, orthopedic braces, and multi-vitamin wellness formulations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <div className="p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800/60">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">14+ Years</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Serving Gaya</p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800/60">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">10,000+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Happy Patients</p>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800/60">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Genuine Medicines</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-100 dark:bg-emerald-950/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-sky-100 dark:bg-sky-950/20 rounded-full blur-3xl -z-10" />
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80" 
              alt="Sri Pawanputra Hanuman Medical Storefront" 
              className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
            />
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800/80 shadow-lg flex items-center space-x-3">
            <Store className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-xs font-bold text-slate-950 dark:text-white">Physical Store Location</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Tekari Rd, Delha, Gaya</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Mission, Vision, and Values */}
      <div className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-850">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission */}
          <div className="space-y-4">
            <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-display">
              Our Healthcare Mission
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To simplify healthcare access in Gaya by keeping 100% genuine products readily in stock, dispensing prescriptions with professional integrity, offering reasonable pricing, and ensuring that no resident has to struggle or delay treatments due to medicine unavailability.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <div className="inline-flex p-3 bg-sky-100 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 rounded-2xl">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-display">
              Our Vision for Gaya
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To set the benchmark for neighborhood pharmaceutical services in Bihar—leveraging digital prescriptions and seamless localized home delivery systems while preserving our deeply personal, compassionate, and family-oriented customer relationships.
            </p>
          </div>

        </div>

        {/* Values Grid */}
        <div className="mt-16 border-t border-slate-200/50 dark:border-slate-800/80 pt-12">
          <h4 className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase font-mono mb-8">
            Our Core Pillars
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-2.5 rounded-xl inline-block ${v.color}`}>
                  <v.icon className="h-5 w-5" />
                </div>
                <h5 className="font-bold text-slate-950 dark:text-white text-base mt-3">{v.title}</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Operational Timeline */}
      <div className="space-y-10">
        <div className="text-center">
          <div className="inline-flex p-2.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-xl mb-3">
            <History className="h-5 w-5 animate-spin-slow" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 dark:text-white">Our Timeline</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Key milestones that reflect our decade-long service to local families.</p>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 max-w-2xl mx-auto pl-6 sm:pl-10 space-y-8">
          {TIMELINE_EVENTS.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-1 bg-emerald-600 text-white w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />
              
              <div className="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono tracking-widest">{item.year}</span>
                <h4 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white mt-1">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Owner Message */}
      <div className="bg-gradient-to-r from-emerald-950 to-teal-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-emerald-400">
          <Quote className="h-44 w-44" />
        </div>

        <div className="max-w-3xl space-y-6 relative">
          <Quote className="h-8 w-8 text-emerald-400 fill-emerald-400/20" />
          
          <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
            Message from the Owner
          </h3>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
            "When we began this medical store, my vision was very simple—no patient should have to return empty-handed because of missing meds, and nobody should have to pay exorbitant rates for life-saving therapeutics. Healthcare is a basic human right. We see ourselves not merely as business merchants, but as trusted guardians of wellness for our local Gaya families."
          </p>

          <div className="flex items-center space-x-3 pt-4">
            <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm text-white border border-emerald-500">
              MK
            </div>
            <div>
              <p className="text-sm font-bold text-white">Sri Manoj Kumar</p>
              <p className="text-[10px] text-emerald-400 uppercase tracking-wider font-mono font-semibold">Registered Owner & Founder</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
