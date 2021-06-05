import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

export interface EducationLessonSlideProps {
  media: string[];
  text: string;
}
export const EducationLessonSlide: React.FunctionComponent<EducationLessonSlideProps> = ({
  media,
  text,
}) => {
  const classes = useStyles();
  const renderMedia = () => (
    <div>
      {media.map((url) => (
        <img src={url}></img>
      ))}
    </div>
  );
  return (
    <div>
      {media.length > 0 && renderMedia()}
      <ReactMarkdown>{text}</ReactMarkdown>{' '}
    </div>
  );
};

const useStyles = makeStyles({});
