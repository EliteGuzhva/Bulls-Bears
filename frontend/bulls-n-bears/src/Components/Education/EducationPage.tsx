import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { EducationLevel, EducationLevelProps } from './EducationLevel';
import { EducationLessonPreviewProps } from './EducationLessonPreview';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLessons } from '../../store/education/actions';
import { getLevels } from '../../selectors/education/education';

export interface EducationPageProps {
  levels: EducationLevelProps[];
}

export const testProps: EducationPageProps = {
  levels: [
    {
      levelName: '1',
      lessons: [
        { title: 'Lesson', description: 'Description ' },
        { title: 'Lesson', description: 'Description ' },
        { title: 'Lesson', description: 'Description ' },
      ],
    },
  ],
};

export const EducationPage: React.FunctionComponent<EducationPageProps> = (
  props = testProps
) => {
  const [rawLessons, setRawLessons] = useState<EducationLessonPreviewProps[]>(
    []
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLessons());
  }, []);
  const levels = useSelector(getLevels);
  const classes = useStyles();
  if (levels !== undefined) {
    return (
      <div>
        {levels.map((levelData) => (
          <EducationLevel {...levelData} />
        ))}
      </div>
    );
  } else return null;
};

const useStyles = makeStyles({});
