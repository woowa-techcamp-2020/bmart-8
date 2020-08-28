import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import ProductHowAbout from '../CategoryDetail/ProductHowAbout'
import ThirdCategory from './ThirdCategory';
import { useHistory } from 'react-router-dom';

const CategoryHeaderBlock = styled.div`
  .Hedaer{
    padding-top: 1rem;
    justify-content: space-between;
    display: flex;
    height: 2rem;
    background-color: white;
    margin-bottom:0.1rem;
  }
  .SearchIcon{
    color:black;
  }
`;

function CategoryHeader({ type,id }) {
  const history = useHistory();

  let GetReadyProductQuery=''
  if(type==='second'){
    GetReadyProductQuery = gql`
    query{
      secondCategory(id:${id}){
        name
      }
    }`;
  }
  else {
    GetReadyProductQuery = gql`
    query{
      thirdCategory(id:${id}){
        name
      }
    }`;
  }
  const GetProductIndexQuery=gql`
    query {
      products(category_level:second,category_id:${id}){
        products{
          id
        }
      }
    }
  `;

  return (
    <CategoryHeaderBlock>
      <div className="Hedaer">
        <ArrowBackIcon
          style={{ paddingLeft: '10px' }}
          onClick={() => history.goBack()}
        />
        <Query query={GetReadyProductQuery}>
          {({ data, loading, error }) => {
            let title
            if (loading || error) return '';
            if(type==='third'){
              title=data.thirdCategory.name
            }else if(type==='second'){
              title=data.secondCategory.name
            }else if(type==='new_products'){
              title='새로나왔어요'
            }else if(type==='top_saling'){
              title='잘팔려요'
            }else if(type==='flash_discount'){
              title='할인해요'
            }
            return <div className="Title">{title}</div>;
          }}
        </Query>
        <Link to={'/search/'}>
          <SearchIcon className="SearchIcon"></SearchIcon>
        </Link>
      </div>

      <Query query={GetProductIndexQuery}>
        {({ data, loading, error }) => {
          if (loading || error) return '';
          {
            if(type==='second'){
              return (
                <>
                  <ThirdCategory id={id}></ThirdCategory>
                  <ProductHowAbout index={data.products.products[data.products.products.length-1].id}></ProductHowAbout>
                </>
              )}
            return ''
          }
        }}
      </Query>

    </CategoryHeaderBlock>
  );
}
export default CategoryHeader;
