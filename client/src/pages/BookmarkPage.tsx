import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const BookmarkPageBlock = styled.div``;

const BookmarkPage: React.FC = () => {
  return (
    <BookmarkPageBlock>
      <Helmet>
        <title>찜 - B 마트</title>
      </Helmet>
      BookmarkPage
    </BookmarkPageBlock>
  );
};

export default BookmarkPage;
