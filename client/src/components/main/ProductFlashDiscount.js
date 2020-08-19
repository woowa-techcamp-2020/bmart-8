import React, { useState } from 'react';
import styled from 'styled-components';
import ProductPhoto from './ProductPhoto';
import ProductPhotoDiscount from './ProductPhotoDiscount';

const ProductFlashDiscountBlock = styled.div`
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;

    span {
      color: red;
    }
  }

  .ProductPhoto {
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

  .ProductPhotoDiscount {
    padding: 0 0.4rem;
    margin-top: 0.2em;
    margin-left: 0.5rem;
    margin-right: 0.6rem;
  }
`;

function ProductFlashDiscount() {
  let data = [
    {
      url:
        'https://dimg.donga.com/a/500/0/90/5/ugc/CDB/29STREET/Article/5e/b2/04/e8/5eb204e81752d2738236.jpg',
    },
    {
      url: 'https://i.imgur.com/FODPMXD.jpg',
    },
    {
      url: 'https://i.imgur.com/zU9sTZJ.jpg',
    },
    {
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
      <div className="ProductPhotoDiscount">
        <ProductPhotoDiscount url={data[select].url}></ProductPhotoDiscount>
      </div>
    </ProductFlashDiscountBlock>
  );
}

export default ProductFlashDiscount;
