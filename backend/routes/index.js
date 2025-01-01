import { Router } from 'express';
import { router as AuthRoutes } from './auth.routes.js';

const router = Router();
router.use('/api/auth', AuthRoutes);

router.get('/api', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello, world!!' });
});

export default router;