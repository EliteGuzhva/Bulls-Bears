/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import { Page } from './Components/Page';
import theme from './theme';
import { Typography } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { NavigationBar } from './Components/NavigationBar';
import { EducationPage, testProps } from './Components/Education/EducationPage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <NavigationBar />
        <Page>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/education">
              <EducationPage {...testProps} />
            </Route>
          </Switch>
          {/* <Typography variant="h1">Bulls and Bears</Typography> */}
        </Page>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
