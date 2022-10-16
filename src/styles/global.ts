import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }
`
