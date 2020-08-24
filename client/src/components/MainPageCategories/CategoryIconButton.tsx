import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type CategoryIconButtonProps = {
  name: string;
  imageUrl: string;
  routeUrl: string;
};

const CategoryIconButtonBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  text-decoration: none;
  .icon-wrapper {
    width: 4.5rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const CategoryIconButton: React.FC<CategoryIconButtonProps> = ({
  imageUrl,
  name,
  routeUrl,
}) => {
  return (
    <CategoryIconButtonBlock to={routeUrl}>
      <div className="icon-wrapper">
        <img src={imageUrl} alt={name} />
      </div>
    </CategoryIconButtonBlock>
  );
};

export default CategoryIconButton;
