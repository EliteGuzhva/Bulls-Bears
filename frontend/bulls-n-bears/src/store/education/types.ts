export interface Lesson {
  _id: string;
  data: LessonDataId;
  index: number;
  title: string;
  description: string;
  level_name: string;
}

export type LessonDataId = string;

export interface GetAllLessonsResponse {
  lessons: Lesson[];
}

export interface State {
  lessons: Lesson[];
  lessonsData: LessonData[];
}

export interface LessonForLevel {
  id: string;
  data: LessonDataId;
  title: string;
  description: string;
  index: number;
}

export interface Level {
  levelName: string;
  lessons: LessonForLevel[];
}

export interface LessonDataSlide {
  media: string[];
  slideNumber: number;
  text: string;
}

export interface LessonDataSlideResponse {
  media: string[];
  slide_number: number;
  text: string;
}
export interface LessonData {
  id: string;
  slides: LessonDataSlide[];
}

export interface GetLessonDataResponse {
  lesson_data: {
    _id: string;
    slides: LessonDataSlideResponse[];
  };
}
