import React from 'react';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const ArrowFrontBlock = styled.div`
  position: relative;
  background-color: white;
  color: gray;
  top:-0.2rem;
`;

type ArrowFrontProps = {};
const ArrowFront: React.FC<ArrowFrontProps> = () => {
  return (
    <ArrowFrontBlock>
      <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
    </ArrowFrontBlock>
  );
};
export default ArrowFront;
