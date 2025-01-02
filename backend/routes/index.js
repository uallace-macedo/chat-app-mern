import { Router } from 'express';
import { router as AuthRoutes } from './auth.routes.js';
import { router as MessageRoutes } from './message.routes.js';
import { router as UserRoutes } from './user.routes.js';

const router = Router();
router.use('/api/auth', AuthRoutes);
router.use('/api/messages', MessageRoutes);
router.use('/api/users', UserRoutes);

router.get('/api', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello, world!!' });
});

export default router;