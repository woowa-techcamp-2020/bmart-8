import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import Refresh from '../common/Refresh';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const ProductWhatEatBlock = styled.div`
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    width: auto;
    margin-bottom: 0.1rem;
    & > div {
      width: 32%;
    }
  }
`;

function ProductWhatEat() {
  const GetWhatEatProduct = gql`
    query {
      products {
        name
        price
        img_url
      }
    }
  `;
  return (
    <ProductWhatEatBlock>
      <div className="ProductTitle">지금 뭐 먹지?</div>
      <div className="ProductInfo">
        <Query query={GetWhatEatProduct}>
          {({ data, loading, error }) => {
            if (loading || error) return '';
            const products = data.products.slice(2000, 2009);
            return products.map((product, idx) => {
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
      <div className="Refresh">
        <Refresh className="Refresh" title={'지금 뭐 먹지? '}></Refresh>
      </div>
    </ProductWhatEatBlock>
  );
}

export default ProductWhatEat;
