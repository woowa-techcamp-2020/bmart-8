import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import More from '../common/More';
import getRandomInt from '../../../utils/random';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

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
  const random = getRandomInt(0, 7000);
  const GetNewProductQuery = gql`
    query {
      products(take: 8, skip: ${random}) {
        name
        price
        img_url
      }
    }
  `;
  return (
    <ProductNewBlock>
      <div className="ProductTitle">새로나왔어요</div>
      <More></More>
      <div className="ProductInfo">
        <Query query={GetNewProductQuery}>
          {({ data, loading, error }) => {
            if (loading || error) return '';
            return data.products.map((product, idx) => {
              return (
                <ProductInfo
                  key={idx}
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
