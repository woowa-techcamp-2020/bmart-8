import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
const MainPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Header></Header>
      <Carousel images={dummyCarousel} transitionTime={1500}></Carousel>
    </MainPageBlock>
  );
};

export default MainPage;
