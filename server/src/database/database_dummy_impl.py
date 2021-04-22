from typing import List

from src.database.idatabase import IDatabase
from src.model.lesson import Lesson
from src.model.user import User


class DatabaseDummyImpl(IDatabase):
    def get_user(self, uid: str) -> User:
        pass

    def authorize_user(self, login: str, name: str, surname: str, email: str, password: str, photo_url: str) -> User:
        pass

    def get_lesson(self, uid: str) -> Lesson:
        pass

    def get_all_lessons(self) -> List[Lesson]:
        pass

    def get_lessons_for_level(self, level_name: str) -> List[Lesson]:
        pass
