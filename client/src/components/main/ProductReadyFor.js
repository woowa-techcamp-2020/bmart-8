import React from 'react';
import styled from 'styled-components';
import ProductTitle from './ProductTitle';
import ProductInfo from './ProductInfo';

const ProductReadyForBlock = styled.div`
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    display: flex;
    flex-wrap: nowrap;
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

function ProductReadyFor() {
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
  return (
    <ProductReadyForBlock>
      <div className="ProductTitle">
        ㅇㅇㅇ님을 위해 준비한 상품
        <ProductTitle></ProductTitle>
      </div>
      <div className="ProductInfo">
        {data.map((_data, idx) => {
          return (
            <ProductInfo
              key={idx}
              title={_data.title}
              price={_data.price}
              url={_data.url}></ProductInfo>
          );
        })}
      </div>
    </ProductReadyForBlock>
  );
}

export default ProductReadyFor;
