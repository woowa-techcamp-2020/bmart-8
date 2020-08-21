import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import addPointerEventHandlers from '../utils';

const dummyMenu = ['밥', '돈까스', '카레', '초밥', '피자', '감자탕'];
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
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

type PullToRefreshProps = {
  onRefresh: () => void;
};

const PullToRefresh: React.FC<PullToRefreshProps> = ({ onRefresh }: any) => {
  const maxSize = 100;
  // margin px이상 땡겼을 때부터 땡겨요 시작
  const margin = 20;
  const [size, setSize] = useState(0);
  const [startY, setStartY] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState('');
  useEffect(() => {
    if (window.scrollY !== 0) return;
    const startHandler = (e: PointerEvent) => {
      setStartY(e.clientY);
    };

    const moveHandler = (e: PointerEvent) => {
      if (startY !== null) {
        const diffY = e.clientY - startY - margin;
        if (diffY > 0) {
          setSize(Math.min(diffY, maxSize));
          setVisible(true);
        }
      }
    };

    const endHandler = (e: PointerEvent) => {
      if (size === maxSize) {
        getRandomMenus(dummyMenu, 5, 300, setMenu);
        setTimeout(() => {
          setVisible(false);
          setSize(0);
          setMenu('');
        }, 3500);
        onRefresh();
      } else {
        setVisible(false);
        setSize(0);
      }
      setStartY(null);
    };
    return addPointerEventHandlers(document, {
      onDown: startHandler,
      onMove: moveHandler,
      onUp: endHandler,
    });
  }, [window.scrollY, startY, size]);
  return visible ? (
    <PullToRefreshBlock style={{ height: `${size}px` }}>
      {menu} 땡겨요
    </PullToRefreshBlock>
  ) : null;
};
export default PullToRefresh;
