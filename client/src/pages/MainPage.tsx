import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Product from '../components/main/Product';
import Carousel from '../components/Carousel';
import MainPageCategories from '../components/MainPageCategories';
import DeliveryAvailabilityIndicator from '../components/DeliveryAvailabilityIndicator';
import PullToRefresh from '../components/PullToRefresh';
import Category from '../components/main/Category';
import { Helmet } from 'react-helmet';
import useMainBanners from '../hooks/useMainBanners';
import useIsScrollTop from '../hooks/useIsScrollTop';

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

  return (
    <MainPageBlock isScrollTop={isScrollTop}>
      <Helmet>
        <title>B 마트</title>
      </Helmet>
      <Header></Header>
      <div style={{ height: '5rem' }} />
      <PullToRefresh
        onRefresh={() => {
          console.log('refresh');
        }}></PullToRefresh>
      {mainBanner.length > 0 ? (
        <Carousel images={mainBanner} transitionTime={1500}></Carousel>
      ) : null}
      <DeliveryAvailabilityIndicator />
      <MainPageCategories></MainPageCategories>
      <Product></Product>
      <Category></Category>
    </MainPageBlock>
  );
};

export default MainPage;
