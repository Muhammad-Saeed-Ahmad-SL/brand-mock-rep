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
    grayish: "#C4CAD1",
    white: "#FFFFFF",
    darkBlue: "#1C2437",
    grayish: "#C4CAD1",
    paleGray: "#C1D3FE",
    blue: "#1E85FF",
    deepGray: "#546274",
    lightGray: "#EBEBEF",
    green: "#228636",
    paleBlue: "#D7E3FC",
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
