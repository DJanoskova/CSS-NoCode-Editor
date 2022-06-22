"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
var react_1 = require("react");
exports.defaultTheme = {
    accent: '#0096ff',
    background: 'transparent',
    color: 'black',
    inputBg: '#f3f4f8',
    shadow: '0 5px 10px rgba(0, 0, 0, 0.04)',
    radius: 4,
    spacing: 8,
    fontSize: '13px',
};
var ThemeContext = (0, react_1.createContext)(exports.defaultTheme);
exports.default = ThemeContext;
