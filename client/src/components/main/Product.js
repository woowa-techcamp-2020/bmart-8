import React from 'react';
import styled from 'styled-components';
import ProductReadyFor from './readyFor/ProductReadyFor';
import ProductFlashDiscount from './discount/ProductFlashDiscount';
import ProductWhatEat from './whatEat/ProductWhatEat';
const ProductBlock = styled.div``;

function Product() {
  return (
    <ProductBlock>
      <ProductReadyFor></ProductReadyFor>
      <ProductFlashDiscount></ProductFlashDiscount>
      <ProductWhatEat></ProductWhatEat>
    </ProductBlock>
  );
}

export default Product;
