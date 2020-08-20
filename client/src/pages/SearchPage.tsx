import React, { useState } from 'react';
import styled from 'styled-components';

const SearchPageBlock = styled.div``;

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  return (
    <SearchPageBlock>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </SearchPageBlock>
  );
};

export default SearchPage;
