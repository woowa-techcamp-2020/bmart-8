import React from 'react';
import styled from 'styled-components';

type CartItemCounterProps = {
  onChange: (count: number) => void;
  count: number;
};
const CartItemCounterBlock = styled.div`
  display: flex;
`;

const CartItemCounter: React.FC<CartItemCounterProps> = ({
  onChange,
  count,
}) => {
  return (
    <CartItemCounterBlock>
      <button
        onClick={() => {
          onChange(count - 1);
        }}
        disabled={count === 0}>
        -
      </button>
      <div>{count}</div>
      <button onClick={() => onChange(count + 1)}>+</button>
    </CartItemCounterBlock>
  );
};

export default CartItemCounter;
