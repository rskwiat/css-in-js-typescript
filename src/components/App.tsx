import React, { FunctionComponent, useState } from 'react';
import Theme from 'theme/createTheme';

import { darkTheme, lightTheme } from 'theme/theme';

import Button from 'components/ui/button';
import Container from 'components/ui/container';
import Banner from 'components/ui/banner';

const App:FunctionComponent = () => {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Theme theme={theme === 'light' ? lightTheme : darkTheme}>
      <Banner text={theme} />
      <Container>
        <h1>A Basic Theme Switcher Component</h1>

        <Button onClick={changeTheme}>
          Switch Theme
        </Button>

      </Container>
    </Theme>
  );
};

export default App;
