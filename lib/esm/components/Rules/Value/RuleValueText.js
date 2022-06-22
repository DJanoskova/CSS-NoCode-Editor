import React from 'react';
import useInputSelect from '../../../hooks/useInputSelect';
import InputText from '../../UI/InputText';
var RuleValueText = function (_a) {
    var value = _a.value, onChange = _a.onChange, valueRef = _a.valueRef, order = _a.order;
    var _b = useInputSelect(valueRef), inputRef = _b.inputRef, handleClick = _b.handleClick;
    var handleChange = function (e) {
        var newValue = e.target.value;
        onChange(newValue);
    };
    return (React.createElement(InputText, { type: "text", value: value, onChange: handleChange, onClick: handleClick, ref: inputRef, order: order }));
};
export default RuleValueText;
