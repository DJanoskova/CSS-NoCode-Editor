# react-css-nocode-editor

`react-css-nocode-editor` is a React CSS code editor package that allows you a user friendly way to edit a CSS string in your React application. It provides the user with sliders, color pickers, keyboard navigation and a nice customizable UI so it's easy to plug in to any application. 

Read more for visual examples of the editor and how to configure it.

---

`npm install react-css-nocode-editor --save`

`yarn add react-css-nocode-editor`

---

### Links

NPM: https://www.npmjs.com/package/react-css-nocode-editor

GitHub: https://github.com/DJanoskova/CSS-NoCode-Editor

Example: https://react-css-nocode-editor.netlify.app/

---

### Preview

<img src="./public/editor.png" alt="Editor with default theme" width="400px"></img>

---

### Usage

```typescript jsx
import { useState } from 'react';

import { CSSBuilder } from 'react-css-nocode-editor';

const styleString = `
background-color: var(--primary);
opacity: 0.5;
color: #ffffff;
padding-top: 40px;
text-align: center;
width: 200px;
height: 200px;
border-radius: 50%;
box-sizing: border-box;
`

const App = () => {
  const [style, setStyle] = useState(styleString);

  return (
    <CSSBuilder style={style} onChange={setStyle}/>
  )
}

export default App;

```

---

### Example

Fork this repository and run

1. `yarn install` (install dependencies for the editor)
2. `yarn build` (build the editor source)
3. `cd example`
4. `yarn install` (install dependencies for the example - editor is installed locally)
5. `yarn start`

The source is localed in `./example/src/App.tsx`

---

### Theming

<img src="./public/editor-dark.png" alt="Editor with a custom dark theme" width="400px"></img>

```typescript jsx
import { useState } from 'react';

import { ThemeType } from 'react-css-nocode-editor';

const darkTheme: ThemeType = {
  radius: 2,
  shadow: '0 3px 10px rgba(255, 255, 255, 0.2)',
  fontSize: '14px',
  spacing: 10,
  accent: 'limegreen',
  color: 'white',
  inputBg: '#79f179',
  inputColor: '#000000',
};

const App = () => {
  const [style, setStyle] = useState(styleString);

  return (
    <div style={{ background: '#111' }}>
      <CSSBuilder style={style} onChange={setStyle} theme={darkTheme} />
    </div>
  )
}

export default App;
```

Every property in the `ThemeType` is _optional_. What's not provided is inherited from `defaultTheme`.

```typescript
const defaultTheme = {
  accent: '#0096ff',
  background: '#ffffff',
  color: '#000000',
  inputBg: '#f3f4f8',
  inputColor: '#000000',
  inputError: '#e3005e',
  shadow: '0 5px 10px rgba(0, 0, 0, 0.04)',
  radius: 4,
  spacing: 8,
  fontSize: '13px',
}

```

---

### Reactivity

If you want two-way binding for your editor, for a state that's also being changed externally, use the _reactive_ prop, which is _false_ by default for performance reasons

```typescript jsx
import { useState } from 'react';

import { CSSBuilder } from 'react-css-nocode-editor';

const App = () => {
  const [style, setStyle] = useState('');

  return (
    <CSSBuilder style={style} onChange={setStyle} reactive />
  )
}

export default App;

```