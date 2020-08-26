import React from 'react';
import styled from 'styled-components';
import ProductReadyFor from './ProductReadyFor';
import ProductFlashDiscount from './ProductFlashDiscount';
import ProductWhatEat from './ProductWhatEat';
import ProductNew from './ProductNew';
import ProductSellGood from './ProductSellGood';
import ProductEssential from './ProductEssential';
import palette from '../../lib/styles/palette';

const ProductBlock = styled.div`
  background-color: ${palette.gray200};
  width: 100%;
`;

function Product() {
  return (
    <ProductBlock>
      <ProductReadyFor></ProductReadyFor>
      <ProductFlashDiscount></ProductFlashDiscount>
      <ProductWhatEat></ProductWhatEat>
      <ProductNew></ProductNew>
      <ProductSellGood></ProductSellGood>
      <ProductEssential></ProductEssential>
    </ProductBlock>
  );
}

export default Product;
