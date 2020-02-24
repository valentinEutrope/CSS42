export const fontFamily = key => ({ theme }) =>
  `font-family: ${theme.typography.families[key]};`;

export const color = ({ color, key }) => ({ theme }) =>
  key ? theme.colors.palette[color][key] : theme.colors.paletteStatic[color];

// export const opacity = ({ color, alpha }) =>
//   color ? color.setAlpha(alpha) : color;

export const spacing = sizes => ({ theme }) =>
  sizes
    .map(size => `${theme.spaces[size]}${size === "none" ? "" : "rem"}`)
    .join(" ");

export const breakpoint = breakpoint => ({ theme }) =>
  theme.breakpoints[breakpoint];
