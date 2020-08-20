import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import SearchInput from '../components/Search/SearchInput';
import SearchRecommendationList from '../components/Search/SearchRecommendationList';

const SearchPageBlock = styled.div``;

const SearchPage: React.FC = () => {
  const [instantSearchData, setInstantSearchData] = useState<string[]>([]);
  const { data: searchHistoryData } = useQuery(gql`
    query getSearchHistory {
      searchHistory {
        id
        date
        query
      }
    }
  `);
  return (
    <SearchPageBlock>
      <SearchInput onSearch={setInstantSearchData} />
      <SearchRecommendationList
        instantSearchItems={instantSearchData}
        searchHistoryItems={
          searchHistoryData ? searchHistoryData.searchHistory : []
        }
        onDeleteSearshHistory={(id) =>
          console.log('search history deleted. id: ', id)
        }
      />
    </SearchPageBlock>
  );
};

export default SearchPage;
