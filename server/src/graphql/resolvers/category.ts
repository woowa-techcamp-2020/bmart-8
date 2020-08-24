import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  Query: {
    firstCategories: () =>
      prisma.category_first.findMany({
        include: { children: true },
      }),
    firstCategory: (parent: any, { id }: { id: string }) =>
      prisma.category_first.findOne({
        where: { id: parseInt(id) },
      }),
    secondCategories: () =>
      prisma.category_second.findMany({
        include: { parent: true, children: { include: { product: true } } },
      }),
    secondCategory: (parent: any, { id }: { id: string }) =>
      prisma.category_second.findOne({
        where: { id: parseInt(id) },
        include: { parent: true, children: true },
      }),
    thirdCategories: () =>
      prisma.category_third.findMany({
        include: { parent: { include: { parent: true } } },
      }),
    thirdCategory: (parent: any, { id }: { id: string }) =>
      prisma.category_third.findOne({
        where: { id: parseInt(id) },
        include: { parent: true },
      }),
    categories: async () => {
      const categories = await prisma.category_third.findMany({
        include: { parent: { include: { parent: true } } },
      });
      return categories.map((category) => {
        return {
          firstCategory: category.parent.parent,
          secondCategory: category.parent,
          thirdCategory: category,
        };
      });
    },
  },
  Mutation: {
    CreateFirstCategory: (parent: any, args: any) => {
      return prisma.category_first.create({
        data: {
          name: args.name,
        },
      });
    },
    CreateSecondCategory: (parent: any, args: any) => {
      return prisma.category_second.create({
        data: {
          name: args.name,
          parent: {
            connect: { id: args.parent_id },
          },
        },
        include: { parent: true },
      });
    },
    CreateThirdCategory: (parent: any, args: any) => {
      return prisma.category_third.create({
        data: {
          name: args.name,
          parent: {
            connect: { id: args.parent_id },
          },
        },
        include: { parent: true },
      });
    },
    UpdateFirstCategory: (parent: any, args: any) => {
      return prisma.category_first.update({
        where: { id: args.id },
        data: { name: args.name },
      });
    },
    UpdateSecondCategory: (parent: any, args: any) => {
      return prisma.category_second.update({
        where: { id: args.id },
        data: { name: args.name },
      });
    },
    UpdateThirdCategory: (parent: any, args: any) => {
      return prisma.category_third.update({
        where: { id: args.id },
        data: { name: args.name },
      });
    },
    DeleteFirstCategory: async (parent: any, args: any) => {
      try {
        await prisma.category_first.delete({ where: { id: args.id } });
        return true;
      } catch (error) {
        return false;
      }
    },
    DeleteSecondCategory: async (parent: any, args: any) => {
      try {
        await prisma.category_second.delete({ where: { id: args.id } });
        return true;
      } catch (error) {
        return false;
      }
    },
    DeleteThirdCategory: async (parent: any, args: any) => {
      try {
        await prisma.category_third.delete({ where: { id: args.id } });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
