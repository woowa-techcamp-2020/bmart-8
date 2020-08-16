import React from 'react';
import styled from 'styled-components';

const CarouselBlock = styled.div`
  width: 70%;
  height: 200px;

  .wrapper {
    display: flex;
    overflow: auto;

    width: 100%;
    height: 100%;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    div {
      flex-shrink: 0;
      scroll-snap-align: start;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Carousel = () => {
  return (
    <CarouselBlock>
      <div className="wrapper">
        <div style={{ background: 'red' }}>1</div>
        <div style={{ background: 'gray' }}>2</div>
        <div style={{ background: 'green' }}>3</div>
        <div style={{ background: 'red' }}>4</div>
      </div>
    </CarouselBlock>
  );
};

export default Carousel;
