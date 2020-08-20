import { useState } from 'react';

export default function useDebounce(fn: Function, timeout: number) {
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  return (...args: any) => {
    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      fn(...args);
    }, timeout);
    setTimeoutId(newTimeoutId);
  };
}
