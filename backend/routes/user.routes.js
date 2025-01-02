import { Router } from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';

export const router = Router();
router.get('/', protectRoute, getUsersForSidebar);