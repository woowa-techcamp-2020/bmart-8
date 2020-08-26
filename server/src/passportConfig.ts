import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (
      accessToken,
      refreshToken,
      { provider, _json: profile },
      callback
    ) => {
      try {
        //로그인 종류 추가되면 분리할거임
        const user = await prisma.user.upsert({
          where: { email_provider: { email: profile.email, provider } },
          select: { id: true, email: true, provider: true, role: true },
          update: {},
          create: { provider, email: profile.email },
        });
        const userProfile = await prisma.user_profile.upsert({
          where: { user_id: user.id },
          update: {},
          create: { name: profile.name, user: { connect: { id: user.id } } },
        });
        const token = jwt.sign(
          { id: user.id, role: user.role, name: userProfile.name },
          process.env.JWT_SECRET!
        );
        user['user_profile'] = userProfile;
        return callback('', user, { token });
      } catch (error) {
        return callback(error);
      }
    }
  )
);
