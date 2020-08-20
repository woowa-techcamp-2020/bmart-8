import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const ProductDetailPageBlock = styled.div``;

const ProductDetailPage: React.FC = () => {
  return (
    <ProductDetailPageBlock>
      <Helmet>
        <title>{`빨간 알약 파란 알약`} - B 마트</title>
      </Helmet>
      ProductDetailPage
    </ProductDetailPageBlock>
  );
};

export default ProductDetailPage;
