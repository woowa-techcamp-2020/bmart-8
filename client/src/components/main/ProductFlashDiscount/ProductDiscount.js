import React from 'react';
import styled from 'styled-components';
import WishButton from '../../WishButton';

const ProductDiscountBlock = styled.div`
  border-radius: 0.3rem;

  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .Thumbnail {
    width: 100%;
    height: 100%;
    max-height: initial;
    margin-top: -10%;
    margin-bottom: -15%;
  }

  .DiscountRage {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background-color: red;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.6rem;
  }

  .WishButton {
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
  }
`;

function ProductDiscount({ url, discount }) {
  return (
    <ProductDiscountBlock>
      <img alt="Thumbnail" className={'Thumbnail'} src={url}></img>
      <div className="DiscountRage">
        <div>{discount}%</div> <div>할인</div>
      </div>
      <div className="WishButton">
        <WishButton className="WishButton" filled={false}></WishButton>
      </div>
    </ProductDiscountBlock>
  );
}

export default ProductDiscount;
