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
  const [isEdit, setIsEdit] = useState(!value);
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  }

  const handleCloseEdit = () => {
    if (value) {
      setIsEdit(false);
    }
  }

  const handleOpenEdit = () => {
    setIsEdit(true);
    inputRef.current?.select();
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCloseEdit();
  }

  return (
    <StyledNameWrapper fullwidth={fullwidth}>
      <form onSubmit={handleSubmit}>
        <InputText
          transparent={!isEdit}
          ref={inputRef}
          type="text"
          value={localValue}
          placeholder="Property"
          onChange={handleChange}
          onBlur={handleCloseEdit}
          onClick={handleOpenEdit}
          order={order}
        />
      </form>
    </StyledNameWrapper>
  )
}

export default RuleName;
