import { combineReducers } from 'redux';

import { Lesson, State } from './types';
import { Action, EducationActionType } from './action-types';

export const education = (
  state: State = { lessons: [], lessonsData: [] },
  action: Action
): State => {
  switch (action.type) {
    case EducationActionType.SetLessons:
      return {
        ...state,
        lessons: action.lessons,
      };
    case EducationActionType.SetLessonData:
      return {
        ...state,
        lessonsData: [...state.lessonsData, action.data],
      };
    default:
      return state;
  }
};
