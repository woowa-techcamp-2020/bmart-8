import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ArrowBack from '../ArrowBack';
import SearchIcon from '@material-ui/icons/Search';

const CategoryHeaderBlock = styled.div`
  padding-top: 1rem;
  justify-content: space-between;
  display: flex;
  height: 2rem;
  background-color: white;
`;

function CategoryHeader({ id }) {
  const GetReadyProductQuery = gql`
  query{
  thirdCategory(id:${id}){
    name
  }
}
`;
  return (
    <CategoryHeaderBlock>
      <div className="ArrowBack">
        <ArrowBack></ArrowBack>
      </div>
      <Query query={GetReadyProductQuery}>
        {({ data, loading, error }) => {
          if (loading || error) return '';
          return <div className="Title">{data.thirdCategory.name}</div>;
        }}
      </Query>
      <Link to={'/search/'}>
        <SearchIcon className="SearchIcon"></SearchIcon>
      </Link>
    </CategoryHeaderBlock>
  );
}
export default CategoryHeader;
