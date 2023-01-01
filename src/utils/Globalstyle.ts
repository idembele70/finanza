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
a {
  text-decoration: none;
  font-size: 1rem;
  font-family: "Open Sans", "sans-serif";
  font-weight: 500;
}
`;

export default GlobalStyle;
