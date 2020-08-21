import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ArrowBackBlock = styled.div`
  background-color: white;
`;

type ArrowBackProps = {
  className: string;
};
const ArrowBack: React.FC<ArrowBackProps> = ({ className }: any) => {
  return (
    <ArrowBackBlock>
      <ArrowBackIcon></ArrowBackIcon>
    </ArrowBackBlock>
  );
};
export default ArrowBack;
