import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const OrderListBlock = styled.div`
  font-size: 0.8rem;
  padding: 0.6rem;
  width: 12rem;
  box-sizing: border-box;
  border: solid 0.1rem ${palette.gray300};
  background-color: white;
  text-align: center;
`;

function OrderList() {
  return (
    <OrderListBlock>
      <FormatListBulletedIcon></FormatListBulletedIcon>
      <div>주문내역</div>
    </OrderListBlock>
  );
}

export default OrderList;
