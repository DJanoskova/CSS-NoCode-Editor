import React, { FunctionComponent, memo, useContext, useRef } from 'react';
import styled from 'styled-components';

import { RULE_MODES } from '../../const/rules';
import { getRuleDefaultMode } from '../../helpers/rules';
import { StyleRule } from '../../types';
import ThemeContext from '../../context/ThemeContext';

import RuleName from './RuleName';
import RuleValueWrapper from './Value/RuleValueWrapper';

interface RuleWrapperProps {
  data: StyleRule;
  onChange: (newRule: StyleRule) => void;
  onRemove: (id: number) => void;
  order: number;
}

const StyledWrapper = styled.div<{ backgroundColor: string; shadow: string; radius: number; spacing: number; }>`
  background: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ spacing }) => `${spacing}px ${spacing * 1.25}px ${spacing * 1.25}px`};
  border-radius: ${({ radius }) => radius * 3}px;
  box-shadow: ${({ shadow }) => shadow};
  margin: ${({ spacing }) => spacing}px 0;
`;

const RuleWrapper: FunctionComponent<RuleWrapperProps> = memo(({ data, onChange, order, onRemove }) => {
  const theme = useContext(ThemeContext);
  const defaultMode = getRuleDefaultMode(data.property);
  const valueRef = useRef<HTMLInputElement>(null);

  const handleChange = (newData: { property?: string, value?: string }) => {
    onChange({ ...data, ...newData });
  };

  const handleChangeProperty = (property: string = ' ') => {
    handleChange({ property });
  }

  const handleChangeValue = (value: string) => {
    handleChange({ value });
  }

  const handleBlur = () => {
    if (!data.property.trim()) onRemove(data.id);
  }

  return (
    <StyledWrapper
      onBlur={handleBlur}
      backgroundColor={theme.background}
      shadow={theme.shadow}
      radius={theme.radius}
      spacing={theme.spacing}
    >
      <RuleName
        value={data.property}
        onChange={handleChangeProperty}
        fullwidth={defaultMode === RULE_MODES.text}
        order={order}
      />
      {data.property.trim() && (
        <RuleValueWrapper
          value={data.value}
          mode={defaultMode}
          onChange={handleChangeValue}
          property={data.property}
          valueRef={valueRef}
          order={order + 1}
        />
      )}
    </StyledWrapper>
  )
});

export default RuleWrapper;
