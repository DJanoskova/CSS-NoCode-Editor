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
import React, { memo, useContext, useRef } from 'react';
import styled from 'styled-components';
import { RULE_MODES } from '../../const/rules';
import { getRuleDefaultMode } from '../../helpers/rules';
import ThemeContext from '../../context/ThemeContext';
import RuleName from './RuleName';
import RuleValueWrapper from './Value/RuleValueWrapper';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  padding: ", ";\n  border-radius: ", "px;\n  box-shadow: ", ";\n  margin: ", "px 0;\n"], ["\n  background: ", ";\n  padding: ", ";\n  border-radius: ", "px;\n  box-shadow: ", ";\n  margin: ", "px 0;\n"])), function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
}, function (_a) {
    var spacing = _a.spacing;
    return "".concat(spacing, "px ").concat(spacing * 1.25, "px ").concat(spacing * 1.25, "px");
}, function (_a) {
    var radius = _a.radius;
    return radius * 3;
}, function (_a) {
    var shadow = _a.shadow;
    return shadow;
}, function (_a) {
    var spacing = _a.spacing;
    return spacing;
});
var RuleWrapper = memo(function (_a) {
    var data = _a.data, onChange = _a.onChange, order = _a.order, onRemove = _a.onRemove;
    var theme = useContext(ThemeContext);
    var defaultMode = getRuleDefaultMode(data.property);
    var valueRef = useRef(null);
    var handleChange = function (newData) {
        onChange(__assign(__assign({}, data), newData));
    };
    var handleChangeProperty = function (property) {
        if (property === void 0) { property = ' '; }
        console.log('property', property);
        // const
        handleChange({ property: property });
    };
    var handleChangeValue = function (value) {
        handleChange({ value: value });
    };
    var handleBlur = function () {
        console.log('blr');
        console.log('data', data);
        if (!data.property.trim())
            onRemove(data.id);
    };
    return (React.createElement(StyledWrapper, { onBlur: handleBlur, backgroundColor: theme.background, shadow: theme.shadow, radius: theme.radius, spacing: theme.spacing },
        React.createElement(RuleName, { value: data.property, onChange: handleChangeProperty, fullwidth: defaultMode === RULE_MODES.text, order: order }),
        React.createElement(RuleValueWrapper, { value: data.value, mode: defaultMode, onChange: handleChangeValue, property: data.property, valueRef: valueRef, order: order + 1 })));
});
export default RuleWrapper;
var templateObject_1;
