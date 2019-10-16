import { LightenDarkenColor as ldc } from "lighten-darken-color";
import theme from "../config/theme";

const {
  primary: primaryColor,
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  grey: greyColor,
  dark: darkColor,
  info: infoColor,
  success: successColor,
  danger: dangerColor
} = theme.colors;

const createDL = color => luminosity =>
  color ? applyLuminosity(color, luminosity) : () => {};

const applyLuminosity = (color, luminosity) =>
  luminosity ? ldc(color, luminosity) : color;

const primary = createDL(primaryColor);
const secondary = createDL(secondaryColor);
const tertiary = createDL(tertiaryColor);
const grey = createDL(greyColor);
const dark = createDL(darkColor);
const info = createDL(infoColor);
const success = createDL(successColor);
const danger = createDL(dangerColor);

export default {
  primary,
  secondary,
  tertiary,
  grey,
  dark,
  info,
  success,
  danger
};
