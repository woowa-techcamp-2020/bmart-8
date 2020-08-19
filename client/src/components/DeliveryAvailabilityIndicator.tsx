import React from 'react';
import styled from 'styled-components';
const DeliveryAvailabilityIndicatorBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;

  .seperator {
    margin: 0 5px;
  }
  .seperator::before {
    content: '|';
  }
`;

const DeliveryAvailabilityIndicator: React.FC = () => {
  return (
    <DeliveryAvailabilityIndicatorBlock>
      <div>
        배달시간 <b>28~229분</b> 예상
      </div>
      <div className="seperator"></div>
      <div>25시까지 주문 가능</div>
    </DeliveryAvailabilityIndicatorBlock>
  );
};

export default DeliveryAvailabilityIndicator;
