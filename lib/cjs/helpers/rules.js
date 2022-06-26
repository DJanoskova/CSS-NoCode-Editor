"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStyleEmptyRule = exports.getRuleRange = exports.getRuleDefaultMode = void 0;
var rules_1 = require("../const/rules");
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
var getRuleDefaultMode = function (rule) {
    if (numberRules.includes(rule)) {
        return rules_1.RULE_MODES.slider;
    }
    if (colorRules.includes(rule)) {
        return rules_1.RULE_MODES.color;
    }
    return rules_1.RULE_MODES.text;
};
exports.getRuleDefaultMode = getRuleDefaultMode;
var getRuleRange = function (property, unit) {
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
exports.getRuleRange = getRuleRange;
var addStyleEmptyRule = function (style) {
    var hasEmpty = false;
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
exports.addStyleEmptyRule = addStyleEmptyRule;
