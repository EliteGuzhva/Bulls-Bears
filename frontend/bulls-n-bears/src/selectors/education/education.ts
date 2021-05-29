import { createSelector } from 'reselect';
import { RootState } from '../../store/types';

export const getLessons = createSelector(
  (state: RootState) => state.education.lessons,
  (result) => result
);
