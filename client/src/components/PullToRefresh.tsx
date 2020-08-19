import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import addPointerEventHandlers from '../utils';

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
  const [size, setSize] = useState(0);
  const [startY, setStartY] = useState<number | null>(null);
  useEffect(() => {
    if (window.scrollY !== 0) return;
    const startHandler = (e: PointerEvent) => {
      setStartY(e.clientY);
    };

    const moveHandler = (e: PointerEvent) => {
      if (startY !== null) {
        const diffY = e.clientY - startY;
        if (diffY > 0) setSize(Math.min(diffY, maxSize));
      }
    };

    const endHandler = (e: PointerEvent) => {
      if (size === maxSize) {
        onRefresh();
      }
      setSize(0);
      setStartY(null);
    };
    return addPointerEventHandlers(document, {
      onDown: startHandler,
      onMove: moveHandler,
      onUp: endHandler,
    });
  }, [window.scrollY, startY, size]);
  return size > 0 ? (
    <PullToRefreshBlock style={{ height: `${size}px` }}>
      {size === maxSize ? '땡겨요' : '놓아요'}
    </PullToRefreshBlock>
  ) : null;
};
export default PullToRefresh;
