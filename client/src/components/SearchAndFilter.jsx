import React from 'react';
import { Search, X, Filter, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SearchAndFilter = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  categories = [],
  totalCount = 0,
  onReset
}) => {
  const { language, t } = useLanguage();

  const typeOptions = [
    { id: 'all', label: t.typeAll },
    { id: 'government-scheme', label: t.typeGovScheme },
    { id: 'learning-resource', label: t.typeLearning },
    { id: 'training-program', label: t.typeTraining },
    { id: 'market-opportunity', label: t.typeMarket },
  ];

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedType !== 'all';

  return (
    <div className="bg-white rounded-2xl border border-earth-200 p-4 sm:p-5 shadow-sm space-y-4">
      {/* Search Input */}
      <div className="relative">
        <label htmlFor="resource-search" className="sr-only">
          {t.searchLabel}
        </label>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-brand-600" />
        </div>
        <input
          id="resource-search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full pl-11 pr-11 py-3 text-base rounded-xl border border-earth-300 bg-earth-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all min-h-[48px]"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            type="button"
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Tabs by Type */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {typeOptions.map((opt) => {
          const isActive = selectedType === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onTypeChange(opt.id)}
              type="button"
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all min-h-[40px] ${
                isActive
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-earth-100 text-slate-700 hover:bg-earth-200'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Category Dropdown & Reset Bar */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-earth-100 flex-wrap">
        <div className="flex items-center gap-2 flex-grow sm:flex-grow-0 min-w-[220px]">
          <Filter className="w-4 h-4 text-slate-500" />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full py-2 px-3 text-sm rounded-lg border border-earth-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-brand-500 min-h-[40px]"
          >
            <option value="all">{t.filterByCategory}</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name?.[language] || cat.name?.en || cat.id} {cat.resourceCount ? `(${cat.resourceCount})` : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          <span className="text-xs sm:text-sm font-medium text-slate-500">
            <strong className="text-brand-700 font-bold">{totalCount}</strong> {t.resultsFound}
          </span>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              type="button"
              className="inline-flex items-center gap-1 text-xs sm:text-sm text-brand-700 hover:text-brand-800 font-semibold underline underline-offset-2 min-h-[36px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.clearFilters}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
