import { useState } from 'react';

import { CSSBuilder } from 'react-css-nocode-editor';

const styleString = `
    background-color: var(--primary);
    opacity: 0.5;
    color: aquamarine;
    padding: 100px;
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
`

const App = () => {
  const [style, setStyle] = useState(styleString);

  return (
    <div className="App">
      <div className="content">
        {style}
      </div>
      <div className="editor-wrapper">
        <CSSBuilder style={style} onChange={setStyle} />
      </div>
      <div className="editor-wrapper" style={{ background: '#111111' }}>
        <CSSBuilder style={style} onChange={setStyle} theme={{
          radius: 2,
          shadow: '0 3px 10px rgba(255, 255, 255, 0.2)',
          fontSize: '14px',
          spacing: 10,
          accent: 'limegreen',
          color: 'white',
          inputBg: '#00b400'
        }} />
      </div>
    </div>
  )
}

export default App;
