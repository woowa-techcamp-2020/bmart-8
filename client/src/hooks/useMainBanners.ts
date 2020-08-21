import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

type Banner = {
  type: string;
  altString: string;
  imgUrl: string;
  routeUrl: string;
};

export default function useMainBanners(): Banner[] {
  const { data, error, loading } = useQuery(gql`
    query getMainBanners {
      mainBanners {
        altString
        imgUrl
        routeUrl
      }
    }
  `);
  if (data) return data.mainBanners;
  else return [];
}
