# react-css-nocode-editor

`npm install react-css-nocode-editor --save`

`yarn add react-css-nocode-editor`

---

## Preview

<img src="https://github.com/DJanoskova/react-css-nocode-editor/blob/master/public/editor.png" alt="Editor with default theme"></img>

---

## Usage

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

## Example

Fork this repository and run

`cd example/`

`yarn install`

`yarn start`

---

## Theming

<img src="https://github.com/DJanoskova/react-css-nocode-editor/blob/master/public/editor-dark.png" alt="Editor with a custom dark theme"></img>

```typescript jsx
import { useState } from 'react';

import { defaultTheme, ThemeType } from 'react-css-nocode-editor';

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
    <CSSBuilder style={style} onChange={setStyle} theme={darkTheme} />
  )
}

export default App;
```

Every property in the `ThemeType` is _optional_. What's not provided is inherited from `defaultTheme`.

```typescript
const defaultTheme = {
  accent: '#0096ff',
  background: 'transparent',
  color: '#000000',
  inputBg: '#f3f4f8',
  inputColor: '#000000',
  shadow: '0 5px 10px rgba(0, 0, 0, 0.04)',
  radius: 4,
  spacing: 8,
  fontSize: '13px',
}

```

---

## Reactivity

If you want two-way binding on your editor, for a state that's also being changed externally, use the _reactive_ prop, which is _false_ by default for performance reasons

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