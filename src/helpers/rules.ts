import { RULE_MODES } from '../const/rules';
import { StyleRule } from '../types';

const paddings = [
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
]

const margins = [
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
]

const borderRadiuses = [
  'border-radius',
  'border-radius-top',
  'border-radius-right',
  'border-radius-bottom',
  'border-radius-left',
]

const numberRules = [
  'width',
  'height',
  ...borderRadiuses,
  'font-size',
  'top',
  'right',
  'bottom',
  'left',
  ...paddings,
  ...margins,
  'opacity',
];
const colorRules = ['color', 'background-color', 'border-color'];

export const getRuleDefaultMode = (rule: string) => {
  if (numberRules.includes(rule)) {
    return RULE_MODES.slider;
  }

  if (colorRules.includes(rule)) {
    return RULE_MODES.color;
  }

  return RULE_MODES.text;
}

export const getRuleAllowedModes = (rule: string) => {
  if (numberRules.includes(rule)) {
    return [RULE_MODES.slider, RULE_MODES.text];
  }

  if (colorRules.includes(rule)) {
    return [RULE_MODES.color, RULE_MODES.text];
  }

  return [RULE_MODES.text];
}

export const getRuleRange = (property: string, unit = 'px') => {
  const max100Units = ['%', 'vh', 'vw'];
  const max100properties = ['font-size', ...paddings, ...borderRadiuses, ...margins];

  if (property === 'opacity') {
    return {
      min: 0,
      max: 1,
      step: 0.05,
    }
  }

  if (max100Units.includes(unit) || max100properties.includes(property)) {
    return {
      min: 0,
      max: 100,
    }
  }

  return {
    min: 0,
    step: 10,
    max: 1000,
  }
}

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

export const addStyleEmptyRule = (style: StyleRule[]) => {
  const lastRule = style[style.length - 1];
  const hasEmpty = !lastRule.property;

  if (!hasEmpty) {
    style.push({
      id: lastRule.id + 1,
      value: '',
      property: '',
    })
  }
}