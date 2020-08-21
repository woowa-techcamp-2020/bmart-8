import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import ArrowFront from '../../ArrowFront';

const MoreBlock = styled.div`
  background-color: white;
  color: ${palette.baemint300};
  font-weight: bold;
  z-index: 1;

  .More {
    padding: 0;
    margin: 0;
    position: relative;
    left: 18rem;
    bottom: 2.3rem;
    display: flex;
  }
`;

function More() {
  return (
    <MoreBlock>
      <div className="More">
        <div>더보기</div>
        <ArrowFront></ArrowFront>
      </div>
    </MoreBlock>
  );
}

export default More;
