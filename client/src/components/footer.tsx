import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterBlock = styled.ol`
  position: fixed;
  bottom: 0;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterBlock>
      <li>메뉴</li>
      <li>검색</li>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/profile">프로필</Link>
      </li>
      <li>
        <Link to="/cart">장바구니</Link>
      </li>
    </FooterBlock>
  );
};

export default Footer;
