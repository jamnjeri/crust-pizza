import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    orange: Palette["primary"];
    black: Palette["primary"];
    darkGrey: Palette["primary"];
    lightGrey: Palette["primary"];
    iconGrey: Palette["primary"];
    white: Palette["primary"];
  }
  interface PaletteOptions {
    orange?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    darkGrey?: PaletteOptions["primary"];
    lightGrey?: PaletteOptions["primary"];
    iconGrey?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

const theme: ThemeOptions = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    orange: {
      main: "#FB5607",
    },
    black: {
      main: "#000000",
    },
    darkGrey: {
      main: "#241F20",
    },
    lightGrey: {
      main: "#C9CFCD",
    },
    iconGrey: {
      main: "#666973",
    },
    white: {
      main: "#FFFFF",
    },
  },
  typography: {
    fontFamily: '"League Gothic", sans-serif',
  },
});

export default theme;
