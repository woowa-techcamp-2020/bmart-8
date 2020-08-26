import { gql } from 'apollo-boost';

export const REMOVE_CART_ITEM = gql`
  mutation removeCartItems($id: Int!) {
    removeCartItems(cartIds: [$id])
  }
`;

export const REMOVE_CART_ITEMS = gql`
  mutation removeCartItems($ids: [Int]!) {
    removeCartItems(cartIds: $ids)
  }
`;

export const SET_CART_COUNT = gql`
  mutation setCartCount($id: Int!, $count: Int) {
    addToCart(productId: $id, count: $count) {
      id
      product {
        id
        name
        img_url
        price
        discount
      }
      createdAt
      count
    }
  }
`;
