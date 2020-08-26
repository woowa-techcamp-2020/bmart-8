import React from 'react';
import styled from 'styled-components';
import GoBackButton from '../GoBackButton';

const CartHeaderBlock = styled.div`
  display: flex;
`;

type CartHeaderProps = {
  onChangeChecked: (checked: boolean) => void;
  onDelete: () => void;
};
const CartHeader: React.FC<CartHeaderProps> = ({
  onChangeChecked,
  onDelete,
}) => {
  return (
    <>
      <CartHeaderBlock>
        <GoBackButton />
        <div>장바구니</div>
      </CartHeaderBlock>
      <CartHeaderBlock>
        <label>
          <input
            type="checkbox"
            onChange={(e) => onChangeChecked(e.target.checked)}
          />
          전체선택
        </label>
        <button onClick={onDelete}>선택 삭제</button>
      </CartHeaderBlock>
    </>
  );
};
export default CartHeader;
