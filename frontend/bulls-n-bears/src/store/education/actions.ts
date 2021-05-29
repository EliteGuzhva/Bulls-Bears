import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { GetAllLessonsResponse, Lesson, LessonData } from './types';
import { EducationActionType, SetLessonData, SetLessons } from './action-types';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const setLessons = (lessons: Lesson[]): SetLessons => ({
  type: EducationActionType.SetLessons,
  lessons,
});

export const setLessonData = (
  lessonId: number,
  data: LessonData
): SetLessonData => ({
  type: EducationActionType.SetLessonData,
  lessonId,
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
