import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useLazyQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import SearchInput from '../components/Search/SearchInput';
import SearchRecommendationList from '../components/Search/SearchRecommendationList';
import { Helmet } from 'react-helmet';

const REMOVE_SEARH_HISTORY = gql`
  mutation removeSearchHistory($id: Int!) {
    removeSearchHistory(id: $id)
  }
`;

const GET_SEARCH_HISTORY = gql`
  query getSearchHistory {
    searchHistory {
      id
      date
      query
    }
  }
`;

const SearchPageBlock = styled.div``;

const SearchPage: React.FC = () => {
  const [instantSearchData, setInstantSearchData] = useState<string[]>([]);
  const [querySearchHistory, searchHistoryResult] = useLazyQuery(
    GET_SEARCH_HISTORY,
    {
      fetchPolicy: 'network-only',
    }
  );
  const [removeSearchHistory] = useMutation(REMOVE_SEARH_HISTORY);

  if (!searchHistoryResult.called) querySearchHistory();

  return (
    <SearchPageBlock>
      <Helmet>
        <title>검색 - B 마트</title>
      </Helmet>
      <SearchInput onSearch={setInstantSearchData} />
      <SearchRecommendationList
        instantSearchItems={instantSearchData}
        searchHistoryItems={
          searchHistoryResult.data ? searchHistoryResult.data.searchHistory : []
        }
        onDeleteSearshHistory={(id) =>
          removeSearchHistory({
            variables: {
              id,
            },
          }).then((data: any) => {
            if (data.data.removeSearchHistory) querySearchHistory();
          })
        }
      />
    </SearchPageBlock>
  );
};

export default SearchPage;
