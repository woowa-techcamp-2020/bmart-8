import React from 'react';
import styled from 'styled-components';
import ProductPhoto from './ProductPhoto';
import ProductContent from './ProductContent';

const ProductInfoBlock = styled.div`
  flex-shrink: 0;
  margin: 0 0.1rem;
  width: 29%;
  .ProductContent {
    font-size: 0.8rem;
  }
`;

function ProductInfo({ title, price, url }) {
  return (
    <ProductInfoBlock>
      <ProductPhoto url={url} wishbutton={true}></ProductPhoto>
      <div className="ProductContent">
        <ProductContent title={title} price={price}></ProductContent>
      </div>
    </ProductInfoBlock>
  );
}

export default ProductInfo;
