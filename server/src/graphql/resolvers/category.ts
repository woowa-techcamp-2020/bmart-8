import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  Query: {
    firstCategories: () =>
      prisma.category_First.findMany({
        include: { children: true },
      }),
    firstCategory: (parent: any, { id }: { id: string }) =>
      prisma.category_First.findOne({
        where: { id: parseInt(id) },
      }),
    secondCategories: () =>
      prisma.category_Second.findMany({
        include: { parent: true, children: true },
      }),
    secondCategory: (parent: any, { id }: { id: string }) =>
      prisma.category_Second.findOne({
        where: { id: parseInt(id) },
        include: { parent: true, children: true },
      }),
    thirdCategories: () =>
      prisma.category_Third.findMany({
        include: { parent: { include: { parent: true } } },
      }),
    thirdCategory: (parent: any, { id }: { id: string }) =>
      prisma.category_Third.findOne({
        where: { id: parseInt(id) },
        include: { parent: true },
      }),
    categories: async () => {
      const categories = await prisma.category_Third.findMany({
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
      return prisma.category_First.create({
        data: {
          name: args.name,
        },
      });
    },
    CreateSecondCategory: (parent: any, args: any) => {
      return prisma.category_Second.create({
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
      return prisma.category_Third.create({
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
      return prisma.category_First.update({
        where: { id: args.id },
        data: { name: args.name },
      });
    },
    UpdateSecondCategory: (parent: any, args: any) => {
      return prisma.category_Second.update({
        where: { id: args.id },
        data: { name: args.name },
      });
    },
    UpdateThirdCategory: (parent: any, args: any) => {
      return prisma.category_Third.update({
        where: { id: args.id },
        data: { name: args.name },
      });
    },
    DeleteFirstCategory: async (parent: any, args: any) => {
      try {
        await prisma.category_First.delete({ where: { id: args.id } });
        return true;
      } catch (error) {
        return false;
      }
    },
    DeleteSecondCategory: async (parent: any, args: any) => {
      try {
        await prisma.category_Second.delete({ where: { id: args.id } });
        return true;
      } catch (error) {
        return false;
      }
    },
    DeleteThirdCategory: async (parent: any, args: any) => {
      try {
        await prisma.category_Third.delete({ where: { id: args.id } });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
