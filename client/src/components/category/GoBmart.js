import React from 'react';
import styled from 'styled-components';
import ArrowFront from '../ArrowFront';
import { Link } from 'react-router-dom';

const GoBmartBlock = styled.div`
  padding-top: 2rem;
  padding-left: 1rem;
  background-color: white;
  cursor: pointer;

  div {
    display: flex;
  }
`;

function GoBmart() {
  return (
    <GoBmartBlock>
      <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
        <div>
          <span style={{ fontWeight: 'bold' }}>B마트 홈</span>
          <span>으로 가기</span>
          <ArrowFront></ArrowFront>
        </div>
      </Link>
    </GoBmartBlock>
  );
}

export default GoBmart;
