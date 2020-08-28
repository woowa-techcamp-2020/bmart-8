import { useLazyQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { useState } from 'react';

type UserInfo = {
  email: String;
  name: String;
};
let user: any = null;
export default function useUser(): UserInfo | null {
  const [fetchUser, { data, called, loading }] = useLazyQuery(
    gql`
      query {
        user {
          email
          user_profile {
            name
          }
        }
      }
    `,
    {
      fetchPolicy: 'cache-first',
    }
  );

  if (user) return user;
  if (!called) {
    fetchUser();
  } else if (data && data.user)
    user = { email: data.user.email, name: data.user.user_profile.name };
  return null;
}
