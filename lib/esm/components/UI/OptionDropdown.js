var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';
var ListStyled = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", "px;\n  background-color: ", ";\n  position: absolute;\n  top: 30px;\n  left: 0;\n  z-index: 2;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  max-height: 200px;\n  overflow-y: auto;\n"], ["\n  border-radius: ", "px;\n  background-color: ", ";\n  position: absolute;\n  top: 30px;\n  left: 0;\n  z-index: 2;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  max-height: 200px;\n  overflow-y: auto;\n"])), function (_a) {
    var radius = _a.radius;
    return radius;
}, function (_a) {
    var inputBg = _a.inputBg;
    return inputBg;
});
var ListIemStyled = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n"], ["\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n"])), function (_a) {
    var selected = _a.selected, accent = _a.accent;
    return selected ? accent : 'transparent';
}, function (_a) {
    var selected = _a.selected;
    return selected ? '#ffffff' : 'inherit';
}, function (_a) {
    var spacing = _a.spacing;
    return "".concat(spacing * 0.5, "px ").concat(spacing, "px");
});
var OptionDropdown = function (_a) {
    var options = _a.options, wrapperRef = _a.wrapperRef, onChange = _a.onChange, onSetOpen = _a.onSetOpen;
    var theme = useContext(ThemeContext);
    var _b = useState(0), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var listRef = useRef(null);
    var handleKeydown = useCallback(function (event) {
        if (event.key === 'Enter' || event.code === 'Enter') {
            onChange(options[selectedIndex]);
            return;
        }
        if (event.key === 'Escape' || event.code === 'Escape') {
            onSetOpen(false);
            return;
        }
        var codes = ['ArrowDown', 'ArrowUp'];
        if (!codes.includes(event.code))
            return;
        handleMoveFocus(event.code);
    }, [selectedIndex, onChange]);
    var handleMoveFocus = useCallback(function (code) {
        setSelectedIndex(function (prev) {
            var _a;
            var newValue;
            if (code === 'ArrowDown') {
                newValue = prev + 1;
            }
            else {
                newValue = prev - 1;
            }
            var optionEl = (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.querySelector("[data-id=\"item-".concat(newValue, "\"]"));
            if (!optionEl)
                return prev;
            optionEl === null || optionEl === void 0 ? void 0 : optionEl.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            return newValue;
        });
    }, []);
    useEffect(function () {
        setSelectedIndex(0);
    }, [options]);
    useEffect(function () {
        var _a;
        (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', handleKeydown, false);
        return function () {
            var _a;
            (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('keydown', handleKeydown, false);
        };
    }, [handleKeydown]);
    useClickOutside(listRef, onSetOpen);
    if (!options.length)
        return null;
    return (React.createElement(ListStyled, { inputBg: theme.inputBg, radius: theme.radius, ref: listRef }, options.map(function (option, index) { return (React.createElement(ListIemStyled, { key: option, selected: index === selectedIndex, accent: theme.accent, spacing: theme.spacing, "data-id": "item-".concat(index) }, option)); })));
};
export default OptionDropdown;
var templateObject_1, templateObject_2;
