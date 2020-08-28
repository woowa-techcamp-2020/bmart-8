import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Flex, FlexCenter } from '../lib/styles/mixins';
import { GoogleLoginBtn } from '../components/Login';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { googleLogin } from '../api';

const LoginPageBlok = styled.div`
  ${Flex('column')}
  height:100%;
`;

const LoginBtnContainer = styled.div`
  ${Flex('column')}
  ${FlexCenter}
  height:100%;
`;

const LoginPage: React.FC = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.setItem('token', '');
    window.location.href = '/';
  };
  return (
    <LoginPageBlok>
      <ArrowBackIcon
        style={{ padding: '16px' }}
        onClick={() => history.goBack()}
      />
      <Helmet>
        <title>로그인 - B 마트</title>
      </Helmet>
      <LoginBtnContainer>
        <GoogleLoginBtn onclick={googleLogin}></GoogleLoginBtn>
      </LoginBtnContainer>
      <button onClick={logoutHandler}>로그아웃</button>
    </LoginPageBlok>
  );
};

export default LoginPage;
