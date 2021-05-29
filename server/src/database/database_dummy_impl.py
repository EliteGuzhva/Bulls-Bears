from typing import List

from .idatabase import IDatabase
from ..model.lesson import Lesson
from ..model.user import User


class DatabaseDummyImpl(IDatabase):
    def get_user(self, uid: str) -> User:
        print("get_user")

        return User.dummy()

    def authorize_user(self, login: str, name: str, surname: str, email: str, password: str, photo_url: str) -> User:
        print("authorize_user")

        return User.dummy()

    def get_lesson(self, uid: str) -> Lesson:
        print("get_lesson")

        return Lesson.dummy()

    def get_all_lessons(self) -> List[Lesson]:
        print("get_all_lessons")

        return [Lesson.dummy()]

    def get_lessons_for_level(self, level_name: str) -> List[Lesson]:
        print("get_lessons_for_level")

        return [Lesson.dummy()]
