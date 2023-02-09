import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-300']};
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-200']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
