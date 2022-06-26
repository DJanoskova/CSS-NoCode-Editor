"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyleProperties = void 0;
var getStyleProperties = function () {
    var style = document.body.style;
    // @ts-ignore
    var properties = Object.getOwnPropertyNames(style.hasOwnProperty("background") ? style : style.__proto__);
    console.log(style);
    console.log(style.hasOwnProperty("background"));
    console.log(Object.getOwnPropertyNames(style));
    // @ts-ignore
    console.log(Object.getOwnPropertyNames(style.__proto__));
    properties = properties.filter(function (p) { return style[p] === ""; }) // drop functions etc
        .map(function (prop) {
        prop = prop.replace(/[A-Z]/g, function ($0) {
            return '-' + $0.toLowerCase();
        });
        if (prop.startsWith("webkit-")) {
            prop = "-" + prop;
        }
        return prop;
    });
    // @ts-ignore
    return __spreadArray([], new Set(properties), true);
};
exports.getStyleProperties = getStyleProperties;
