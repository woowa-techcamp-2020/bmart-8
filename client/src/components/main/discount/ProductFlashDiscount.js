import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

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
  let data = [
    {
      title: '음식명',
      price: 123123,
      url:
        'https://dimg.donga.com/a/500/0/90/5/ugc/CDB/29STREET/Article/5e/b2/04/e8/5eb204e81752d2738236.jpg',
    },
    {
      title: '음식명',
      price: 123123,
      url: 'https://i.imgur.com/FODPMXD.jpg',
    },
    {
      title: '음식명',
      price: 123123,
      url: 'https://i.imgur.com/zU9sTZJ.jpg',
    },
    {
      title: '음식명',
      price: 123123,
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOEptWBRiRPfneQe3e2vnf6VPbYnqoHUu4nA&usqp=CAU',
    },
  ];

  const [select, setSelect] = useState(0);

  function photoClick(index) {
    setSelect(index);
  }

  return (
    <ProductFlashDiscountBlock>
      <div className="ProductTitle">
        지금 사면 <span>⚡️ 번쩍할인</span>
      </div>
      <div className="ProductPhoto">
        {data.map((_data, idx) => {
          return (
            <ProductPhoto
              onClick={photoClick}
              key={idx}
              index={idx}
              url={_data.url}
              select={select}></ProductPhoto>
          );
        })}
      </div>
      <div className="ProductDiscount">
        <ProductDiscount url={data[select].url}></ProductDiscount>
        <div className="ProductContent">
          <ProductContent
            title={data[select].title}
            price={data[select].price}></ProductContent>
          <div className="Bag">
            <Bag></Bag>
          </div>
        </div>
      </div>
    </ProductFlashDiscountBlock>
  );
}

export default ProductFlashDiscount;
