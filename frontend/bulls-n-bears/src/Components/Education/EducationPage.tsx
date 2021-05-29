import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { EducationLevel, EducationLevelProps } from './EducationLevel';

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

const url = 'https://www.npmjs.com/package/@types/react-router-dom';
export const EducationPage: React.FunctionComponent<EducationPageProps> = (
  props = testProps
) => {
  const [rawLessons, setRawLessons] = useState();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json)
      .then((response) => console.log(response));
  });
  const classes = useStyles();
  return (
    <div>
      {props.levels.map((levelData) => (
        <EducationLevel {...levelData} />
      ))}
    </div>
  );
};

const useStyles = makeStyles({});
