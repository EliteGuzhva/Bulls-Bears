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
import React from 'react';

export interface EducationLessonPreviewProps {
  title: string;
  description: string;
  media?: string;
}

export const EducationLessonPreview: React.FunctionComponent<EducationLessonPreviewProps> = ({
  title,
  description,
  media,
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
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
      <CardActions>
        <Button size="small" color="primary">
          Learn
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  media: {
    height: '100px',
  },
});
