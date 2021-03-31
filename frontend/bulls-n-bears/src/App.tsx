/** @jsxImportSource @emotion/react */
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Page } from './Components/Page';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}

export default App;
