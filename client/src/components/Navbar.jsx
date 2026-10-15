import React from 'react';
import { Sparkles, Globe, Type, Bookmark, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSaved } from '../context/SavedContext';

export const Navbar = ({ currentTab, onNavigate }) => {
  const { language, toggleLanguage, textSize, cycleTextSize, t } = useLanguage();
  const { savedCount } = useSaved();

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'resources', label: t.navResources },
    { id: 'opportunities', label: t.navOpportunities },
    { id: 'saved', label: `${t.navSaved}${savedCount > 0 ? ` (${savedCount})` : ''}` },
    { id: 'impact', label: t.navImpact },
  ];

  const getTextSizeLabel = () => {
    if (textSize === 'large') return language === 'hi' ? 'अ+' : 'A+';
    if (textSize === 'xlarge') return language === 'hi' ? 'अ++' : 'A++';
    return language === 'hi' ? 'अ' : 'A';
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-earth-200 shadow-sm transition-all">
      {/* Top micro bar: Team & Hackathon branding */}
      <div className="bg-brand-900 text-brand-100 text-[11px] sm:text-xs py-1 px-4 text-center font-medium flex items-center justify-between">
        <span className="flex items-center gap-1 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-marigold-400" />
          <span>BIOS 2026 Hackathon • Team: <strong>Quantum Leapers</strong></span>
        </span>
        <span className="hidden sm:inline-block text-brand-200">
          Digital Platform for Rural Women Entrepreneurs
        </span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-brand-600 via-brand-500 to-marigold-500 flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <span className="text-white font-extrabold text-xl sm:text-2xl leading-none">उ</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-2xl text-slate-900 tracking-tight">
                  उड़ान सहेली
                </span>
                <span className="text-xs sm:text-sm font-semibold text-brand-600">
                  UdaanSaheli
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium hidden md:block">
                सशक्त ग्रामीण नारी • आत्मनिर्भर भारत
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  type="button"
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all min-h-[44px] ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-earth-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Accessibility & Language Controls */}
          <div className="flex items-center gap-2">
            {/* Text Size Control */}
            <button
              onClick={cycleTextSize}
              type="button"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-earth-100 hover:bg-earth-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors border border-earth-300 flex items-center gap-1 min-h-[44px] min-w-[44px] justify-center"
              aria-label={t.textSizeTooltip}
              title={t.textSizeTooltip}
            >
              <Type className="w-4 h-4 text-slate-600" />
              <span className="font-extrabold text-brand-700">{getTextSizeLabel()}</span>
            </button>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-3 sm:px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center gap-1.5 min-h-[44px]"
              aria-label={t.langToggle}
            >
              <Globe className="w-4 h-4" />
              <span>{t.langToggle}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
