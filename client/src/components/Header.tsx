import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import palette from '../lib/styles/palette';

const HeaderBlock = styled.div`
  position: fixed;
  background-color: white;
  z-index: 99;
  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid ${palette.gray300};
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
