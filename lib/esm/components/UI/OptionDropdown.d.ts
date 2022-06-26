import { FunctionComponent, RefObject } from 'react';
interface OptionDropdownProps {
    options: string[];
    wrapperRef: RefObject<HTMLDivElement>;
}
declare const OptionDropdown: FunctionComponent<OptionDropdownProps>;
export default OptionDropdown;
