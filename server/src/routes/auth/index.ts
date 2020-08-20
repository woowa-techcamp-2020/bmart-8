import { Router } from 'express';
import googleRouter from './google';
import tokenRouter from './token';

const router = Router();

router.use('/google', googleRouter);
router.use('/token', tokenRouter);
export default router;
