import React, { ChangeEvent, FunctionComponent } from 'react';

import { RuleValueInputProps } from './RuleValueWrapper';
import useInputSelect from '../../../hooks/useInputSelect';

import InputText from '../../UI/InputText';

const RuleValueText: FunctionComponent<RuleValueInputProps> = ({ value, onChange, valueRef, order }) => {
  const { inputRef, handleClick } = useInputSelect(valueRef);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  }

  return (
    <InputText
      type="text"
      value={value}
      onChange={handleChange}
      onClick={handleClick}
      ref={inputRef}
      order={order}
    />
  )
}

export default RuleValueText;
