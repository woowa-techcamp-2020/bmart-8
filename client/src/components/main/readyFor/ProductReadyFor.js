import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import getRandomInt from '../../../utils/random';

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

const random = getRandomInt(0, 7000);

function ProductReadyFor() {
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
    <ProductReadyForBlock>
      <div className="ProductTitle">기진님을 위해 준비한 상품</div>
      <div className="ProductInfo">
        <Query query={GetReadyProductQuery}>
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
    </ProductReadyForBlock>
  );
}

export default ProductReadyFor;
