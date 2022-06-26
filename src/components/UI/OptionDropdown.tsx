import React, { FunctionComponent, RefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';

interface OptionDropdownProps {
  options: string[];
  wrapperRef: RefObject<HTMLDivElement>;
  onChange: (value: string) => void;
  onSetOpen: (open: boolean) => void;
}

const ListStyled = styled.ul<{ radius: number; background: string; shadow: string; }>`
  border-radius: ${({ radius }) => radius}px;
  background-color: ${({ background }) => background};
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 2;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: ${({ shadow }) => shadow};
`;

const ListIemStyled = styled.li<{ selected: boolean; accent: string; spacing: number; }>`
  background: ${({ selected, accent }) => selected ? accent : 'transparent'};
  color: ${({ selected }) => selected ? '#ffffff' : 'inherit'};
  padding: ${({ spacing }) => `${spacing * 0.5}px ${spacing * 2}px ${spacing * 0.5}px ${spacing}px`};
`;

const OptionDropdown: FunctionComponent<OptionDropdownProps> = ({ options, wrapperRef, onChange, onSetOpen }) => {
  const theme = useContext(ThemeContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Enter') {
      onChange(options[selectedIndex]);
      return;
    }

    if (event.key === 'Escape' || event.code === 'Escape') {
      onSetOpen(false);
      return;
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

  useClickOutside(listRef, onSetOpen);

  if (!options.length) return null;

  return (
    <ListStyled background={theme.background} radius={theme.radius} shadow={theme.shadow} ref={listRef}>
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
