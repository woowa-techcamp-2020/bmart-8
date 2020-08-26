import { gql } from 'apollo-boost';

export const GET_PRODUCT_SIMPLE = gql`
  query getProductsSimple($take: Int!, $cursor: Int!) {
    products(take: $take, cursor: $cursor) {
      products {
        id
        name
        price
        img_url
        discount
      }
    }
  }
`;
