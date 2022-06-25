"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ThemeContext_1 = __importDefault(require("../../context/ThemeContext"));
var InputStyled = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", "px;\n  background-color: ", ";\n  box-sizing: border-box;\n  padding: 1px 3px;\n  text-align: inherit;\n  width: 100%;\n  outline: none;\n  border: 2px transparent solid;\n  font-family: inherit;\n  font-size: inherit;\n  color: ", ";\n  \n  &:focus, &[value=\"\"] {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n  }\n"], ["\n  border-radius: ", "px;\n  background-color: ", ";\n  box-sizing: border-box;\n  padding: 1px 3px;\n  text-align: inherit;\n  width: 100%;\n  outline: none;\n  border: 2px transparent solid;\n  font-family: inherit;\n  font-size: inherit;\n  color: ", ";\n  \n  &:focus, &[value=\"\"] {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (_a) {
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
var InputText = (0, react_1.forwardRef)(function (props, ref) {
    var theme = (0, react_1.useContext)(ThemeContext_1.default);
    return (react_1.default.createElement(InputStyled, __assign({ inputBg: theme.inputBg, accent: theme.accent, radius: theme.radius || 0, type: "text", ref: ref, "data-editor-order": props.order, inputColor: theme.inputColor, color: theme.color }, props)));
});
exports.default = InputText;
var templateObject_1;
