import express from 'express';
import {
  getResources,
  getResourceById,
  getCategories,
  getOpportunities,
  seedDatabase,
  validateResourceQuery
} from '../controllers/resourceController.js';

const router = express.Router();

router.get('/resources', validateResourceQuery, getResources);
router.get('/resources/:id', getResourceById);
router.get('/categories', getCategories);
router.get('/opportunities', validateResourceQuery, getOpportunities);
router.post('/seed', seedDatabase);

export default router;
