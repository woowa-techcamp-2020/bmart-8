import { Router } from 'express';
import { googleLogin, googleLoginCallback } from '../../controllers/google';

const router = Router();
router.get('/', googleLogin);
router.get(
  '/callback',
  googleLoginCallback,
  (req: any, res: any, next: any) => {
    res.redirect(
      `${process.env.HOST ? process.env.HOST : ''}/loginCallback?token=${
        req.authInfo.token
      }`
    );
  }
);

export default router;
