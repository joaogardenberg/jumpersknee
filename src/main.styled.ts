import { createGlobalStyle } from 'styled-components'

const styled = {
  global: createGlobalStyle,
}

export default styled.global`
  html,
  body {
    margin: 0;
  }

  :root {
    background-color: #222;
    color: #ffd;
  }
`
