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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../const/theme");
var rules_1 = require("../../helpers/rules");
var style_1 = require("../../helpers/style");
var useReactiveEditor_1 = __importDefault(require("../../hooks/useReactiveEditor"));
var useFocusNextElement_1 = __importDefault(require("../../hooks/useFocusNextElement"));
var ThemeContext_1 = __importDefault(require("../../context/ThemeContext"));
var RuleWrapper_1 = __importDefault(require("../Rules/RuleWrapper"));
var document_1 = require("../../helpers/document");
var StyledWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: -", "px 0;\n  font-size: ", ";\n  color: ", ";\n"], ["\n  margin: -", "px 0;\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var spacing = _a.spacing;
    return spacing;
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize;
}, function (_a) {
    var color = _a.color;
    return color;
});
var CSSBuilder = function (_a) {
    var _b = _a.style, style = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? {} : _c, onChange = _a.onChange, _d = _a.reactive, reactive = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(function () { return (0, style_1.calculateStyleArray)(style); }), localStyle = _e[0], setLocalStyle = _e[1];
    var wrapperRef = (0, react_1.useRef)(null);
    var stringifiedTheme = JSON.stringify(theme);
    var combinedTheme = (0, react_1.useMemo)(function () {
        var userTheme = JSON.parse(stringifiedTheme);
        return __assign(__assign(__assign({}, theme_1.defaultTheme), JSON.parse(stringifiedTheme)), { inputColor: userTheme.inputColor || userTheme.color || theme_1.defaultTheme.inputColor });
    }, [stringifiedTheme]);
    var compiledStyle = (0, react_1.useMemo)(function () {
        return (0, style_1.getCompiledStyle)(localStyle);
    }, [localStyle]);
    var availableProperties = (0, react_1.useMemo)(function () {
        var properties = (0, document_1.getStyleProperties)();
        return properties;
    }, []);
    console.log(availableProperties);
    (0, useReactiveEditor_1.default)(style, reactive, setLocalStyle);
    var handleFocusNextElement = (0, useFocusNextElement_1.default)(wrapperRef);
    var handleKeydown = (0, react_1.useCallback)(function (event) {
        var focusNextKeys = [':', ';'];
        if (!focusNextKeys.includes(event.key) && event.key !== 'Enter' && event.code !== 'Enter')
            return;
        if (focusNextKeys.includes(event.key)) {
            event.preventDefault();
        }
        handleFocusNextElement();
    }, [handleFocusNextElement]);
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', handleKeydown, false);
        return function () {
            var _a;
            (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('keydown', handleKeydown, false);
        };
    }, [handleKeydown]);
    (0, react_1.useEffect)(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(compiledStyle);
    }, [onChange, compiledStyle]);
    var handleChange = (0, react_1.useCallback)(function (newRule) {
        setLocalStyle(function (prev) {
            var newStyle = __spreadArray([], prev, true);
            var index = newStyle.findIndex(function (rule) { return rule.id === newRule.id; });
            newStyle.splice(index, 1, newRule);
            (0, rules_1.addStyleEmptyRule)(newStyle);
            return newStyle;
        });
    }, []);
    var handleRemove = (0, react_1.useCallback)(function (id) {
        setLocalStyle(function (prev) {
            var newStyle = __spreadArray([], prev, true);
            var index = newStyle.findIndex(function (rule) { return rule.id === id; });
            newStyle.splice(index, 1);
            (0, rules_1.addStyleEmptyRule)(newStyle);
            return newStyle;
        });
    }, []);
    return (react_1.default.createElement(ThemeContext_1.default.Provider, { value: combinedTheme },
        react_1.default.createElement(StyledWrapper, { fontSize: combinedTheme.fontSize, color: combinedTheme.color, spacing: combinedTheme.spacing, ref: wrapperRef }, localStyle.map(function (rule, index) {
            return (react_1.default.createElement(RuleWrapper_1.default, { data: rule, key: rule.id, onChange: handleChange, onRemove: handleRemove, order: index * 2 }));
        }))));
};
exports.default = CSSBuilder;
var templateObject_1;
