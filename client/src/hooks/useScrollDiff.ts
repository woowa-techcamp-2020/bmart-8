import { useEffect, useState } from 'react';

export default function useScrollDiff(initScroll: number) {
  const [startY] = useState(initScroll);
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      setDiff(e.clientY - startY);
    };
    document.addEventListener('pointermove', handler);
    return () => document.removeEventListener('pointermove', handler);
  }, [setDiff, startY]);

  return diff;
}
