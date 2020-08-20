import React from 'react';
import styled from 'styled-components';

const SearchResultPageBlock = styled.div``;

const SearchResultPage: React.FC<any> = ({ match }: any) => {
  const q = match.params.query || '';
  return <SearchResultPageBlock>{q}</SearchResultPageBlock>;
};

export default SearchResultPage;
