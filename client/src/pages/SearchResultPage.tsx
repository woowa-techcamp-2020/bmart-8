import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const SearchResultPageBlock = styled.div``;

const SearchResultPage: React.FC<any> = ({ match }: any) => {
  const q = match.params.query || '';
  return (
    <SearchResultPageBlock>
      <Helmet>
        <title>검색결과:{q} - B 마트</title>
      </Helmet>
      {q}
    </SearchResultPageBlock>
  );
};

export default SearchResultPage;
