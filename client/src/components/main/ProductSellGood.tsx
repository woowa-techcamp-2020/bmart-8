import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useRandomProducts from './hooks/useRandomProducts';
import More from './common/More';
import ProductInfo from './common/ProductInfo';

const ProductSellGoodBlock = styled.div`
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    max-width: 100vw;
    margin-bottom: 0.3rem;
    background-color: white;
    display: flex;
    flex-wrap: nowrap;
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

function ProductSellGood() {
  const products = useRandomProducts(8);
  return (
    <ProductSellGoodBlock>
      <div className="ProductTitle">요즘 잘팔려요</div>
      <Link to="/main/top_saling">
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
    </ProductSellGoodBlock>
  );
}

export default ProductSellGood;
