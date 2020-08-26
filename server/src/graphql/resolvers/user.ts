import { PrismaClient } from '@prisma/client';
import moment from 'moment-timezone';

const prisma = new PrismaClient();

const MS_PER_MINUTE = 60000;
type UserProfileProps = {
  id: number;
  name?: string;
  zipcode?: string;
  address?: string;
  address_detail?: string;
  sex?: number;
  age?: number;
  phone_number?: string;
};

export default {
  Query: {
    currentUser: (parent: any, args: any, { prisma, user }: any) => {
      if (!user) return null;
      else return user;
    },
    user: async (parent: any, args: any, context: any) =>
      await prisma.user.findOne({
        where: { id: context.user.id },
        include: { user_profile: true },
      }),
  },
  Mutation: {
    UpdateUserProfile: async (
      parent: any,
      args: UserProfileProps,
      context: any
    ) => {
      const time = moment().tz('Asia/Seoul');
      if (context.user.id) {
        return await prisma.user_profile.update({
          where: { user_id: context.user.id },
          data: {
            updated_at: new Date(
              time.valueOf() + time.utcOffset() * MS_PER_MINUTE
            ),
            ...args,
          },
        });
      } else {
        return null;
      }
    },
  },
};
