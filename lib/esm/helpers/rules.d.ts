import { RULE_MODES } from '../const/rules';
import { StyleRule } from '../types';
export declare const getRuleDefaultMode: (rule: string) => RULE_MODES;
export declare const getRuleRange: (property: string, unit?: string) => {
    min: number;
    max: number;
    step: number;
} | {
    min: number;
    max: number;
    step?: undefined;
};
export declare const addStyleEmptyRule: (style: StyleRule[]) => void;
