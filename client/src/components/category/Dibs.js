import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import FavoriteIcon from '@material-ui/icons/Favorite';

const DibsBlock = styled.div`
  font-size: 0.8rem;
  padding: 0.6rem;
  width: 12rem;
  box-sizing: border-box;
  border-right: solid 0.1rem ${palette.gray300};
  border-top: solid 0.1rem ${palette.gray300};
  border-bottom: solid 0.1rem ${palette.gray300};
  background-color: white;
  text-align: center;
`;

function Dibs() {
  return (
    <DibsBlock>
      <FavoriteIcon style={{ color: 'red' }}></FavoriteIcon>
      <div>찜한상품</div>
    </DibsBlock>
  );
}

export default Dibs;
