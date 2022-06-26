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
import React from 'react';
import useInputSelect from '../../../hooks/useInputSelect';
import InputText from '../../UI/InputText';
var RuleValueText = function (_a) {
    var value = _a.value, onChange = _a.onChange, valueRef = _a.valueRef, inputProps = __rest(_a, ["value", "onChange", "valueRef"]);
    var _b = useInputSelect(valueRef), inputRef = _b.inputRef, handleClick = _b.handleClick;
    var handleChange = function (e) {
        var newValue = e.target.value;
        onChange(newValue);
    };
    return (React.createElement(InputText, __assign({ type: "text", value: value, onChange: handleChange, onClick: handleClick, ref: inputRef }, inputProps)));
};
export default RuleValueText;
