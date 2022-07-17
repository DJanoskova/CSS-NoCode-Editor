import { RefObject, useEffect } from 'react';

const useClickOutside = (ref: RefObject<any>, onClick: (value: boolean) => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as any)) {
        onClick(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}

export default useClickOutside;
