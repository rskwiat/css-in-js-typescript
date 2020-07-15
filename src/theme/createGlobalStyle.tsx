import React from 'react';
import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';

// eslint-disable-next-line no-unused-vars
const makeGlobalStyles = (theme: any) => css`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${theme.bg};
    margin: 0;
    color: ${theme.text};
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

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

export default GlobalStyles;
