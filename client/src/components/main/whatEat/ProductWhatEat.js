import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';

const ProductWhatEatBlock = styled.div`
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    width: auto;
  }
`;

function ProductWhatEat() {
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
    <ProductWhatEatBlock>
      <div className="ProductTitle">지금 뭐 먹지?</div>
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
    </ProductWhatEatBlock>
  );
}

export default ProductWhatEat;
