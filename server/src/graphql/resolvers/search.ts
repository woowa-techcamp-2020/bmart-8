export default {
  Query: {
    searchHistory: () => {
      return [
        {
          id: 1,
          query: '사과',
          date: new Date('2020-08-20'),
        },
        {
          id: 2,
          query: '딸기',
          date: new Date('2020-08-19'),
        },
        {
          id: 3,
          query: '모니터',
          date: new Date('2020-08-17'),
        },
      ];
    },
  },
};
