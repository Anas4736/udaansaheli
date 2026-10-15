import Resource from '../models/Resource.js';
import { seedResources, seedCategories } from '../data/seedData.js';
import { getDBStatus } from '../config/db.js';

// In-memory data store for fallback
let memoryResources = [...seedResources];

/**
 * Filter items helper for in-memory mode
 */
const filterMemoryItems = (items, query) => {
  let filtered = [...items];

  if (query.category && query.category !== 'all') {
    filtered = filtered.filter(item => item.category === query.category);
  }

  if (query.type && query.type !== 'all') {
    filtered = filtered.filter(item => item.type === query.type);
  }

  if (query.featured === 'true' || query.featured === true) {
    filtered = filtered.filter(item => item.featured === true);
  }

  if (query.search && query.search.trim()) {
    const term = query.search.trim().toLowerCase();
    filtered = filtered.filter(item => {
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

  return filtered;
};

/**
 * GET /api/resources
 */
export const getResources = async (req, res) => {
  try {
    const dbStatus = getDBStatus();

    if (dbStatus.isUsingFallback) {
      const results = filterMemoryItems(memoryResources, req.query);
      return res.json({
        success: true,
        count: results.length,
        dataSource: 'resilient-in-memory',
        data: results
      });
    }

    // MongoDB query
    const filter = {};
    if (req.query.category && req.query.category !== 'all') {
      filter.category = req.query.category;
    }
    if (req.query.type && req.query.type !== 'all') {
      filter.type = req.query.type;
    }
    if (req.query.featured === 'true') {
      filter.featured = true;
    }
    if (req.query.search && req.query.search.trim()) {
      const regex = new RegExp(req.query.search.trim(), 'i');
      filter.$or = [
        { 'title.en': regex },
        { 'title.hi': regex },
        { 'description.en': regex },
        { 'description.hi': regex },
        { tags: regex },
        { sourceName: regex }
      ];
    }

    const resources = await Resource.find(filter).sort({ featured: -1, createdAt: -1 });

    res.json({
      success: true,
      count: resources.length,
      dataSource: 'mongodb-atlas',
      data: resources
    });
  } catch (error) {
    console.error('Error fetching resources:', error);
    // Fallback on unexpected error
    const fallback = filterMemoryItems(memoryResources, req.query);
    res.json({
      success: true,
      count: fallback.length,
      dataSource: 'resilient-fallback-on-error',
      data: fallback
    });
  }
};

/**
 * GET /api/resources/:id
 */
export const getResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    const dbStatus = getDBStatus();

    if (dbStatus.isUsingFallback) {
      const item = memoryResources.find(r => r.id === id || String(r._id) === id);
      if (!item) {
        return res.status(404).json({ success: false, message: 'Resource not found' });
      }
      return res.json({ success: true, data: item });
    }

    let resource = await Resource.findOne({ id });
    if (!resource && id.match(/^[0-9a-fA-F]{24}$/)) {
      resource = await Resource.findById(id);
    }

    if (!resource) {
      // Check in fallback data just in case
      const item = memoryResources.find(r => r.id === id);
      if (item) {
        return res.json({ success: true, data: item });
      }
      return res.status(404).json({ success: false, message: 'Resource not found' });
    }

    res.json({ success: true, data: resource });
  } catch (error) {
    console.error('Error fetching resource detail:', error);
    const item = memoryResources.find(r => r.id === req.params.id);
    if (item) {
      return res.json({ success: true, data: item });
    }
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

/**
 * GET /api/categories
 */
export const getCategories = async (req, res) => {
  try {
    const categoriesWithCounts = seedCategories.map(cat => {
      const count = memoryResources.filter(r => r.category === cat.id).length;
      return {
        ...cat,
        resourceCount: count
      };
    });

    res.json({
      success: true,
      data: categoriesWithCounts
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET /api/opportunities
 */
export const getOpportunities = async (req, res) => {
  try {
    const query = {
      ...req.query,
      type: req.query.type || 'all'
    };

    // Filter for schemes, training, markets
    const dbStatus = getDBStatus();
    if (dbStatus.isUsingFallback) {
      let opps = memoryResources.filter(r => r.type !== 'learning-resource');
      if (query.type && query.type !== 'all') {
        opps = opps.filter(r => r.type === query.type);
      }
      if (query.search && query.search.trim()) {
        const term = query.search.trim().toLowerCase();
        opps = opps.filter(item =>
          item.title?.en?.toLowerCase().includes(term) ||
          item.title?.hi?.toLowerCase().includes(term) ||
          item.description?.en?.toLowerCase().includes(term) ||
          item.description?.hi?.toLowerCase().includes(term)
        );
      }
      return res.json({ success: true, count: opps.length, data: opps });
    }

    const filter = {
      type: { $in: ['government-scheme', 'training-program', 'market-opportunity'] }
    };
    if (query.type && query.type !== 'all') {
      filter.type = query.type;
    }
    if (query.category && query.category !== 'all') {
      filter.category = query.category;
    }
    if (query.search && query.search.trim()) {
      const regex = new RegExp(query.search.trim(), 'i');
      filter.$or = [
        { 'title.en': regex },
        { 'title.hi': regex },
        { 'description.en': regex },
        { 'description.hi': regex }
      ];
    }

    const opportunities = await Resource.find(filter).sort({ featured: -1, createdAt: -1 });
    res.json({ success: true, count: opportunities.length, data: opportunities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * POST /api/seed
 */
export const seedDatabase = async (req, res) => {
  try {
    const dbStatus = getDBStatus();
    if (dbStatus.isUsingFallback) {
      memoryResources = [...seedResources];
      return res.json({
        success: true,
        message: 'In-memory dataset refreshed successfully.',
        count: memoryResources.length
      });
    }

    await Resource.deleteMany({});
    const inserted = await Resource.insertMany(seedResources);

    res.json({
      success: true,
      message: 'Database seeded successfully with verified records.',
      count: inserted.length,
      data: inserted
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
