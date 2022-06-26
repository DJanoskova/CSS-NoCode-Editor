export const getStyleProperties = () => {
  const style = document.body.style;
  // @ts-ignore
  let properties = Object.getOwnPropertyNames(style.hasOwnProperty("background") ? style : style.__proto__);

  console.log(style);
  console.log(style.hasOwnProperty("background"));
  console.log(Object.getOwnPropertyNames(style));
  // @ts-ignore
  console.log(Object.getOwnPropertyNames(style.__proto__));

  properties = properties.filter(p => style[p] === "") // drop functions etc
    .map(prop => {
      prop = prop.replace(/[A-Z]/g, function ($0) {
        return '-' + $0.toLowerCase()
      });

      if (prop.startsWith("webkit-")) {
        prop = "-" + prop;
      }

      return prop;
    });

  // @ts-ignore
  return [...new Set(properties)];
}