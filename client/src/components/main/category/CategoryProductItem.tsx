import React from 'react';
import styled from 'styled-components';
import { PostfixKRW } from '../../../lib/styles/mixins';
import ProductPhoto from '../common/ProductPhoto';
import ProductContent from '../common/ProductContent';

const CategoryProductItemBlock = styled.div`
  position:relative;
  width: 50%;
  line-break: auto;
  white-space: normal;
  box-sizing: border-box;
  padding-bottom: 2vw;
  font-size:0.8rem;
  &:nth-child(odd) {
    padding-left: 2vw;
    padding-right: 1vw;
  }
  &:nth-child(even) {
    padding-left: 1vw;
    padding-right: 2vw;
  }
  .Bag {
    position:absolute;
    top:9.5rem;
  }
`;

interface CategoryProductItemProps {
  product: any;
}

const CategoryProductItem: React.FC<CategoryProductItemProps> = ({
  product,
}) => {
  return (
    <CategoryProductItemBlock>
      <ProductPhoto
        height="47vw"
        padding="0"
        url={product.img_url}
        wishbutton={true}
        index=""
        onClick=""></ProductPhoto>
      <div className="ProductContent">
        <ProductContent
          title={product.name}
          price={product.price}
          discount={product.discount}
          onAddCart={() => {
            // addToCart({
            //   variables: {
            //     product.id,
            //   },
            // });
          }}></ProductContent>
      </div>
    </CategoryProductItemBlock>
  );
};

export default CategoryProductItem;
