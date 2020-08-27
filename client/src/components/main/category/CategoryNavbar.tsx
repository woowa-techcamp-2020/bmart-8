import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Flex, HideScroll, StickyTop } from '../../../lib/styles/mixins';
import CategoryNavbarItem from './CategoryNavbarItem';
const CategoryNavbarBlock = styled.div`
  ${Flex('row')}
  ${HideScroll}
  border-bottom: 2px solid ${palette.gray300};
  width: 100vw;
  background-color: white;
  z-index: 100;
  padding: 0.3em 0.6em;
  white-space: nowrap;
  touch-action: auto;
  overflow-x: scroll;
  box-sizing: border-box;
  &.sticky{
    position:fixed;
    top:79px;
  }
`;

interface CategoryNavbarProps {
  categories: Array<any>;
  onclick: any;
  selected: any;
}

const CategoryNavbar: React.FC<CategoryNavbarProps> = ({
  categories,
  onclick,
  selected,
}) => {
  const navbar = useRef<HTMLDivElement>(null);
  let fixed = false;
  let origin = 0;
  useEffect(() => {
    const onScroll = () => {
      if (fixed) {
        if (window.scrollY + 79 < origin) {
          fixed = false;
          navbar.current?.classList.remove('sticky');
        }
      } else {
        if (window.scrollY + 79 >= navbar.current!.offsetTop) {
          fixed = true;
          origin = navbar.current!.offsetTop;
          navbar.current?.classList.add('sticky');
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  const tmp = navbar.current?.childNodes[selected];
  navbar.current?.scrollTo((tmp as HTMLElement).offsetLeft - 200, 0);

  return (
    <CategoryNavbarBlock
      ref={navbar}
      onClick={(e) => {
        if (!(e.target instanceof HTMLElement)) return;
        const selectedIdx = parseInt(e.target.dataset.idx || '-1');
        if (selectedIdx >= 0) {
          onclick(selectedIdx);
        }
      }}>
      {categories.map((category: any, idx: any) => {
        return (
          <CategoryNavbarItem
            selected={selected === idx}
            idx={idx}
            category={category}
            key={idx}></CategoryNavbarItem>
        );
      })}
    </CategoryNavbarBlock>
  );
};

export default CategoryNavbar;
