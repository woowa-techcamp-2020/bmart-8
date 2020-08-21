import React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const SearchHistoryItemBlock = styled.li`
  display: grid;
  grid-template-columns: 1fr 6rem 1rem;
  .link {
    text-decoration: none;
    color: black;
    text-align: left;
  }

  .datetime {
    color: gray;
    text-align: left;
    font-size: 1rem;
  }

  .delete-button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;
const SearchHistoryItem: React.FC<{
  onDelete: () => void;
  date: Date;
  query: string;
}> = ({ onDelete, date, query }) => {
  return (
    <SearchHistoryItemBlock>
      <Link className="link" to={'/search/' + query}>
        {query}
      </Link>
      <div className="datetime">
        {formatDistanceToNow(date, { locale: ko })} 전
      </div>
      <button className="delete-button" onClick={onDelete}>
        <CloseIcon />
      </button>
    </SearchHistoryItemBlock>
  );
};
export default SearchHistoryItem;
