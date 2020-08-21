import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from 'react-apollo';
import useDebounce from '../../hooks/useDebounce';
import { gql } from 'apollo-boost';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';

type SearchInputProps = {
  onSearch: (contents: string[]) => void;
};

const SearchInputBlock = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
  height: 3rem;
  button {
    background: none;
    border: none;
  }
  form {
    flex-grow: 1;
    display: flex;
    input {
      font-size: 1.3rem;
      border: none;
      flex-grow: 1;
    }
  }
`;

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const history = useHistory();
  const [query, setQuery] = useState('');
  const [instantSearch, { data: instantSearchData }] = useLazyQuery(gql`
    query instantSearch($q: String) {
      instantSearch(query: $q)
    }
  `);

  // 분당 150타라고 가정. interval = 60*1000/150
  const instantSearchDebounce = useDebounce(
    (q: string) => instantSearch({ variables: { q } }),
    400
  );
  if (instantSearchData) onSearch(instantSearchData.instantSearch);
  return (
    <SearchInputBlock>
      <button onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/search/${query}`);
        }}>
        <input
          autoFocus={true}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            instantSearchDebounce(e.target.value);
          }}
          placeholder="검색어를 입력하세요..."
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </SearchInputBlock>
  );
};
export default SearchInput;
