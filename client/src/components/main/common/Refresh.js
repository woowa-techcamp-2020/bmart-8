import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import ReplayIcon from '@material-ui/icons/Replay';

const RefreshBlock = styled.div`
  font-size: 0.8rem;
  background-color: white;
  margin-bottom: 0.3rem;

  .ReplayIcon {
    position: relative;
    top: 0.4rem;
    width: 0.8rem;
    color: ${palette.baemint300};
  }

  .Title {
    color: ${palette.baemint300};
  }
`;

function Refresh({ title }) {
  return (
    <RefreshBlock>
      <ReplayIcon className="ReplayIcon"></ReplayIcon>
      <span className="Title">{title}</span>
      다른 상품 보기
    </RefreshBlock>
  );
}

export default Refresh;
