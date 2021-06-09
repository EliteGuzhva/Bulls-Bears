from typing import List, Optional

from .idatabase import IDatabase
from ..model.user import User
from ..model.lesson import Lesson
from ..model.lesson_data import LessonData


class DatabaseDummyImpl(IDatabase):
    # auth
    def get_user(self, uid: str) -> Optional[User]:
        print("get_user")

        return User.dummy()

    def get_user_with_username(self, username: str) -> Optional[User]:
        print("get_user_with_username")

        return User.dummy()

    def authorize_user(self, username: str, email: str, password: str) -> Optional[User]:
        print("authorize_user")

        return User.dummy()

    # education
    def get_lesson(self, uid: str) -> Optional[Lesson]:
        print("get_lesson")

        return Lesson.dummy()

    def get_all_lessons(self) -> List[Lesson]:
        print("get_all_lessons")

        return [Lesson.dummy()]

    def get_lessons_for_level(self, level_name: str) -> List[Lesson]:
        print("get_lessons_for_level")

        return [Lesson.dummy()]

    def get_lesson_data(self, uid: str) -> Optional[LessonData]:
        print ("get_lesson_data")

        return LessonData.dummy()

    # sandbox
    def sandbox_init(self, user_id: str, virtual_start: str, balance: float) -> Optional[User]:
        print("sandbox_init")

        return self.get_user(user_id)

    def sandbox_step(self, user_id: str, virtual_current: str) -> Optional[User]:
        print("sandbox_step")

        return self.get_user(user_id)
