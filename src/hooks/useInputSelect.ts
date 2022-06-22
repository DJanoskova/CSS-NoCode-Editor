import { RefObject, useRef } from 'react';

const useInputSelect = (existingRef?: RefObject<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ref = existingRef || inputRef;

  const handleClick = () => {
    ref.current?.select();
  }

  return {
    handleClick,
    inputRef: ref,
  }
}

export default useInputSelect;
