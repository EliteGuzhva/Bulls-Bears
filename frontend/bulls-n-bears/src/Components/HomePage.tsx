import { makeStyles } from '@material-ui/core';
import React from 'react';

const aboutText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio aliquam vel expedita fugit error aspernatur debitis officia harum, enim, nemo nesciunt? Voluptatem rerum ipsum fuga ipsam? Quasi laudantium voluptates vel ipsum facere optio nobis quo consequuntur accusamus eum tenetur sequi debitis dolores praesentium ducimus dicta nesciunt architecto molestias facilis cupiditate, ullam alias aut. Illum, quibusdam';

export const HomePage: React.FunctionComponent = () => {
  const classes = useStyles();
  return <div className={classes.homePage}>{aboutText}</div>;
};

const useStyles = makeStyles({
  homePage: {
    display: 'grid',
  },
});
