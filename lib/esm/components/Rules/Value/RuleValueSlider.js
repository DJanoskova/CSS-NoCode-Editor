var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../../context/ThemeContext';
import { getRuleRange } from '../../../helpers/rules';
import RuleValueText from './RuleValueText';
var WrapperStyled = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var InputWrapperStyled = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: -30px;\n  right: 0;\n  width: 50px;\n  text-align: right;\n"], ["\n  position: absolute;\n  top: -30px;\n  right: 0;\n  width: 50px;\n  text-align: right;\n"])));
var InputRangeStyled = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  accent-color: ", ";\n"], ["\n  width: 100%;\n  accent-color: ", ";\n"])), function (_a) {
    var accent = _a.accent;
    return accent;
});
var RuleValueSlider = function (_a) {
    var value = _a.value, onChange = _a.onChange, property = _a.property, inputProps = __rest(_a, ["value", "onChange", "property"]);
    var theme = useContext(ThemeContext);
    var numberValue = parseFloat(value);
    var unit = value.replace("".concat(numberValue), '').trim();
    var range = getRuleRange(property, unit);
    var handleChangeNumberValue = function (e) {
        var newValue = parseFloat(e.target.value);
        onChange("".concat(newValue).concat(unit));
    };
    var handleChangeValue = function (value) {
        onChange(value);
    };
    return (React.createElement(WrapperStyled, null,
        React.createElement(InputWrapperStyled, null,
            React.createElement(RuleValueText, __assign({ value: value, onChange: handleChangeValue }, inputProps))),
        React.createElement(InputRangeStyled, { type: "range", value: numberValue, onChange: handleChangeNumberValue, min: range.min, max: range.max, step: range.step || 1, accent: theme.accent })));
};
export default RuleValueSlider;
var templateObject_1, templateObject_2, templateObject_3;
