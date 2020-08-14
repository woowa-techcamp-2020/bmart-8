import React, { useState } from 'react';
import styled from 'styled-components';
import PriceLabel from '../components/PriceLabel';

const CartPageBlock = styled.div``;

const CartPage: React.FC = () => {
  const [dc, setDc] = useState(0);
  const [price, setPrice] = useState(0);
  return (
    <CartPageBlock>
      CartPage
      <input
        type="number"
        placeholder="할인율"
        onChange={(e) => setDc(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="가격"
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <PriceLabel discountPercentage={dc} price={price} />
    </CartPageBlock>
  );
};

export default CartPage;
