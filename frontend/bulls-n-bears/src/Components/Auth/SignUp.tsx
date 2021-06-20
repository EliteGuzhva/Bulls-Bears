import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { AuthWrapper } from './AuthWrapper';
import { Username } from './Username';
import { Password } from './Password';
import { Email } from './Email';
import { useHistorySetter } from '../../custom-hooks/useHistorySetter';

export interface SignUpProps {}
export const SignUp: React.FunctionComponent<SignUpProps> = (props) => {
  const classes = useStyles();
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const setHistory = useHistorySetter('/sign-in');
  return (
    <AuthWrapper>
      <Username value={username} handleChange={handleUsernameChange} />
      <Password value={password} handleChange={handlePasswordChange} />
      <Email value={email} handleChange={handleEmailChange} />
      <Button>Join</Button>
      <Button onClick={setHistory}>I have got my account already</Button>
    </AuthWrapper>
  );
};

const useStyles = makeStyles({});
