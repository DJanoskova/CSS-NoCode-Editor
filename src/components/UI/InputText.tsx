import React, { ComponentProps, forwardRef, useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../../context/ThemeContext';

interface InputTextProps extends ComponentProps<'input'> {
  transparent?: boolean;
  order?: number;
}

const InputStyled = styled.input<{
  inputBg: string;
  inputColor: string;
  accent: string;
  radius: number;
  transparent: boolean;
  color: string;
  inputError: string;
  isValid?: boolean;
}>`
  border-radius: ${({ radius }) => radius}px;
  background-color: ${({ inputBg, transparent }) => transparent ? 'transparent' : inputBg};
  box-sizing: border-box;
  padding: 1px 3px;
  text-align: inherit;
  width: 100%;
  outline: none;
  border: 2px ${({ isValid = true, inputError }) => isValid ? 'transparent' : inputError} solid;
  font-family: inherit;
  font-size: inherit;
  color: ${({ inputColor, color, transparent }) => transparent ? color : inputColor};
  
  &:focus, &[value=""] {
    background-color: ${({ inputBg }) => inputBg};
    color: ${({ inputColor }) => inputColor};
  }

  &:focus {
    border-color: ${({ accent }) => accent};
  }
`;

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
  const theme = useContext(ThemeContext);

  return (
    <InputStyled
      inputBg={theme.inputBg}
      accent={theme.accent}
      radius={theme.radius || 0}
      type="text" ref={ref}
      data-editor-order={props.order}
      inputColor={theme.inputColor}
      color={theme.color}
      inputError={theme.inputError}
      {...props as any}
    />
  );
});

export default InputText;
