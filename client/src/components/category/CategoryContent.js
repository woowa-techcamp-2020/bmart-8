import React, { useState } from 'react';
import styled from 'styled-components';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const CategoryContentBlock = styled.div`
  .second,
  .third {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }

  .active {
    font-weight: bold;
    background-color: ${palette.gray200};
  }

  .third {
    background-color: ${palette.gray200};
  }

  .second > div,
  .third > div {
    box-sizing: border-box;
    width: 50%;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .second > div {
    border-top: solid 0.01rem ${palette.gray200};
    border-right: solid 0.01rem ${palette.gray200};
  }

  .Link {
    text-decoration: none;
    color: black;
    &:focus,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;

function CategoryContent(props) {
  const [selected, setSelected] = useState(false);
  const [showThird, setShowThird] = useState(false);

  function toggleThirdCategory(index) {
    props.closeContent();
    if (showThird && selected === index) {
      setShowThird(false);
    } else {
      props.setCloseCallback(() => {
        setShowThird(false);
      });
      setShowThird(true);
    }
    setSelected(index);
  }

  function getThirdQuery(index) {
    return gql`
    query {
      secondCategory(id: ${props.data[index].id}) {
        name
        children {
          id
          name
        }
      }
    }`;
  }

  return (
    <CategoryContentBlock>
      <div className="second">
        <div
          onClick={() => {
            toggleThirdCategory(0);
          }}
          className={!selected && showThird ? 'active' : ''}>
          {props.data[0].name}
        </div>
        {props.data[1] ? (
          <div
            onClick={() => {
              toggleThirdCategory(1);
            }}
            className={selected && showThird ? 'active' : ''}>
            {props.data[1].name}
          </div>
        ) : (
          <div />
        )}
      </div>
      {showThird === true ? (
        <div className="third">
          <Query query={getThirdQuery(selected)}>
            {({ data, loading, error }) => {
              if (loading || error) return '';
              let childList = data.secondCategory.children.map((data) => (
                <div>
                  <Link className="Link" to={'/category/' + data.id}>
                    {data.name}
                  </Link>
                </div>
              ));
              return childList;
            }}
          </Query>
        </div>
      ) : null}
    </CategoryContentBlock>
  );
}

export default CategoryContent;
