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
  take: number, range:[number,number]=[2373,2828]
): [Function, ProductInfo[]] {
  const [cursor, setCursor] = useState(getRandomInt(...range));
  const [fetchData, { data }] = useLazyQuery(GET_PRODUCT_SIMPLE, {
    variables: { cursor, take },
  });

  return [
    () => {
      setCursor(getRandomInt(...range));
      fetchData();
    },
    data && data.products.products,
  ];
}
