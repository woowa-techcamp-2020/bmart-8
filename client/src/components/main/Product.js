import React from 'react';
import styled from 'styled-components';
import ProductReadyFor from './ProductReadyFor';
import ProductFlashDiscount from './ProductFlashDiscount';
const ProductBlock = styled.div``;

function Product() {
  return (
    <ProductBlock>
      <ProductReadyFor></ProductReadyFor>
      <ProductFlashDiscount></ProductFlashDiscount>
    </ProductBlock>
  );
}

export default Product;
