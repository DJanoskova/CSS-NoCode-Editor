/**
 * All the credit goes to Lea Verou
 * https://lea.verou.me/2020/07/introspecting-css-via-the-css-om-getting-supported-properties-shorthands-longhands/
 */
export const getStyleProperties = () => {
  const style = document.body.style;
  let properties = Object.getOwnPropertyNames(style.hasOwnProperty('background') ? style : (style as any).__proto__);

  properties = properties.filter(p => style[p] === '')
    .map(prop => {
      prop = prop.replace(/[A-Z]/g, (value) => {
        return '-' + value.toLowerCase()
      });

      if (prop.startsWith('webkit')) {
        prop = '-' + prop;
      }

      return prop;
    });

  const existing: Record<string, true> = {};

  properties = properties.filter(prop => {
    if (existing[prop]) return false;

    existing[prop] = true;
    return true;
  });

  return properties;
}