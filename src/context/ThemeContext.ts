import { createContext } from 'react';

export const defaultTheme = {
  accent: '#0096ff',
  background: 'transparent',
  color: 'black',
  inputBg: '#f3f4f8',
  shadow: '0 5px 10px rgba(0, 0, 0, 0.04)',
  radius: 4,
  spacing: 8,
  fontSize: '13px',
}

const ThemeContext = createContext(defaultTheme);

export default ThemeContext;
