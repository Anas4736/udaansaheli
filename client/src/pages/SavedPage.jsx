import React from 'react';
import { BookmarkX, BookmarkCheck, ArrowRight, Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSaved } from '../context/SavedContext';
import { ResourceCard } from '../components/ResourceCard';

export const SavedPage = ({
  allResources = [],
  onSelectResource,
  onNavigate
}) => {
  const { t } = useLanguage();
  const { savedIds, clearAllSaved } = useSaved();

  const savedResources = allResources.filter((r) => savedIds.includes(r.id));

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            {t.savedTitle}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            {t.savedSubtitle}
          </p>
        </div>

        {savedResources.length > 0 && (
          <button
            onClick={clearAllSaved}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors self-start sm:self-auto min-h-[40px]"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All Saved</span>
          </button>
        )}
      </div>

      {/* Grid or Empty State */}
      {savedResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedResources.map((res) => (
            <ResourceCard
              key={res.id}
              resource={res}
              onSelect={onSelectResource}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-earth-200 p-8 sm:p-14 text-center max-w-lg mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">
            <BookmarkX className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {t.noSavedTitle}
          </h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t.noSavedDesc}
          </p>
          <button
            onClick={() => onNavigate('resources')}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition-colors shadow-sm min-h-[48px]"
          >
            <span>{t.browseResourcesBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
