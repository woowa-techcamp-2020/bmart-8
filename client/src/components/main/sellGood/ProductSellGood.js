import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import More from '../common/More';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';
import getRandomInt from '../../../utils/random';
import { GET_PRODUCT_SIMPLE } from '../main-query';

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
const cursor = getRandomInt(0, 7000);

function ProductSellGood() {
  return (
    <ProductSellGoodBlock>
      <div className="ProductTitle">요즘 잘팔려요</div>
      <Link to="/main/top_saling">
        <More></More>
      </Link>
      <div className="ProductInfo">
      <Query query={GET_PRODUCT_SIMPLE} variables={{ take: 8, cursor:cursor}}>
          {({ data, loading, error }) => {
            if (loading || error) return '';
            return data.products.products.map((product, idx) => {
              return (
                <ProductInfo
                  key={idx}
                  id={product.id}
                  title={product.name}
                  price={product.price}
                  url={product.img_url}></ProductInfo>
              );
            });
          }}
        </Query>
      </div>
    </ProductSellGoodBlock>
  );
}

export default ProductSellGood;
