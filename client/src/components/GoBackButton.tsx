import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const GoBackButtonBlock = styled.button`
  background: none;
  border: none;
`;
const GoBackButton: React.FC = () => {
  const history = useHistory();

  return (
    <GoBackButtonBlock onClick={() => history.goBack()}>
      <ArrowBackIcon />
    </GoBackButtonBlock>
  );
};

export default GoBackButton;
