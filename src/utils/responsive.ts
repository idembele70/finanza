import { css, CSSObject } from "styled-components";
// XLarge device breakpoint
export function xlUp(props: CSSObject) {
  return css`
  @media only screen and (min-width:1401px) {
    ${props}
  }
`
}
export function xlDown(props: CSSObject) {
  return css`
  @media only screen and (max-width:1400px) {
    ${props}
  }
`
}
// Large device breakpoint
export function lgDown(props: CSSObject) {
  return css`
  @media only screen and (max-width:1200px) {
    ${props}
  }
`
}

// Medium device breakpoint
export function mdDown(props: CSSObject) {
  return css`
  @media only screen and (max-width:992px) {
    ${props}
  }
`
}
export function mdUp(props: CSSObject) {
  return css`
  @media only screen and (min-width:991px) {
    ${props}
  }
`
}
// Small device breakpoint
export function smDown(props: CSSObject) {
  return css`
  @media only screen and (max-width:768px) {
    ${props}
  }
`
}
// XSmall device breakpoint
export function xsUp(props: CSSObject) {
  return css`
  @media only screen and (min-width:576px) {
    ${props}
  }
`
}
export function xsDown(props: CSSObject) {
  return css`
  @media only screen and (max-width:576px) {
    ${props}
  }
`
}