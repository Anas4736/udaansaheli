import React, { useState } from 'react';
import { Search, Award, BookOpen, ShoppingBag, Filter, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ResourceCard } from '../components/ResourceCard';

export const OpportunitiesPage = ({
  opportunities = [],
  onSelectResource,
  loading = false
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: t.tabAll, icon: Sparkles },
    { id: 'government-scheme', label: t.tabSchemes, icon: Award },
    { id: 'training-program', label: t.tabTraining, icon: BookOpen },
    { id: 'market-opportunity', label: t.tabMarkets, icon: ShoppingBag },
  ];

  const filteredOpportunities = opportunities.filter((item) => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const term = searchQuery.trim().toLowerCase();
    if (!term) return matchesTab;

    const titleEn = item.title?.en?.toLowerCase() || '';
    const titleHi = item.title?.hi?.toLowerCase() || '';
    const descEn = item.description?.en?.toLowerCase() || '';
    const descHi = item.description?.hi?.toLowerCase() || '';
    const matchesSearch =
      titleEn.includes(term) ||
      titleHi.includes(term) ||
      descEn.includes(term) ||
      descHi.includes(term);

    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.opportunitiesTitle}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
          {t.opportunitiesSubtitle}
        </p>
      </div>

      {/* Tabs and Search Bar */}
      <div className="bg-white rounded-2xl border border-earth-200 p-4 sm:p-5 shadow-sm space-y-4">
        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all min-h-[44px] ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-earth-100 text-slate-700 hover:bg-earth-200'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 text-sm sm:text-base rounded-xl border border-earth-300 bg-earth-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 min-h-[44px]"
          />
        </div>
      </div>

      {/* Content Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-2xl border border-earth-200 p-6 animate-pulse space-y-4">
              <div className="h-4 bg-earth-200 rounded w-1/3"></div>
              <div className="h-6 bg-earth-200 rounded w-3/4"></div>
              <div className="h-16 bg-earth-100 rounded w-full"></div>
            </div>
          ))}
        </div>
      ) : filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((res) => (
            <ResourceCard
              key={res.id}
              resource={res}
              onSelect={onSelectResource}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-earth-200 p-8 text-center max-w-md mx-auto">
          <p className="text-slate-600 text-sm mb-4">{t.noResultsTitle}</p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
            type="button"
            className="px-5 py-2 rounded-xl bg-brand-600 text-white font-semibold text-xs sm:text-sm"
          >
            {t.clearFilters}
          </button>
        </div>
      )}
    </div>
  );
};
