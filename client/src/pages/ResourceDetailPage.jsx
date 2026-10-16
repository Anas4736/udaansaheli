import React from 'react';
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  CheckCircle2,
  ListOrdered,
  FileText,
  Gift,
  HelpCircle,
  Share2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSaved } from '../context/SavedContext';
import { VerificationBadge } from '../components/VerificationBadge';
import { AudioReader } from '../components/AudioReader';

export const ResourceDetailPage = ({ resource, onBack }) => {
  const { language, t } = useLanguage();
  const { isSaved, toggleSave } = useSaved();

  if (!resource) return null;

  const title = resource.title?.[language] || resource.title?.en || '';
  const description = resource.description?.[language] || resource.description?.en || '';
  const categoryLabel = resource.categoryLabel?.[language] || resource.categoryLabel?.en || resource.category;
  const typeLabel = resource.typeLabel?.[language] || resource.typeLabel?.en || resource.type;
  const eligibility = resource.eligibility?.[language] || resource.eligibility?.en || '';
  const benefits = resource.benefits?.[language] || resource.benefits?.en || '';
  const saved = isSaved(resource.id);

  const eligibilityPrefix = language === 'hi' ? 'पात्रता:' : 'Eligibility:';
  const benefitsPrefix = language === 'hi' ? 'लाभ:' : 'Benefits:';
  const fullTextToRead = `${title}. ${description}. ${
    eligibility ? `${eligibilityPrefix} ${eligibility}.` : ''
  } ${benefits ? `${benefitsPrefix} ${benefits}.` : ''}`;

  const handleOfficialPortalClick = () => {
    try {
      const current = parseInt(localStorage.getItem('udaansaheli_session_clicks') || '0', 10);
      localStorage.setItem('udaansaheli_session_clicks', String(current + 1));
    } catch (e) {
      // Ignore localStorage error
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Back Button Bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-earth-300 text-slate-700 hover:text-slate-900 hover:bg-earth-100 font-semibold text-sm transition-all shadow-sm min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backToResources}</span>
        </button>

        <div className="flex items-center gap-2">
          <AudioReader
            text={fullTextToRead}
            title={title}
            size="md"
          />

          <button
            onClick={() => toggleSave(resource)}
            type="button"
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 min-h-[44px] shadow-sm ${
              saved
                ? 'bg-brand-600 text-white'
                : 'bg-white border border-earth-300 text-slate-700 hover:bg-earth-100'
            }`}
          >
            {saved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-white" />
                <span>{t.savedBookmark}</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                <span>{t.saveBookmark}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Header Card */}
      <div className="bg-white rounded-3xl border border-earth-200 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
        {/* Badges & Meta */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-800">
            {categoryLabel}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-earth-100 text-slate-700">
            {typeLabel}
          </span>
          <VerificationBadge
            isVerifiedOfficial={resource.isVerifiedOfficial}
            verifiedDate={resource.verifiedDate}
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
          {title}
        </h1>

        {/* Source and Verification info box */}
        <div className="bg-earth-50 rounded-2xl p-4 sm:p-5 border border-earth-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
              <Building2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span>{t.sourceLabel}: <strong>{resource.sourceName}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span>{t.lastVerified}: {resource.verifiedDate}</span>
            </div>
          </div>

          {resource.sourceUrl && (
            <a
              href={resource.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOfficialPortalClick}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow flex-shrink-0 min-h-[48px]"
            >
              <span>{t.officialSourceBtn}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Description */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">
            {t.aboutHeading}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Eligibility Section (if available) */}
        {eligibility && (
          <div className="pt-6 border-t border-earth-200 space-y-3">
            <div className="flex items-center gap-2 text-brand-800">
              <HelpCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
              <h2 className="text-lg font-bold text-slate-900">
                {t.eligibilityHeading}
              </h2>
            </div>
            <div className="bg-orange-50/60 border border-orange-200 rounded-2xl p-4 sm:p-5 text-slate-800 text-sm sm:text-base leading-relaxed">
              {eligibility}
            </div>
          </div>
        )}

        {/* Benefits Section (if available) */}
        {benefits && (
          <div className="pt-6 border-t border-earth-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800">
              <Gift className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <h2 className="text-lg font-bold text-slate-900">
                {t.benefitsHeading}
              </h2>
            </div>
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 sm:p-5 text-slate-800 text-sm sm:text-base leading-relaxed">
              {benefits}
            </div>
          </div>
        )}

        {/* Required Documents Checklist */}
        {resource.requiredDocuments && resource.requiredDocuments.length > 0 && (
          <div className="pt-6 border-t border-earth-200 space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <FileText className="w-5 h-5 text-brand-600 flex-shrink-0" />
              <h2 className="text-lg font-bold text-slate-900">
                {t.documentsHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resource.requiredDocuments.map((doc, idx) => {
                const docText = doc?.[language] || doc?.en || '';
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-earth-50 border border-earth-200 text-xs sm:text-sm text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-nature-600 flex-shrink-0 mt-0.5" />
                    <span>{docText}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step-by-Step Application Steps */}
        {resource.steps && resource.steps.length > 0 && (
          <div className="pt-6 border-t border-earth-200 space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <ListOrdered className="w-5 h-5 text-brand-600 flex-shrink-0" />
              <h2 className="text-lg font-bold text-slate-900">
                {t.stepsHeadingDetail}
              </h2>
            </div>

            <div className="space-y-4">
              {resource.steps.map((step, idx) => {
                const stepTitle = step.title?.[language] || step.title?.en || '';
                const stepDetail = step.detail?.[language] || step.detail?.en || '';

                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-earth-50/70 border border-earth-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      {step.stepNumber || idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-slate-900">
                        {stepTitle}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {stepDetail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA to official site */}
        {resource.sourceUrl && (
          <div className="pt-6 border-t border-earth-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-50/50 p-6 rounded-2xl border border-brand-200">
            <div>
              <p className="font-bold text-slate-900 text-sm sm:text-base">
                {resource.isVerifiedOfficial ? t.officialSourceNotice : t.sampleNotice}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {resource.sourceName}
              </p>
            </div>
            <a
              href={resource.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOfficialPortalClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base transition-all shadow-md min-h-[48px]"
            >
              <span>{t.officialSourceBtn}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
