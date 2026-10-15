import React from 'react';
import { ShieldCheck, BookOpenCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const VerificationBadge = ({ isVerifiedOfficial, verifiedDate }) => {
  const { t } = useLanguage();

  if (isVerifiedOfficial) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-nature-100 text-nature-800 border border-nature-300">
        <ShieldCheck className="w-3.5 h-3.5 text-nature-700 flex-shrink-0" />
        <span>{t.verifiedOfficialBadge}</span>
        {verifiedDate && (
          <span className="text-nature-600 font-normal hidden sm:inline">
            • {verifiedDate}
          </span>
        )}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
      <BookOpenCheck className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
      <span>{t.practicalGuideBadge}</span>
    </span>
  );
};
