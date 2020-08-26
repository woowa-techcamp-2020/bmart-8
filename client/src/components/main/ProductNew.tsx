import React from 'react';
import styled from 'styled-components';
import ProductInfo from './common/ProductInfo';
import More from './common/More';
import { Link } from 'react-router-dom';
import useRandomProducts from './hooks/useRandomProducts';

const ProductNewBlock = styled.div`
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    margin-bottom: 0.3rem;
    background-color: white;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 100vw;
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

function ProductNew() {
  const products = useRandomProducts(8);

  return (
    <ProductNewBlock>
      <div className="ProductTitle">새로나왔어요</div>
      <Link to="/main/new_products">
        <More></More>
      </Link>
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
    </ProductNewBlock>
  );
}

export default ProductNew;
