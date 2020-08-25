import { UserInputError, AuthenticationError } from 'apollo-server';
import { PrismaContext } from '..';

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
      { user, prisma }: PrismaContext
    ): Promise<CartItem[]> => {
      if (!user) throw new AuthenticationError('Login first.');
      const data = await prisma.cart.findMany({
        where: {
          user_id: user.id,
        },
        include: {
          product: true,
        },
      });
      return data.map((row) => ({
        id: row.id,
        product: row.product,
        createdAt: row.created_at,
        count: row.count,
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
      // 이미 담겨져 있으면: 숫자 다를때만 업데이트
      // 장바구니에 상품이 없으면: insert row
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
    removeCartItems: async (
      parent: any,
      { cartIds }: any,
      { prisma, user }: PrismaContext
    ): Promise<number> => {
      if (!user) throw new AuthenticationError('Login first.');
      const result = await prisma.cart.deleteMany({
        where: {
          user_id: user.id,
          id: {
            in: cartIds,
          },
        },
      });

      return result.count;
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
