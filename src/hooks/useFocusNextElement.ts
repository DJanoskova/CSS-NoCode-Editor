import { RefObject, useCallback } from 'react';

const useFocusNextElement = (wrapperRef: RefObject<HTMLDivElement>) => {
  const handleFocusNextElement = useCallback(() => {
    const activeElement = document.activeElement;
    if (!activeElement || activeElement.tagName.toLowerCase() !== 'input') return;

    const order = Number(activeElement.getAttribute('data-editor-order'));
    const parent = wrapperRef.current;
    if (!parent) return;

    const next = parent.querySelector(`input[data-editor-order="${order + 1}"]`);
    if (next) {
      (next as any).select();
    }
  }, []);

  return handleFocusNextElement;
}

export default useFocusNextElement;
