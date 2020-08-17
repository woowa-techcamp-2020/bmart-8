import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const CategoryTitleBlock = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  position: relative;
  color: white;

  .Title {
    position: absolute;
    z-index: 2;
    color: ${palette.black};
    top: 1rem;
  }

  .UnderLine {
    position: absolute;
    z-index: 1;
    height: 0.5rem;
    width: 25%;
    background-color: ${palette.baemint200};
    bottom: 1.3rem;
    width: 90%;
  }
`;

function CategoryTitle(props) {
  return (
    <CategoryTitleBlock>
      {props.title}
      <div className="Title">{props.title}</div>
      <div className="UnderLine" />
    </CategoryTitleBlock>
  );
}

export default CategoryTitle;
