import React from 'react';
import styled from 'styled-components';
import CategoryIconButton from './CategoryIconButton';

const Icons = [
  {
    name: '채소',
    imageUrl: '/icon/salad.png',
    routeUrl: '/maincategory/1',
  },
  {
    name: '정육·계란',
    imageUrl: '/icon/egg.png',
    routeUrl: '/maincategory/4',
  },
  {
    name: '국·메인요리',
    imageUrl: '/icon/mealkit.png',
    routeUrl: '/maincategory/5',
  },
  {
    name: '음료·우유',
    imageUrl: '/icon/milk.png',
    routeUrl: '/maincategory/8',
  },
  {
    name: '베이커리·치즈',
    imageUrl: '/icon/bread.png',
    routeUrl: '/maincategory/9',
  },

  {
    name: '반려동물',
    imageUrl: '/icon/yasik.png',
    routeUrl: '/maincategory/16',
  },
  {
    name: '뷰티·바디케어',
    imageUrl: '/icon/hair.png',
    routeUrl: '/maincategory/12',
  },
  {
    name: '더보기',
    imageUrl: '/icon/more.png',
    routeUrl: '/categories',
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
