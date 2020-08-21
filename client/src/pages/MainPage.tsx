import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Product from '../components/main/Product';
import Carousel from '../components/Carousel';
import MainPageCategories from '../components/MainPageCategories';
import DeliveryAvailabilityIndicator from '../components/DeliveryAvailabilityIndicator';
import PullToRefresh from '../components/PullToRefresh';
import { Helmet } from 'react-helmet';

const MainPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  touch-action: none;
`;

const dummyCarousel = [
  {
    imageUrl: 'https://dummyimage.com/600x400/b5b5b5/00ffff',
    altString: 'caro1',
    routeUrl: '/',
  },
  {
    imageUrl: 'https://dummyimage.com/600x400/b5b5b5/00ffff&text=1',
    altString: 'caro2',
    routeUrl: '/',
  },
  {
    imageUrl: 'https://dummyimage.com/600x400/b5b5b5/00ffff&text=2',
    altString: 'caro2',
    routeUrl: '/2',
  },
  {
    imageUrl: 'https://dummyimage.com/600x400/b5b5b5/00ffff&text=3',
    altString: 'caro3',
    routeUrl: '/3',
  },
];
const MainPage: React.FC = () => {
  return (
    <MainPageBlock>
      <Helmet>
        <title>B 마트</title>
      </Helmet>
      <Header></Header>
      <div style={{ height: '5rem' }} />
      <PullToRefresh
        onRefresh={() => {
          console.log('refresh');
        }}></PullToRefresh>
      <Carousel images={dummyCarousel} transitionTime={1500}></Carousel>
      <DeliveryAvailabilityIndicator />
      <MainPageCategories></MainPageCategories>
      <Product></Product>
    </MainPageBlock>
  );
};

export default MainPage;
