import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import { NavigationBar } from './NavigationBar';

export interface Props {
  children?: JSX.Element;
}
export const Page: React.FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Box className={classes.content}>{children}</Box>
      </Container>
    </>
  );
};

const useStyles = makeStyles({
  content: {
    height: '100vh',
  },
});
