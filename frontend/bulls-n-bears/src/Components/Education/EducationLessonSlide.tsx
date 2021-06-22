import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export interface EducationLessonSlideProps {
  media: string[];
  text: string;
  renderButtons(): EmotionJSX.Element;
}
export const EducationLessonSlide: React.FunctionComponent<EducationLessonSlideProps> = ({
  media,
  text,
  renderButtons,
}) => {
  const classes = useStyles();
  const renderMedia = () => (
    <div>
      {media.map((url) => (
        <img src={url} width={500}></img>
      ))}
    </div>
  );
  return (
    <div>
      {media.length > 0 && renderMedia()}
      <ReactMarkdown>{text}</ReactMarkdown>
      {renderButtons()}
    </div>
  );
};

const useStyles = makeStyles({});
