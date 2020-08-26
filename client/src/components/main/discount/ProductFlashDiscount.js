import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Query } from 'react-apollo';
import getRandomInt from '../../../utils/random';
import { Link } from 'react-router-dom';
import More from '../common/More';
import ProductPhoto from '../common/ProductPhoto';
import ProductDiscount from './ProductDiscount';
import ProductContent from '../common/ProductContent';
import Bag from '../common/Bag';
import { GET_PRODUCT_SIMPLE } from '../main-query';

const ProductFlashDiscountBlock = styled.div`
  .ProductTitle {
    background-color: white;
    padding-top: 1rem;
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
  }
`;

function ProductFlashDiscount() {
  const [select, setSelect] = useState(0);

  function photoClick(index) {
    setSelect(index);
  }

  return (
    <ProductFlashDiscountBlock>
      <Query query={GET_PRODUCT_SIMPLE} variables={{ take: 4 }}>
        {({ data, loading, error }) => {
          if (loading || error) return null;
          if (data.products.length === 0) return null;
          const selectedProduct = data.products.products[select];
          return (
            <>
              <div className="ProductTitle">
                지금 사면{' '}
                <span>
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>
                  ️ 번쩍할인
                </span>
              </div>
              <Link to="/main/flash_discount">
                <More></More>
              </Link>
              <div className="ProductPhoto">
                {data.products.products.map((_data, idx) => {
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
                  url={selectedProduct.img_url}
                  discount={selectedProduct.discount}></ProductDiscount>
                <div className="ProductContent">
                  <ProductContent
                    title={selectedProduct.name}
                    price={selectedProduct.price}
                    id={selectedProduct.id}></ProductContent>
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
