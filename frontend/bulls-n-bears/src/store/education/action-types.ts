import { Lesson, LessonData } from './types';

export enum EducationActionType {
  SetLessons = 'SET_LESSONS',
  SetLessonData = 'SET_LESSON_DATA',
}

export interface SetLessons {
  type: EducationActionType.SetLessons;
  lessons: Lesson[];
}

export interface SetLessonData {
  type: EducationActionType.SetLessonData;
  lessonId: number;
  data: LessonData;
}

export type Action = SetLessons | SetLessonData;
