/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import { Page } from './Components/Page';
import theme from './theme';
import { Typography } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { NavigationBar } from './Components/NavigationBar';
import { EducationPage } from './Components/Education/EducationPage';
import { Provider } from 'react-redux';
import store from './store';
import { EducationLesson } from './Components/Education/EducationLesson';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <NavigationBar />
          <Page>
            <Switch>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route exact path="/education">
                <EducationPage />
              </Route>
              <Route path="/education/:lessonDataId">
                <EducationLesson />
              </Route>
            </Switch>
            {/* <Typography variant="h1">Bulls and Bears</Typography> */}
          </Page>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
