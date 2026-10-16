import Resource from '../models/Resource.js';
import { seedResources, seedCategories } from '../data/seedData.js';
import { getDBStatus, idempotentSeed } from '../config/db.js';

// In-memory data store for fallback
let memoryResources = [...seedResources];

const VALID_CATEGORIES = [
  'all',
  'starting-business',
  'business-planning',
  'finance-pricing',
  'product-packaging',
  'branding-marketing',
  'digital-selling'
];

const VALID_TYPES = [
  'all',
  'government-scheme',
  'learning-resource',
  'training-program',
  'market-opportunity'
];

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
      const catEn = item.categoryLabel?.en?.toLowerCase() || '';
      const catHi = item.categoryLabel?.hi?.toLowerCase() || '';
      const typeEn = item.typeLabel?.en?.toLowerCase() || '';
      const typeHi = item.typeLabel?.hi?.toLowerCase() || '';
      const tags = Array.isArray(item.tags) ? item.tags.join(' ').toLowerCase() : '';
      const source = item.sourceName?.toLowerCase() || '';

      return (
        titleEn.includes(term) ||
        titleHi.includes(term) ||
        descEn.includes(term) ||
        descHi.includes(term) ||
        catEn.includes(term) ||
        catHi.includes(term) ||
        typeEn.includes(term) ||
        typeHi.includes(term) ||
        tags.includes(term) ||
        source.includes(term)
      );
    });
  }

  return filtered;
};

/**
 * Input validation middleware for resources query
 */
export const validateResourceQuery = (req, res, next) => {
  const { category, type, search } = req.query;

  if (category && !VALID_CATEGORIES.includes(category)) {
    return res.status(400).json({
      success: false,
      error: `Invalid category '${category}'. Allowed values: ${VALID_CATEGORIES.join(', ')}`
    });
  }

  if (type && !VALID_TYPES.includes(type)) {
    return res.status(400).json({
      success: false,
      error: `Invalid type '${type}'. Allowed values: ${VALID_TYPES.join(', ')}`
    });
  }

  if (search && typeof search === 'string' && search.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Search query exceeds maximum limit of 100 characters.'
    });
  }

  next();
};

/**
 * GET /api/resources
 */
export const getResources = async (req, res) => {
  try {
    const dbStatus = await getDBStatus();

    if (dbStatus.isUsingFallback) {
      const results = filterMemoryItems(memoryResources, req.query);
      return res.json({
        success: true,
        count: results.length,
        dataSource: 'resilient-in-memory',
        data: results
      });
    }

    // MongoDB Atlas query
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
        { 'categoryLabel.en': regex },
        { 'categoryLabel.hi': regex },
        { 'typeLabel.en': regex },
        { 'typeLabel.hi': regex },
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
    console.error('Error fetching resources from DB:', error.message);
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

    if (!id || typeof id !== 'string' || id.trim().length === 0 || id.length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Invalid resource ID parameter.'
      });
    }

    const dbStatus = await getDBStatus();

    if (dbStatus.isUsingFallback) {
      const item = memoryResources.find(r => r.id === id || String(r._id) === id);
      if (!item) {
        return res.status(404).json({ success: false, message: `Resource not found with ID '${id}'` });
      }
      return res.json({ success: true, data: item, dataSource: 'resilient-in-memory' });
    }

    let resource = await Resource.findOne({ id });
    if (!resource && id.match(/^[0-9a-fA-F]{24}$/)) {
      resource = await Resource.findById(id);
    }

    if (!resource) {
      // Check in fallback data just in case
      const item = memoryResources.find(r => r.id === id);
      if (item) {
        return res.json({ success: true, data: item, dataSource: 'fallback-cache' });
      }
      return res.status(404).json({ success: false, message: `Resource not found with ID '${id}'` });
    }

    res.json({ success: true, data: resource, dataSource: 'mongodb-atlas' });
  } catch (error) {
    console.error('Error fetching resource detail:', error);
    const item = memoryResources.find(r => r.id === req.params.id);
    if (item) {
      return res.json({ success: true, data: item, dataSource: 'fallback-on-error' });
    }
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * GET /api/categories
 */
export const getCategories = async (req, res) => {
  try {
    const dbStatus = await getDBStatus();
    let countsMap = {};

    if (dbStatus.isConnected) {
      // Dynamic aggregation from MongoDB Atlas
      const aggregations = await Resource.aggregate([
        { $group: { _id: '$category', count: { $sum: 1 } } }
      ]);
      aggregations.forEach(item => {
        countsMap[item._id] = item.count;
      });
    } else {
      seedCategories.forEach(cat => {
        countsMap[cat.id] = memoryResources.filter(r => r.category === cat.id).length;
      });
    }

    const categoriesWithCounts = seedCategories.map(cat => ({
      ...cat,
      resourceCount: countsMap[cat.id] || 0
    }));

    res.json({
      success: true,
      dataSource: dbStatus.isConnected ? 'mongodb-atlas' : 'resilient-in-memory',
      data: categoriesWithCounts
    });
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    const fallback = seedCategories.map(cat => ({
      ...cat,
      resourceCount: memoryResources.filter(r => r.category === cat.id).length
    }));
    res.json({ success: true, dataSource: 'fallback-on-error', data: fallback });
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

    const dbStatus = await getDBStatus();
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
          item.description?.hi?.toLowerCase().includes(term) ||
          item.categoryLabel?.en?.toLowerCase().includes(term) ||
          item.categoryLabel?.hi?.toLowerCase().includes(term) ||
          (Array.isArray(item.tags) && item.tags.join(' ').toLowerCase().includes(term))
        );
      }
      return res.json({ success: true, count: opps.length, dataSource: 'resilient-in-memory', data: opps });
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
        { 'description.hi': regex },
        { 'categoryLabel.en': regex },
        { 'categoryLabel.hi': regex },
        { tags: regex }
      ];
    }

    const opportunities = await Resource.find(filter).sort({ featured: -1, createdAt: -1 });
    res.json({ success: true, count: opportunities.length, dataSource: 'mongodb-atlas', data: opportunities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * POST /api/seed - Safe Idempotent Seeding
 */
export const seedDatabase = async (req, res) => {
  try {
    const dbStatus = await getDBStatus();
    if (dbStatus.isUsingFallback) {
      memoryResources = [...seedResources];
      return res.json({
        success: true,
        message: 'In-memory dataset reloaded idempotently.',
        count: memoryResources.length,
        dataSource: 'resilient-in-memory'
      });
    }

    const syncResult = await idempotentSeed();

    res.json({
      success: true,
      message: 'MongoDB Atlas synchronized safely without dropping existing collections.',
      syncResult,
      dataSource: 'mongodb-atlas'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
