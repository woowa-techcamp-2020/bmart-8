import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import CategoryContent from '../components/CategoryContent';
import CategoryTitle from '../components/CategoryTitle';

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
  .Category {
    border-bottom: 0.1rem solid ${palette.gray400};
    background-color: ${palette.white};
    margin-top: 0.1rem;
  }
`;
function CategoryPage() {
  return (
    <CategoryPageBlock>
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
                <CategoryContent data={[left, right]}></CategoryContent>
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
