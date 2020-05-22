import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.bg};
    margin: 0;
    color: ${(props) => props.theme.text};
  }

  html {
    font-size: 62.5%;
  }

  p {
    font-size: 1.7rem;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
