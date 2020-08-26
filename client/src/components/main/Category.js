import React from 'react';
import styled from 'styled-components';
import ProductCategory from './ProductCategory';

const CategoryBlock = styled.div`
  margin-bottom: 47px;
`;

function Category() {
  return (
    <CategoryBlock>
      <ProductCategory />
    </CategoryBlock>
  );
}

export default Category;
