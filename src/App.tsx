import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, ShieldAlert, HeartPulse } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import { ActiveTab } from './types';
import { BUSINESS_INFO, FAQ_DATA } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to reveal "back to top" triggers
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync state with HTML dark class element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // GLOBAL TRACKER INTEGRATION
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      if (activeTab && activeTab !== 'home') {
        return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(err => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTab]);

  // DYNAMIC SEO & SCHEMA MARKUP INJECTION
  useEffect(() => {
    // 1. Set Meta Title and Description based on active tab
    let title = '';
    let description = '';
    let canonical = window.location.href;

    switch (activeTab) {
      case 'home':
        title = 'Sri Pawanputra Hanuman Medical | Trusted Pharmacy in Gaya, Bihar';
        description = 'Your trusted local medical store for genuine medicines, pediatric supplies, orthopedic support, and healthcare accessories in Tekari Road, Delha, Gaya, Bihar. Order via WhatsApp today!';
        break;
      case 'about':
        title = 'About Us | Sri Pawanputra Hanuman Medical Store Gaya';
        description = 'Established in 2012 by Sri Manoj Kumar, Sri Pawanputra Hanuman Medical is dedicated to serving the Gaya community with authentic medicines and caring pharmacy services.';
        break;
      case 'services':
        title = 'Medicines & Health Services | Pawanputra Hanuman Pharmacy';
        description = 'Explore our robust pharmacy stock in Gaya including Prescription Drugs, OTC Medicines, Diabetic Care, Baby care essentials, and diagnostic monitors.';
        break;
      case 'gallery':
        title = 'Photo Gallery | Sri Pawanputra Hanuman Medical Gaya';
        description = 'View storefront, shelves, diagnostic tools, surgical items, and team photos at our Tekari Road, Delha pharmacy outlet.';
        break;
      case 'contact':
        title = 'Contact & Location Maps | Sri Pawanputra Hanuman Medical';
        description = 'Visit our medical store at Tekari Road, Kharkhura, Delha, Gaya, Bihar 823002. Call 09631715619 or check our Google Maps directions.';
        break;
      case 'whatsapp-order':
        title = 'Order Medicines Online via WhatsApp | Home Delivery Gaya';
        description = 'Fastest medicine delivery in Delha & Kharkhura, Gaya. Fill our simple order form, upload prescription, and dispatch direct via WhatsApp!';
        break;
    }

    document.title = title;

    // Update dynamic meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph and Twitter tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    document.head.appendChild(ogTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    ogDesc.setAttribute('content', description);
    document.head.appendChild(ogDesc);

    // 2. Inject JSON-LD Schema Markup
    // Remove old schema scripts
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(el => el.remove());

    // Build Pharmacy LocalBusiness schema
    const pharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "@id": "https://pawanputrahanumanmedical.com",
      "name": "Sri Pawanputra Hanuman Medical",
      "image": [
        "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
      ],
      "url": "https://pawanputrahanumanmedical.com",
      "telephone": BUSINESS_INFO.phone,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Choti, Tekari Rd, Kharkhura, Delha",
        "addressLocality": "Gaya",
        "postalCode": "823002",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.8142,
        "longitude": 84.9912
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://wa.me/" + BUSINESS_INFO.whatsappNumber
      ]
    };

    // Build FAQ Schema (FAQPage)
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_DATA.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    // Build Breadcrumb Schema (BreadcrumbList)
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pawanputrahanumanmedical.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": activeTab.toUpperCase(),
          "item": "https://pawanputrahanumanmedical.com/" + activeTab
        }
      ]
    };

    // Inject scripts
    [pharmacySchema, faqSchema, breadcrumbSchema].forEach(schemaData => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Sticky responsive header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Content Sections Routing */}
      <main className="pb-16 pt-20">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          {activeTab === 'home' && <HomeSection setActiveTab={setActiveTab} />}
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'services' && <ServicesSection setActiveTab={setActiveTab} />}
          {activeTab === 'gallery' && <GallerySection />}
          {activeTab === 'contact' && <ContactSection />}
          {activeTab === 'whatsapp-order' && <WhatsAppOrderForm />}
        </div>
      </main>

      {/* Complete descriptive Footer with quick tabs & legal links */}
      <Footer setActiveTab={setActiveTab} />

      {/* FLOATING ACTION UTILITY TRIGGERS */}
      <div id="floating-interaction-dock" className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
        
        {/* Floating Call Now Icon */}
        <a
          id="float-call-btn"
          href={BUSINESS_INFO.phoneCallUrl}
          className="bg-sky-600 hover:bg-sky-500 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
          aria-label="Call pharmacy store"
        >
          <Phone className="h-5 w-5 fill-white/10" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Call Store Now
          </span>
        </a>

        {/* Floating WhatsApp Quick Order Icon */}
        <button
          id="float-whatsapp-btn"
          onClick={() => {
            setActiveTab('whatsapp-order');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
          aria-label="Order medicines on WhatsApp"
        >
          <MessageSquare className="h-5 w-5 fill-white/10" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            WhatsApp Order Form
          </span>
        </button>

        {/* Back To Top Button - visible after scroll */}
        {showScrollTop && (
          <button
            id="float-backtop-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 p-3 rounded-full shadow-xl flex items-center justify-center border border-slate-200/50 dark:border-slate-800 transition-all hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
      </div>

    </div>
  );
}
