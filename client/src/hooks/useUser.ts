import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

export default function useUser() {
  const { data } = useQuery(
    gql`
      query {
        currentUser {
          email
        }
      }
    `,
    {
      fetchPolicy: 'cache-first',
    }
  );
  if (data && data.currentUser) return data.currentUser;
  else null;
}
