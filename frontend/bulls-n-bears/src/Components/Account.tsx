import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  account: {},
});

export const Account: React.FunctionComponent = () => {
  const classes = useStyles();
  return <Button color="inherit">Login/Register</Button>;
};
