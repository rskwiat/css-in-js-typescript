import React, { FunctionComponent, useState } from 'react';
// import Theme from 'theme/createTheme';

// import { darkTheme, lightTheme } from 'theme/theme';

// import Button from 'components/button';
// import Banner from 'components/banner';
// import Container from 'components/container';

import Banner from 'components/ui/banner';

const App:FunctionComponent = () => {
  // const [theme, setTheme] = useState('light');

  // const changeTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  return (
    <div>
      <Banner text="hello" />
    </div>
  );
};

export default App;
