from typing import List
from src.model.user import User
from src.model.lesson import Lesson


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
