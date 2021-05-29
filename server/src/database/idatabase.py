from typing import List
from ..model.user import User
from ..model.lesson import Lesson
from ..model.lesson_data import LessonData


class IDatabase:
    def get_user(self, uid: str) -> User:
        raise NotImplementedError()

    def authorize_user(self, login: str, name: str, surname: str,
                       email: str, password: str, photo_url: str) -> User:
        raise NotImplementedError()

    def get_lesson(self, uid: str) -> Lesson:
        raise NotImplementedError()

    def get_all_lessons(self) -> List[Lesson]:
        raise NotImplementedError()

    def get_lessons_for_level(self, level_name: str) -> List[Lesson]:
        raise NotImplementedError()

    def get_lesson_data(self, uid: str) -> LessonData:
        raise NotImplementedError()
