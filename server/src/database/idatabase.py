from src.model.user import User
from src.model.lesson import Lesson
from src.model.lesson_collection import LessonCollection


class IDatabase:
    def get_user(self, uid: str) -> User:
        raise NotImplementedError()

    def authorize_user(self, login: str, name: str, surname: str,
                       email: str, password: str, photo_url: str) -> User:
        raise NotImplementedError()

    def get_lesson(self, uid: str) -> Lesson:
        raise NotImplementedError()

    def get_lessons(self) -> LessonCollection:
        raise NotImplementedError()
