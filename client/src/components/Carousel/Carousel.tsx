import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CarouselSelector from './CarouselSelector';

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

const Carousel: React.FC<CarouselProps> = ({ images, transitionTime }) => {
  // to get width of the container
  const containerRef = useRef<HTMLDivElement>(null);
  const cssTransitionTime = Math.min(transitionTime / 3, 400);

  const [curBannerIdx, setCurBannerIdx] = useState(1);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  // 마우스로 화면을 눌렀을 때의 X좌표
  const [startX, setStartX] = useState<number | null>(1);

  // offsetIdx번째 아이템에서 dx만큼 더 translate
  // Carousel을 이동시킬때 사용
  const translateBanner = (offsetIdx: number, dx: number = 0) => {
    const container = containerRef.current as any;
    container.style.transform = `translateX(${-(
      offsetIdx * container.offsetWidth +
      dx
    )}px)`;
  };

  const moveBanner = (idx: number) => {
    if (idx === 0) {
      setTimeout(() => {
        // To remove transition animation
        setStartX(1);
        moveBanner(images.length);
        (window as any).requestIdleCallback(() => {
          setStartX(null);
        });
      }, cssTransitionTime);
    } else if (idx === images.length + 1) {
      setTimeout(() => {
        setStartX(1);
        moveBanner(1);
        (window as any).requestIdleCallback(() => {
          setStartX(null);
        });
      }, cssTransitionTime);
    }
    translateBanner(idx);

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    // To set indicator
    setCurBannerIdx(idx);
    if (idx > 0 && idx < images.length + 1) {
      const newTimeoutId = setTimeout(
        () => moveBanner(idx + 1),
        transitionTime
      );
      setTimeoutId(newTimeoutId);
    }
  };

  useEffect(() => {
    moveBanner(curBannerIdx);
    (window as any).requestIdleCallback(() => {
      setStartX(null);
    });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    addEventListener();
    return removeEventListenr;
  });

  const dragStartHandler = (evt: any) => {
    setStartX(evt.clientX);
    clearTimeout(timeoutId!);
    setTimeoutId(null);
  };
  const dragMoveHandler = (evt: any) => {
    if (startX) translateBanner(curBannerIdx, startX - evt.clientX);
  };
  const dragEndHandler = (evt: any) => {
    const diff = evt.clientX - startX!;
    const containerWidth = (containerRef.current as any).getBoundingClientRect()
      .width;
    if (Math.abs(diff) > containerWidth / 4)
      moveBanner(curBannerIdx + (diff > 0 ? -1 : 1));
    else moveBanner(curBannerIdx);
    setStartX(null);
  };

  const addEventListener = () => {
    containerRef.current!.addEventListener('pointerdown', dragStartHandler);
    containerRef.current!.addEventListener('pointermove', dragMoveHandler);
    containerRef.current!.addEventListener('pointerup', dragEndHandler);
  };

  const removeEventListenr = () => {
    containerRef.current!.removeEventListener('pointerdown', dragStartHandler);
    containerRef.current!.removeEventListener('pointermove', dragMoveHandler);
    containerRef.current!.removeEventListener('pointerup', dragEndHandler);
  };

  const lastBanner = images[images.length - 1];

  return (
    <CarouselBlock
      isDragging={startX !== null}
      transitionTime={cssTransitionTime}>
      <div className="wrapper" ref={containerRef}>
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
      <CarouselSelector
        length={images.length}
        onChange={(idx) => moveBanner(idx)}
        activeIdx={(curBannerIdx - 1 + images.length) % images.length}
      />
    </CarouselBlock>
  );
};

export default Carousel;
