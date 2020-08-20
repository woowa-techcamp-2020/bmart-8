import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchHistoryItem from './SearchHistoryItem';

type SearchRecommendationListProps = {
  instantSearchItems: string[];
  searchHistoryItems: { id: number; name: string; date: Date }[];
  onDeleteSearshHistory: (id: number) => void;
};

const SearchRecommendationListBlock = styled.ol`
  list-style: none;
  padding: 0;
  a {
    width: 100%;
    text-decoration: none;
    color: black;
    text-align: left;
  }
  .instant-search-result {
    display: flex;
  }

  li {
    padding: 1rem;
    font-size: 1.3rem;
    border-top: 1px solid gray;
    &:hover {
      background: #e5e5e5;
    }
  }
`;
const SearchRecommendationList: React.FC<SearchRecommendationListProps> = ({
  instantSearchItems,
  searchHistoryItems,
  onDeleteSearshHistory,
}) => {
  return (
    <SearchRecommendationListBlock>
      {instantSearchItems
        ? instantSearchItems.map((name: string) => {
            return (
              <li key={name} className="instant-search-result">
                <Link to={'/search/' + name}>{name}</Link>
              </li>
            );
          })
        : null}
      {searchHistoryItems
        ? searchHistoryItems.map(({ id, date, query }: any) => {
            return (
              <SearchHistoryItem
                key={id}
                onDelete={() => onDeleteSearshHistory(id)}
                date={new Date(date)}
                query={query}
              />
            );
          })
        : null}
    </SearchRecommendationListBlock>
  );
};

export default SearchRecommendationList;
