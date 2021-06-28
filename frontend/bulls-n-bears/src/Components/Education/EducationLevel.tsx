import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { EducationLessonPreviewProps } from './EducationLessonPreview';
import { EducationLessonPreviewRow } from './EducationLessonsPreviewRow';
export interface EducationLevelProps {
  levelName: string;
  lessons: EducationLessonPreviewProps[];
}
export const EducationLevel: React.FunctionComponent<EducationLevelProps> = ({
  levelName,
  lessons,
}) => (
  <>
    <Typography variant="h4">{`${levelName.toUpperCase()}`}</Typography>
    <EducationLessonPreviewRow lessons={lessons} />
  </>
);
