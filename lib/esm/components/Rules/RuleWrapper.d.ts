import { FunctionComponent } from 'react';
import { StyleRule } from '../../types';
interface RuleWrapperProps {
    data: StyleRule;
    onChange: (newRule: StyleRule) => void;
    onRemove: (id: number) => void;
    order: number;
}
declare const RuleWrapper: FunctionComponent<RuleWrapperProps>;
export default RuleWrapper;
