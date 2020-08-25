import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProductPhoto from './ProductPhoto';
import ProductContent from './ProductContent';
import { gql } from '@apollo/client';
import { useMutation } from 'react-apollo';
import { useCartDispatch, addCartItem } from '../../../stores/cart-store';

const ProductInfoBlock = styled.div`
  flex-shrink: 0;
  margin: 0 0.1rem;
  padding-bottom: 1rem;
  width: 30%;
  .ProductContent {
    font-size: 0.8rem;
  }
`;

function ProductInfo({ title, price, url, id }) {
  const [addToCart, { data }] = useMutation(gql`
    mutation addToCart($id: Int!) {
      addToCart(productId: $id) {
        id
        product {
          id
          name
          img_url
          price
          discount
        }
        createdAt
        count
      }
    }
  `);
  const cartDispatch = useCartDispatch();

  useEffect(() => {
    if (!data) return;
    cartDispatch(addCartItem(data.addToCart));
  }, [data, cartDispatch]);

  return (
    <ProductInfoBlock>
      <ProductPhoto url={url} wishbutton={true}></ProductPhoto>
      <div className="ProductContent">
        <ProductContent
          title={title}
          price={price}
          onAddCart={() => {
            addToCart({
              variables: {
                id,
              },
            });
          }}></ProductContent>
      </div>
    </ProductInfoBlock>
  );
}

export default ProductInfo;
