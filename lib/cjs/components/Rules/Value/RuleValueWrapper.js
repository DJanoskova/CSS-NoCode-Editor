"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var rules_1 = require("../../../const/rules");
var RuleValueSlider_1 = __importDefault(require("./RuleValueSlider"));
var RuleValueColor_1 = __importDefault(require("./RuleValueColor"));
var RuleValueText_1 = __importDefault(require("./RuleValueText"));
var RuleValueWrapper = function (_a) {
    var mode = _a.mode, property = _a.property, otherProps = __rest(_a, ["mode", "property"]);
    switch (mode) {
        case rules_1.RULE_MODES.slider:
            return (react_1.default.createElement(RuleValueSlider_1.default, __assign({}, otherProps, { property: property })));
        case rules_1.RULE_MODES.color:
            return (react_1.default.createElement(RuleValueColor_1.default, __assign({}, otherProps)));
        default:
            return (react_1.default.createElement(RuleValueText_1.default, __assign({}, otherProps)));
    }
};
exports.default = RuleValueWrapper;
