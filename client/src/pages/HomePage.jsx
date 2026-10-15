import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  TrendingUp,
  Package,
  Share2,
  Smartphone,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ResourceCard } from '../components/ResourceCard';
import { AudioReader } from '../components/AudioReader';

const iconMap = {
  Award,
  BookOpen,
  TrendingUp,
  Package,
  Share2,
  Smartphone
};

export const HomePage = ({
  categories = [],
  featuredResources = [],
  onSelectResource,
  onNavigate,
  onCategorySelect,
  onSearchSubmit
}) => {
  const { language, t } = useLanguage();
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchInput);
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white shadow-xl p-6 sm:p-10 lg:p-14">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-marigold-500/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-400/20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-marigold-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-marigold-400" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-4">
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-brand-100 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 font-normal">
            {t.heroSubtitle}
          </p>

          {/* Search Box */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl shadow-lg border border-white/30"
          >
            <div className="relative flex-grow flex items-center">
              <Search className="w-5 h-5 text-brand-600 ml-3 mr-2 flex-shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={t.heroSearchPlaceholder}
                className="w-full py-2.5 sm:py-3 px-2 text-slate-800 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 min-h-[48px] shadow-sm"
            >
              <span>{t.heroSearchBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Audio helper for hero text */}
          <div className="mt-4 flex items-center gap-3">
            <AudioReader
              text={`${t.heroTitle}. ${t.heroSubtitle}`}
              title={t.appName}
              size="sm"
            />
            <span className="text-xs text-brand-200 hidden sm:inline">
              {language === 'hi' ? 'मार्गदर्शिका सुनें' : 'Listen to welcome message'}
            </span>
          </div>
        </div>
      </section>

      {/* 3 Simple Steps for Rural Entrepreneurs */}
      <section className="bg-white rounded-3xl border border-earth-200 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            {t.stepsHeading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {language === 'hi'
              ? 'बिना किसी परेशानी के 3 सरल चरणों में अपने हुनर को एक लाभदायक व्यवसाय में बदलें'
              : 'Turn your craft and hard work into a profitable enterprise in 3 straightforward steps'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div
            onClick={() => onNavigate('resources')}
            className="p-5 sm:p-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 hover:bg-orange-50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-sm group-hover:scale-105 transition-transform">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-700">
              {t.step1Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {t.step1Desc}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-700">
              <span>{t.readMore}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => onNavigate('opportunities')}
            className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 hover:bg-amber-50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-sm group-hover:scale-105 transition-transform">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700">
              {t.step2Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {t.step2Desc}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700">
              <span>{t.readMore}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => onNavigate('opportunities')}
            className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 hover:bg-emerald-50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-sm group-hover:scale-105 transition-transform">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800">
              {t.step3Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {t.step3Desc}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800">
              <span>{t.readMore}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </section>

      {/* 6 Core Business Categories */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              {t.categoriesHeading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.categoriesSubtitle}
            </p>
          </div>
          <button
            onClick={() => onNavigate('resources')}
            type="button"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800 self-start sm:self-auto min-h-[40px]"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || BookOpen;
            const name = cat.name?.[language] || cat.name?.en || cat.id;
            const desc = cat.description?.[language] || cat.description?.en || '';

            return (
              <div
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className="bg-white rounded-2xl border border-earth-200 p-5 sm:p-6 hover:border-brand-300 hover:shadow-md card-hover transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 border border-brand-200 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                    {name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-earth-100 text-xs font-semibold text-brand-700">
                  <span>{cat.resourceCount || 0} {t.resultsFound}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Government Schemes & Opportunities */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              {t.featuredHeading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.featuredSubtitle}
            </p>
          </div>
          <button
            onClick={() => onNavigate('opportunities')}
            type="button"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800 self-start sm:self-auto min-h-[40px]"
          >
            <span>{t.tabSchemes}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResources.map((res) => (
            <ResourceCard
              key={res.id}
              resource={res}
              onSelect={onSelectResource}
            />
          ))}
        </div>
      </section>

      {/* Practical Village Entrepreneur Tip Box */}
      <section className="bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-orange-500/10 border-2 border-brand-200 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {language === 'hi'
                ? 'उड़ान सहेली का उपयोगी सुझाव: कभी भी अपनी मजदूरी जोड़ना न भूलें!'
                : 'UdaanSaheli Golden Tip: Never forget to pay yourself a fair labor wage!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {language === 'hi'
                ? 'अक्सर ग्रामीण महिलाएं सामान का दाम तय करते समय केवल कच्चे माल का खर्च जोड़ती हैं। अपने काम के हर घंटे का उचित मेहनताना जोड़ें ताकि आपका व्यवसाय आपको और आपके परिवार को सच्चा वित्तीय संबल दे सके।'
                : 'Rural women often calculate only raw material costs. Always add your hourly labor wage to every product price so your enterprise builds lasting family prosperity.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
