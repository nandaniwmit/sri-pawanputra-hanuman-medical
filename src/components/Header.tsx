import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Sun, Moon, HeartPulse } from 'lucide-react';
import { ActiveTab } from '../types';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle sticky scrolling background changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: ActiveTab }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Our Services', value: 'services' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Contact', value: 'contact' },
    { label: 'Order on WhatsApp', value: 'whatsapp-order' }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white dark:bg-slate-950 py-4 border-b border-slate-100 dark:border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <div 
            id="brand-logo"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-emerald-600 dark:bg-emerald-500 text-white p-2 rounded-xl shadow-lg shadow-emerald-600/10 dark:shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <HeartPulse className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white leading-tight tracking-tight">
                Sri Pawanputra Hanuman
              </h1>
              <p className="text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-mono">
                Medical & Pharmacy
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                id={`nav-${item.value}`}
                onClick={() => handleNavClick(item.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  activeTab === item.value
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {item.label}
                {activeTab === item.value && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Dark Mode Toggle */}
            <button
              id="dark-mode-toggle"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-amber-500 animate-pulse" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>

            {/* Quick Call - Hidden on very small screens */}
            <a
              id="header-call-btn"
              href={BUSINESS_INFO.phoneCallUrl}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/30 dark:hover:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xs font-semibold rounded-lg transition-colors border border-sky-200/50 dark:border-sky-800/30"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call Now</span>
            </a>

            {/* Order On WhatsApp CTA */}
            <button
              id="header-whatsapp-btn"
              onClick={() => handleNavClick('whatsapp-order')}
              className="hidden md:flex items-center space-x-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageSquare className="h-4 w-4 fill-white/10" />
              <span>Order Medicines</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div id="mobile-drawer" className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-top-5">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                id={`mobile-nav-${item.value}`}
                onClick={() => handleNavClick(item.value)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                  activeTab === item.value
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.value && (
                  <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                )}
              </button>
            ))}
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-900 flex flex-col gap-2">
              <a
                id="mobile-call-cta"
                href={BUSINESS_INFO.phoneCallUrl}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-200 font-semibold rounded-xl text-sm transition-colors border border-slate-200/50 dark:border-slate-800"
              >
                <Phone className="h-4 w-4 text-sky-600" />
                <span>Call Store: {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <button
                id="mobile-whatsapp-cta"
                onClick={() => handleNavClick('whatsapp-order')}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-600/10"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Order on WhatsApp Form</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
