import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { EducationLevel, EducationLevelProps } from './EducationLevel';
import { EducationLessonPreviewProps } from './EducationLessonPreview';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLessons } from '../../store/education/actions';
import { getLevels } from '../../selectors/education/education';

export interface EducationPageProps {}

// export const testProps: EducationPageProps = {
//   levels: [
//     {
//       levelName: '1',
//       lessons: [
//         { title: 'Lesson', description: 'Description ' },
//         { title: 'Lesson', description: 'Description ' },
//         { title: 'Lesson', description: 'Description ' },
//       ],
//     },
//   ],
// };

export const EducationPage: React.FunctionComponent<EducationPageProps> = (
  props
) => {
  const [rawLessons, setRawLessons] = useState<EducationLessonPreviewProps[]>(
    []
  );
  const dispatch = useDispatch();
  const levels = useSelector(getLevels);
  useEffect(() => {
    if (levels.length === 0) {
      dispatch(getAllLessons());
    }
  }, [levels]);
  const classes = useStyles();
  if (levels !== undefined) {
    return (
      <div>
        {levels.map((levelData) => (
          <EducationLevel {...levelData} key={levelData.levelName} />
        ))}
      </div>
    );
  } else return null;
};

const useStyles = makeStyles({});
