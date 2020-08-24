import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type CartItem = {
  id: number;
  product: any;
  createdAt: Date;
  count: number;
};

export default {
  Query: {
    cart: async (): Promise<CartItem[]> => {
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
    changeCartItemCount: async (
      _: any,
      { cartId, count }: any
    ): Promise<boolean> => {
      return true;
    },
    addToCart: async (_: any, { productId, count }: any): Promise<CartItem> => {
      return {
        id: 1,
        product: 1,
        createdAt: new Date(),
        count: 1,
      };
    },
    removeCartItem: async (_: any, { cartId }: any): Promise<boolean> => {
      return true;
    },
    order: async (_: any, { cartIds }: any): Promise<boolean> => {
      return true;
    },
  },
};
