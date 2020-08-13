import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
const MainPageBlock = styled.div``;

const MainPage: React.FC = () => {
  return (
    <MainPageBlock>
      <Logo></Logo>
    </MainPageBlock>
  );
};

export default MainPage;
