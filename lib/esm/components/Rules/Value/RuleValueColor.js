var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import RuleValueText from './RuleValueText';
var InputColorWrapperStyled = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var InputColorStyled = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: -28px;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n  -webkit-appearance: none;\n  \n  &::-webkit-color-swatch-wrapper {\n    padding: 0;\n  }\n  \n  &::-webkit-color-swatch {\n    border: none;\n  }\n  \n  &:after {\n    position: absolute;\n    content: \"\";\n    background: ", ";\n    top: 0;\n    right: 0;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    cursor: pointer;\n    border: 1px rgba(0, 0, 0, 0.1) solid;\n  }\n"], ["\n  position: absolute;\n  top: -28px;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n  -webkit-appearance: none;\n  \n  &::-webkit-color-swatch-wrapper {\n    padding: 0;\n  }\n  \n  &::-webkit-color-swatch {\n    border: none;\n  }\n  \n  &:after {\n    position: absolute;\n    content: \"\";\n    background: ", ";\n    top: 0;\n    right: 0;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    cursor: pointer;\n    border: 1px rgba(0, 0, 0, 0.1) solid;\n  }\n"])), function (_a) {
    var background = _a.background;
    return background;
});
var RuleValueColor = function (_a) {
    var value = _a.value, onChange = _a.onChange, order = _a.order;
    var handleChange = function (e) {
        var newValue = e.target.value;
        onChange(newValue);
    };
    var leftBrackets = (value.match(/\(/g) || []).length;
    var rightBrackets = (value.match(/\)/g) || []).length;
    var isEven = leftBrackets === rightBrackets;
    return (React.createElement("div", null,
        React.createElement(InputColorWrapperStyled, null,
            React.createElement(InputColorStyled, { type: "color", value: value, onChange: handleChange, background: isEven ? value : '' })),
        React.createElement(RuleValueText, { value: value, onChange: onChange, order: order })));
};
export default RuleValueColor;
var templateObject_1, templateObject_2;
