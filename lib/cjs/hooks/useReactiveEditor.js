"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var style_1 = require("../helpers/style");
var useReactiveEditor = function (style, reactive, onSet) {
    (0, react_1.useEffect)(function () {
        if (!reactive)
            return;
        var result = (0, style_1.calculateStyleArray)(style);
        onSet(function (prev) {
            if (JSON.stringify(prev) === JSON.stringify(result)) {
                return prev;
            }
            return result;
        });
    }, [style, reactive]);
};
exports.default = useReactiveEditor;
