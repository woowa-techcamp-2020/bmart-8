import React, { useEffect } from 'react';
import styled from 'styled-components';
import PriceLabel from '../PriceLabel';
import CartItemCounter from './CartItemCounter';
import {
  useCartDispatch,
  deleteCartItem,
  setCartItemCount,
} from '../../stores/cart-store';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const CartItemBlock = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 2rem 1fr 1fr;
  grid-template-areas:
    'header header'
    'img price'
    'img count';
  height: 10rem;

  margin: 1rem 0;

  .cartitem-header {
    grid-area: header;
    display: flex;
  }
  .cartitem-img {
    grid-area: img;
    img {
      height: 100%;
      max-width: 100%;
      width: auto;
    }
  }
  .cartitem-count {
    grid-area: count;
  }
  .cartitem-price {
    grid-area: price;
  }
`;

type CartItemProps = {
  id: number;
  product: {
    content: string;
    discount: number;
    id: number;
    img_url: string;
    name: string;
    price: number;
  };
  createdAt: Date;
  count: number;
  onChangeSelect: (checked: boolean) => void;
  selected: boolean;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  product,
  count,
  createdAt,
  onChangeSelect,
  selected,
}) => {
  const dispatch = useCartDispatch();
  const [setCartCount, { data: setCartCountData }] = useMutation(gql`
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
  `);
  const [removeCartItem, { data: removeCartItemData }] = useMutation(gql`
    mutation removeCartItems($id: Int!) {
      removeCartItems(cartIds: [$id])
    }
  `);
  useEffect(() => {
    if (removeCartItemData) dispatch(deleteCartItem(id));
  }, [removeCartItemData, id, dispatch]);

  useEffect(() => {
    if (setCartCountData)
      dispatch(setCartItemCount(id, setCartCountData.addToCart.count));
  }, [setCartCountData, id, dispatch]);

  return (
    <CartItemBlock>
      <div className="cartitem-header">
        <input
          type="checkbox"
          onChange={(e) => {
            onChangeSelect(e.target.checked);
          }}
          checked={selected}
        />
        <div>{product.name}</div>
        <button
          onClick={() => {
            removeCartItem({
              variables: {
                id,
              },
            });
          }}>
          삭제
        </button>
      </div>
      <div className="cartitem-img">
        <img src={product.img_url} alt={product.name} />
      </div>
      <div className="cartitem-price">
        <PriceLabel
          discountPercentage={product.discount}
          price={product.price}
        />
      </div>
      <div className="cartitem-count">
        <CartItemCounter
          count={count}
          onChange={(count) => {
            setCartCount({
              variables: {
                id: product.id,
                count,
              },
            });
          }}
        />
      </div>
    </CartItemBlock>
  );
};
export default CartItem;
