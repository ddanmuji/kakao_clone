const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(12),
  sm: calcRem(14),
  md: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  h2: calcRem(36),
  h3: calcRem(32),
  h4: calcRem(24),
} as const;

const colors = {
  black: '#000',
  white: '#fff',
} as const;

const theme = {
  fontSizes,
  colors,
};

export default theme;
