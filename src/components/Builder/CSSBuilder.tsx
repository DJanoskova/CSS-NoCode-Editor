import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { StyleRule, ThemeType } from '../../types';
import { defaultTheme } from '../../const/theme';
import { addStyleEmptyRule, calculateStyleArray } from '../../helpers/rules';
import ThemeContext from '../../context/ThemeContext';

import RuleWrapper from '../Rules/RuleWrapper';

interface CSSBuilderProps {
  style: string;
  theme?: ThemeType;
  onChange?: (style: string) => void;
}

const StyledWrapper = styled.div<{ fontSize: string; color: string; spacing: number; }>`
  margin: -${({ spacing }) => spacing}px 0;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`

const CSSBuilder: FunctionComponent<CSSBuilderProps> = ({ style = '', theme = {}, onChange }) => {
  const [localStyle, setLocalStyle] = useState<StyleRule[]>(() => calculateStyleArray(style));
  const stringifiedTheme = JSON.stringify(theme);

  const combinedTheme = useMemo(() => {
    const userTheme: ThemeType = JSON.parse(stringifiedTheme);

    return {
      ...defaultTheme,
      ...JSON.parse(stringifiedTheme),
      inputColor: userTheme.inputColor || userTheme.color || defaultTheme.inputColor,
    }
  }, [stringifiedTheme]);

  const compiledStyle = useMemo(() => {
    const result: string[] = [];
    localStyle.forEach(rule => {
      if (rule.property.trim()) {
        result.push(`${rule.property.trim()}: ${rule.value.trim()}`);
      }
    });
    const compiled = result.join(';\n');
    return compiled;
  }, [localStyle]);

  useEffect(() => {
    const result = calculateStyleArray(style);
    setLocalStyle(prev => {
      if (JSON.stringify(prev) === JSON.stringify(result)) {
        return prev;
      }
      return result;
    });
  }, [style]);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.code !== 'Enter') return;

    const activeElement = document.activeElement;
    if (!activeElement || activeElement.tagName.toLowerCase() !== 'input') return;

    const order = Number(activeElement.getAttribute('data-editor-order'));
    const next = document.querySelector(`input[data-editor-order="${order + 1}"]`);
    if (next) {
      (next as any).select();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    }
  }, [handleKeydown]);

  useEffect(() => {
    onChange?.(compiledStyle);
  }, [onChange, compiledStyle]);

  const handleChange = useCallback((newRule: StyleRule) => {
    setLocalStyle(prev => {
      const newStyle = [...prev];
      const index = newStyle.findIndex(rule => rule.id === newRule.id);
      newStyle.splice(index, 1, newRule);

      addStyleEmptyRule(newStyle);

      return newStyle;
    })
  }, []);

  const handleRemove = useCallback((id: number) => {
    setLocalStyle(prev => {
      const newStyle = [...prev];
      const index = newStyle.findIndex(rule => rule.id === id);
      newStyle.splice(index, 1);

      addStyleEmptyRule(newStyle);

      return newStyle;
    })
  }, []);

  return (
    <ThemeContext.Provider value={combinedTheme}>
      <StyledWrapper fontSize={combinedTheme.fontSize} color={combinedTheme.color} spacing={combinedTheme.spacing}>
        {localStyle.map((rule, index) => {
          return (
            <RuleWrapper
              data={rule}
              key={rule.id}
              onChange={handleChange}
              onRemove={handleRemove}
              order={index * 2}
            />
          )
        })}
      </StyledWrapper>
    </ThemeContext.Provider>
  );
};

export default CSSBuilder;
