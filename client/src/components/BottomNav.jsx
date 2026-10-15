import React from 'react';
import { Home, BookOpen, Award, Bookmark, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSaved } from '../context/SavedContext';

export const BottomNav = ({ currentTab, onNavigate }) => {
  const { t } = useLanguage();
  const { savedCount } = useSaved();

  const items = [
    { id: 'home', label: t.navHome, icon: Home },
    { id: 'resources', label: t.navResources, icon: BookOpen },
    { id: 'opportunities', label: t.navOpportunities, icon: Award },
    { id: 'saved', label: t.navSaved, icon: Bookmark, badge: savedCount },
    { id: 'impact', label: t.navImpact, icon: BarChart3 },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-earth-200 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <nav className="grid grid-cols-5 h-16 max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              type="button"
              className={`flex flex-col items-center justify-center gap-1 relative transition-colors ${
                isActive ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-brand-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] truncate max-w-[64px] leading-tight text-center">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-6 h-1 rounded-full bg-brand-600"></span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
