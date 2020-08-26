import React from 'react';
import styled from 'styled-components';

import ProductInfo from '../main/common/ProductInfo';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import getRandomInt from '../../utils/random';

const ProductHowAboutBlock = styled.div`
  .ProductTitle {
    padding: 0.5rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    max-width: 100vw;
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
`

function ProductHowAbout({index}) {
  const random = getRandomInt(index, index-20);
  const GetReadyProductQuery = gql`
    query {
      products(take:9,cursor:${random}) {
        products{
          name
          price
          img_url
        }
      }
    }
  `;

  return (
    <ProductHowAboutBlock>
      <div className="ProductTitle">이 상품은 어때요?</div>
      <div className="ProductInfo">
        <Query query={GetReadyProductQuery}>
          {({ data, loading, error }) => {
            if (loading || error) return '';
            return data.products.products.map((product, idx) => {
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
    </ProductHowAboutBlock>
  );
}

export default ProductHowAbout;
