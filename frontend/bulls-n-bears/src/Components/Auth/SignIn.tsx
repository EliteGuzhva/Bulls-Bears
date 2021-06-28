import React from 'react';
import { Button, makeStyles, TextField, Snackbar } from '@material-ui/core';
import { useState } from 'react';
import { Username } from './Username';
import { Password } from './Password';
import { AuthWrapper } from './AuthWrapper';
import { useHistorySetter } from '../../custom-hooks/useHistorySetter';
import useAuth from '../../context/useAuth';

export interface SignInProps {}
export const SignIn: React.FunctionComponent<SignInProps> = (props) => {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const setHistory = useHistorySetter('/sign-up');
  const setHome = useHistorySetter('/home');
  const { login } = useAuth();
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async () => {
    if (username && password && login) {
      if (password.length < 6) {
        setOpen(true);
        setErrorMsg('Password is too short!');
      } else {
        await login(username, password);
        setHome();
      }
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason == 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <AuthWrapper>
      <Username value={username} handleChange={handleUsernameChange} />
      <Password value={password} handleChange={handlePasswordChange} />
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleLogin}
      >
        Log In
      </Button>
      <Button size="medium" onClick={setHistory}>
        I am a new member
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errorMsg}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              OK
            </Button>
          </React.Fragment>
        }
      />
    </AuthWrapper>
  );
};
