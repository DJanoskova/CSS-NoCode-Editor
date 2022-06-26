import { FunctionComponent, RefObject } from 'react';
interface OptionDropdownProps {
    options: string[];
    wrapperRef: RefObject<HTMLDivElement>;
    onChange: (value: string) => void;
    onSetOpen: (open: boolean) => void;
}
declare const OptionDropdown: FunctionComponent<OptionDropdownProps>;
export default OptionDropdown;
