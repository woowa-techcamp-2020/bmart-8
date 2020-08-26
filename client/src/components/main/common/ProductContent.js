import React from 'react';
import styled from 'styled-components';

const ProductContentBlock = styled.div`
  margin-top: 0.5rem;
  text-align: left;
  flex-shrink: 0;

  .Price {
    font-weight: bold;
    &:after {
      content: '원';
    }
  }
`;

function ProductContent({ title, price, onAddCart }) {
  return (
    <ProductContentBlock>
      <div className="Title">{title}</div>
      <div className="Price">{price.toLocaleString()}</div>
      <button onClick={onAddCart}>장바구니</button>
    </ProductContentBlock>
  );
}

export default ProductContent;
