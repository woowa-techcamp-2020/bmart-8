import { css } from 'styled-components';

type Direction = 'row' | 'column';

export const Flex = (direction: Direction) => css`
  display: flex;
  flex-direction: ${direction};
`;

export const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;
