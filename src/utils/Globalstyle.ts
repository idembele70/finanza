import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin:0;
}
* {
  box-sizing: border-box;
  margin:0;
}
h1 {
  font-family:"Jost", "sans-serif";
  font-weight:700;
  line-height:1.2;
}
`;

export default GlobalStyle;
