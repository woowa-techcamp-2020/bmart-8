import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, useLazyQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import useDebounce from '../hooks/useDebounce';

const SearchHistoryItem: React.FC<{
  onDelete: () => void;
  date: Date;
  query: string;
}> = ({ onDelete, date, query }) => {
  return (
    <div>
      <div>{query}</div>
      <div>{formatDistanceToNow(date, { locale: ko })} 전</div>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

const SearchPageBlock = styled.div``;

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { data: searchHistoryData } = useQuery(gql`
    query getSearchHistory {
      searchHistory {
        id
        date
        query
      }
    }
  `);

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

  return (
    <SearchPageBlock>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          instantSearchDebounce(e.target.value);
        }}
      />
      {instantSearchData
        ? instantSearchData.instantSearch.map((name: string) => {
            return <div key={name}>{name}</div>;
          })
        : null}
      {searchHistoryData
        ? searchHistoryData.searchHistory.map(({ id, date, query }: any) => {
            return (
              <SearchHistoryItem
                key={id}
                onDelete={() => console.log('search histroy delete', id)}
                date={new Date(date)}
                query={query}
              />
            );
          })
        : null}
    </SearchPageBlock>
  );
};

export default SearchPage;
