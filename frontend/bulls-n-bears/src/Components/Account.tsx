import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useHistorySetter } from '../custom-hooks/useHistorySetter';

const useStyles = makeStyles({
  account: {},
});

export const Account: React.FunctionComponent = () => {
  const classes = useStyles();
  const setHistory = useHistorySetter('/sign-in');
  return (
    <Button color="inherit" onClick={setHistory}>
      Login/Register
    </Button>
  );
};
