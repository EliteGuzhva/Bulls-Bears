import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  EducationLessonPreview,
  EducationLessonPreviewProps,
} from './EducationLessonPreview';

export interface EducationLessonPreviewRowProps {
  lessons: EducationLessonPreviewProps[];
}
export const EducationLessonPreviewRow: React.FunctionComponent<EducationLessonPreviewRowProps> = (
  props
) => {
  const classes = useStyles();
  return (
    <div className={classes.row}>
      {props.lessons.map((lesson) => (
        <EducationLessonPreview key={lesson.id} {...lesson} />
      ))}
    </div>
  );
};

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexGrow: 1,
    gap: '10px',
    margin: '5px',
  },
});
