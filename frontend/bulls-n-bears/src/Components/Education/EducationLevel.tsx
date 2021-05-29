import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { EducationLessonPreviewProps } from './EducationLessonPreview';
import { EducationLessonPreviewRow } from './EducationLessonsPreviewRow';
export interface EducationLevelProps {
  level: number;
  lessons: EducationLessonPreviewProps[];
}
export const EducationLevel: React.FunctionComponent<EducationLevelProps> = ({
  level,
  lessons,
}) => (
  <Paper>
    <Typography>{`Level ${level}`}</Typography>
    <EducationLessonPreviewRow lessons={lessons} />
  </Paper>
);
