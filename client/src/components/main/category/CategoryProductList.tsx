import React from 'react';
import styled from 'styled-components';
import CategoryProductItem from './CategoryProductItem';
import palette from '../../../lib/styles/palette';
import { Flex } from '../../../lib/styles/mixins';
import More from '../common/More';
import { Link } from 'react-router-dom';

const CategoryProductListBlock = styled.div`
  position: relative;
  width: 100vw;
  white-space: nowrap;

  .Link {
    position: absolute;
    top:3rem;
    right:0.3rem;
    text-decoration: none;
    color: black;
    &:focus,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
    
  }
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
        <Link className="Link" to={"/category/second/"+category.id}>
          <More></More>
        </Link>
      </Header>
      <ProductList>
        {category.products.map((product: any) => (
          <CategoryProductItem
            key={product.id}
            product={product}></CategoryProductItem>
        ))}
      </ProductList>
      <Divider></Divider>
    </CategoryProductListBlock>
  );
};

export default CategoryProductList;
