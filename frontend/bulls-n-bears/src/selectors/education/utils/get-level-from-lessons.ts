import { Lesson, LessonForLevel, Level } from '../../../store/education';

export const mapLessonToLessonForLevel = ({
  _id: id,
  data,
  index,
  description,
  title,
  photo_url,
}: Lesson): LessonForLevel => ({
  id,
  data,
  title,
  description,
  index,
  media: photo_url,
});

export const getLevelFromLessons = (
  levelName: string,
  lessons: Lesson[]
): Level => {
  const lessonsForLevel = lessons
    .filter((lesson) => lesson.level_name === levelName)
    .sort((a, b) => a.index - b.index)
    .map(mapLessonToLessonForLevel);
  return {
    levelName,
    lessons: lessonsForLevel,
  };
};
