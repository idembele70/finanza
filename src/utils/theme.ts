import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "8px",
  borderColor: "rgba(0,0,0,0.15)",
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
