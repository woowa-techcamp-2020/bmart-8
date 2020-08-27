import { css } from 'styled-components';

type Direction = 'row' | 'column';

export const Flex = (direction: Direction) => css`
  display: flex;
  flex-direction: ${direction};
`;

export const StickyTop = (top: string) => css`
  position: sticky;
  top: ${top};
`;

export const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;

export const PostfixKRW = css`
  &::after {
    content: '원';
  }
`;

export const HideScroll = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
