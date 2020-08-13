import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0.3em;
  bottom: 0.3em;
  width: 1.4em;
  height: 1.4em;
  border-radius: 0.7em;
  font-weight: 600;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  &::after {
    content: '♡';
  }
  &.filled {
    color: red;
    &::after {
      content: '♥︎';
    }
  }
`;

const WishButton = ({ filled }: { filled: Boolean }) => {
  return (
    <Button className={filled ? 'filled' : ''} onClick={() => {}}></Button>
  );
};

export default WishButton;
