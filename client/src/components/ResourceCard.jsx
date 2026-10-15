import React from 'react';
import { Bookmark, BookmarkCheck, ExternalLink, ArrowRight, Building2, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSaved } from '../context/SavedContext';
import { VerificationBadge } from './VerificationBadge';
import { AudioReader } from './AudioReader';

export const ResourceCard = ({ resource, onSelect }) => {
  const { language, t } = useLanguage();
  const { isSaved, toggleSave } = useSaved();

  const title = resource.title?.[language] || resource.title?.en || '';
  const description = resource.description?.[language] || resource.description?.en || '';
  const categoryLabel = resource.categoryLabel?.[language] || resource.categoryLabel?.en || resource.category;
  const typeLabel = resource.typeLabel?.[language] || resource.typeLabel?.en || resource.type;
  const saved = isSaved(resource.id);

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(resource);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl border border-earth-200 p-5 shadow-sm hover:shadow-md card-hover transition-all flex flex-col justify-between cursor-pointer group relative"
    >
      {/* Top Meta: Badges and Bookmark */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800">
              <Tag className="w-3 h-3" />
              {categoryLabel}
            </span>
            <VerificationBadge
              isVerifiedOfficial={resource.isVerifiedOfficial}
              verifiedDate={resource.verifiedDate}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleSave(resource);
            }}
            type="button"
            className={`p-2.5 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
              saved
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-earth-100 text-slate-600 hover:bg-earth-200'
            }`}
            aria-label={saved ? t.savedBookmark : t.saveBookmark}
            title={saved ? t.savedBookmark : t.saveBookmark}
          >
            {saved ? (
              <BookmarkCheck className="w-5 h-5 text-white" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2 leading-snug">
          {title}
        </h3>

        {/* Description snippet */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer Info & Actions */}
      <div className="pt-3 border-t border-earth-100">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Building2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="truncate font-medium">{resource.sourceName}</span>
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <AudioReader
            text={description}
            title={title}
            size="sm"
          />

          <button
            onClick={handleCardClick}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 min-h-[44px]"
          >
            <span>{t.readMore}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
