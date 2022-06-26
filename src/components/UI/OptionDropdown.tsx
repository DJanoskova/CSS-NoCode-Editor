import React, { FunctionComponent, RefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';

interface OptionDropdownProps {
  options: string[];
  wrapperRef: RefObject<HTMLDivElement>;
  onChange: (value: string) => void;
}

const ListStyled = styled.ul<{ radius: number; inputBg: string; }>`
  border-radius: ${({ radius }) => radius}px;
  background-color: ${({ inputBg }) => inputBg};
  position: absolute;
  top: 30px;
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
  const listRef = useRef<HTMLUListElement>(null);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code !== 'Enter') {
      onChange(options[selectedIndex]);
    }

    const codes = ['ArrowDown', 'ArrowUp'];
    if (!codes.includes(event.code)) return;

    handleMoveFocus(event.code);
  }, [selectedIndex, onChange]);

  const handleMoveFocus = useCallback((code: string) => {
    setSelectedIndex(prev => {
      let newValue: number;
      if (code === 'ArrowDown') {
        newValue = prev + 1;
      } else {
        newValue = prev - 1;
      }

      const optionEl = listRef.current?.querySelector(`[data-id="item-${newValue}"]`);
      if (!optionEl) return prev;

      optionEl?.scrollIntoView({ block: 'nearest', inline: 'nearest' });

      return newValue;
    });
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [options]);

  useEffect(() => {
    wrapperRef.current?.addEventListener('keydown', handleKeydown, false);

    return () => {
      wrapperRef.current?.removeEventListener('keydown', handleKeydown, false);
    }
  }, [handleKeydown]);

  if (!options.length) return null;

  return (
    <ListStyled inputBg={theme.inputBg} radius={theme.radius} ref={listRef}>
      {options.map((option, index) => (
        <ListIemStyled
          key={option}
          selected={index === selectedIndex}
          accent={theme.accent}
          spacing={theme.spacing}
          data-id={`item-${index}`}
        >
          {option}
        </ListIemStyled>
      ))}
    </ListStyled>
  )
}

export default OptionDropdown;
