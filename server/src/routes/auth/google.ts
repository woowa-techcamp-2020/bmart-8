import { Router } from 'express';
import { googleLogin, googleLoginCallback } from '../../controllers/google';
import { HTTP_STATUS } from '../../utils';

const router = Router();
router.get('/', googleLogin);
router.get(
  '/callback',
  googleLoginCallback,
  (req: any, res: any, next: any) => {
    res.status(HTTP_STATUS.SUCCESS).json({
      status: HTTP_STATUS.SUCCESS,
      msg: 'login success',
      user: req.user,
      token: req.authInfo.token,
    });
  }
);

export default router;
