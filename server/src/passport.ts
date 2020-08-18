import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import '../env';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECERT,
};

const verifyUser = async (payload: any, done: any) => {
  console.log('payload', payload);
  try {
    return done(null, true);
    // 유저 api 만들면 적용
    // const user = await prisma.user({ id: payload.id });
    // if (user) {
    //   return done(null, user);
    // } else {
    //   return done(null, false);
    // }
  } catch (error) {
    return done(error, false);
  }
};

passport.use(new JwtStrategy(jwtOptions, verifyUser));
passport.initialize();
//api 맨들때 쓸거 const generateJWTToken = (id: any) => jwt.sign({ id }, process.env.JWT_SECERT!);

export const authenticateJWT = (req: any, res: any, next: any) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    req.user = user;
    next();
  })(req, res, res);
};
