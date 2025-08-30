import { createGlobalStyle } from 'styled-components'

const styled = {
  global: createGlobalStyle,
}

export default styled.global`
  html,
  body,
  ol,
  ul {
    margin: 0;
  }

  :root {
    background-color: #222;
    color: #ffd;
    font-family: 'Open Sans', sans-serif;
    font-optical-sizing: auto;
    font-size: 1.5rem;
    font-variation-settings: 'wdth' 100;
  }

  * {
    box-sizing: border-box;
    overscroll-behavior: none;
    user-select: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  h4 {
    font-weight: normal;
  }
`
