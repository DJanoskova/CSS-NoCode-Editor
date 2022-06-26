import { Dispatch, SetStateAction, useEffect } from 'react';

import { StyleRule } from '../types';
import { calculateStyleArray } from '../helpers/style';

const useReactiveEditor = (style: string, reactive: boolean, onSet: Dispatch<SetStateAction<StyleRule[]>>) => {
  useEffect(() => {
    if (!reactive) return;

    const result = calculateStyleArray(style);
    onSet(prev => {
      if (JSON.stringify(prev) === JSON.stringify(result)) {
        return prev;
      }
      return result;
    });
  }, [style, reactive]);
}

export default useReactiveEditor;
