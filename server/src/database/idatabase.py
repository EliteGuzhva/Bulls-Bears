from typing import List, Optional
from ..model.user import User
from ..model.lesson import Lesson
from ..model.lesson_data import LessonData


class IDatabase:
    def get_user(self, uid: str) -> Optional[User]:
        raise NotImplementedError()

    def get_user_with_username(self, username: str) -> Optional[User]:
        raise NotImplementedError()

    def authorize_user(self, username: str,
                       email: str, password: str) -> Optional[User]:
        raise NotImplementedError()

    def get_lesson(self, uid: str) -> Optional[Lesson]:
        raise NotImplementedError()

    def get_all_lessons(self) -> List[Lesson]:
        raise NotImplementedError()

    def get_lessons_for_level(self, level_name: str) -> List[Lesson]:
        raise NotImplementedError()

    def get_lesson_data(self, uid: str) -> Optional[LessonData]:
        raise NotImplementedError()
