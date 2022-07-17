import { FunctionComponent, RefObject } from 'react';
import { RULE_MODES } from '../../../const/rules';
interface RuleValueWrapperProps extends RuleValueInputProps {
    mode: RULE_MODES;
    property: string;
}
export interface RuleValueInputProps {
    value: string;
    onChange: (value: string) => void;
    valueRef?: RefObject<HTMLInputElement>;
    order?: number;
    isValid?: boolean;
}
declare const RuleValueWrapper: FunctionComponent<RuleValueWrapperProps>;
export default RuleValueWrapper;
