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
    mainBanners: async (): Promise<Banner[]> => {
      const data: any = await prisma.banner.findMany();
      return data.map((row: any) => ({
        type: row.type,
        altString: row.content,
        imgUrl: row.img_url,
        routeUrl: row.href,
      }));
    },
  },
};
