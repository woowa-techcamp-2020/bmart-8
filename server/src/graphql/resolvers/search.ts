import { PrismaContext } from '..';
import { AuthenticationError } from 'apollo-server';

const searchString = [
  '사과쨈',
  '사과',
  '호랑이',
  '고라니',
  '에어컨',
  '창문',
  '문',
  '창살',
  '호두두',
  '호두',
  '호두도도',
  '사라라',
];
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
    instantSearch: (_: any, { query }: any) => {
      if (!query || query.length === 0) return [];
      return searchString.filter((s) => s.startsWith(query));
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
