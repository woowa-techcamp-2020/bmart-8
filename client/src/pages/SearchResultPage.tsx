import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import palette from '../lib/styles/palette';
import GoBackButton from '../components/GoBackButton';
import ProductInfo from '../components/main/common/ProductInfo';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const CategoryHeaderBlock = styled.div`
  .Hedaer {
    padding-top: 1rem;
    justify-content: space-between;
    display: flex;
    height: 2rem;
    background-color: white;
    margin-bottom: 0.1rem;
  }
`;
const SearchResultHeader: React.FC<any> = ({ title }: any) => {
  return (
    <CategoryHeaderBlock>
      <div className="Hedaer">
        <div className="ArrowBack">
          <GoBackButton />
        </div>
        <div className="Title">검색: {title}</div>
        <Link to={'/search/'}>
          <SearchIcon className="SearchIcon"></SearchIcon>
        </Link>
      </div>
    </CategoryHeaderBlock>
  );
};

const SearchResultProductBlock = styled.div`
  .ProductInfo {
    padding-top: 0.3rem;
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

function SearchResultProduct({ products }: any) {
  return (
    <SearchResultProductBlock>
      {/* <Filter onChange={onChangeFilter}></Filter> */}
      <div className="ProductInfo">
        {products &&
          products.map((product: any) => (
            <ProductInfo
              id={product.id}
              key={product.id}
              title={product.name}
              price={product.price}
              url={product.img_url}
            />
          ))}
      </div>
    </SearchResultProductBlock>
  );
}

const SearchResultPageBlock = styled.div`
  background-color: ${palette.gray200};
`;

const SearchResultPage: React.FC<any> = ({ match }: any) => {
  const q = match.params.query || '';

  const { data } = useQuery(
    gql`
      query searchProducts($query: String) {
        searchProducts(query: $query) {
          id
          created_at
          name
          content
          img_url
          price
          discount
        }
      }
    `,
    {
      variables: {
        query: q,
      },
    }
  );
  return (
    <SearchResultPageBlock>
      <Helmet>
        <title>검색결과:{q} - B 마트</title>
      </Helmet>
      <SearchResultHeader title={q} />
      {data && (
        <SearchResultProduct
          products={data.searchProducts}></SearchResultProduct>
      )}
    </SearchResultPageBlock>
  );
};

export default SearchResultPage;
