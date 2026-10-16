import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SavedProvider } from './context/SavedContext';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { SavedPage } from './pages/SavedPage';
import { ImpactMetricsPage } from './pages/ImpactMetricsPage';
import { api } from './services/api';
import { initialResources, initialCategories } from './data/initialData';

function MainApp() {
  const { language, t } = useLanguage();
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedResource, setSelectedResource] = useState(null);

  // Filter States for Resources
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Data States
  const [resources, setResources] = useState(initialResources);
  const [categories, setCategories] = useState(initialCategories);
  const [opportunities, setOpportunities] = useState(() =>
    initialResources.filter(r => r.type !== 'learning-resource')
  );
  const [loading, setLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState(null);

  // Check backend health & fetch resources on mount
  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);
        // Health check
        const health = await api.checkHealth();
        setBackendStatus(health);

        // Fetch categories & resources
        const [cats, resList, opps] = await Promise.all([
          api.getCategories(),
          api.getResources(),
          api.getOpportunities()
        ]);

        if (cats && cats.length) setCategories(cats);
        if (resList && resList.length) setResources(resList);
        if (opps && opps.length) setOpportunities(opps);
      } catch (err) {
        console.warn('Using client initial dataset', err);
      } finally {
        setLoading(false);
      }
    };

    initData();
  }, []);

  // Filter resources based on current search & category & type filters
  const filteredResources = resources.filter((item) => {
    // Category filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    // Type filter
    if (selectedType !== 'all' && item.type !== selectedType) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim() !== '') {
      const term = searchQuery.trim().toLowerCase();
      const titleEn = item.title?.en?.toLowerCase() || '';
      const titleHi = item.title?.hi?.toLowerCase() || '';
      const descEn = item.description?.en?.toLowerCase() || '';
      const descHi = item.description?.hi?.toLowerCase() || '';
      const catEn = item.categoryLabel?.en?.toLowerCase() || '';
      const catHi = item.categoryLabel?.hi?.toLowerCase() || '';
      const typeEn = item.typeLabel?.en?.toLowerCase() || '';
      const typeHi = item.typeLabel?.hi?.toLowerCase() || '';
      const tags = Array.isArray(item.tags) ? item.tags.join(' ').toLowerCase() : '';
      const source = item.sourceName?.toLowerCase() || '';

      const match =
        titleEn.includes(term) ||
        titleHi.includes(term) ||
        descEn.includes(term) ||
        descHi.includes(term) ||
        catEn.includes(term) ||
        catHi.includes(term) ||
        typeEn.includes(term) ||
        typeHi.includes(term) ||
        tags.includes(term) ||
        source.includes(term);

      if (!match) return false;
    }
    return true;
  });

  const featuredResources = resources.filter((r) => r.featured);

  // Navigation handlers
  const handleNavigate = (tab) => {
    setSelectedResource(null);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectResource = (resource) => {
    setSelectedResource(resource);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetail = () => {
    setSelectedResource(null);
  };

  const handleCategorySelectFromHome = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedType('all');
    setSearchQuery('');
    setSelectedResource(null);
    setCurrentTab('resources');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmitFromHome = (query) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    setSelectedType('all');
    setSelectedResource(null);
    setCurrentTab('resources');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-earth-50 text-slate-900 font-sans selection:bg-brand-200">
      {/* Top Navbar */}
      <Navbar
        currentTab={selectedResource ? '' : currentTab}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {selectedResource ? (
          <ResourceDetailPage
            resource={selectedResource}
            onBack={handleBackFromDetail}
          />
        ) : (
          <>
            {currentTab === 'home' && (
              <HomePage
                categories={categories}
                featuredResources={featuredResources}
                onSelectResource={handleSelectResource}
                onNavigate={handleNavigate}
                onCategorySelect={handleCategorySelectFromHome}
                onSearchSubmit={handleSearchSubmitFromHome}
              />
            )}

            {currentTab === 'resources' && (
              <ResourcesPage
                resources={filteredResources}
                categories={categories}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                onResetFilters={handleResetFilters}
                onSelectResource={handleSelectResource}
                loading={loading}
              />
            )}

            {currentTab === 'opportunities' && (
              <OpportunitiesPage
                opportunities={opportunities}
                onSelectResource={handleSelectResource}
                loading={loading}
              />
            )}

            {currentTab === 'saved' && (
              <SavedPage
                allResources={resources}
                onSelectResource={handleSelectResource}
                onNavigate={handleNavigate}
              />
            )}

            {currentTab === 'impact' && (
              <ImpactMetricsPage onNavigate={handleNavigate} />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile-First Bottom Navigation (visible on mobile / small screens) */}
      <BottomNav
        currentTab={selectedResource ? '' : currentTab}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <SavedProvider>
        <MainApp />
      </SavedProvider>
    </LanguageProvider>
  );
}
