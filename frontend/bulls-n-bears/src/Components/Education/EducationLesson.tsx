import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
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
  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: number) => {
      setTab(newValue);
    },
    [setTab]
  );
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
  return (
    <div>
      {lessonData !== undefined && (
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
                <EducationLessonSlide {...slideProps} />
              </EducationLessonTabPanel>
            ))}
          </div>
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
});
