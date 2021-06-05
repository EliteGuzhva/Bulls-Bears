import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  GetAllLessonsResponse,
  GetLessonDataResponse,
  Lesson,
  LessonData,
  LessonDataId,
} from './types';
import { EducationActionType, SetLessonData, SetLessons } from './action-types';
import { mapResponseSlideToSlide } from '../../selectors/education/utils/map-response-slide-to-slide';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const setLessons = (lessons: Lesson[]): SetLessons => ({
  type: EducationActionType.SetLessons,
  lessons,
});

export const setLessonData = (data: LessonData): SetLessonData => ({
  type: EducationActionType.SetLessonData,
  data,
});

// some action fetching lessons
export const getAllLessons = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => async (dispatch) => {
  const response = await fetch(`${API_URL}/get_all_lessons`);
  const responseJson: GetAllLessonsResponse = await response.json();
  dispatch(setLessons(responseJson.lessons));
};

// some action fetching data
export const getLessonData = (
  lessonDataId: LessonDataId
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  const response = await fetch(
    `${API_URL}/get_lesson_data?uid=${lessonDataId}`
  );
  const responseJson: GetLessonDataResponse = await response.json();
  const {
    lesson_data: { _id: id, slides },
  } = responseJson;
  dispatch(setLessonData({ id, slides: slides.map(mapResponseSlideToSlide) }));
};
