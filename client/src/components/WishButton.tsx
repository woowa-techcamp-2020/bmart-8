import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.4em;
  height: 1.4em;
  border-radius: 0.7em;
  font-weight: 600;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);

  @keyframes twinkle {
    50% {
      font-size: 1.2rem;
    }
    100% {
      font-size: 1rem;
    }
  }
  &::after {
    content: '♡';
  }
  &.filled {
    color: red;
    &::after {
      content: '♥︎';
      animation-duration:0.3s;
      animation-name: twinkle;
    }
  }
`;

const WishButton = ({ filled }: { filled: Boolean }) => {
  const [heart, setHeart] = useState(filled);
  return (
    <Button
      className={heart ? 'filled' : ''}
      onClick={() => {
        setHeart(!heart);
      }}></Button>
  );
};

export default WishButton;
