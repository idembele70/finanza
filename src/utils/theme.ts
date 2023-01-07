import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderColor: "rgba(0,0,0,0.15)",
  borderRadius: "8px",
  boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.15)",
  containerPaddingX: 48,
  palette: {
    common: {
      black: "#555",
      white: "#FFF",
    },
    primary: {
      main: "#355EFC",
      darker: "#2d50d6",
      light: "#DFE4FD",
    },
    secondary: {
      main: "#011A41",
    },
  },
};

/* inspiration : https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3 */
