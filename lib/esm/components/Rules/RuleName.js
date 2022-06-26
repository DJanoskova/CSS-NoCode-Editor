var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import InputText from '../UI/InputText';
import CSSPropertiesContext from '../../context/CSSPropertiesContext';
import OptionDropdown from '../UI/OptionDropdown';
var StyledNameWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 4px;\n  height: 25px;\n  font-size: inherit;\n  width: ", ";\n  position: relative;\n"], ["\n  margin-bottom: 4px;\n  height: 25px;\n  font-size: inherit;\n  width: ", ";\n  position: relative;\n"])), function (_a) {
    var fullwidth = _a.fullwidth;
    return !fullwidth ? "calc(100% - 60px)" : '100%';
});
var RuleName = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, onChange = _a.onChange, _c = _a.fullwidth, fullwidth = _c === void 0 ? true : _c, order = _a.order;
    var _d = useState(value), localValue = _d[0], setLocalValue = _d[1];
    var inputRef = useRef(null);
    var _e = useState(false), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];
    var trimmedValue = localValue.trim();
    var cssProperties = useContext(CSSPropertiesContext);
    var availableProperties = useMemo(function () {
        if (!trimmedValue)
            return [];
        return cssProperties.filter(function (property) { return property.startsWith(trimmedValue.toLowerCase()); });
    }, [cssProperties, trimmedValue]);
    var handleChange = function (e) {
        var newValue = e.target.value;
        setLocalValue(newValue);
        onChange(newValue);
        setIsDropdownOpen(true);
    };
    var handleChangeFromDropdown = function (newValue) {
        setLocalValue(newValue);
        onChange(newValue);
        setIsDropdownOpen(false);
    };
    var handleOpenEdit = function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.select();
    };
    var handleSubmit = function (e) {
        e.preventDefault();
    };
    return (React.createElement(StyledNameWrapper, { fullwidth: fullwidth },
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement(InputText, { ref: inputRef, type: "text", value: localValue, placeholder: "Property", onChange: handleChange, onClick: handleOpenEdit, order: order, transparent: true }),
            isDropdownOpen && (React.createElement(OptionDropdown, { options: availableProperties, wrapperRef: inputRef, onChange: handleChangeFromDropdown, onSetOpen: setIsDropdownOpen })))));
};
export default RuleName;
var templateObject_1;
