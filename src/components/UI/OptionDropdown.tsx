import React, { FunctionComponent, RefObject, useCallback, useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';

interface OptionDropdownProps {
  options: string[];
  wrapperRef: RefObject<HTMLDivElement>
}

const ListStyled = styled.ul<{ radius: number; inputBg: string; }>`
  border-radius: ${({ radius }) => radius}px;
  background-color: ${({ inputBg }) => inputBg};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
`;

const ListIemStyled = styled.li<{ selected: boolean; accent: string; spacing: number; }>`
  background: ${({ selected, accent }) => selected ? accent : 'transparent'};
  color: ${({ selected }) => selected ? '#ffffff' : 'inherit'};
  padding: ${({ spacing }) => `${spacing * 0.5}px ${spacing}px`};
`;

const OptionDropdown: FunctionComponent<OptionDropdownProps> = ({ options, wrapperRef }) => {
  const theme = useContext(ThemeContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    const codes = ['ArrowDown', 'ArrowUp'];

    if (!codes.includes(event.code)) return;

    setSelectedIndex(prev => {
      let newValue: number;
      if (event.code === 'ArrowDown') {
        newValue = prev + 1;
      } else {
        newValue = prev - 1;
      }

      if (newValue < 0 || newValue >= options.length) return prev;
      return newValue;
    });
  }, [options]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [options]);

  useEffect(() => {
    wrapperRef.current?.addEventListener('keydown', handleKeydown, false);

    return () => {
      wrapperRef.current?.removeEventListener('keydown', handleKeydown, false);
    }
  }, [handleKeydown]);

  return (
    <ListStyled inputBg={theme.inputBg} radius={theme.radius}>
      {options.map((option, index) => (
        <ListIemStyled
          key={option}
          selected={index === selectedIndex}
          accent={theme.accent}
          spacing={theme.spacing}
        >
          {option}
        </ListIemStyled>
      ))}
    </ListStyled>
  )
}

export default OptionDropdown;
