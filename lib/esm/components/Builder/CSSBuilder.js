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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../const/theme';
import { addStyleEmptyRule } from '../../helpers/rules';
import { calculateStyleArray, getCompiledStyle } from '../../helpers/style';
import useReactiveEditor from '../../hooks/useReactiveEditor';
import useFocusNextElement from '../../hooks/useFocusNextElement';
import ThemeContext from '../../context/ThemeContext';
import RuleWrapper from '../Rules/RuleWrapper';
import { getStyleProperties } from '../../helpers/document';
import CSSPropertiesContext from '../../context/CSSPropertiesContext';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: -", "px 0;\n  font-size: ", ";\n  color: ", ";\n"], ["\n  margin: -", "px 0;\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
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
    var _e = useState(function () { return calculateStyleArray(style); }), localStyle = _e[0], setLocalStyle = _e[1];
    var wrapperRef = useRef(null);
    var stringifiedTheme = JSON.stringify(theme);
    var combinedTheme = useMemo(function () {
        var userTheme = JSON.parse(stringifiedTheme);
        return __assign(__assign(__assign({}, defaultTheme), JSON.parse(stringifiedTheme)), { inputColor: userTheme.inputColor || userTheme.color || defaultTheme.inputColor });
    }, [stringifiedTheme]);
    var compiledStyle = useMemo(function () {
        return getCompiledStyle(localStyle);
    }, [localStyle]);
    var availableProperties = useMemo(function () {
        var properties = getStyleProperties();
        return properties;
    }, []);
    useReactiveEditor(style, reactive, setLocalStyle);
    var handleFocusNextElement = useFocusNextElement(wrapperRef);
    var handleKeydown = useCallback(function (event) {
        var focusNextKeys = [':', ';'];
        if (!focusNextKeys.includes(event.key) && event.key !== 'Enter' && event.code !== 'Enter')
            return;
        if (focusNextKeys.includes(event.key)) {
            event.preventDefault();
        }
        handleFocusNextElement();
    }, [handleFocusNextElement]);
    useEffect(function () {
        var _a;
        (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', handleKeydown, false);
        return function () {
            var _a;
            (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('keydown', handleKeydown, false);
        };
    }, [handleKeydown]);
    useEffect(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(compiledStyle);
    }, [onChange, compiledStyle]);
    var handleChange = useCallback(function (newRule) {
        setLocalStyle(function (prev) {
            var newStyle = __spreadArray([], prev, true);
            var index = newStyle.findIndex(function (rule) { return rule.id === newRule.id; });
            newStyle.splice(index, 1, newRule);
            addStyleEmptyRule(newStyle);
            return newStyle;
        });
    }, []);
    var handleRemove = useCallback(function (id) {
        setLocalStyle(function (prev) {
            var newStyle = __spreadArray([], prev, true);
            var index = newStyle.findIndex(function (rule) { return rule.id === id; });
            newStyle.splice(index, 1);
            addStyleEmptyRule(newStyle);
            return newStyle;
        });
    }, []);
    return (React.createElement(CSSPropertiesContext.Provider, { value: availableProperties },
        React.createElement(ThemeContext.Provider, { value: combinedTheme },
            React.createElement(StyledWrapper, { fontSize: combinedTheme.fontSize, color: combinedTheme.color, spacing: combinedTheme.spacing, ref: wrapperRef }, localStyle.map(function (rule, index) {
                return (React.createElement(RuleWrapper, { data: rule, key: rule.id, onChange: handleChange, onRemove: handleRemove, order: index * 2 }));
            })))));
};
export default CSSBuilder;
var templateObject_1;
