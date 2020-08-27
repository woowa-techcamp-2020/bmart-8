import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useCartState } from '../stores/cart-store';

const FooterBlock = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  bottom: 0px;
  width: 100%;
  background-color: white;
  z-index: 999;

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    li {
      position: relative;
    }
  }

  .cart-count-indicator {
    position: absolute;
    top: 0.1rem;
    right: 0.5rem;
    background: #77d6d3;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    text-align: center;
  }
`;

const LinkBlock = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const cart = useCartState();
  return (
    <FooterBlock>
      <ol>
        <li>
          <LinkBlock to="/categories">
            <MenuIcon />
            <div>메뉴</div>
          </LinkBlock>
        </li>
        <li>
          <LinkBlock to="/search">
            <SearchIcon />
            <div>검색</div>
          </LinkBlock>
        </li>
        <li>
          <LinkBlock to="/">
            <HomeIcon></HomeIcon>
            <div>홈</div>
          </LinkBlock>
        </li>
        <li>
          <LinkBlock to="/profile">
            <PersonOutlineIcon></PersonOutlineIcon>
            <div>프로필</div>
          </LinkBlock>
        </li>
        <li>
          <LinkBlock to="/cart">
            <AddShoppingCartIcon></AddShoppingCartIcon>
            <div>
              장바구니
              <div className="cart-count-indicator" hidden={cart.length === 0}>
                {cart.length}
              </div>
            </div>
          </LinkBlock>
        </li>
      </ol>
    </FooterBlock>
  );
};

export default Footer;
