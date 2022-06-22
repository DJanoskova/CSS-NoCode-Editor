"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useInputSelect_1 = __importDefault(require("../../../hooks/useInputSelect"));
var InputText_1 = __importDefault(require("../../UI/InputText"));
var RuleValueText = function (_a) {
    var value = _a.value, onChange = _a.onChange, valueRef = _a.valueRef, order = _a.order;
    var _b = (0, useInputSelect_1.default)(valueRef), inputRef = _b.inputRef, handleClick = _b.handleClick;
    var handleChange = function (e) {
        var newValue = e.target.value;
        onChange(newValue);
    };
    return (react_1.default.createElement(InputText_1.default, { type: "text", value: value, onChange: handleChange, onClick: handleClick, ref: inputRef, order: order }));
};
exports.default = RuleValueText;
