import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Banner = {
  type: string;
  altString: string;
  imgUrl: string;
  routeUrl: string;
};

export default {
  Query: {
    mainBanners: (_: any, { type }: any): Banner[] => {
      return [
        {
          type: 'main',
          altString: '초코과자 배달 가능',
          imgUrl:
            'https://bmart-8.s3.ap-northeast-2.amazonaws.com/assets/banners/0afd9b79-ff7d-42ac-99e1-7147de6a6476.gif',
          routeUrl: '/',
        },
        {
          type: 'main',
          altString: '책도 배달 가능',
          imgUrl:
            'https://bmart-8.s3.ap-northeast-2.amazonaws.com/assets/banners/0b776996-d151-447f-8f6a-0bb3ebdbf568.gif',
          routeUrl: '/',
        },
      ];
    },
  },
};
