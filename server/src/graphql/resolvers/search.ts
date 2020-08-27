import { PrismaContext } from '..';
import { AuthenticationError } from 'apollo-server';
import elasticsearchClient from '../../lib/elasticsearch-client';

type SearchHistory = {
  id: number;
  date: Date;
  query: String;
};
export default {
  Query: {
    searchHistory: async (
      parent: any,
      { query }: any,
      { user, prisma }: PrismaContext
    ): Promise<SearchHistory[]> => {
      if (!user) throw new AuthenticationError('Login first.');
      const data = await prisma.search_log.findMany({
        where: {
          user_id: user.id,
        },
        take: 6,
        orderBy: {
          created_at: 'desc',
        },
      });

      return data.map((item) => ({
        date: item.created_at,
        id: item.id,
        query: item.keyword,
      }));
    },
    instantSearch: async (_: any, { query }: any) => {
      if (!query || query.length === 0) return [];

      console.log(query);
      const data = await elasticsearchClient.search({
        index: 'bmart',
        body: {
          query: {
            prefix: {
              name: query,
            },
          },
        },
      });
      return data.body.hits.hits.map((i: any) => i._source.name);
    },
    searchProducts: async (_: any, { query }: any) => {
      if (!query || query.length === 0) return [];

      const data = await elasticsearchClient.search({
        index: 'bmart',
        body: {
          query: {
            multi_match: {
              query: query,
              fields: ['name', 'content'],
            },
          },
        },
      });
      return data.body.hits.hits.map((i: any) => ({ ...i._source, id: i._id }));
    },
  },

  Mutation: {
    addSearchHistory: async (
      parent: any,
      { query }: any,
      { user, prisma }: PrismaContext
    ): Promise<SearchHistory> => {
      if (!user) throw new AuthenticationError('Login first.');
      const data = await prisma.search_log.create({
        data: {
          keyword: query,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });
      return {
        date: data.created_at,
        id: data.id,
        query: data.keyword,
      };
    },
    removeSearchHistory: async (
      parent: any,
      { id }: any,
      { user, prisma }: PrismaContext
    ): Promise<boolean> => {
      if (!user) throw new AuthenticationError('Login first.');
      const deleted = await prisma.search_log.deleteMany({
        where: {
          id: id,
          user_id: user.id,
        },
      });
      return deleted.count === 1;
    },
  },
};
