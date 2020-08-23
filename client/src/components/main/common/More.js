import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import ArrowFront from '../../ArrowFront';

const MoreBlock = styled.div`
  position: relative;
  background-color: white;
  color: ${palette.baemint300};
  font-weight: bold;
  z-index: 1;

  .More {
    display: flex;
    padding: 0;
    margin: 0;
    position: absolute;
    right: 1rem;
    bottom: 0.5rem;
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
