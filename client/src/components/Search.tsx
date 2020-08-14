import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../static/icon/icon-search.png';

const SearchBlock = styled.div`
  .search-field {
    position: relative;
    border: solid 0.01em black;
    border-radius: 0.3em;
    height: 1.5em;
    width: 90%;
    margin: 0 auto;
    background-color: #eff1f3;

    img {
      top: 0.3em;
      left: 0.3em;
      position: absolute;
      width: 1em;
    }

    input {
      left: 1.8em;
      position: absolute;
      border: none;
      width: 90%;
      height: 90%;
      background-color: #eff1f3;

      :focus {
        outline: none;
      }
    }
  }
`;

const Search = () => {
  return (
    <SearchBlock>
      <div className="search-field">
        <img src={SearchIcon} alt="Search" />
        <input type="text" name="name" placeholder="B마트에서 검색하세요!" />
      </div>
    </SearchBlock>
  );
};

export default Search;
