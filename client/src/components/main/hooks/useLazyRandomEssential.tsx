import { useState } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import getRandomInt from '../../../utils/random';

type ProductInfo = {
  id: number;
  name: string;
  price: number;
  img_url: string;
  discount: number;
};

const GET_PRODUCT_SIMPLE = gql`
  query getProductsSimple($take: Int!, $cursor: Int) {
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

// For dev
export default function useLazyRandomProducts(
  take: number
): [Function, ProductInfo[]] {
  const [cursor, setCursor] = useState(getRandomInt(0, 900));
  const [fetchData, { data }] = useLazyQuery(GET_PRODUCT_SIMPLE, {
    variables: { cursor, take },
  });

  return [
    () => {
      setCursor(getRandomInt(0, 900));
      fetchData();
    },
    data && data.products.products,
  ];
}
