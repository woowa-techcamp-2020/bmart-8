import { gql } from 'apollo-boost';

export const GET_PRODUCT_SIMPLE = gql`
  query getProductsSimple($take: Int!) {
    products(take: $take) {
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
