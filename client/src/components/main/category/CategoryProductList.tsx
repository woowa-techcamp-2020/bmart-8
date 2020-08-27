import React from 'react';
import styled from 'styled-components';
import CategoryProductItem from './CategoryProductItem';
import palette from '../../../lib/styles/palette';
import { Flex } from '../../../lib/styles/mixins';
import More from '../common/More';

const CategoryProductListBlock = styled.div`
  width: 100vw;
  white-space: nowrap;
`;

const Header = styled.div`
  ${Flex('row')}
  justify-content:space-between;
`;

const Title = styled.span`
  padding: 1rem;
  background-color: white;
  text-align: left;
  font-weight: bold;
`;

const ProductList = styled.div`
  ${Flex('row')}
  flex-wrap:wrap;
  border-bottom: 2px solid ${palette.gray400};
`;

const Divider = styled.div`
  height: 2vw;
  width: 100%;
  background-color: ${palette.gray200};
`;

interface CategoryProductListProps {
  category: any;
}

const CategoryProductList: React.FC<CategoryProductListProps> = ({
  category,
}) => {
  return (
    <CategoryProductListBlock>
      <Header>
        <Title>{category.name}</Title>
        <More></More>
      </Header>
      <ProductList>
        {category.products.map((product: any) => (
          <CategoryProductItem product={product}></CategoryProductItem>
        ))}
      </ProductList>
      <Divider></Divider>
    </CategoryProductListBlock>
  );
};

export default CategoryProductList;
