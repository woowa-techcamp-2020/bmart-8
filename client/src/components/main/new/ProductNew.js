import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import More from '../common/More';
import getRandomInt from '../../../utils/random';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';
import { GET_PRODUCT_SIMPLE } from '../main-query';

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

const cursor = getRandomInt(0, 7000);

function ProductNew() {
  return (
    <ProductNewBlock>
      <div className="ProductTitle">새로나왔어요</div>
      <Link to="/main/new_products">
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
    </ProductNewBlock>
  );
}

export default ProductNew;
