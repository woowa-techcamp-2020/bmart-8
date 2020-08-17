import React, { useState } from 'react';
import styled from 'styled-components';

const CategoryContentBlock = styled.div``;

function CategoryContent(props) {
  let CategoryContent = [];
  props.CategoryContent.forEach((category) => {
    CategoryContent.push(<li>{category.name}</li>);
  });
  return <CategoryContentBlock>{CategoryContent}</CategoryContentBlock>;
}

export default CategoryContent;
