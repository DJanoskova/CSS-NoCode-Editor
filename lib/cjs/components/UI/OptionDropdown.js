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
var ThemeContext_1 = __importDefault(require("../../context/ThemeContext"));
var styled_components_1 = __importDefault(require("styled-components"));
var useClickOutside_1 = __importDefault(require("../../hooks/useClickOutside"));
var ListStyled = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", "px;\n  background-color: ", ";\n  position: absolute;\n  top: 30px;\n  left: 0;\n  z-index: 2;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: ", ";\n"], ["\n  border-radius: ", "px;\n  background-color: ", ";\n  position: absolute;\n  top: 30px;\n  left: 0;\n  z-index: 2;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: ", ";\n"])), function (_a) {
    var radius = _a.radius;
    return radius;
}, function (_a) {
    var background = _a.background;
    return background;
}, function (_a) {
    var shadow = _a.shadow;
    return shadow;
});
var ListIemStyled = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n"], ["\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n"])), function (_a) {
    var selected = _a.selected, accent = _a.accent;
    return selected ? accent : 'transparent';
}, function (_a) {
    var selected = _a.selected;
    return selected ? '#ffffff' : 'inherit';
}, function (_a) {
    var spacing = _a.spacing;
    return "".concat(spacing * 0.5, "px ").concat(spacing * 2, "px ").concat(spacing * 0.5, "px ").concat(spacing, "px");
});
var OptionDropdown = function (_a) {
    var options = _a.options, wrapperRef = _a.wrapperRef, onChange = _a.onChange, onSetOpen = _a.onSetOpen;
    var theme = (0, react_1.useContext)(ThemeContext_1.default);
    var _b = (0, react_1.useState)(0), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var listRef = (0, react_1.useRef)(null);
    var handleKeydown = (0, react_1.useCallback)(function (event) {
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
    var handleMoveFocus = (0, react_1.useCallback)(function (code) {
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
    (0, react_1.useEffect)(function () {
        setSelectedIndex(0);
    }, [options]);
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', handleKeydown, false);
        return function () {
            var _a;
            (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('keydown', handleKeydown, false);
        };
    }, [handleKeydown]);
    (0, useClickOutside_1.default)(listRef, onSetOpen);
    if (!options.length)
        return null;
    return (react_1.default.createElement(ListStyled, { background: theme.background, radius: theme.radius, shadow: theme.shadow, ref: listRef }, options.map(function (option, index) { return (react_1.default.createElement(ListIemStyled, { key: option, selected: index === selectedIndex, accent: theme.accent, spacing: theme.spacing, "data-id": "item-".concat(index) }, option)); })));
};
exports.default = OptionDropdown;
var templateObject_1, templateObject_2;
