import React, { ChangeEvent, FormEvent, FunctionComponent, RefObject, useRef, useState } from 'react';
import styled from 'styled-components';

import InputText from '../UI/InputText';

interface RuleNameProps {
  value: string;
  onChange: (property: string) => void;
  fullwidth?: boolean;
  valueRef?: RefObject<HTMLInputElement>;
  order: number;
}

const StyledNameWrapper = styled.div<{ fullwidth: boolean }>`
  margin-bottom: 4px;
  height: 25px;
  font-size: inherit;
  width: ${({ fullwidth }) => !fullwidth ? `calc(100% - 60px)` : '100%'};
`;

const RuleName: FunctionComponent<RuleNameProps> = ({ value = '', onChange, fullwidth = true, order }) => {
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  }

  const handleOpenEdit = () => {
    inputRef.current?.select();
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <StyledNameWrapper fullwidth={fullwidth}>
      <form onSubmit={handleSubmit}>
        <InputText
          ref={inputRef}
          type="text"
          value={localValue}
          placeholder="Property"
          onChange={handleChange}
          onClick={handleOpenEdit}
          order={order}
          transparent
        />
      </form>
    </StyledNameWrapper>
  )
}

export default RuleName;
