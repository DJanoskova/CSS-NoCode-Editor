import { Dispatch, SetStateAction } from 'react';
import { StyleRule } from '../types';
declare const useReactiveEditor: (style: string, reactive: boolean, onSet: Dispatch<SetStateAction<StyleRule[]>>) => void;
export default useReactiveEditor;
