import React from 'react';
import { makeStyles } from '@material-ui/core';

export interface AuthWrapperProps {
  children?: JSX.Element[];
}
export const AuthWrapper: React.FunctionComponent<AuthWrapperProps> = ({
  children,
}) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
});
