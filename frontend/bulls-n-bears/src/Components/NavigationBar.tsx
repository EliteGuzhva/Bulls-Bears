import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { Account } from './Account';
import { Links } from './Links';
import { Logo } from './Logo';

export interface Props {}
export const NavigationBar: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbar}>
          <Logo />
          <Links />
          <Account />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
  },
});
