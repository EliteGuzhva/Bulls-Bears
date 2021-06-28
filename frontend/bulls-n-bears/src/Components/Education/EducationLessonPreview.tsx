import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useCallback } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { LessonDataId } from '../../store/education';

export interface EducationLessonPreviewProps {
  id: string;
  title: string;
  description: string;
  media?: string;
  data: LessonDataId;
}

export const EducationLessonPreview: React.FunctionComponent<EducationLessonPreviewProps> = ({
  title,
  description,
  media,
  id,
  data,
}) => {
  const classes = useStyles();
  let { url } = useRouteMatch();
  let history = useHistory();
  const handleLessonClick = useCallback(() => {
    history.push(`${url}/${data}`);
  }, [history, data]);
  return (
    <Card>
      <CardActionArea onClick={handleLessonClick}>
        <CardMedia className={classes.media} image={media} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles({
  media: {
    height: '200px',
    width: '300px',
  },
});
