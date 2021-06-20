import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
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
  const handleLogin = async () => {
    if (username && password && login) {
      await login(username, password);
      setHome();
    }
  };
  return (
    <AuthWrapper>
      <Username value={username} handleChange={handleUsernameChange} />
      <Password value={password} handleChange={handlePasswordChange} />
      <Button onClick={handleLogin}>Log In</Button>
      <Button onClick={setHistory}>I am a new member</Button>
    </AuthWrapper>
  );
};
