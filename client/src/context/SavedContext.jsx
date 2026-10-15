import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem('udaansaheli_saved_items');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('udaansaheli_saved_items', JSON.stringify(savedIds));
    } catch (e) {
      console.warn('localStorage error', e);
    }
  }, [savedIds]);

  const isSaved = (id) => savedIds.includes(id);

  const toggleSave = (resource) => {
    if (!resource || !resource.id) return;
    setSavedIds(prev => {
      if (prev.includes(resource.id)) {
        return prev.filter(item => item !== resource.id);
      } else {
        return [...prev, resource.id];
      }
    });
  };

  const removeSaved = (id) => {
    setSavedIds(prev => prev.filter(item => item !== id));
  };

  const clearAllSaved = () => {
    setSavedIds([]);
  };

  return (
    <SavedContext.Provider
      value={{
        savedIds,
        isSaved,
        toggleSave,
        removeSaved,
        clearAllSaved,
        savedCount: savedIds.length
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used within a SavedProvider');
  }
  return context;
};
