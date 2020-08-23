import React from 'react';
import styled from 'styled-components';
import CategoryIconButton from './CategoryIconButton';

const Icons = [
  {
    name: '채소',
    imageUrl: '/icon/salad.png',
    routeUrl: '/vegetable',
  },
  {
    name: '정육·계란',
    imageUrl: '/icon/egg.png',
    routeUrl: '/egg',
  },
  {
    name: '국·메인요리',
    imageUrl: '/icon/mealkit.png',
    routeUrl: '/meal',
  },
  {
    name: '음료·우유',
    imageUrl: '/icon/milk.png',
    routeUrl: '/milk',
  },
  {
    name: '베이커리·치즈',
    imageUrl: '/icon/bread.png',
    routeUrl: '/bread',
  },

  {
    name: '반려동물',
    imageUrl: '/icon/yasik.png',
    routeUrl: '/dog',
  },
  {
    name: '뷰티·바디케어',
    imageUrl: '/icon/hair.png',
    routeUrl: '/care',
  },
  {
    name: '더보기',
    imageUrl: '/icon/more.png',
    routeUrl: '/more',
  },
];
const MainPageCategoriesBlock = styled.div`
  width: 90%;
  border: 0;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const MainPageCategories: React.FC = () => {
  return (
    <MainPageCategoriesBlock>
      {Icons.map((item) => {
        return <CategoryIconButton key={item.name} {...item} />;
      })}
    </MainPageCategoriesBlock>
  );
};

export default MainPageCategories;
