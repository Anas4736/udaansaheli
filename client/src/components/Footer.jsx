import React from 'react';
import { PhoneCall, ShieldAlert, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Helplines Grid */}
        <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 mb-10">
          <div className="flex items-center gap-2 mb-4 text-marigold-400 font-bold text-sm sm:text-base">
            <PhoneCall className="w-5 h-5" />
            <span>{t.ruralHelplineTitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400 font-semibold mb-1">MSME & KVIC Helpline</p>
              <a
                href="tel:18001802000"
                className="text-white hover:text-marigold-400 font-bold text-base flex items-center justify-between"
              >
                <span>1800-180-2000</span>
                <span className="text-xs bg-brand-900 text-brand-300 px-2 py-0.5 rounded">Toll-Free</span>
              </a>
              <p className="text-[11px] text-slate-400 mt-1">PMEGP subsidy & micro-enterprise guidance</p>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400 font-semibold mb-1">Pradhan Mantri Mudra Yojana</p>
              <a
                href="tel:18001801111"
                className="text-white hover:text-marigold-400 font-bold text-base flex items-center justify-between"
              >
                <span>1800-180-1111</span>
                <span className="text-xs bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">Toll-Free</span>
              </a>
              <p className="text-[11px] text-slate-400 mt-1">Shishu & Kishore micro-business loans</p>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400 font-semibold mb-1">National Women Helpline</p>
              <a
                href="tel:181"
                className="text-white hover:text-marigold-400 font-bold text-base flex items-center justify-between"
              >
                <span>181</span>
                <span className="text-xs bg-rose-900 text-rose-300 px-2 py-0.5 rounded">24x7</span>
              </a>
              <p className="text-[11px] text-slate-400 mt-1">Assistance for women in distress & rights</p>
            </div>
          </div>
        </div>

        {/* Brand & Team Credits */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-marigold-500 flex items-center justify-center font-extrabold text-white text-base">
                उ
              </div>
              <span className="font-extrabold text-xl text-white">उड़ान सहेली • UdaanSaheli</span>
            </div>
            <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
              {t.tagline}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-marigold-300 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Built by <strong>Team Quantum Leapers</strong> for BIOS 2026 Hackathon</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  {t.navResources}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('opportunities')} className="hover:text-white transition-colors">
                  {t.navOpportunities}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('saved')} className="hover:text-white transition-colors">
                  {t.navSaved}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('impact')} className="hover:text-white transition-colors">
                  {t.navImpact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Official Portals</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>PMEGP e-Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.mudra.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Mudra Yojana</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://aajeevika.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>DAY-NRLM MoRD</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>GeM Saras Collection</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://ondc.org" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>ONDC Open Network</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://rudsetiindia.org" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>RSETI Academy</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-start gap-2 max-w-3xl">
            <ShieldAlert className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">{t.disclaimer}</p>
          </div>
          <p className="text-slate-400 font-medium whitespace-nowrap">
            © 2026 UdaanSaheli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
