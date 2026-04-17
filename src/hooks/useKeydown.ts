import { useEffect } from 'react';

/**
 * Registers a keydown listener while `active` is true.
 * Automatically removes the listener when `active` becomes false or on unmount.
 */
const useKeydown = (key: string, handler: () => void, active: boolean): void => {
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === key) handler(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [key, handler, active]);
};

export { useKeydown };
