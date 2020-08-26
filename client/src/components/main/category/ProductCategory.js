import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../common/ProductInfo';
import More from '../common/More';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
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
  const GetSecondCategory = gql`
    query getSecondCategory {
      secondCategories {
        id
        name
        children {
          product {
            name
            id
            img_url
          }
        }
      }
    }
  `;

  return (
    <ProductCategoryBlock>
      <Query query={GetSecondCategory}>
        {({ data, loading, error }) => {
          if (loading || error) return '';
          return data.secondCategories.map((secondCategory, id) => {
            return (
              <div key={secondCategory.id}>
                <div className="ProductTitle">{secondCategory.name}</div>
                <More></More>
                {/* <div className="ProductInfo">
                  {secondCategory.children.products.map((_data, idx) => {
                    return (
                      <ProductInfo
                        key={idx}
                        title={_data.title}
                        price={_data.price}
                        url={_data.url}></ProductInfo>
                    );
                  })}
                </div> */}
              </div>
            );
          });
        }}
      </Query>
    </ProductCategoryBlock>
  );
}

export default ProductCategory;
