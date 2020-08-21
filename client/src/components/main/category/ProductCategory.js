import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';

const ProductCategoryBlock = styled.div`
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
      width: 48%;
    }
  }
`;

function ProductCategory() {
  let title = [
    '정육·수산·계란',
    '우유·유제품',
    '뷰티·소품',
    '과일·샐러드',
    '밥·도시락',
    '과자·초콜릿·스낵',
    '반려동물',
    '생수·얼음·음료',
  ];
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
    <ProductCategoryBlock>
      <div className="ProductTitle">정육·수산·계란</div>
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
    </ProductCategoryBlock>
  );
}

export default ProductCategory;
