import React from 'react';
import styled from 'styled-components';
import ProductReadyFor from './readyFor/ProductReadyFor';
import ProductFlashDiscount from './discount/ProductFlashDiscount';
import ProductWhatEat from './whatEat/ProductWhatEat';
import ProductNew from './new/ProductNew';
import ProductSellGood from './sellGood/ProductSellGood';
import ProductEssential from './nowEssential/ProductEssential';
import palette from '../../lib/styles/palette';

const ProductBlock = styled.div`
  background-color: ${palette.gray200};
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
      <div style={{ height: '47px' }}></div>
    </ProductBlock>
  );
}

export default Product;
