import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Product from '../components/main/Product';
import Carousel from '../components/Carousel';
import MainPageCategories from '../components/main/CategoryButton';
import DeliveryAvailabilityIndicator from '../components/DeliveryAvailabilityIndicator';
import PullToRefresh from '../components/PullToRefresh';
import { Helmet } from 'react-helmet';
import useMainBanners from '../hooks/useMainBanners';
import useIsScrollTop from '../hooks/useIsScrollTop';
import CategoryContainer from '../components/main/category/CategoryContainer';

const MainPageBlock = styled.div<{ isScrollTop: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ isScrollTop }) => {
    return isScrollTop ? 'touch-action: pan-down;' : 'touch-action: pan-y;';
  }}
`;

const MainPage: React.FC = () => {
  const mainBanner = useMainBanners();
  const isScrollTop = useIsScrollTop();

  // 땡겨요에 사용함. 클릭했을때의 스크롤 위치
  const [startY, setStartY] = useState(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (window.scrollY !== 0) return;
      setStartY(e.clientY);
    };

    document.addEventListener('pointerdown', handler);
    return () => {
      document.removeEventListener('pointerdown', handler);
    };
  });

  return (
    <MainPageBlock isScrollTop={isScrollTop}>
      <Helmet>
        <title>B 마트</title>
      </Helmet>
      <Header></Header>
      <div style={{ height: '5rem' }} />
      {startY ? (
        <PullToRefresh
          startY={startY!}
          onFinish={() => {
            setStartY(null);
          }}
          onRefresh={() => {
            console.log('refresh');
          }}
        />
      ) : null}
      {mainBanner.length > 0 ? (
        <Carousel images={mainBanner} transitionTime={1500}></Carousel>
      ) : null}
      <DeliveryAvailabilityIndicator />
      <MainPageCategories></MainPageCategories>
      <Product></Product>
      <CategoryContainer></CategoryContainer>
    </MainPageBlock>
  );
};

export default MainPage;
