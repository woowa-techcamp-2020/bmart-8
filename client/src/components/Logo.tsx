import React from 'react';
import styled from 'styled-components';

const LogoBlock = styled.div`
  margin: 0 auto;
  img {
    height: 25px;
    margin: 0.5rem;
  }
`;

const Logo = () => {
  return (
    <LogoBlock>
      <img src={'/icon/bmart-logo.png'} alt="Logo" />
    </LogoBlock>
  );
};

export default Logo;
