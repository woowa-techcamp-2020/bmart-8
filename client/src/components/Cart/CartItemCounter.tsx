import React from 'react';
import styled from 'styled-components';

type CartItemCounterProps = {
  onChange: (count: number) => void;
  count: number;
};
const CartItemCounterBlock = styled.div`
  display: inline-flex;
  border: solid 1px black;
  border-radius: 5px;
  font-size: 1.2rem;
  button {
    border: none;
    background: none;
    margin: 0 0.3rem;
  }
  .count {
    color: black;
  }
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
        disabled={count <= 1}>
        -
      </button>
      <div className="count">{count}</div>
      <button onClick={() => onChange(count + 1)}>+</button>
    </CartItemCounterBlock>
  );
};

export default CartItemCounter;
