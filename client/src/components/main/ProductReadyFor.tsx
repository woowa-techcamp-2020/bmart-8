import React from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/useUser';
import ProductInfo from './common/ProductInfo';
import useRandomProducts from './hooks/useRandomProducts';

const ProductReadyForBlock = styled.div`
  margin-top: 0.3rem;
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    max-width: 100vw;
    margin-bottom: 0.3rem;
    display: flex;
    flex-wrap: nowrap;
    background-color: white;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    & > div:first-child {
      padding-left: 0.5rem;
    }
    & > div:last-child {
      padding-right: 0.5rem;
    }
  }
`;

function ProductReadyFor() {
  const products = useRandomProducts(9);
  const user = useUser();

  return (
    <ProductReadyForBlock>
      <div className="ProductTitle">
        {`${user ? user.name + '님' : '당신'}을 위해 준비한 상품`}
      </div>
      <div className="ProductInfo">
        {products &&
          products.map((product) => {
            return (
              <ProductInfo
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                url={product.img_url}></ProductInfo>
            );
          })}
      </div>
    </ProductReadyForBlock>
  );
}

export default ProductReadyFor;
