import React, { useState, useEffect } from 'react';
import {
  Timer,
  CheckCircle2,
  ExternalLink,
  Play,
  RotateCcw,
  Sparkles,
  BarChart2,
  Bookmark,
  Search,
  Eye,
  Info,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSaved } from '../context/SavedContext';

export const ImpactMetricsPage = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const { savedCount } = useSaved();

  // Real, private in-browser session metrics
  const [sessionClicks, setSessionClicks] = useState(0);

  useEffect(() => {
    try {
      const stored = parseInt(localStorage.getItem('udaansaheli_session_clicks') || '0', 10);
      setSessionClicks(stored);
    } catch {
      setSessionClicks(0);
    }
  }, []);

  // Interactive Task Completion Simulator State
  const [simStep, setSimStep] = useState(0);
  const [simTimer, setSimTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [simResults, setSimResults] = useState(null);

  const startSimulation = () => {
    setSimStep(1);
    setSimTimer(0);
    setSimResults(null);
    setTimerRunning(true);
  };

  const advanceStep = (nextStep) => {
    if (nextStep === 4) {
      setTimerRunning(false);
      setSimStep(4);
      setSimResults({
        completedIn: simTimer,
        success: true
      });
    } else {
      setSimStep(nextStep);
    }
  };

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setSimTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  return (
    <div className="space-y-8 sm:space-y-10 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>{language === 'hi' ? 'BIOS 2026 मूल्यांकन रूपरेखा' : 'BIOS 2026 Evaluation Framework'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.impactTitle}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          {t.impactSubtitle}
        </p>
      </div>

      {/* Notice on Metrics Nature */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 space-y-1">
          <p className="font-bold">
            {language === 'hi' ? 'पारदर्शिता सूचना: प्रस्तावित लक्ष्य बनाम वास्तविक मापदंड' : 'Transparency Notice: Proposed Targets vs Measured Metrics'}
          </p>
          <p className="text-amber-800 leading-relaxed">
            {language === 'hi'
              ? 'नीचे दिए गए तीन मुख्य कार्ड BIOS 2026 हैकाथॉन समस्या विवरण के लिए प्रस्तावित सफलता लक्ष्य (Proposed Target Benchmarks) हैं। किसी भी काल्पनिक आंकड़े को वास्तविक फील्ड डेटा के रूप में प्रस्तुत नहीं किया गया है। इसके नीचे आपके वर्तमान ब्राउज़र सत्र का वास्तविक डेटा दिखाया गया है।'
              : 'The cards below define the proposed success target benchmarks for the BIOS 2026 problem statement. No simulated metrics are represented as historical field outcomes. Live private session data from your current browser is tracked separately below.'}
          </p>
        </div>
      </div>

      {/* 3 Proposed Target Benchmarks */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          {language === 'hi' ? 'प्रस्तावित मूल्यांकन लक्ष्य (Proposed Evaluation Targets)' : 'Proposed Evaluation Target Benchmarks'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Target 1 */}
          <div className="bg-white rounded-3xl border border-earth-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Timer className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-800">
                  {language === 'hi' ? 'प्रस्तावित लक्ष्य' : 'Proposed Target'}
                </span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                {t.metric1Name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t.metric1Desc}
              </p>
            </div>
            <div className="pt-4 border-t border-earth-100">
              <span className="text-2xl sm:text-3xl font-extrabold text-orange-600">
                &lt; 60 sec
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                {language === 'hi' ? 'ग्रामीण 2G/3G कनेक्शन पर लक्ष्य' : 'Target for low-bandwidth mobile connections'}
              </p>
            </div>
          </div>

          {/* Target 2 */}
          <div className="bg-white rounded-3xl border border-earth-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {language === 'hi' ? 'प्रस्तावित लक्ष्य' : 'Proposed Target'}
                </span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                {t.metric2Name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t.metric2Desc}
              </p>
            </div>
            <div className="pt-4 border-t border-earth-100">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                &gt; 90%
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                {language === 'hi' ? 'उपयोगिता परीक्षणों में लक्ष्य' : 'Usability trial completion target'}
              </p>
            </div>
          </div>

          {/* Target 3 */}
          <div className="bg-white rounded-3xl border border-earth-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                  {language === 'hi' ? 'प्रस्तावित लक्ष्य' : 'Proposed Target'}
                </span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                {t.metric3Name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t.metric3Desc}
              </p>
            </div>
            <div className="pt-4 border-t border-earth-100">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                100% Direct
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                {language === 'hi' ? 'सीधे आधिकारिक सरकारी पोर्टलों पर' : 'Authentic .gov.in direct links without intermediaries'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Local Browser Session Tracker */}
      <div className="bg-white rounded-3xl border border-earth-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-brand-600" />
            <h2 className="text-lg font-bold text-slate-900">
              {language === 'hi' ? 'वर्तमान सत्र के वास्तविक मापदंड (Live In-Browser Session Data)' : 'Live In-Browser Session Metrics'}
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
            {language === 'hi' ? 'सक्रिय सत्र (Active)' : 'Active Session'}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          {language === 'hi'
            ? 'यह डेटा आपके वर्तमान ब्राउज़र में गोपनीयता के साथ स्थानीय रूप से ट्रैक होता है। कोई भी व्यक्तिगत डेटा सर्वर पर नहीं भेजा जाता।'
            : 'These values are tracked privately inside your local browser storage for this session without sending personal data to any external server.'}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-earth-50 border border-earth-200">
            <span className="text-xs text-slate-500 font-medium">
              {language === 'hi' ? 'सहेजे गए संसाधन' : 'Bookmarked Resources'}
            </span>
            <div className="text-2xl font-extrabold text-brand-700 mt-1">
              {savedCount}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-earth-50 border border-earth-200">
            <span className="text-xs text-slate-500 font-medium">
              {language === 'hi' ? 'आधिकारिक पोर्टल क्लिक्स' : 'Official Portal Referrals Clicked'}
            </span>
            <div className="text-2xl font-extrabold text-blue-700 mt-1">
              {sessionClicks}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-earth-50 border border-earth-200 col-span-2 sm:col-span-1">
            <span className="text-xs text-slate-500 font-medium">
              {language === 'hi' ? 'डेटा स्रोत मोड' : 'Active Data Mode'}
            </span>
            <div className="text-sm font-bold text-emerald-800 mt-2 truncate">
              In-Memory Resilient Cache
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Usability Test Simulation */}
      <div className="bg-white rounded-3xl border-2 border-brand-200 p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-earth-200">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
              <span>{language === 'hi' ? 'इंटरएक्टिव परीक्षण' : 'Interactive Benchmarking Trial'}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              {t.metricSimTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t.metricSimDesc}
            </p>
          </div>
          {timerRunning && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-100 text-brand-800 font-mono font-bold text-base flex-shrink-0">
              <Timer className="w-4 h-4 animate-spin text-brand-600" />
              <span>{simTimer}s elapsed</span>
            </div>
          )}
        </div>

        {/* Sim Step 0: Ready to start */}
        {simStep === 0 && (
          <div className="text-center py-6 space-y-4">
            <p className="text-slate-700 text-sm sm:text-base max-w-lg mx-auto">
              {language === 'hi'
                ? 'यह सिमुलेशन दिखाता है कि कैसे एक ग्रामीण महिला उद्यमी बिना किसी प्रशिक्षण के केवल 3 सरल टैप में मुद्रा लोन अथवा PMEGP की पूरी जानकारी पा सकती है।'
                : 'This simulation benchmarks how an end user discovers a scheme, verifies eligibility, and accesses the official government roadmap.'}
            </p>
            <button
              onClick={startSimulation}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all min-h-[48px]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{t.metricSimBtn}</span>
            </button>
          </div>
        )}

        {/* Sim Step 1: Persona prompt */}
        {simStep === 1 && (
          <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 text-brand-800 font-bold text-base">
              <span>Goal: Find micro-credit for setting up a village tailoring shop</span>
            </div>
            <p className="text-sm text-slate-700">
              {language === 'hi'
                ? 'परिदृश्य: शांति दीदी अपने गांव में 3 सिलाई मशीनें लगाना चाहती हैं। वे बिना गारंटी के ऋण खोजना चाहती हैं।'
                : 'Scenario: Shanti Didi wants to buy 3 sewing machines for her rural boutique without pledging land collateral.'}
            </p>
            <button
              onClick={() => advanceStep(2)}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-sm min-h-[44px]"
            >
              Step 1: Select "Mudra Yojana (PMMY)"
            </button>
          </div>
        )}

        {/* Sim Step 2: Check Eligibility */}
        {simStep === 2 && (
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-4 animate-fadeIn">
            <h3 className="font-bold text-slate-900 text-base">
              Step 2: Checking Eligibility & Document Checklist
            </h3>
            <p className="text-sm text-slate-700">
              Verified: Shishu category provides up to ₹50,000 collateral-free loan with zero processing fee for women artisans.
            </p>
            <button
              onClick={() => advanceStep(3)}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm min-h-[44px]"
            >
              Step 2: Verify Checklist & Step Roadmap
            </button>
          </div>
        )}

        {/* Sim Step 3: Referral Action */}
        {simStep === 3 && (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 animate-fadeIn">
            <h3 className="font-bold text-slate-900 text-base">
              Step 3: Direct Link to Udyamimitra / Mudra Official Portal
            </h3>
            <p className="text-sm text-slate-700">
              User taps "Visit Official Government Portal" to submit application form directly.
            </p>
            <button
              onClick={() => advanceStep(4)}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm min-h-[44px]"
            >
              Step 3: Complete Goal & Reach Portal
            </button>
          </div>
        )}

        {/* Sim Step 4: Finished simulation */}
        {simStep === 4 && simResults && (
          <div className="p-6 rounded-2xl bg-emerald-100/70 border border-emerald-300 text-center space-y-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Task Successfully Completed!
              </h3>
              <p className="text-sm text-emerald-900 mt-1">
                Completed discovery-to-referral pipeline in <strong className="font-extrabold text-base">{simResults.completedIn} seconds</strong>.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setSimStep(0)}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-earth-300 text-slate-800 font-semibold text-xs sm:text-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Run Again</span>
              </button>
              <button
                onClick={() => onNavigate('resources')}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs sm:text-sm"
              >
                <span>Browse Real Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
