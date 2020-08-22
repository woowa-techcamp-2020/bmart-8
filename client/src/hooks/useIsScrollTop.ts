import { useState, useEffect } from 'react';

// Returns wheather scroll is at top position
export default function useIsScrollTop(): boolean {
  const [isScrollTop, setIsScrollTop] = useState(true);
  useEffect(() => {
    const handler = () => {
      const scrollPosition = window.scrollY;
      setIsScrollTop(scrollPosition === 0);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [setIsScrollTop]);

  return isScrollTop;
}
