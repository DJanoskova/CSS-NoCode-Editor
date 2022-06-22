export interface StyleRule {
  property: string;
  value: string;
  id: number;
}

export interface ThemeType {
  accent?: string;
  background?: string;
  color?: string;
  inputBg?: string;
  shadow?: string;
  radius?: number;
  spacing?: number;
  fontSize?: string;
}
