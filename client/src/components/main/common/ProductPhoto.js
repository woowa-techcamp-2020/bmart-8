import React from 'react';
import styled from 'styled-components';
import WishButton from '../../WishButton';

const ProductPhotoBlock = styled.div`
  border-radius: 0.2rem;
  width: 100%;
  height: 7rem;
  position: relative;
  box-sizing: border-box;

  .Thumbnail {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
  }

  &.active {
    border: 2px solid red;
  }

  .WishButton {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
  }
`;

function ProductPhoto({ wishbutton, onClick, index, url, select = -1 }) {
  return (
    <ProductPhotoBlock className={select === index ? ' active' : ''}>
      <img
        loading="lazy"
        alt="Thunbnail"
        className={'Thumbnail'}
        src={url}
        onClick={() => {
          if (!onClick) return;
          onClick(index);
        }}></img>
      <div className="WishButton">
        {wishbutton ? <WishButton filled={false}></WishButton> : null}
      </div>
    </ProductPhotoBlock>
  );
}

export default ProductPhoto;
