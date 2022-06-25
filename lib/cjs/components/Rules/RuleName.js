"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var InputText_1 = __importDefault(require("../UI/InputText"));
var StyledNameWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 4px;\n  height: 25px;\n  font-size: inherit;\n  width: ", ";\n"], ["\n  margin-bottom: 4px;\n  height: 25px;\n  font-size: inherit;\n  width: ", ";\n"])), function (_a) {
    var fullwidth = _a.fullwidth;
    return !fullwidth ? "calc(100% - 60px)" : '100%';
});
var RuleName = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, onChange = _a.onChange, _c = _a.fullwidth, fullwidth = _c === void 0 ? true : _c, order = _a.order;
    var _d = (0, react_1.useState)(value), localValue = _d[0], setLocalValue = _d[1];
    var inputRef = (0, react_1.useRef)(null);
    var handleChange = function (e) {
        var newValue = e.target.value;
        setLocalValue(newValue);
        onChange(newValue);
    };
    var handleOpenEdit = function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.select();
    };
    var handleSubmit = function (e) {
        e.preventDefault();
    };
    return (react_1.default.createElement(StyledNameWrapper, { fullwidth: fullwidth },
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement(InputText_1.default, { ref: inputRef, type: "text", value: localValue, placeholder: "Property", onChange: handleChange, onClick: handleOpenEdit, order: order, transparent: true }))));
};
exports.default = RuleName;
var templateObject_1;
