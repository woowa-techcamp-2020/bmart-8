import React from 'react';
import styled from 'styled-components';

const PriceLabelBlock = styled.div`
  .original-price {
    text-decoration: line-through;
    color: gray;
  }

  margin-top: 1rem;
`;

type PriceLabelProps = {
  price: number;
  discountPercentage: number;
};

const PriceLabel: React.FC<PriceLabelProps> = ({
  price,
  discountPercentage: discount,
}) => {
  return (
    <PriceLabelBlock>
      {discount !== 0 ? (
        <div className="original-price">{price.toLocaleString()} 원</div>
      ) : null}
      <div>
        {Math.floor(price * ((100 - discount) / 100)).toLocaleString()} 원
      </div>
    </PriceLabelBlock>
  );
};

export default PriceLabel;
