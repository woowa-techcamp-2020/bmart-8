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
  var q = match.params.query || 1;
  const type = match.params.type || '';

  console.log(type)
  return (
    <CategoryDetailBlock>
      <CategoryHeader type={type} id={q}></CategoryHeader>
      {/* <CategoryProduct type={type} id={q}></CategoryProduct> */}
    </CategoryDetailBlock>
  );
};

export default CategoryDetailPage;
