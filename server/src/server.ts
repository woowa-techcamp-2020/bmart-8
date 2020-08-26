import './env';
import { GraphQLServer } from 'graphql-yoga';
import { typeDefs, resolvers } from './graphql';
import { initialize, session } from 'passport';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import router from './routes';
import logger from 'morgan';
import cors from 'cors';
import './passportConfig';

const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => {
    const token = request.headers.authorization?.split(' ')[1] || '';
    if (!token) return { prisma };
    // TODO: REMOVE TEST CODE
    if (token === '1234')
      return {
        prisma,
        user: { id: 1, email: 'test@test.com', name: '물품보관소' },
      };

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      return { prisma, user: decoded, token };
    } catch (e) {
      return { prisma };
    }
  },
});
server.express.use(logger('dev'));
server.express.use(initialize());
server.express.use(session());
server.express.use(cors());

server.express.use('/api', router);

server.start(
  {
    port: PORT,
    endpoint: '/graphql',
    playground: '/graphql',
    cors: { credentials: true, origin: '*' },
  },
  () => console.log(`Server is running on http://localhost:${PORT}`)
);
