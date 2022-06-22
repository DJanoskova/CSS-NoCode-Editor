import { useRef } from 'react';
var useInputSelect = function (existingRef) {
    var inputRef = useRef(null);
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
export default useInputSelect;
