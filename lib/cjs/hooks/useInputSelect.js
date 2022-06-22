"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useInputSelect = function (existingRef) {
    var inputRef = (0, react_1.useRef)(null);
    var ref = existingRef || inputRef;
    var handleClick = function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.select();
    };
    return {
        handleClick: handleClick,
        inputRef: ref,
    };
};
exports.default = useInputSelect;
