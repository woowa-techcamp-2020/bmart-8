import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import Refresh from '../common/Refresh';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import getRandomInt from '../../../utils/random';

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
  .Refresh {
    background-color: white;
    margin-bottom: 0.3rem;
    padding-bottom: 0.3rem;
  }
`;
const random = getRandomInt(450, 500);

function ProductWhatEat() {
  const GetWhatEatProduct = gql`
    query {
      products(take:9, cursor:${random}) {
        products{
          id
          name
          price
          img_url
        }
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
            return data.products.products.map((product, idx) => {
              return (
                <ProductInfo
                  id={product.id}
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
