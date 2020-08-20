import React from 'react';
import styled from 'styled-components';
import CategoryIconButton from './CategoryIconButton';

const dummyIcons = [
  {
    name: '과일',
    imageUrl: 'https://dummyimage.com/600x400/b5b5b5/00ffff&text=1',
    routeUrl: '/1',
  },
  {
    name: '유제품',
    imageUrl: 'https://dummyimage.com/600x400/b5b5b5/00ffff&text=1',
    routeUrl: '/',
  },
  {
    name: '빵, 시리얼',
    imageUrl: 'https://dummyimage.com/600x400/b5b5b5/00ffff&text=1',
    routeUrl: '/',
  },

  {
    name: '더보기',
    imageUrl: 'https://dummyimage.com/600x400/b5b5b5/00ffff&text=1',
    routeUrl: '/',
  },
];
const MainPageCategoriesBlock = styled.div`
  width: 90%;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const MainPageCategories: React.FC = () => {
  return (
    <MainPageCategoriesBlock>
      {dummyIcons.map((item) => {
        return <CategoryIconButton key={item.name} {...item} />;
      })}
    </MainPageCategoriesBlock>
  );
};

export default MainPageCategories;
