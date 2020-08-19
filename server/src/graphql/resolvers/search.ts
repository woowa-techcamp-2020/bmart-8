export default {
  Query: {
    searchHistory: () => {
      return [
        {
          query: '사과',
          date: new Date('2020-08-20'),
        },
        {
          query: '딸기',
          date: new Date('2020-08-19'),
        },
        {
          query: '모니터',
          date: new Date('2020-08-17'),
        },
      ];
    },
  },
};
