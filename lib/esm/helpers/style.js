import { addStyleEmptyRule } from './rules';
export var calculateStyleArray = function (style) {
    var sanitized = style.replace(/\n/g, '');
    var rules = sanitized.split(';');
    var filtered = rules.filter(Boolean);
    var result = [];
    filtered.forEach(function (pair, index) {
        var trimmed = pair.trim();
        var dotIndex = trimmed.indexOf(':');
        var hasDot = dotIndex >= 0;
        var name = hasDot ? trimmed.slice(0, dotIndex) : trimmed;
        var value = hasDot ? trimmed.slice(dotIndex + 1, trimmed.length).trim() : '';
        result.push({
            property: name,
            value: value,
            id: index,
        });
    });
    addStyleEmptyRule(result);
    return result;
};
export var getCompiledStyle = function (style) {
    var result = [];
    style.forEach(function (rule) {
        if (rule.property.trim()) {
            result.push("".concat(rule.property.trim(), ": ").concat(rule.value.trim()));
        }
    });
    var compiled = result.join(';\n');
    return compiled;
};
