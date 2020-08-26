import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import Refresh from '../common/Refresh';

import { Query } from 'react-apollo';
import getRandomInt from '../../../utils/random';
import { GET_PRODUCT_SIMPLE } from '../main-query';

const ProductEssentialBlock = styled.div`
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    justify-content: space-between;
    height: auto;
    width: auto;
    margin-bottom: 0.1rem;
    & > div {
      width: 32%;
    }
  }
  .Refresh {
    background-color: white;
    margin-bottom: 0.3rem;
    padding-bottom: 0.3rem;
  }
`;

const cursor = getRandomInt(6546, 6607);

function ProductEssential() {
  return (
    <ProductEssentialBlock>
      <div className="ProductTitle">지금 필요한 생필품!</div>
      <div className="ProductInfo">
        <Query query={GET_PRODUCT_SIMPLE} variables={{ take: 9, cursor:cursor}}>
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
      <div className="Refresh">
        <Refresh title={'지금 필요한 생필품! '}></Refresh>
      </div>
    </ProductEssentialBlock>
  );
}

export default ProductEssential;
