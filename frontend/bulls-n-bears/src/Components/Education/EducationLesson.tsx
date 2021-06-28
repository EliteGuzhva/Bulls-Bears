import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { getLessonData, LessonDataId } from '../../store/education';
import { getLessonDataByLessonDataId } from '../../selectors/education/education';
import { EducationLessonTabs } from './EducationLessonTabs';
import { EducationLessonSlide } from './EducationLessonSlide';
import { EducationLessonTabPanel } from './EducationLessonTabPanel';

export interface EducationLessonProps {}

export const EducationLesson: React.FunctionComponent<EducationLessonProps> = (
  props
) => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  let history = useHistory();
  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: number) => {
      setTab(newValue);
    },
    [setTab]
  );
  const nextSlide = () => {
    setTab(tab + 1);
  };
  const previousSlide = () => {
    setTab(tab - 1);
  };
  const goBack = () => {
    history.goBack();
  };
  const { lessonDataId } = useParams<{ lessonDataId: LessonDataId }>();
  const dispatch = useDispatch();
  const lessonData = useSelector((state: RootState) =>
    getLessonDataByLessonDataId(state, lessonDataId)
  );
  useEffect(() => {
    if (lessonData === undefined) {
      dispatch(getLessonData(lessonDataId));
    }
  }, [lessonData]);

  const tabsLabels = useMemo(
    () =>
      lessonData === undefined
        ? []
        : lessonData.slides.map((slide) => `Slide ${slide.slideNumber}`),
    [lessonData]
  );
  const renderButtons = () => (
    <div className={classes.buttons}>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={previousSlide}
        disabled={tab < 1}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={nextSlide}
        disabled={tab > tabsLabels.length - 2}
      >
        Next
      </Button>
    </div>
  );
  return (
    <div>
      {lessonData !== undefined ? (
        <>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={goBack}
            className={classes.goBack}
          >
            Go Back
          </Button>
          <div className={classes.root}>
            <div>
              <EducationLessonTabs
                handleChange={handleChange}
                value={tab}
                tabsLabels={tabsLabels}
              />
            </div>
            <div>
              {lessonData.slides.map(({ slideNumber, ...slideProps }) => (
                <EducationLessonTabPanel
                  value={tab}
                  key={slideNumber - 1}
                  index={slideNumber - 1}
                >
                  <EducationLessonSlide
                    {...slideProps}
                    renderButtons={renderButtons}
                  />
                </EducationLessonTabPanel>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    display: 'flex',
    gap: '10px',
  },
  goBack: {
    marginLeft: '35px',
    marginBottom: '15px',
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});
