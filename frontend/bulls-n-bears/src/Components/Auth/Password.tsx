import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

export interface PasswordProps {
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}
export const Password: React.FunctionComponent<PasswordProps> = ({
  value,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={handleChange}
      label="Password"
      type="password"
    />
  );
};

const useStyles = makeStyles({});
