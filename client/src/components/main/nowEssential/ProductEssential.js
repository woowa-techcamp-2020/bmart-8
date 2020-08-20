import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import Refresh from '../common/Refresh';

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
    justify-content: center;
    height: auto;
    width: auto;
    margin-bottom: 0.1rem;
  }
  .Refresh {
    background-color: white;
    margin-bottom: 0.3rem;
    padding-bottom: 0.2rem;
  }
`;

function ProductEssential() {
  let data = [
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
    {
      title: '음식명',
      price: 123123,
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOEptWBRiRPfneQe3e2vnf6VPbYnqoHUu4nA&usqp=CAU',
    },
    {
      title: '음식명',
      price: 123123,
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOEptWBRiRPfneQe3e2vnf6VPbYnqoHUu4nA&usqp=CAU',
    },
    {
      title: '음식명',
      price: 123123,
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOEptWBRiRPfneQe3e2vnf6VPbYnqoHUu4nA&usqp=CAU',
    },
  ];
  return (
    <ProductEssentialBlock>
      <div className="ProductTitle">지금 필요한 생필품!</div>
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
      <Refresh title={'지금 필요한 생필품! '}></Refresh>
    </ProductEssentialBlock>
  );
}

export default ProductEssential;
