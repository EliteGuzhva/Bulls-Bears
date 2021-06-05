import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

export interface EducationLessonTabPanelProps {
  value: number;
  index: number;
  children?: React.ReactNode;
}
export const EducationLessonTabPanel: React.FunctionComponent<EducationLessonTabPanelProps> = ({
  value,
  index,
  children,
}) => {
  const classes = useStyles();
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
};

const useStyles = makeStyles({});
