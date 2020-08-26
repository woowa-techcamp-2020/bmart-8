import React from 'react';
import styled from 'styled-components';
import { Flex, FlexCenter } from '../../lib/styles/mixins';

const GoogleLoginBtnBlock = styled.div`
  ${Flex('row')}
  background: white;
  padding: 7px 12px;
  width: 200px;
  color: #444;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;

  .icon {
    flex: 1;
    vertical-align: middle;
    width: 27px;
    height: 27px;
  }
  .login-text {
    flex: 5;
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    font-weight: bold;
  }
`;

type GoogleLoginBtnProps = {
  onclick?: Function;
};

const GoogleLoginBtn: React.FC<GoogleLoginBtnProps> = ({
  onclick = () => {},
}) => {
  return (
    <GoogleLoginBtnBlock onClick={() => onclick()}>
      <img src={'/icon/google-icon.svg'} className="icon" alt="Logo" />
      <span className="login-text">구글 로그인</span>
    </GoogleLoginBtnBlock>
  );
};

export default GoogleLoginBtn;
