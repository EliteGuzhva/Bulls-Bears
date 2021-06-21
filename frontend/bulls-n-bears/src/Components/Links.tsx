import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  links: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
});

interface LinkEntity {
  name: string;
  url: string;
}

const links: LinkEntity[] = [
  {
    name: 'Home',
    url: '/home',
  },
  {
    name: 'Education',
    url: '/education',
  },
  {
    name: 'Sandbox',
    url: '/sandbox',
  },
];

export const Links: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.links}>
      {links.map(({ name, url }) => (
        <Typography variant="h6">
          <Link to={url} className={classes.link}>
            <Button color="inherit">{name}</Button>
          </Link>
        </Typography>
      ))}
    </div>
  );
};
