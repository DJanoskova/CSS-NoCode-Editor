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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ThemeContext_1 = __importDefault(require("../../../context/ThemeContext"));
var rules_1 = require("../../../helpers/rules");
var RuleValueText_1 = __importDefault(require("./RuleValueText"));
var WrapperStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var InputWrapperStyled = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: -30px;\n  right: 0;\n  width: 50px;\n  text-align: right;\n"], ["\n  position: absolute;\n  top: -30px;\n  right: 0;\n  width: 50px;\n  text-align: right;\n"])));
var InputRangeStyled = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  accent-color: ", ";\n"], ["\n  width: 100%;\n  accent-color: ", ";\n"])), function (_a) {
    var accent = _a.accent;
    return accent;
});
var RuleValueSlider = function (_a) {
    var value = _a.value, onChange = _a.onChange, property = _a.property, inputProps = __rest(_a, ["value", "onChange", "property"]);
    var theme = (0, react_1.useContext)(ThemeContext_1.default);
    var numberValue = parseFloat(value);
    var unit = value.replace("".concat(numberValue), '').trim();
    var range = (0, rules_1.getRuleRange)(property, unit);
    var handleChangeNumberValue = function (e) {
        var newValue = parseFloat(e.target.value);
        onChange("".concat(newValue).concat(unit));
    };
    var handleChangeValue = function (value) {
        onChange(value);
    };
    return (react_1.default.createElement(WrapperStyled, null,
        react_1.default.createElement(InputWrapperStyled, null,
            react_1.default.createElement(RuleValueText_1.default, __assign({ value: value, onChange: handleChangeValue }, inputProps))),
        react_1.default.createElement(InputRangeStyled, { type: "range", value: numberValue, onChange: handleChangeNumberValue, min: range.min, max: range.max, step: range.step || 1, accent: theme.accent })));
};
exports.default = RuleValueSlider;
var templateObject_1, templateObject_2, templateObject_3;
