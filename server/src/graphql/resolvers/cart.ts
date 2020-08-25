import { UserInputError, AuthenticationError } from 'apollo-server';
import { PrismaClient, PrismaClientOptions } from '@prisma/client';

type PrismaContext = {
  user?: {
    id: number;
    email: string;
  };
  prisma: PrismaClient<PrismaClientOptions, never>;
};
type CartItem = {
  id: number;
  product: any;
  createdAt: Date;
  count: number;
};

export default {
  Query: {
    cart: async (
      parent: any,
      args: any,
      { prisma }: PrismaContext
    ): Promise<CartItem[]> => {
      const data: any = await prisma.product.findMany({
        take: 5,
      });
      return data.map((row: any, i: number) => ({
        id: i,
        product: row,
        createdAt: new Date(),
        count: i + 2,
      }));
    },
  },
  Mutation: {
    addToCart: async (
      _: any,
      { productId, count = 1 }: { productId: number; count: number },
      { user, prisma }: PrismaContext
    ): Promise<CartItem> => {
      if (!user) throw new AuthenticationError('Login first.');
      const product = await prisma.product.findOne({
        where: {
          id: productId,
        },
      });
      if (!product) {
        throw new UserInputError('Invalid product id: ' + productId);
      }

      const oldOrderItems = await prisma.cart.findMany({
        where: {
          product_id: productId,
          user_id: user.id,
        },
      });

      let resultCartItem = null;
      if (oldOrderItems.length) {
        const oldOrderItem = oldOrderItems[0];
        if (oldOrderItem.count !== count) {
          resultCartItem = await prisma.cart.update({
            where: { id: oldOrderItem.id },
            data: { count: count },
          });
        } else resultCartItem = oldOrderItem;
      } else {
        resultCartItem = await prisma.cart.create({
          data: {
            product: {
              connect: { id: productId },
            },
            user: {
              connect: { id: user.id },
            },
            count,
          },
        });
      }

      return {
        id: resultCartItem.id,
        product: product,
        createdAt: resultCartItem.created_at,
        count: resultCartItem.count,
      };
    },
    removeCartItem: async (
      parent: any,
      args: any,
      { prisma }: PrismaContext
    ): Promise<boolean> => {
      return true;
    },
    order: async (
      parent: any,
      args: any,
      { prisma }: PrismaContext
    ): Promise<boolean> => {
      return true;
    },
  },
};
