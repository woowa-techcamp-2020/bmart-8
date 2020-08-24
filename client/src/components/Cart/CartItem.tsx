import React from 'react';
import styled from 'styled-components';
import PriceLabel from '../PriceLabel';

const CartItemBlock = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 2rem 1fr 1fr;
  grid-template-areas:
    'header header'
    'img price'
    'img count';
  height: 10rem;

  margin: 1rem 0;

  .cartitem-header {
    grid-area: header;
  }
  .cartitem-img {
    grid-area: img;
    img {
      height: 100%;
      max-width: 100%;
      width: auto;
    }
  }
  .cartitem-count {
    grid-area: count;
  }
  .cartitem-price {
    grid-area: price;
  }
`;

type CartItemProps = {
  id: number;
  product: {
    content: string;
    discount: number;
    id: number;
    img_url: string;
    name: string;
    price: number;
  };
  createdAt: Date;
  count: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  product,
  count,
  createdAt,
}) => {
  return (
    <CartItemBlock>
      <div className="cartitem-header">
        <div>{product.name}</div>
      </div>
      <div className="cartitem-img">
        <img src={product.img_url} alt={product.name} />
      </div>
      <div className="cartitem-price">
        <PriceLabel
          discountPercentage={product.discount}
          price={product.price}
        />
      </div>
      <div className="cartitem-count">
        <div>{count}</div>
      </div>
    </CartItemBlock>
  );
};
export default CartItem;
