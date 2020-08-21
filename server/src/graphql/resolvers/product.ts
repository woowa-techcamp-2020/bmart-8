import { PrismaClient } from '@prisma/client';
import moment from 'moment-timezone';

const MS_PER_MINUTE = 60000;
const prisma = new PrismaClient();

export default {
  Query: {
    products: () =>
      prisma.product.findMany({
        include: {
          category: { include: { parent: { include: { parent: true } } } },
        },
      }),
    product: (parent: any, args: any, context: any) =>
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
