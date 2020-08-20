import React from 'react';
import styled from 'styled-components';
import ProductReadyFor from './readyFor/ProductReadyFor';
import ProductFlashDiscount from './discount/ProductFlashDiscount';
import ProductWhatEat from './whatEat/ProductWhatEat';
import ProductNew from './new/ProductNew';

const ProductBlock = styled.div``;

function Product() {
  return (
    <ProductBlock>
      <ProductReadyFor></ProductReadyFor>
      <ProductFlashDiscount></ProductFlashDiscount>
      <ProductWhatEat></ProductWhatEat>
      <ProductNew></ProductNew>
    </ProductBlock>
  );
}

export default Product;
