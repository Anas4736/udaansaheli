import React, { useState } from 'react';
import {
  Timer,
  CheckCircle2,
  ExternalLink,
  Play,
  RotateCcw,
  Sparkles,
  BarChart,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ImpactMetricsPage = ({ onNavigate }) => {
  const { t, language } = useLanguage();

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

  React.useEffect(() => {
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
          <span>BIOS 2026 Evaluation Framework</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.impactTitle}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          {t.impactSubtitle}
        </p>
      </div>

      {/* 3 Core Proposed Evaluation Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric 1 */}
        <div className="bg-white rounded-3xl border border-earth-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">
              {t.metric1Name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {t.metric1Desc}
            </p>
          </div>
          <div className="pt-4 border-t border-earth-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-orange-600">
              {t.metric1Value}
            </span>
            <p className="text-[11px] text-slate-400 mt-1">Proposed benchmark for 2G/3G speeds</p>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-3xl border border-earth-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">
              {t.metric2Name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {t.metric2Desc}
            </p>
          </div>
          <div className="pt-4 border-t border-earth-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
              {t.metric2Value}
            </span>
            <p className="text-[11px] text-slate-400 mt-1">Simulated rural usability trial target</p>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-3xl border border-earth-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">
              {t.metric3Name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {t.metric3Desc}
            </p>
          </div>
          <div className="pt-4 border-t border-earth-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              {t.metric3Value}
            </span>
            <p className="text-[11px] text-slate-400 mt-1">Direct click-throughs to official schemes</p>
          </div>
        </div>
      </div>

      {/* Interactive Usability Test Simulation */}
      <div className="bg-white rounded-3xl border-2 border-brand-200 p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-earth-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {t.metricSimTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t.metricSimDesc}
            </p>
          </div>
          {timerRunning && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-100 text-brand-800 font-mono font-bold text-base">
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
                ? 'यह सिमुलेशन दिखाता है कि कैसे एक ग्रामीण महिला उद्यमी बिना किसी प्रशिक्षण के केवल 3 टैप में मुद्रा लोन अथवा PMEGP की पूरी जानकारी पा सकती है।'
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
