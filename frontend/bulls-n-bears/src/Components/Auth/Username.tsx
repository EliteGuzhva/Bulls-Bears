import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

export interface UsernameProps {
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}
export const Username: React.FunctionComponent<UsernameProps> = ({
  value,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={handleChange}
      label="Username"
    />
  );
};

const useStyles = makeStyles({});
