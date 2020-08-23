import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import getRandomInt from '../../../utils/random';

import More from '../common/More';
import ProductPhoto from '../common/ProductPhoto';
import ProductDiscount from './ProductDiscount';
import ProductContent from '../common/ProductContent';
import Bag from '../common/Bag';

const ProductFlashDiscountBlock = styled.div`
  .ProductTitle {
    background-color: white;
    padding-left: 1rem;
    padding-bottom: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;

    span {
      color: red;
    }
  }

  .ProductPhoto {
    background-color: white;
    padding: 0 0.4rem;
    display: flex;
    flex-wrap: nowrap;

    div {
      height: auto;
      margin: 0 0.1rem;
    }
    & > div:first-child {
      margin-left: 0.5rem;
    }
    & > div:last-child {
      margin-right: 0.5rem;
    }
  }

  .ProductDiscount {
    background-color: white;
    padding: 0 0.4rem;
    padding-top: 0.2em;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  .ProductContent {
    background-color: white;
    margin-bottom: 0.3rem;
    padding-bottom: 0.2rem;
    font-size: 1rem;
  }

  .Bag {
    position: relative;
    bottom: 1.5rem;
    left: 10rem;
    color: ${palette.baemint200};
    z-index: 1;
  }
`;

function ProductFlashDiscount() {
  const [select, setSelect] = useState(0);
  const GetFlashProductQuery = gql`
    query {
      products {
        name
        price
        img_url
        discount
      }
    }
  `;
  function photoClick(index) {
    setSelect(index);
  }

  return (
    <ProductFlashDiscountBlock>
      <Query query={GetFlashProductQuery}>
        {({ data, loading, error }) => {
          if (loading || error) return '';
          const random = getRandomInt(0, data.products.length);
          const products = data.products.slice(random, random + 4);
          return (
            <>
              <div className="ProductTitle">
                지금 사면 <span>⚡️ 번쩍할인</span>
              </div>
              <More></More>
              <div className="ProductPhoto">
                {products.map((_data, idx) => {
                  return (
                    <ProductPhoto
                      onClick={photoClick}
                      key={idx}
                      index={idx}
                      url={_data.img_url}
                      select={select}></ProductPhoto>
                  );
                })}
              </div>
              <div className="ProductDiscount">
                <ProductDiscount
                  url={products[select].img_url}
                  discount={products[select].discount}></ProductDiscount>
                <div className="ProductContent">
                  <ProductContent
                    title={products[select].name}
                    price={products[select].price}></ProductContent>
                  <div className="Bag">
                    <Bag></Bag>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Query>
    </ProductFlashDiscountBlock>
  );
}

export default ProductFlashDiscount;
