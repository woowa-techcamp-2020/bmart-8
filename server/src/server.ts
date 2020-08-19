import { GraphQLServer } from 'graphql-yoga';
import { typeDefs, resolvers } from './graphql';
import { authenticateJWT } from './passport';
import logger from 'morgan';
import '../env';

const PORT = process.env.PORT || 3000;
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }: any) => {
    return { user: request.user };
  },
});
server.express.use(logger('dev'));
server.express.use(authenticateJWT);
server.start({ port: PORT, endpoint: '/graphql', playground: '/graphql' }, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
