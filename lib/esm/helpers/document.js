/**
 * All the credit goes to Lea Verou
 * https://lea.verou.me/2020/07/introspecting-css-via-the-css-om-getting-supported-properties-shorthands-longhands/
 */
export var getStyleProperties = function () {
    var style = document.body.style;
    var properties = Object.getOwnPropertyNames(style.hasOwnProperty('background') ? style : style.__proto__);
    properties = properties.filter(function (p) { return style[p] === ''; })
        .map(function (prop) {
        prop = prop.replace(/[A-Z]/g, function (value) {
            return '-' + value.toLowerCase();
        });
        if (prop.startsWith('webkit')) {
            prop = '-' + prop;
        }
        return prop;
    });
    var existing = {};
    properties = properties.filter(function (prop) {
        if (existing[prop])
            return false;
        existing[prop] = true;
        return true;
    });
    return properties;
};
