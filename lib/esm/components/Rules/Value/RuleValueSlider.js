var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
    var value = _a.value, onChange = _a.onChange, property = _a.property, order = _a.order;
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
        React.createElement(InputRangeStyled, { type: "range", value: numberValue, onChange: handleChangeNumberValue, min: range.min, max: range.max, step: range.step || 1, accent: theme.accent }),
        React.createElement(InputWrapperStyled, null,
            React.createElement(RuleValueText, { value: value, onChange: handleChangeValue, order: order }))));
};
export default RuleValueSlider;
var templateObject_1, templateObject_2, templateObject_3;
