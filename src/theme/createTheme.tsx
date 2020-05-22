import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/createGlobalStyle';

interface Props {
  children: object,
  theme: any,
}

const Theme = ({ theme, children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);


export default Theme;
