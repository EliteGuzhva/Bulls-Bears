import {
  LessonDataSlide,
  LessonDataSlideResponse,
} from '../../../store/education';

export const mapResponseSlideToSlide = ({
  slide_number: slideNumber,
  ...rest
}: LessonDataSlideResponse): LessonDataSlide => ({
  ...rest,
  slideNumber,
});
