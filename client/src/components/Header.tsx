import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';

const HeaderBlock = styled.div`
  background-color: white;
  z-index: 1;
  width: 100vw;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Logo></Logo>
      <Search></Search>
    </HeaderBlock>
  );
};

export default Header;
