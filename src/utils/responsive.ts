import { css, CSSObject } from "styled-components";

export function mdDown(props: CSSObject) {
  return css`
  @media only screen and (max-width:992px) {
    ${props}
  }
`
}
export function mdUp(props: CSSObject) {
  return css`
  @media only screen and (min-width:992px) {
    ${props}
  }
`
}
export function lgDown(props: CSSObject) {
  return css`
  @media only screen and (max-width:1200px) {
    ${props}
  }
`
}