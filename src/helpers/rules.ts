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

export const addStyleEmptyRule = (style: StyleRule[]) => {
  let hasEmpty = false;
  let nextId = 1;

  if (style.length) {
    const lastRule = style[style.length - 1];
    nextId = lastRule.id + 1;
    hasEmpty = !lastRule.property;
  }

  if (!hasEmpty) {
    style.push({
      id: nextId,
      value: '',
      property: '',
    });
  }
}