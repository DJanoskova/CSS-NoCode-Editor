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

// const darkTheme = {
//   radius: 2,
//   shadow: '0 3px 10px rgba(255, 255, 255, 0.2)',
//   fontSize: '14px',
//   spacing: 10,
//   accent: 'limegreen',
//   color: 'white',
//   inputBg: '#79f179',
//   inputColor: '#000000',
//   background: 'black'
// };

const App = () => {
  const [style, setStyle] = useState(styleString);

  return (
    <div className="App">
      <div className="app-body">
        <div className="editor-wrapper">
          <CSSBuilder style={style} onChange={setStyle}/>
        </div>
        {/*<div className="editor-wrapper" style={{ background: '#111111' }}>*/}
        {/*  <CSSBuilder style={style} onChange={setStyle} theme={darkTheme}/>*/}
        {/*</div>*/}
        <div className="content-wrapper">
          <div className="content">
            <style>.circle {`{ ${style} }`}</style>
            <div className="circle">
              Circle with a style
            </div>
            <pre>{style}</pre>
          </div>
        </div>
      </div>
      <div className="app-footer">
        <a href="https://www.npmjs.com/package/react-css-nocode-editor" target="_blank" rel="noreferrer noopener">
          https://www.npmjs.com/package/react-css-nocode-editor
        </a>
      </div>
    </div>
  )
}

export default App;
