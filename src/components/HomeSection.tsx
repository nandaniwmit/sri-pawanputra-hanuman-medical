import React, { useState } from 'react';
import { 
  Phone, MessageSquare, MapPin, Search, CheckCircle2, Users, IndianRupee, 
  Clock, FileText, Heart, ShieldAlert, Sparkles, Activity, Plus, Minus,
  ArrowRight, ShieldCheck, HelpCircle, Star, ChevronDown, ChevronUp, AlertCircle,
  ThermometerSun, BookOpen, ThumbsUp, Percent, Volume2, ArrowUpRight, Baby, HeartPulse
} from 'lucide-react';
import { ActiveTab, Medicine, FAQItem } from '../types';
import { 
  BUSINESS_INFO, WHY_CHOOSE_US, FEATURED_CATEGORIES, MEDICINES_DB,
  FAQ_DATA, WORKING_PROCESS_STEPS, REVIEWS_STATS, HEALTH_TIPS, SPECIAL_OFFERS
} from '../data';

interface HomeSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HomeSection({ setActiveTab }: HomeSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Filter medicines based on user's query and category filter
  const filteredMedicines = MEDICINES_DB.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          med.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          med.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = ['All', ...Array.from(new Set(MEDICINES_DB.map(m => m.category)))];

  const handleActionRedirect = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // Local static list of 6 Customer Testimonials as requested
  const testimonials = [
    { name: 'Amit Kumar', location: 'Delha, Gaya', text: 'I purchase my father\'s monthly diabetic medicines from Sri Pawanputra Hanuman Medical. Their staff is extremely helpful, they offer the best discount prices, and they even deliver rare insulin vials within hours.', rating: 5 },
    { name: 'Priya Sinha', location: 'Kharkhura, Gaya', text: 'Excellent service! I ordered baby care food and diapers on WhatsApp, and received them at my doorstep in under 2 hours. Very convenient for mothers who cannot leave the house easily.', rating: 5 },
    { name: 'Ramanand Mishra', location: 'Choti, Gaya', text: 'A highly reliable pharmacy in our locality. The owner is knowledgeable and verified our doctor prescription meticulously. It gives us peace of mind that we are receiving 100% genuine products.', rating: 5 },
    { name: 'Dr. S. K. Roy', location: 'Tekari Road, Gaya', text: 'I highly recommend Sri Pawanputra Hanuman Medical to my patients. Their inventory of critical surgical items, inhalers, and standard prescription pills is highly dependable, and their storage conditions are excellent.', rating: 5 },
    { name: 'Sanjay Mandal', location: 'Gaya Junction', text: 'Sourcing specialized orthopedic supports in Gaya was a hassle until I visited this store. They stock high-quality knee braces and crepe bandages. Very affordable prices too.', rating: 5 },
    { name: 'Nisha Kumari', location: 'AP Colony, Gaya', text: 'The WhatsApp ordering feature is a lifesaver. I simply take a picture of my doctor prescription sheet, send it, and collect the pre-packed packet in minutes. Great digital upgrade!', rating: 5 }
  ];

  const trustPoints = [
    { title: 'Experienced Pharmacy', text: 'Over 14+ years of local experience dispensing complex prescriptions safely.', icon: Users },
    { title: 'Quality Medicines', text: '100% genuine medications direct from approved government pharmaceutical distributors.', icon: ShieldCheck },
    { title: 'Quick Service', text: 'Friendly staff and digital computerized inventory mean zero waiting time.', icon: Clock },
    { title: 'Friendly Staff', text: 'Helpful and polite qualified chemists who guide you on proper dosages.', icon: Heart },
    { title: 'Reasonable Pricing', text: 'Get standard discounts on monthly chronic healthcare purchases.', icon: IndianRupee },
    { title: 'Convenient Location', text: 'Prime spot on Tekari Road, Delha, with rapid home delivery options.', icon: MapPin }
  ];

  return (
    <div className="space-y-24">
      
      {/* 1. Hero Section */}
      <section id="hero-banner" className="relative bg-gradient-to-br from-emerald-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Left Hero Text Block */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono uppercase tracking-widest">
              <Sparkles className="h-4 w-4 animate-spin-slow" />
              <span>Gaya's Premier Medical Store</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Sri Pawanputra Hanuman Medical
              <span className="block mt-1 text-emerald-600 dark:text-emerald-400 text-2xl sm:text-4.5xl font-medium font-sans">
                Your Trusted Pharmacy in Tekari & Gaya
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Providing 100% genuine medicines, pediatric formulas, healthcare devices, orthopedic supports, surgical supplies, and daily personal care essentials. We prioritize your family's health above all else.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a 
                href={BUSINESS_INFO.phoneCallUrl}
                className="flex items-center space-x-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/10 dark:shadow-white/10"
              >
                <Phone className="h-4 w-4" />
                <span>Call Store Now</span>
              </a>
              <button 
                onClick={() => handleActionRedirect('whatsapp-order')}
                className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-750 text-white font-bold rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-600/10"
              >
                <MessageSquare className="h-4 w-4 fill-white/10" />
                <span>WhatsApp Order</span>
              </button>
              <a 
                href={BUSINESS_INFO.mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-sky-100 hover:bg-sky-200 dark:bg-sky-950/40 dark:hover:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-bold rounded-xl text-sm transition-all border border-sky-200/50 dark:border-sky-800/30"
              >
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Registered Drug License</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>UPI / Cash Accepted</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Panel */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-20 dark:opacity-30 -z-10 animate-pulse" />
            <div className="bg-white dark:bg-slate-950 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare Pharmacist Gaya"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            
            {/* Google review micro banner */}
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-lg max-w-[200px] flex items-center space-x-3">
              <div className="bg-amber-100 dark:bg-amber-950/50 p-2 rounded-xl text-amber-500">
                <Star className="h-5 w-5 fill-amber-500" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-950 dark:text-white leading-none">
                  {REVIEWS_STATS.averageRating} / 5
                </p>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                  {REVIEWS_STATS.totalReviews}+ {REVIEWS_STATS.platform}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EMERGENCY CONTACT TICKER */}
      <div className="bg-rose-600 text-white py-3.5 px-4 overflow-hidden border-y border-rose-700 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5 animate-bounce shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase font-mono">
              Emergency Medication / 24x7 Urgent Sourcing Support:
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a 
              href={BUSINESS_INFO.phoneCallUrl}
              className="px-4 py-1.5 bg-white text-rose-700 hover:bg-slate-100 font-extrabold rounded-lg text-xs tracking-wider uppercase transition-all shadow-sm flex items-center space-x-1"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* MEDICINE SEARCH BOX SECTION */}
      <section id="medicine-search" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800/80 shadow-xl space-y-6 relative overflow-hidden">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-mono">
              Instant Medicine Catalog
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-950 dark:text-white mt-1">
              Search Real-Time Medicine Availability
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Check if your required generic or branded medicine is currently in-stock at our Gaya store.
            </p>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type medicine name (e.g., Dolo, Pan-40, Zincovit, Syrup)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
            
            {/* Category selection */}
            <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0 shrink-0">
              {uniqueCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white border-transparent'
                      : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search results list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[360px] overflow-y-auto pr-1">
            {filteredMedicines.map(med => (
              <div 
                key={med.id}
                className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 hover:border-emerald-500/50 dark:hover:border-emerald-500/30 transition-all flex justify-between items-start"
              >
                <div className="space-y-1.5 max-w-[70%]">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white">{med.name}</h4>
                    {med.isRx && (
                      <span className="bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-mono">
                        Rx
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal line-clamp-2">{med.description}</p>
                  <p className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{med.price}</p>
                </div>
                
                <div className="text-right flex flex-col items-end justify-between h-full space-y-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    med.availability === 'In Stock'
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                      : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400'
                  }`}>
                    {med.availability}
                  </span>
                  
                  <button
                    onClick={() => handleActionRedirect('whatsapp-order')}
                    className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold rounded-lg transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
            
            {filteredMedicines.length === 0 && (
              <div className="col-span-1 md:col-span-2 text-center py-8 text-slate-400">
                <AlertCircle className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <p className="text-xs font-semibold">Medicine not in catalog list?</p>
                <p className="text-[11px] text-slate-500 mt-1">We can procure any rare medicines within 24-48 hours. Please share your prescription on WhatsApp.</p>
                <button
                  onClick={() => handleActionRedirect('whatsapp-order')}
                  className="mt-3 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg inline-flex items-center space-x-1"
                >
                  <span>Upload Prescription</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
            Our Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
            Why Choose Our Pharmacy?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-lg mx-auto">
            Gaya residents trust us for medicine accuracy, quick turnaround, and consistent local availability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-xl inline-block mb-3.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-250">
                {renderIcon(item.icon)}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Categories */}
      <section id="featured-categories" className="bg-slate-50 dark:bg-slate-950/40 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto">
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
              Store inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
              Explore Featured Product Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              We stock products across multiple medical verticals to support your complete therapeutic recovery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {FEATURED_CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-slate-200 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-xl inline-block mb-3">
                    {renderIcon(cat.iconName)}
                  </div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">{cat.name}</h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-normal">{cat.description}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-50 dark:border-slate-800 mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{cat.count}</span>
                  <button 
                    onClick={() => handleActionRedirect('services')} 
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-[10px] tracking-wide uppercase inline-flex items-center gap-1 group"
                  >
                    <span>View</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Customers Trust Us */}
      <section id="customer-trust" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
              Trusted local chemist
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
              Why Gaya Families Trust Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We stand apart because our operations align strictly with patient safety, genuine procurement, clear dosage instruction transparency, and empathetic service.
            </p>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 text-xs text-emerald-800 dark:text-emerald-300 flex items-start space-x-2.5">
              <ShieldCheck className="h-4.5 w-4.5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
              <span>Registered Retail Chemist & Druggist Shop under Bihar State Drugs Control Department guidelines. License fully compliant and displayed physically at storefront.</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((tp, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm flex space-x-3.5">
                <div className="p-2.5 bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-400 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                  <tp.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">{tp.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{tp.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Working Process */}
      <section id="working-process" className="bg-slate-900 text-white dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-7xl mx-auto border border-slate-850/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
          <Heart className="h-44 w-44" />
        </div>

        <div className="text-center max-w-lg mx-auto mb-12 space-y-2 relative">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full font-mono uppercase tracking-wider">
            How it works
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">Our Working Process</h2>
          <p className="text-xs sm:text-sm text-slate-400">Four quick steps to purchase or order your monthly healthcare needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WORKING_PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="space-y-3 text-center sm:text-left relative">
              {/* step counter badge */}
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <span className="text-4xl font-extrabold font-mono text-emerald-500/15">{step.step}</span>
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/10">
                  {renderIcon(step.icon)}
                </div>
              </div>
              <h4 className="font-bold text-white text-base">{step.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Special Offers & Discounts Section */}
      <section id="special-offers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
            Promotional Packages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
            Active Store Offers & Discounts
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
            Save on your recurring prescription billing with our special community discount tags.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIAL_OFFERS.map((offer) => (
            <div 
              key={offer.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl font-mono tracking-wider">
                {offer.discount}
              </div>
              
              <div className="space-y-3 pr-8">
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl inline-block">
                  <Percent className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-950 dark:text-white text-sm sm:text-base leading-tight">
                  {offer.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">CODE</span>
                  <span className="font-mono font-bold text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-0.5 rounded border border-slate-150">
                    {offer.code}
                  </span>
                </div>
                
                <button
                  onClick={() => handleActionRedirect('whatsapp-order')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center space-x-1"
                >
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Health Awareness Tips Section */}
      <section id="health-tips-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
            Health Portal
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
            Latest Health Tips & Awareness
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
            Practical lifestyle advice written by pharmacy professionals to help you manage health outcomes safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div 
              key={tip.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <span className="bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider font-mono">
                  {tip.category}
                </span>
                
                <h3 className="font-bold text-slate-950 dark:text-white text-base leading-snug hover:text-emerald-600 transition-colors">
                  {tip.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {tip.summary}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-450 font-semibold">
                <span className="font-mono">{tip.date}</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{tip.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Customer Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
            Local Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
            Why Customers Trust Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
            Read real-time verified customer stories from different residential blocks in Gaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              {/* Rating stars */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{t.text}"
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <p className="font-extrabold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-[10px] text-slate-400 font-mono tracking-wider mt-0.5">{t.location}</p>
                </div>
                <span className="text-[10px] bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider font-mono select-none">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section id="faq-accordion-block" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
            Common Pharmacy Queries
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Quick, human-readable explanations of our dispensing policies, home delivery system, and medicine authenticity guidelines.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_DATA.map((faq) => {
            const isExpanded = expandedFaq === faq.id;
            return (
              <div 
                key={faq.id}
                id={`faq-accordion-item-${faq.id}`}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 text-slate-900 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-950/20"
                >
                  <span className="font-bold text-sm sm:text-base leading-tight">{faq.question}</span>
                  {isExpanded ? (
                    <Minus className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                  ) : (
                    <Plus className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1 border-t border-slate-50 dark:border-slate-800/50 animate-in fade-in slide-in-from-top-1">
                    <p>{faq.answer}</p>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mt-2.5">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Contact CTA Section */}
      <section id="contact-cta-card" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-emerald-500/10 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 p-12 opacity-5">
            <Volume2 className="h-48 w-48" />
          </div>

          <div className="max-w-2xl mx-auto space-y-3 relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">Need Medicines Delivered Urgently?</h3>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Do not delay your recovery. Simply click below to speak with our certified Gaya chemists or instantly upload your prescription details on WhatsApp!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 relative">
            <a
              href={BUSINESS_INFO.phoneCallUrl}
              className="px-6 py-3 bg-white text-emerald-800 hover:bg-slate-50 font-bold rounded-xl text-sm transition-all shadow-md flex items-center space-x-1.5"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            
            <button
              onClick={() => handleActionRedirect('whatsapp-order')}
              className="px-6 py-3 bg-emerald-950 text-white hover:bg-emerald-900 font-bold rounded-xl text-sm transition-all shadow-md flex items-center space-x-1.5 border border-emerald-900"
            >
              <MessageSquare className="h-4 w-4 fill-white/10" />
              <span>Order via WhatsApp Form</span>
            </button>
          </div>

          <div className="text-[11px] text-emerald-200/80 pt-2 font-mono">
            *Free delivery in Delha & Kharkhura on monthly orders above ₹500
          </div>
        </div>
      </section>

    </div>
  );
}

// Private helper to resolve inline icons in local data lists
function renderIcon(iconName: string) {
  const classStyle = "h-5 w-5";
  switch (iconName) {
    case 'CheckCircle2': return <CheckCircle2 className={classStyle} />;
    case 'Users': return <Users className={classStyle} />;
    case 'IndianRupee': return <IndianRupee className={classStyle} />;
    case 'Clock': return <Clock className={classStyle} />;
    case 'FileText': return <FileText className={classStyle} />;
    case 'Heart': return <Heart className={classStyle} />;
    case 'MapPin': return <MapPin className={classStyle} />;
    case 'MessageSquare': return <MessageSquare className={classStyle} />;
    
    // categories
    case 'Pil': return <FileText className={classStyle} />;
    case 'Pills': return <Activity className={classStyle} />;
    case 'Droplet': return <Activity className={classStyle} />;
    case 'Syringe': return <Activity className={classStyle} />;
    case 'Activity': return <Activity className={classStyle} />;
    case 'Flame': return <Sparkles className={classStyle} />;
    case 'Sparkles': return <Sparkles className={classStyle} />;
    case 'HeartHandshake': return <Heart className={classStyle} />;
    case 'Baby': return <Baby className={classStyle} />;
    case 'ShieldAlert': return <ShieldAlert className={classStyle} />;
    case 'Accessibility': return <Activity className={classStyle} />;
    case 'HeartPulse': return <HeartPulse className={classStyle} />;

    // process
    case 'UploadCloud': return <FileText className={classStyle} />;
    case 'FileCheck': return <CheckCircle2 className={classStyle} />;
    case 'CreditCard': return <IndianRupee className={classStyle} />;
    
    default: return <HeartPulse className={classStyle} />;
  }
}
