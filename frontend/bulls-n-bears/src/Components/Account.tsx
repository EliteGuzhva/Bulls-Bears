import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../context/useAuth';
import { useHistorySetter } from '../custom-hooks/useHistorySetter';
import { UserInfo } from './UserInfo';

const useStyles = makeStyles({
  account: {},
});

export const Account: React.FunctionComponent = () => {
  const classes = useStyles();
  const setHistory = useHistorySetter('/sign-in');
  const { user, logout } = useAuth();
  return user !== undefined && logout !== undefined ? (
    <UserInfo user={user} logout={logout} />
  ) : (
    <Button color="inherit" onClick={setHistory}>
      Login/Register
    </Button>
  );
};
