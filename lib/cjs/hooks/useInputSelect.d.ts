import { RefObject } from 'react';
declare const useInputSelect: (existingRef?: RefObject<HTMLInputElement>) => {
    handleClick: () => void;
    inputRef: RefObject<HTMLInputElement>;
};
export default useInputSelect;
