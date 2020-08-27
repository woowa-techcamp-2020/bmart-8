import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Flex } from '../../../lib/styles/mixins';

interface CategoryNavbarItemStyleProps {
  selected?: boolean;
}

const CategoryNavbarItemBlock = styled.div<CategoryNavbarItemStyleProps>`
  border-radius: 1em;
  padding: 0.4em 0.6em;
  box-sizing: border-box;
  color: ${(props) => (props.selected ? 'white' : palette.gray700)};
  background-color: ${(props) =>
    props.selected ? palette.gray900 : 'transparent'};
`;

interface CategoryNavbarItemProps {
  selected?: boolean;
  category: string;
  idx: any;
}

const CategoryNavbarItem: React.FC<CategoryNavbarItemProps> = ({
  selected = false,
  category,
  idx,
}) => {
  return (
    <CategoryNavbarItemBlock data-idx={idx} selected={selected}>
      {category}
    </CategoryNavbarItemBlock>
  );
};

export default CategoryNavbarItem;
