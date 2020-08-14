import path from 'path';
import { loadFilesSync, mergeTypeDefs, mergeResolvers } from 'graphql-tools';

const typesArray = loadFilesSync(path.join(__dirname, './types'), {
  extensions: ['graphql'],
  recursive: true,
});

const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'), {
  extensions: ['ts'],
  recursive: true,
});

export const typeDefs = mergeTypeDefs(typesArray);
export const resolvers = mergeResolvers(resolversArray);
