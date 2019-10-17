import Color from "color";
import theme from "../config/theme";

const {
  primary: primaryColor,
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  grey: greyColor,
  dark: darkColor,
  link: linkColor,
  info: infoColor,
  success: successColor,
  danger: dangerColor
} = theme.colors;

const createDL = color => lightenRatio =>
  color ? applyLighten(color, lightenRatio) : () => {};

const applyLighten = (color, lightenRatio) =>
  lightenRatio
    ? Color(color)
        .lighten(lightenRatio)
        .hex()
    : color;

const primary = createDL(primaryColor);
const secondary = createDL(secondaryColor);
const tertiary = createDL(tertiaryColor);
const grey = createDL(greyColor);
const dark = createDL(darkColor);
const link = createDL(linkColor);
const info = createDL(infoColor);
const success = createDL(successColor);
const danger = createDL(dangerColor);

export default {
  primary,
  secondary,
  tertiary,
  grey,
  dark,
  link,
  info,
  success,
  danger
};
