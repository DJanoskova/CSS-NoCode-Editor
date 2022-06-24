var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { RULE_MODES } from '../const/rules';
var paddings = [
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
];
var margins = [
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
];
var borderRadiuses = [
    'border-radius',
    'border-radius-top',
    'border-radius-right',
    'border-radius-bottom',
    'border-radius-left',
];
var numberRules = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
    'width',
    'height'
], borderRadiuses, true), [
    'font-size',
    'top',
    'right',
    'bottom',
    'left'
], false), paddings, true), margins, true), [
    'opacity',
], false);
var colorRules = ['color', 'background-color', 'border-color'];
export var getRuleDefaultMode = function (rule) {
    if (numberRules.includes(rule)) {
        return RULE_MODES.slider;
    }
    if (colorRules.includes(rule)) {
        return RULE_MODES.color;
    }
    return RULE_MODES.text;
};
export var getRuleRange = function (property, unit) {
    if (unit === void 0) { unit = 'px'; }
    var max100Units = ['%', 'vh', 'vw'];
    var max100properties = __spreadArray(__spreadArray(__spreadArray(['font-size'], paddings, true), borderRadiuses, true), margins, true);
    if (property === 'opacity') {
        return {
            min: 0,
            max: 1,
            step: 0.05,
        };
    }
    if (max100Units.includes(unit) || max100properties.includes(property)) {
        return {
            min: 0,
            max: 100,
        };
    }
    return {
        min: 0,
        step: 10,
        max: 1000,
    };
};
export var calculateStyleArray = function (style) {
    var sanitized = style.replace(/\n/g, '');
    var rules = sanitized.split(';');
    var filtered = rules.filter(Boolean);
    var result = [];
    filtered.forEach(function (pair, index) {
        var trimmed = pair.trim();
        var dotIndex = trimmed.indexOf(':');
        var hasDot = dotIndex >= 0;
        var name = hasDot ? trimmed.slice(0, dotIndex) : trimmed;
        var value = hasDot ? trimmed.slice(dotIndex + 1, trimmed.length).trim() : '';
        result.push({
            property: name,
            value: value,
            id: index,
        });
    });
    addStyleEmptyRule(result);
    return result;
};
export var addStyleEmptyRule = function (style) {
    var hasEmpty = true;
    var nextId = 1;
    if (style.length) {
        var lastRule = style[style.length - 1];
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
};
