import React, { FunctionComponent, RefObject } from 'react';

import { RULE_MODES } from '../../../const/rules';

import RuleValueSlider from './RuleValueSlider';
import RuleValueColor from './RuleValueColor';
import RuleValueText from './RuleValueText';

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

const RuleValueWrapper: FunctionComponent<RuleValueWrapperProps> = ({ mode, property,  ...otherProps }) => {
  switch (mode) {
    case RULE_MODES.slider:
      return (
        <RuleValueSlider {...otherProps} property={property} />
      );
    case RULE_MODES.color:
      return (
        <RuleValueColor {...otherProps} />
      );
    default:
      return (
        <RuleValueText {...otherProps} />
      );
  }
}

export default RuleValueWrapper;
