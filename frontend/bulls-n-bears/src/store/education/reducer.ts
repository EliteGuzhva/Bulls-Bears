import { combineReducers } from 'redux';

import { Lesson, State } from './types';
import { Action, EducationActionType } from './action-types';

export const education = (
  state: State = { lessons: [] },
  action: Action
): State => {
  switch (action.type) {
    case EducationActionType.SetLessons:
      return {
        lessons: action.lessons,
      };
    // case EducationActionType.SetLessonData:
    //   const { lessonId, data } = action;
    //   const lesson = state.lessons.find((l) => l.id === lessonId);
    //   const lessonWithData = { ...lesson, data };
    //   return {
    //     ...state,
    //     lessons: [
    //       ...state.lessons.filter(({ id }) => id !== lessonId),
    //       lessonWithData,
    //     ],
    //   };
    default:
      return state;
  }
};
