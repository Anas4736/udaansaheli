import React from 'react';
import { SearchAndFilter } from '../components/SearchAndFilter';
import { ResourceCard } from '../components/ResourceCard';
import { useLanguage } from '../context/LanguageContext';
import { SearchX, Sparkles } from 'lucide-react';

export const ResourcesPage = ({
  resources = [],
  categories = [],
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  onResetFilters,
  onSelectResource,
  loading = false
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.navResources}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
          {t.categoriesSubtitle}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <SearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        selectedType={selectedType}
        onTypeChange={onTypeChange}
        categories={categories}
        totalCount={resources.length}
        onReset={onResetFilters}
      />

      {/* Content Grid or Empty State */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white rounded-2xl border border-earth-200 p-6 animate-pulse space-y-4">
              <div className="h-4 bg-earth-200 rounded w-1/3"></div>
              <div className="h-6 bg-earth-200 rounded w-3/4"></div>
              <div className="h-16 bg-earth-100 rounded w-full"></div>
              <div className="h-10 bg-earth-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      ) : resources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => (
            <ResourceCard
              key={res.id}
              resource={res}
              onSelect={onSelectResource}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-earth-200 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 text-brand-700 flex items-center justify-center mx-auto mb-4">
            <SearchX className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {t.noResultsTitle}
          </h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t.noResultsDesc}
          </p>
          <button
            onClick={onResetFilters}
            type="button"
            className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition-colors shadow-sm min-h-[44px]"
          >
            {t.clearFilters}
          </button>
        </div>
      )}
    </div>
  );
};
