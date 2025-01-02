import { Router } from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

export const router = Router();
router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);