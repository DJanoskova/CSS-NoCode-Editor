import { useCallback } from 'react';
var useFocusNextElement = function (wrapperRef) {
    var handleFocusNextElement = useCallback(function () {
        var activeElement = document.activeElement;
        if (!activeElement || activeElement.tagName.toLowerCase() !== 'input')
            return;
        var order = Number(activeElement.getAttribute('data-editor-order'));
        var parent = wrapperRef.current;
        if (!parent)
            return;
        var next = parent.querySelector("input[data-editor-order=\"".concat(order + 1, "\"]"));
        if (next) {
            next.select();
        }
    }, []);
    return handleFocusNextElement;
};
export default useFocusNextElement;
