import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import LogoIcon from '../static/icon/icon-logo.png';

const LogoBlock = styled.div`
  margin: 0 auto;
  img {
    height: 40px;
  }
`;

const Logo = () => {
  return (
    <LogoBlock>
      <img src={LogoIcon} />
    </LogoBlock>
  );
};

export default Logo;
