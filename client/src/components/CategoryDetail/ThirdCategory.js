import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import palette from '../../lib/styles/palette';

const ThirdCategoryBlock = styled.div`
  background-color:white;
  height:auto;
  margin-bottom:0.3rem;
  display: flex;
  flex-wrap: wrap;
  text-align: left;

  .Link {
    border-top: solid 0.01rem ${palette.gray200};
    border-right: solid 0.01rem ${palette.gray200};
    box-sizing: border-box;
    width: 50%;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-decoration: none;
    color: black;
    &:focus,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;

function ThirdCategory({id}) {
  let getSecondCategoryQuery=gql`
    query {
      secondCategory(id:${id}){
        children{
          id
          name
        }
      }
  }`

  return (
    <ThirdCategoryBlock>
      <Query query={getSecondCategoryQuery}>
        {({ data, loading, error }) => {
          if (loading || error) return '';
          return data.secondCategory.children.map((product) => {
            return (
              <Link className="Link" to={'/category/third/' + product.id}>
                <div>{product.name}</div>
              </Link>
            );
          });
        }}
      </Query>
    </ThirdCategoryBlock>
  );
}
export default ThirdCategory;
