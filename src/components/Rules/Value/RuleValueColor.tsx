import React, { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';

import { RuleValueInputProps } from './RuleValueWrapper';
import RuleValueText from './RuleValueText';

const InputColorWrapperStyled = styled.div`
  position: relative;
`;

const InputColorStyled = styled.input<{ background: string }>`
  position: absolute;
  top: -28px;
  right: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: none;
  padding: 0;
  -webkit-appearance: none;
  
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  
  &::-webkit-color-swatch {
    border: none;
  }
  
  &:after {
    position: absolute;
    content: "";
    background: ${({ background }) => background};
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px rgba(0, 0, 0, 0.1) solid;
  }
`;

const RuleValueColor: FunctionComponent<RuleValueInputProps> = ({ value, onChange, order }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  }

  const leftBrackets = (value.match(/\(/g) || []).length;
  const rightBrackets = (value.match(/\)/g) || []).length;
  const isEven = leftBrackets === rightBrackets;

  return (
    <div>
      <InputColorWrapperStyled>
        <InputColorStyled type="color" value={value} onChange={handleChange} background={isEven ? value : ''} />
      </InputColorWrapperStyled>
      <RuleValueText value={value} onChange={onChange} order={order} />
    </div>
  )
}

export default RuleValueColor;
