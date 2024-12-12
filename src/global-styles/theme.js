import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#3F8AE0",
    },
    secondary: {
      main: "#326eb3",
    },
  },
  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
  },
  typography: {
    fontFamily: "Gotham A, Gotham B",
  },
});

export const theme = {
  colors: {
    red: "#E32C3A",
    primary: "#1D0C32",
    white: "#FFFFFF",
    black: "#0E0E0E",
    blue: "#445DFF",
    chatFill: "#303030",
    chatWhite: "#E7E7E7",
    chatBlue: "#462CE3",
    grey: "#808080",
    green: "#3AD022",
    pink: "#A721A1",
    purple: "#F259FA",
    orange: "#C74F0C",
    gradientPink: "#fe53bb",
    gradientGreen: "#09fbd3",
    gradientDarkPink: "#550b11",
    gradientPurple: "#0c1932",
    textInputIconColor: "#ABAFB8",
    selectedOptionPink: "#F33480",
    darkerRed: "#690013",
    darkRed: "#C40629",
    mediumRed: "#F5264C",
    lightRed: "#FF627F",
    darkerBlue: "#1E127F",
    darkBlue: "#2F1DCA",
    mediumBlue: "#3B24FD",
    lightBlue: "#6F5FFF",
    darkerGreen: "#18530E",
    darkGreen: "#299219",
    mediumGreen: "#3BD023",
    lightGreen: "#89E37B",
    chatSent: "#1B1074",
    grey1: "#e6e6e8",
    grey2: "#cdced2",
    grey3: "#b4b5bc",
    grey4: "#9b9da5",
    grey5: "#82848e",
    grey6: "#6a6b78",
    grey7: "#515361",
    grey8: "#383A4B",
    grey9: "#1F2235",
    grey10: "#06091E",
    grey20: "#CDCED2",
    orange6: "#FFA928",
    orange7: "#E08600",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  navbarOffset: "172px",
  breakpoints: {
    xs: 400,
    sm: 600,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
    xxxl: 2000,
  },
  ...muiTheme, // Spread the MUI theme
};

// Add media query helpers
theme.media = {
  max: {},
  min: {},
};

// Generate media query strings
Object.keys(theme.breakpoints).forEach((bp) => {
  const breakpointValue = theme.breakpoints[bp];
  theme.media.max[
    bp
  ] = `@media only screen and (max-width: ${breakpointValue}px)`;
  theme.media.min[
    bp
  ] = `@media only screen and (min-width: ${breakpointValue}px)`;
});

export const EXTRA_SMALL_MOBILE_MEDIA = "@media (max-width: 480px)";
export const SMALL_MOBILE_MEDIA = "@media (max-width: 780px)";
export const MOBILE_MEDIA = "@media (max-width: 1000px)";
export const TABLET_MEDIA = "@media (max-width: 1200px)";

export default theme;
