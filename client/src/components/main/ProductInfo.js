import React from 'react';
import styled from 'styled-components';
import ProductPhoto from './ProductPhoto';
import ProductContent from './ProductContent';

const ProductInfoBlock = styled.div`
  flex-shrink: 0;
  margin: 0 0.1rem;
  width:29%;

`;

function ProductInfo({ title, price, url }) {
  return (
    <ProductInfoBlock>
      <ProductPhoto url={url} wishbutton={true}></ProductPhoto>
      <ProductContent title={title} price={price}></ProductContent>
    </ProductInfoBlock>
  );
}

export default ProductInfo;
