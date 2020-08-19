import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CarouselBlock = styled.div<{
  isDragging: boolean;
  transitionTime: number;
}>`
  width: 70%;
  height: 300px;
  overflow: hidden;

  .wrapper {
    display: flex;
    height: 100%;
    touch-action: none;
    ${({ isDragging, transitionTime }) => {
      return !isDragging
        ? `transition: transform ${transitionTime}ms ease-in-out;`
        : '';
    }}

    & * {
      box-sizing: border-box;
    }

    div {
      flex-shrink: 0;
      scroll-snap-align: start;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      a {
        display: block;
        height: 100%;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

type CarouselProps = {
  images: {
    imageUrl: string;
    altString: string;
    routeUrl: string;
  }[];
  transitionTime: number;
};

const SelectorBlock = styled.div`
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

const Selector: React.FC<{
  length: number;
  onChange: (idx: number) => void;
  activeIdx: number;
}> = ({ length, onChange, activeIdx }) => {
  return (
    <SelectorBlock>
      {Array(length)
        .fill(0)
        .map((_, idx) => {
          return (
            <button key={idx} onClick={() => onChange(idx + 1)}>
              <div
                className={`selector${
                  activeIdx == idx ? ' active' : ''
                }`}></div>
            </button>
          );
        })}
    </SelectorBlock>
  );
};

const Carousel: React.FC<CarouselProps> = ({ images, transitionTime }) => {
  // to get width of the container
  const containerRef = useRef(null);
  const [curBanner, setCurBanner] = useState(1);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  // 마우스로 화면을 눌렀을 때의 X좌표
  const [startX, setStartX] = useState<any>(null);

  const setBanner = (idx: number, offset: number = 0) => {
    const container = containerRef.current as any;
    container.style.transform = `translateX(${-(
      curBanner * container.offsetWidth +
      offset
    )}px)`;
  };

  useEffect(() => {
    if (curBanner === 0) setTimeout(() => setCurBanner(images.length), 1000);
    else if (curBanner === images.length + 1) {
      setTimeout(() => setCurBanner(1), 1000);
    }
    setBanner(curBanner);

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    const newTimeoutId = setTimeout(
      () => setCurBanner(curBanner + 1),
      transitionTime
    );
    setTimeoutId(newTimeoutId);
    // eslint-disable-next-line
  }, [curBanner]);

  const dragStartHandler = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
    setStartX(evt.clientX);
    clearTimeout(timeoutId!);
    setTimeoutId(null);
  };
  const dragMoveHandler = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (startX) setBanner(curBanner, startX - evt.clientX);
  };
  const dragEndHandler = (evt: any) => {
    evt.stopPropagation();
    setCurBanner(curBanner + (evt.clientX - startX > 0 ? -1 : 1));
    setStartX(null);
  };

  const lastBanner = images[images.length - 1];

  return (
    <CarouselBlock isDragging={startX !== null} transitionTime={400}>
      <div
        className="wrapper"
        ref={containerRef}
        onPointerDown={dragStartHandler}
        onPointerMove={dragMoveHandler}
        onPointerUp={dragEndHandler}>
        <div>
          <Link to={lastBanner.routeUrl}>
            <img src={lastBanner.imageUrl} alt={lastBanner.altString}></img>
          </Link>
        </div>
        {images.map(({ imageUrl, altString, routeUrl }, idx) => {
          return (
            <div key={idx}>
              <Link to={routeUrl}>
                <img src={imageUrl} alt={altString}></img>
              </Link>
            </div>
          );
        })}
        <div>
          <Link to={images[0].routeUrl}>
            <img src={images[0].imageUrl} alt={images[0].altString}></img>
          </Link>
        </div>
      </div>
      <Selector
        length={images.length}
        onChange={(idx) => setCurBanner(idx)}
        activeIdx={curBanner - 1}
      />
    </CarouselBlock>
  );
};

export default Carousel;
