"use strict";
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
var styled_components_1 = __importDefault(require("styled-components"));
var rules_1 = require("../../const/rules");
var rules_2 = require("../../helpers/rules");
var ThemeContext_1 = __importDefault(require("../../context/ThemeContext"));
var RuleName_1 = __importDefault(require("./RuleName"));
var RuleValueWrapper_1 = __importDefault(require("./Value/RuleValueWrapper"));
var StyledWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  padding: ", ";\n  border-radius: ", "px;\n  box-shadow: ", ";\n  margin: ", "px 0;\n"], ["\n  background: ", ";\n  padding: ", ";\n  border-radius: ", "px;\n  box-shadow: ", ";\n  margin: ", "px 0;\n"])), function (_a) {
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
var RuleWrapper = (0, react_1.memo)(function (_a) {
    var data = _a.data, onChange = _a.onChange, order = _a.order, onRemove = _a.onRemove;
    var theme = (0, react_1.useContext)(ThemeContext_1.default);
    var defaultMode = (0, rules_2.getRuleDefaultMode)(data.property);
    var valueRef = (0, react_1.useRef)(null);
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
    return (react_1.default.createElement(StyledWrapper, { onBlur: handleBlur, backgroundColor: theme.background, shadow: theme.shadow, radius: theme.radius, spacing: theme.spacing },
        react_1.default.createElement(RuleName_1.default, { value: data.property, onChange: handleChangeProperty, fullwidth: defaultMode === rules_1.RULE_MODES.text, order: order }),
        react_1.default.createElement(RuleValueWrapper_1.default, { value: data.value, mode: defaultMode, onChange: handleChangeValue, property: data.property, valueRef: valueRef, order: order + 1 })));
});
exports.default = RuleWrapper;
var templateObject_1;
