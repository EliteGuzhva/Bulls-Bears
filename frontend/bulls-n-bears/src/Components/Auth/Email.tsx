import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

export interface EmailProps {
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}
export const Email: React.FunctionComponent<EmailProps> = ({
  value,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={handleChange}
      label="Email"
      type="email"
    />
  );
};

const useStyles = makeStyles({});
