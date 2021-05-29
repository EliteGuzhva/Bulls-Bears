import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { EducationLevel, EducationLevelProps } from './EducationLevel';
import { EducationLessonPreviewProps } from './EducationLessonPreview';
import { useDispatch } from 'react-redux';
import { getAllLessons } from '../../store/education/actions';

export interface EducationPageProps {
  levels: EducationLevelProps[];
}

export const testProps: EducationPageProps = {
  levels: [
    {
      level: 1,
      lessons: [
        { title: 'Lesson', description: 'Description ' },
        { title: 'Lesson', description: 'Description ' },
        { title: 'Lesson', description: 'Description ' },
      ],
    },
  ],
};

const url = 'http://192.168.1.98:5000/get_all_lessons';
export const EducationPage: React.FunctionComponent<EducationPageProps> = (
  props = testProps
) => {
  const [rawLessons, setRawLessons] = useState<EducationLessonPreviewProps[]>(
    []
  );
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((response: { lessons: EducationLessonPreviewProps[] }) => {
    //     setRawLessons(
    //       response.lessons.map((l) => ({
    //         title: l.title,
    //         description: l.description,
    //       }))
    //     );
    //   });
    dispatch(getAllLessons());
  });
  const classes = useStyles();
  if (rawLessons !== undefined) {
    return (
      <div>
        {props.levels.map((levelData) => (
          <EducationLevel {...levelData} lessons={rawLessons} />
        ))}
      </div>
    );
  } else return null;
};

const useStyles = makeStyles({});
