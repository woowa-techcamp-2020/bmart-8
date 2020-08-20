import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import GoBmart from '../components/category/GoBmart';
import CategoryContent from '../components/category/CategoryContent';
import CategoryTitle from '../components/category/CategoryTitle';
import Dibs from '../components/category/Dibs';
import ArrowBack from '../components/ArrowBack';
import OrderList from '../components/category/OrderList';
import { Helmet } from 'react-helmet';

const GetFirstCategory = gql`
  query {
    firstCategories {
      name
      children {
        id
        name
      }
    }
  }
`;

const CategoryPageBlock = styled.div`
  text-align: left;
  background-color: ${palette.gray300};

  .back {
    padding-top: 1rem;
    padding-left: 1rem;
    background-color: white;
  }

  .Category {
    border-bottom: 0.1rem solid ${palette.gray400};
    background-color: ${palette.white};
    margin-top: 0.1rem;
  }

  .other {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    background-color: white;
  }
`;
function CategoryPage() {
  let selectedClose;
  function closeContent() {
    if (!selectedClose) return;
    selectedClose();
  }
  function setCloseCallback(cb) {
    selectedClose = cb;
  }

  return (
    <CategoryPageBlock>
      <Helmet>
        <title>카테고리 - B 마트</title>
      </Helmet>
      <div className="back">
        <ArrowBack></ArrowBack>
      </div>
      <GoBmart></GoBmart>
      <div className="other">
        <OrderList></OrderList>
        <Dibs></Dibs>
      </div>
      <Query query={GetFirstCategory}>
        {({ data, loading, error }) => {
          if (loading) return '';
          if (error) return '';
          let categoryList = [];
          data.firstCategories.forEach((firstCategory) => {
            let childList = [];
            for (let i = 0; i < firstCategory.children.length; i += 2) {
              const left = firstCategory.children[i];
              const right = firstCategory.children[i + 1];
              childList.push(
                <CategoryContent
                  setCloseCallback={setCloseCallback}
                  closeContent={closeContent}
                  data={[left, right]}></CategoryContent>
              );
            }

            categoryList.push(
              <div className="Category">
                <CategoryTitle title={firstCategory.name}></CategoryTitle>
                {childList}
              </div>
            );
          });
          return categoryList;
        }}
      </Query>
    </CategoryPageBlock>
  );
}

export default CategoryPage;
