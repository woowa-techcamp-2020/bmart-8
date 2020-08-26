import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { useHistory } from 'react-router-dom';

import ArrowBack from '../ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import ProductHowAbout from '../CategoryDetail/ProductHowAbout'
import ThirdCategory from './ThirdCategory';

const CategoryHeaderBlock = styled.div`
  .Hedaer{
    padding-top: 1rem;
    justify-content: space-between;
    display: flex;
    height: 2rem;
    background-color: white;
    margin-bottom:0.1rem;
  }

`;

function CategoryHeader({ type,id }) {
  const GetProductIndexQuery=gql`
    query {
      products(category_level:second,category_id:${id}){
        products{
          id
        }
      }
    }
  `;


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
  else{
    GetReadyProductQuery = gql`
    query{
      thirdCategory(id:${id}){
        name
      }
    }`;
  }

  return (
    <CategoryHeaderBlock>
      <div className="Hedaer">
        <div className="ArrowBack">
          <ArrowBack onClick={() => history.goBack()}></ArrowBack>
        </div>
        <Query query={GetReadyProductQuery}>
          {({ data, loading, error }) => {
            if (loading || error) return '';
            if(type==='third'){
              return <div className="Title">{data.thirdCategory.name}</div>;
            }else if(type==='second'){
              return <div className="Title">{data.secondCategory.name}</div>;
            }else if(type==='top_saling'){
              return <div className="Title">요즘 잘팔려요</div>;
            }else if(type==='flash_discount'){
              return <div className="Title">할인해요</div>;
            }else if(type==='new_products'){
              return <div className="Title">새로나왔어요</div>;
            }
          }}
        </Query>
        <Link to={'/search/'}>
          <SearchIcon className="SearchIcon"></SearchIcon>
        </Link>
      </div>

      <Query query={GetProductIndexQuery}>
        {({ data, loading, error }) => {
          if (loading || error) return '';
          
            if(type==='second' ){
              return (
                <>
                  <ThirdCategory id={id}></ThirdCategory>
                  <ProductHowAbout index={data.products.products[data.products.products.length-1].id}></ProductHowAbout>
                </>
              )}
            else return ''
          
        }}
      </Query>

    </CategoryHeaderBlock>
  );
}
export default CategoryHeader;
