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
import React, { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../context/ThemeContext';
var InputStyled = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", "px;\n  background-color: ", ";\n  box-sizing: border-box;\n  padding: 1px 3px;\n  text-align: inherit;\n  width: 100%;\n  outline: none;\n  border: 2px transparent solid;\n  font-family: inherit;\n  font-size: inherit;\n  color: ", ";\n  \n  &:focus, &[value=\"\"] {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n  }\n"], ["\n  border-radius: ", "px;\n  background-color: ", ";\n  box-sizing: border-box;\n  padding: 1px 3px;\n  text-align: inherit;\n  width: 100%;\n  outline: none;\n  border: 2px transparent solid;\n  font-family: inherit;\n  font-size: inherit;\n  color: ", ";\n  \n  &:focus, &[value=\"\"] {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (_a) {
    var radius = _a.radius;
    return radius;
}, function (_a) {
    var inputBg = _a.inputBg, transparent = _a.transparent;
    return transparent ? 'transparent' : inputBg;
}, function (_a) {
    var inputColor = _a.inputColor, color = _a.color, transparent = _a.transparent;
    return transparent ? color : inputColor;
}, function (_a) {
    var inputBg = _a.inputBg;
    return inputBg;
}, function (_a) {
    var inputColor = _a.inputColor;
    return inputColor;
}, function (_a) {
    var accent = _a.accent;
    return accent;
});
var InputText = forwardRef(function (props, ref) {
    var theme = useContext(ThemeContext);
    return (React.createElement(InputStyled, __assign({ inputBg: theme.inputBg, accent: theme.accent, radius: theme.radius || 0, type: "text", ref: ref, "data-editor-order": props.order, inputColor: theme.inputColor, color: theme.color }, props)));
});
export default InputText;
var templateObject_1;
