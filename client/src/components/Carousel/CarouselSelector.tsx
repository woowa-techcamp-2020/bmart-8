import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const CarouselSelectorBlock = styled.div`
  position: relative;
  margin-top: -30px;
  button {
    margin: 0.3rem;
    padding: 0;
    border: none;
    background: none;

    .selector {
      background: #d3d3d3;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;

      &.active {
        background: white;
      }
    }
    .selector::before {
      content: '';
    }
  }
`;

const CarouselSelector: React.FC<{
  length: number;
  onChange: (idx: number) => void;
  activeIdx: number;
}> = ({ length, onChange, activeIdx }) => {
  return (
    <CarouselSelectorBlock>
      {Array(length)
        .fill(0)
        .map((_, idx) => {
          return (
            <button key={idx} onClick={() => onChange(idx + 1)}>
              <div
                className={`selector${
                  activeIdx === idx ? ' active' : ''
                }`}></div>
            </button>
          );
        })}
    </CarouselSelectorBlock>
  );
};

export default CarouselSelector;
