import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {
  useCartState,
  useCartDispatch,
  deleteCartItems,
} from '../stores/cart-store';
import CartHeader from '../components/Cart/CartHeader';
import CartItem from '../components/Cart/CartItem';
import { useMutation } from 'react-apollo';
import { REMOVE_CART_ITEMS } from '../components/Cart/cart-query';

const CartPageBlock = styled.div``;

const CartPage: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const cart = useCartState();
  const dispatch = useCartDispatch();

  const [removeCartItem] = useMutation(REMOVE_CART_ITEMS);

  return (
    <CartPageBlock>
      <Helmet>
        <title>장바구니 - B 마트</title>
      </Helmet>
      <CartHeader
        onChangeChecked={(checked) => {
          if (checked) setSelected(cart.map((item) => item.id));
          else setSelected([]);
        }}
        onDelete={() => {
          dispatch(deleteCartItems(selected));
          removeCartItem({
            variables: {
              ids: selected,
            },
          });
        }}
      />
      {cart.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onChangeSelect={(checked) => {
            if (checked) setSelected([...selected, item.id]);
            else {
              setSelected(selected.filter((id) => id !== item.id));
            }
          }}
          selected={selected.includes(item.id)}
        />
      ))}
    </CartPageBlock>
  );
};

export default CartPage;
