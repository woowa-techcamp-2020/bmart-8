import React from 'react';
import styled from 'styled-components';
import Bag from '../common/Bag';
import palette from '../../../lib/styles/palette';

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

  .Bag {
    color: ${palette.baemint200};
  }
`;

function ProductContent({ title, price, onAddCart }) {
  return (
    <ProductContentBlock>
      <div className="Title">{title}</div>
      <div className="Price">{price.toLocaleString()}</div>
      <div onClick={onAddCart} className="Bag">
        <Bag />
      </div>
    </ProductContentBlock>
  );
}

export default ProductContent;
