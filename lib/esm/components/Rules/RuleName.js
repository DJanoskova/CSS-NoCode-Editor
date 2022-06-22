var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import InputText from '../UI/InputText';
var StyledNameWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 4px;\n  height: 25px;\n  font-size: inherit;\n  width: ", ";\n"], ["\n  margin-bottom: 4px;\n  height: 25px;\n  font-size: inherit;\n  width: ", ";\n"])), function (_a) {
    var fullwidth = _a.fullwidth;
    return !fullwidth ? "calc(100% - 60px)" : '100%';
});
var RuleName = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, onChange = _a.onChange, _c = _a.fullwidth, fullwidth = _c === void 0 ? true : _c, order = _a.order;
    var _d = useState(!value), isEdit = _d[0], setIsEdit = _d[1];
    var _e = useState(value), localValue = _e[0], setLocalValue = _e[1];
    var inputRef = useRef(null);
    var handleChange = function (e) {
        var newValue = e.target.value;
        setLocalValue(newValue);
        onChange(newValue);
    };
    var handleCloseEdit = function () {
        if (value) {
            setIsEdit(false);
        }
    };
    var handleOpenEdit = function () {
        var _a;
        setIsEdit(true);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.select();
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        handleCloseEdit();
    };
    return (React.createElement(StyledNameWrapper, { fullwidth: fullwidth },
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement(InputText, { transparent: !isEdit, ref: inputRef, type: "text", value: localValue, placeholder: "Property", onChange: handleChange, onBlur: handleCloseEdit, onClick: handleOpenEdit, order: order }))));
};
export default RuleName;
var templateObject_1;
