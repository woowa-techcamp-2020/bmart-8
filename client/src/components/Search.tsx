import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const SearchBlock = styled(Link)`
  &.search-field {
    position: relative;
    border: solid 0.01em black;
    border-radius: 0.3em;
    height: 1.5em;
    width: 90%;
    margin: 0 auto;
    background-color: #eff1f3;
    cursor: text;
    display: block;
    text-decoration: none;

    .SearchIcon {
      left: 0.3em;
      position: absolute;
      width: 1em;
      color: black;
    }

    div {
      left: 1.8em;
      position: absolute;
      border: none;
      width: 90%;
      height: 90%;
      background-color: #eff1f3;
      color: gray;
      line-height: 1.5;
      text-align: left;
    }
  }
`;

const Search = () => {
  return (
    <SearchBlock to="/search" className="search-field">
      <SearchIcon className="SearchIcon"></SearchIcon>
      <div>B마트에서 검색하세요!</div>
    </SearchBlock>
  );
};

export default Search;
