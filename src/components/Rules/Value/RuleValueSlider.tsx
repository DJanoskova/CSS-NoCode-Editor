import React, { ChangeEvent, FunctionComponent, useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../../context/ThemeContext';
import { getRuleRange } from '../../../helpers/rules';
import { RuleValueInputProps } from './RuleValueWrapper';

import RuleValueText from './RuleValueText';

interface RuleValueSliderProps extends RuleValueInputProps {
  property: string;
}

const WrapperStyled = styled.div`
  position: relative;
`;

const InputWrapperStyled = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  width: 50px;
  text-align: right;
`;

const InputRangeStyled = styled.input<{ accent: string }>`
  width: 100%;
  accent-color: ${({ accent }) => accent};
`;

const RuleValueSlider: FunctionComponent<RuleValueSliderProps> = ({ value, onChange, property, ...inputProps }) => {
  const theme = useContext(ThemeContext);

  const numberValue = parseFloat(value);
  const unit = value.replace(`${numberValue}`, '').trim();
  const range = getRuleRange(property, unit);

  const handleChangeNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(`${newValue}${unit}`)
  }

  const handleChangeValue = (value: string) => {
    onChange(value);
  }

  return (
    <WrapperStyled>
      <InputWrapperStyled>
        <RuleValueText value={value} onChange={handleChangeValue} {...inputProps} />
      </InputWrapperStyled>
      <InputRangeStyled
        type="range"
        value={numberValue}
        onChange={handleChangeNumberValue}
        min={range.min}
        max={range.max}
        step={range.step || 1}
        accent={theme.accent}
      />
    </WrapperStyled>
  )
}

export default RuleValueSlider;
