import express from 'express';
import {
  getResources,
  getResourceById,
  getCategories,
  getOpportunities,
  seedDatabase
} from '../controllers/resourceController.js';

const router = express.Router();

router.get('/resources', getResources);
router.get('/resources/:id', getResourceById);
router.get('/categories', getCategories);
router.get('/opportunities', getOpportunities);
router.post('/seed', seedDatabase);

export default router;
