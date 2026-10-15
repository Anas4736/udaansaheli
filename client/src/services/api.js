import { initialResources, initialCategories } from '../data/initialData.js';

const getApiBase = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && envUrl.trim() !== '') {
    // If user specified http://localhost:5000, append /api
    const cleanUrl = envUrl.replace(/\/+$/, '');
    return cleanUrl.endsWith('/api') ? cleanUrl : `${cleanUrl}/api`;
  }
  return '/api';
};

const API_BASE = getApiBase();

/**
 * Filter offline/fallback data
 */
const filterLocalResources = (query = {}) => {
  let list = [...initialResources];

  if (query.category && query.category !== 'all') {
    list = list.filter(item => item.category === query.category);
  }

  if (query.type && query.type !== 'all') {
    list = list.filter(item => item.type === query.type);
  }

  if (query.featured) {
    list = list.filter(item => item.featured === true);
  }

  if (query.search && query.search.trim()) {
    const term = query.search.trim().toLowerCase();
    list = list.filter(item => {
      const titleEn = item.title?.en?.toLowerCase() || '';
      const titleHi = item.title?.hi?.toLowerCase() || '';
      const descEn = item.description?.en?.toLowerCase() || '';
      const descHi = item.description?.hi?.toLowerCase() || '';
      const tags = Array.isArray(item.tags) ? item.tags.join(' ').toLowerCase() : '';
      const source = item.sourceName?.toLowerCase() || '';

      return (
        titleEn.includes(term) ||
        titleHi.includes(term) ||
        descEn.includes(term) ||
        descHi.includes(term) ||
        tags.includes(term) ||
        source.includes(term)
      );
    });
  }

  return list;
};

export const api = {
  /**
   * Check backend health
   */
  async checkHealth() {
    try {
      const res = await fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(3000) });
      if (!res.ok) throw new Error('Health check failed');
      return await res.json();
    } catch {
      return { status: 'offline', appName: 'UdaanSaheli Client Fallback Mode' };
    }
  },

  /**
   * Fetch resources with filters
   */
  async getResources(params = {}) {
    try {
      const queryParams = new URLSearchParams();
      if (params.category && params.category !== 'all') queryParams.append('category', params.category);
      if (params.type && params.type !== 'all') queryParams.append('type', params.type);
      if (params.featured) queryParams.append('featured', 'true');
      if (params.search) queryParams.append('search', params.search);

      const url = `${API_BASE}/resources?${queryParams.toString()}`;
      const res = await fetch(url, { signal: AbortSignal.timeout(4000) });

      if (!res.ok) throw new Error('Failed to fetch from API');
      const data = await res.json();
      return data.data || [];
    } catch (err) {
      console.warn('Backend unavailable, using resilient local dataset:', err.message);
      return filterLocalResources(params);
    }
  },

  /**
   * Fetch single resource by ID
   */
  async getResourceById(id) {
    try {
      const res = await fetch(`${API_BASE}/resources/${id}`, { signal: AbortSignal.timeout(4000) });
      if (!res.ok) throw new Error('Resource not found via API');
      const data = await res.json();
      return data.data;
    } catch {
      return initialResources.find(item => item.id === id) || null;
    }
  },

  /**
   * Fetch categories with counts
   */
  async getCategories() {
    try {
      const res = await fetch(`${API_BASE}/categories`, { signal: AbortSignal.timeout(4000) });
      if (!res.ok) throw new Error('Failed to fetch categories');
      const data = await res.json();
      return data.data;
    } catch {
      return initialCategories.map(cat => ({
        ...cat,
        resourceCount: initialResources.filter(r => r.category === cat.id).length
      }));
    }
  },

  /**
   * Fetch opportunities (schemes, training, markets)
   */
  async getOpportunities(params = {}) {
    try {
      const queryParams = new URLSearchParams();
      if (params.type && params.type !== 'all') queryParams.append('type', params.type);
      if (params.category && params.category !== 'all') queryParams.append('category', params.category);
      if (params.search) queryParams.append('search', params.search);

      const url = `${API_BASE}/opportunities?${queryParams.toString()}`;
      const res = await fetch(url, { signal: AbortSignal.timeout(4000) });

      if (!res.ok) throw new Error('Failed to fetch opportunities from API');
      const data = await res.json();
      return data.data || [];
    } catch {
      let opps = initialResources.filter(r => r.type !== 'learning-resource');
      if (params.type && params.type !== 'all') {
        opps = opps.filter(r => r.type === params.type);
      }
      if (params.search) {
        opps = filterLocalResources({ search: params.search }).filter(r => r.type !== 'learning-resource');
      }
      return opps;
    }
  }
};
