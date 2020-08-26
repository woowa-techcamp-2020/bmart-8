import React, { useState } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import ProductInfo from '../main/common/ProductInfo';
import Filter from '../CategoryDetail/Filter';

const CategoryProductBlock = styled.div`
  .ProductInfo {
    padding-top: 0.3rem;
    padding-right: 0.5rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: auto;
    width: 100%;
    margin-bottom: 0.1rem;
    & > div {
      width: 45%;
    }
  }
`;

function CategoryProduct({ type, id }) {
  const [orderType, setOrderType] = useState('price');
  const [order, setOrder] = useState('desc');

  let getOrderbyProductQuery=''
  if(type==='second'){
    getOrderbyProductQuery = gql` 
    query {
      products(category_level: second, category_id: ${id}, order_type: ${orderType}, order:${order}) {
        products {
          name
          price
          img_url
        }
      }
    }`;
  }
  else if(type==='third'){
    getOrderbyProductQuery = gql`
    query {
      products(category_level: third, category_id: ${id}, order_type: ${orderType}, order:${order}) {
        products {
          name
          price
          img_url
        }
      }
    }`;
  }

  function onChangeFilter(event) {
    const value = event.target.value;
    if (value === 'expensive') {
      setOrderType('price');
      setOrder('desc');
    } else if (value === 'cheap') {
      setOrderType('price');
      setOrder('asc');
    } else if (value === 'sale') {
      setOrderType('sales');
      setOrder('desc');
    } else if (value === 'new') {
      setOrderType('created_at');
      setOrder('desc');
    }
  }

  return (
    <CategoryProductBlock>
      <Filter onChange={onChangeFilter}></Filter>
      <div className="ProductInfo">
        <Query query={getOrderbyProductQuery}>
          {({ data, loading, error }) => {
            if (loading || error) return '';
            return data.products.products.map((product, idx) => {
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
    </CategoryProductBlock>
  );
}

export default CategoryProduct;
