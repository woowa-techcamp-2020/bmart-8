import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const UserProfilePageBlock = styled.div``;

const UserProfilePage: React.FC = () => {
  return (
    <UserProfilePageBlock>
      <Helmet>
        <title>사용자 정보 - B 마트</title>
      </Helmet>
      UserProfilePage
    </UserProfilePageBlock>
  );
};

export default UserProfilePage;
