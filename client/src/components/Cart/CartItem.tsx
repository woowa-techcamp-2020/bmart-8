import React from 'react';
import styled from 'styled-components';
import PriceLabel from '../PriceLabel';
import CartItemCounter from './CartItemCounter';
import {
  useCartDispatch,
  deleteCartItem,
  setCartItemCount,
} from '../../stores/cart-store';
import { useMutation } from 'react-apollo';
import { SET_CART_COUNT, REMOVE_CART_ITEM } from './cart-query';

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
  const [setCartCount] = useMutation(SET_CART_COUNT);
  const [removeCartItem] = useMutation(REMOVE_CART_ITEM);
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
            dispatch(deleteCartItem(id));
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
            dispatch(setCartItemCount(id, count));
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
