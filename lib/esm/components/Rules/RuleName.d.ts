import { FunctionComponent, RefObject } from 'react';
interface RuleNameProps {
    value: string;
    onChange: (property: string) => void;
    fullwidth?: boolean;
    valueRef?: RefObject<HTMLInputElement>;
    order: number;
}
declare const RuleName: FunctionComponent<RuleNameProps>;
export default RuleName;
