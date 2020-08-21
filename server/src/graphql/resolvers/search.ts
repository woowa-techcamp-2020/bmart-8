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
    instantSearch: (_: any, { query }: any) => {
      if (!query || query.length === 0) return [];
      return searchString.filter((s) => s.startsWith(query));
    },
  },
};
