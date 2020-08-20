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
    border: 1px solid gray;
    border-radius: 1rem;
    width: 4rem;
    height: 4rem;
    padding: 0.5rem;
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
      <div>{name}</div>
    </CategoryIconButtonBlock>
  );
};

export default CategoryIconButton;
