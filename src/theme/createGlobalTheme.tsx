import React from 'react';
import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const makeGlobalStyles = (theme: object) => css`
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

export default GlobalStyles;
