import { createSelector } from 'reselect';
import { LessonForLevel, Level } from '../../store/education';
import { RootState } from '../../store/types';
import { getLevelFromLessons } from './utils/get-level-from-lessons';

export const getLessons = createSelector(
  (state: RootState) => state.education.lessons,
  (result) => result
);

export const getLevelNames = createSelector(getLessons, (lessons) =>
  lessons.reduce(
    (acc, { level_name }) => acc.add(level_name),
    new Set<string>([])
  )
);

export const getLevels = createSelector(
  getLevelNames,
  getLessons,
  (levelNames, lessons) =>
    Array.from(levelNames).reduce<Level[]>(
      (acc, levelName) => [...acc, getLevelFromLessons(levelName, lessons)],
      []
    )
);
