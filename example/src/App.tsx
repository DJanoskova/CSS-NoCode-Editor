import { useState } from 'react';

import { CSSBuilder, defaultTheme, ThemeType } from 'react-css-nocode-editor';

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
    <div className="App">
      <div className="editor-wrapper">
        <CSSBuilder style={style} onChange={setStyle}/>
        <p>Default theme</p>
        <pre>{JSON.stringify(defaultTheme, null, 2)}</pre>
      </div>
      <div className="content">
        <style>.circle {`{ ${style} }`}</style>
        <div className="circle">
          Circle with a style
        </div>
        <pre>
          {style}
        </pre>
      </div>
      <div className="editor-wrapper" style={{ background: '#111111', color: '#ffffff' }}>
        <CSSBuilder style={style} onChange={setStyle} theme={darkTheme}/>
        <p>Theme</p>
        <pre>{JSON.stringify(darkTheme, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App;
