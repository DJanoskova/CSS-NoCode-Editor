import { StyleRule } from '../types';
import { addStyleEmptyRule } from './rules';

export const calculateStyleArray = (style: string) => {
  const sanitized = style.replace(/\n/g, '');
  const rules = sanitized.split(';');
  const filtered = rules.filter(Boolean);

  const result: StyleRule[] = [];

  filtered.forEach((pair, index) => {
    const trimmed = pair.trim();
    const dotIndex = trimmed.indexOf(':');
    const hasDot = dotIndex >= 0;

    const name = hasDot ? trimmed.slice(0, dotIndex) : trimmed;
    const value = hasDot ? trimmed.slice(dotIndex + 1, trimmed.length).trim() : '';

    result.push({
      property: name,
      value: value,
      id: index,
    });
  });

  addStyleEmptyRule(result);

  return result;
}

export const getCompiledStyle = (style: StyleRule[]) => {
  const result: string[] = [];
  style.forEach(rule => {
    if (rule.property.trim()) {
      result.push(`${rule.property.trim()}: ${rule.value.trim()}`);
    }
  });
  const compiled = result.join(';\n');
  return compiled;
}
