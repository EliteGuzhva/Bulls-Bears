export interface Lesson {
  _id: number;
  data: LessonData;
  index: number;
  title: string;
  description: string;
  level_name: string;
}

export type LessonData = string;

export interface GetAllLessonsResponse {
  lessons: Lesson[];
}

export interface State {
  lessons: Lesson[];
}

export interface LessonForLevel {
  id: number;
  data: LessonData;
  title: string;
  description: string;
  index: number;
}

export interface Level {
  levelName: string;
  lessons: LessonForLevel[];
}
