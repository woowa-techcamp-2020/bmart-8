import path from 'path';
import { loadFilesSync, mergeTypeDefs, mergeResolvers } from 'graphql-tools';
import { PrismaClient, PrismaClientOptions } from '@prisma/client';

const typesArray = loadFilesSync(path.join(__dirname, './types'), {
  extensions: ['graphql'],
  recursive: true,
});

const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'), {
  extensions: ['ts', 'js'],
  recursive: true,
});

export const typeDefs = mergeTypeDefs(typesArray);
export const resolvers = mergeResolvers(resolversArray);
export type PrismaContext = {
  user?: {
    id: number;
    email: string;
  };
  prisma: PrismaClient<PrismaClientOptions, never>;
};
