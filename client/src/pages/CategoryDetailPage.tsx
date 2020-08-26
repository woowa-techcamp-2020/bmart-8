import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

import CategoryProduct from '../components/CategoryDetail/CategoryProduct';
import CategoryHeader from '../components/CategoryDetail/CategoryHeader';

const CategoryDetailBlock = styled.div`
  height: 100vh;
  background-color: ${palette.gray200};
`;

const CategoryDetailPage: React.FC<any> = ({ match }: any) => {
  const q = match.params.query || '';

  return (
    <CategoryDetailBlock>
      <CategoryHeader id={q}></CategoryHeader>
      <CategoryProduct id={q}></CategoryProduct>
    </CategoryDetailBlock>
  );
};

export default CategoryDetailPage;
