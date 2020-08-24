import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useCartState } from '../stores/cart-store';
import CartHeader from '../components/Cart/CartHeader';
import CartItem from '../components/Cart/CartItem';

const CartPageBlock = styled.div``;

const CartPage: React.FC = () => {
  const cart = useCartState();

  return (
    <CartPageBlock>
      <Helmet>
        <title>장바구니 - B 마트</title>
      </Helmet>
      <CartHeader />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </CartPageBlock>
  );
};

export default CartPage;
