import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';
import { typeDefs, resolvers } from './graphql';
import logger from 'morgan';
import '../env';
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.express.use(logger('dev'));

server.start({ port: PORT, endpoint: '/graphql', playground: '/graphql' }, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
