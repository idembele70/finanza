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
h3 {
  font-family:"Jost", "sans-serif";
  font-weight:600;
  line-height:1.2;
}
h4 {
  font-family:"Jost", "sans-serif";
  font-weight:600;
  line-height:1.2;
}
h5 {
  font-family: "Jost", "sans-serif";
  font-weight:400;
  line-height:1.5;
}
a {
  text-decoration: none;
  font-size: 1rem;
  font-family: "Open Sans", "sans-serif";
  font-weight: 500;
}
p {
  font-size:1rem;
  font-family: "Open Sans", "sans-serif";
  font-weight:400;
  line-height:1.5;
}
button {
  font-size:1rem;
  font-family: "Open Sans",sans-serif;
  line-height:1.5;
}
input {
    font-family: "Open Sans",sans-serif;
    font-size: inherit;
    line-height: inherit;
}
`;

export default GlobalStyle;
