import { PrismaClient } from '@prisma/client';
import moment from 'moment-timezone';

const MS_PER_MINUTE = 60000;
const prisma = new PrismaClient();

type OrderType = 'asc' | 'desc';
type OrderBy = 'price' | 'created_at' | 'discount' | 'sales';
type CategoryLevel = 'first' | 'second' | 'third';
interface ProductsArgs {
  category_level: CategoryLevel;
  category_id: Number;
  order_type: OrderBy;
  order: OrderType;
  cursor: Number;
  take: Number;
}

export default {
  Query: {
    products: async (
      parent: any,
      {
        category_level,
        category_id,
        order_type,
        order = 'desc',
        cursor,
        take,
      }: ProductsArgs
    ) => {
      const options = {};
      if (category_level === 'second') {
        options['where'] = { category: { parent_id: category_id } };
      } else if (category_level === 'third') {
        options['where'] = { category_id };
      }
      if (order_type) {
        options['orderBy'] = {};
        options['orderBy'][order_type] = order;
      }
      if (cursor) {
        options['cursor'] = { id: cursor };
        options['skip'] = 1;
      }
      if (take) options['take'] = take;
      const [products, size] = await Promise.all([
        prisma.product.findMany({
          include: {
            category: { include: { parent: { include: { parent: true } } } },
          },
          ...options,
        }),
        prisma.product.count(),
      ]);
      const next =
        products.length === take ? products[products.length - 1].id : -1;
      return { products, size, next };
    },
    product: (parent: any, args: any) =>
      prisma.product.findOne({
        where: { id: args.id },
        include: {
          category: { include: { parent: { include: { parent: true } } } },
        },
      }),
  },
  Mutation: {
    CreateProduct: (parent: any, args: any) =>
      prisma.product.create({
        data: {
          name: args.name,
          content: args.content,
          category: { connect: { id: args.category_id } },
        },
        include: {
          category: { include: { parent: { include: { parent: true } } } },
        },
      }),
    UpdateProduct: (parent: any, args: any) =>
      prisma.product.update({
        where: { id: args.id },
        data: {
          name: args.name,
          content: args.content,
          img_url: args.img_url,
          price: args.price,
          sales: args.sales,
          discount: args.discount,
          stock: args.discount,
          category: { connect: { id: args.category_id } },
        },
      }),
    DeleteProduct: (parent: any, args: any) => {
      const time = moment().tz('Asia/Seoul');
      return prisma.product.update({
        where: args,
        data: {
          deleted_at: new Date(
            time.valueOf() + time.utcOffset() * MS_PER_MINUTE
          ),
        },
      });
    },
  },
};
