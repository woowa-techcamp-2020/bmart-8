import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useScrollDiff from '../hooks/useScrollDiff';
import addEventListenerEvent from '../utils/addEventListenerEffect';

const dummyMenu = [
  '밥',
  '돈까스',
  '카레',
  '초밥',
  '피자',
  '감자탕',
  '다카야키',
  '바비큐',
  '보리차',
  '홍차',
  '우롱차',
  '녹차',
  '우유차',
  '미수',
  '곰국',
  '라면',
  '생강즙',
  '막대사탕',
  '꼬부랑국수',
  '꿔바로우',
];
function getRandomMenu(menu: string[]) {
  return menu[~~(Math.random() * menu.length)];
}
function getRandomMenus(
  menu: string[],
  number: number,
  interval: number,
  cb: any
) {
  if (number === 0) return;
  cb(getRandomMenu(menu));
  setTimeout(() => getRandomMenus(menu, number - 1, interval, cb), interval);
}

const PullToRefreshBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #77d6d3;
  font-size: 1.5rem;
  font-family: 'Gugi', cursive;
`;

type PullToRefreshProps = {
  startY: number;
  onRefresh: () => void;
  onFinish: () => void;
};

const PullToRefresh: React.FC<PullToRefreshProps> = ({
  startY,
  onRefresh,
  onFinish,
}) => {
  const maxSize = 100;
  // margin px이상 땡겼을 때부터 땡겨요 시작
  const margin = 20;

  // not null이면 메뉴판 돌리는 중.
  const [menu, setMenu] = useState(null);
  const diff = useScrollDiff(startY);
  const size = menu ? maxSize : Math.max(0, Math.min(diff - margin, maxSize));

  useEffect(() => {
    const endHandler = () => {
      if (menu) return;
      if (size === maxSize) {
        getRandomMenus(dummyMenu, 7, 200, setMenu);
        setTimeout(() => {
          onFinish();
        }, 3000);
        onRefresh();
      } else {
        onFinish();
      }
    };

    return addEventListenerEvent(document, 'pointerup', endHandler);
  }, [onFinish, onRefresh, size, menu]);
  return size > 0 ? (
    <PullToRefreshBlock style={{ height: `${size}px` }}>
      {menu} 땡겨요
    </PullToRefreshBlock>
  ) : null;
};
export default PullToRefresh;
