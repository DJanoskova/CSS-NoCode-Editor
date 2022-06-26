import React, { FunctionComponent, useCallback, useEffect, useMemo, useState, useRef } from 'react';
import styled from 'styled-components';

import { StyleRule, ThemeType } from '../../types';
import { defaultTheme } from '../../const/theme';
import { addStyleEmptyRule } from '../../helpers/rules';
import { calculateStyleArray, getCompiledStyle } from '../../helpers/style';

import useReactiveEditor from '../../hooks/useReactiveEditor';
import useFocusNextElement from '../../hooks/useFocusNextElement';
import ThemeContext from '../../context/ThemeContext';

import RuleWrapper from '../Rules/RuleWrapper';
import { getStyleProperties } from '../../helpers/document';
import CSSPropertiesContext from '../../context/CSSPropertiesContext';

interface CSSBuilderProps {
  style: string;
  theme?: ThemeType;
  onChange?: (style: string) => void;
  reactive?: boolean;
}

const StyledWrapper = styled.div<{ fontSize: string; color: string; spacing: number; }>`
  margin: -${({ spacing }) => spacing}px 0;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`

const CSSBuilder: FunctionComponent<CSSBuilderProps> = ({ style = '', theme = {}, onChange, reactive = false }) => {
  const [localStyle, setLocalStyle] = useState<StyleRule[]>(() => calculateStyleArray(style));
  const wrapperRef = useRef<HTMLDivElement>(null);
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
    return getCompiledStyle(localStyle);
  }, [localStyle]);

  const availableProperties = useMemo(() => {
    const properties = getStyleProperties();
    return properties;
  }, []);

  useReactiveEditor(style, reactive, setLocalStyle);

  const handleFocusNextElement = useFocusNextElement(wrapperRef);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    const focusNextKeys = [':', ';'];
    if (!focusNextKeys.includes(event.key) && event.key !== 'Enter' && event.code !== 'Enter') return;

    if (focusNextKeys.includes(event.key)) {
      event.preventDefault();
    }

    handleFocusNextElement();
  }, [handleFocusNextElement]);

  useEffect(() => {
    wrapperRef.current?.addEventListener('keydown', handleKeydown, false);

    return () => {
      wrapperRef.current?.removeEventListener('keydown', handleKeydown, false);
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
    <CSSPropertiesContext.Provider value={availableProperties}>
      <ThemeContext.Provider value={combinedTheme}>
        <StyledWrapper
          fontSize={combinedTheme.fontSize}
          color={combinedTheme.color}
          spacing={combinedTheme.spacing}
          ref={wrapperRef}
        >
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
    </CSSPropertiesContext.Provider>
  );
};

export default CSSBuilder;
