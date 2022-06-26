import { useEffect } from 'react';
import { calculateStyleArray } from '../helpers/style';
var useReactiveEditor = function (style, reactive, onSet) {
    useEffect(function () {
        if (!reactive)
            return;
        var result = calculateStyleArray(style);
        onSet(function (prev) {
            if (JSON.stringify(prev) === JSON.stringify(result)) {
                return prev;
            }
            return result;
        });
    }, [style, reactive]);
};
export default useReactiveEditor;
